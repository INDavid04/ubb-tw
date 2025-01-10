function parseNode(node) { 
    const obj = {}; // Process attributes 
    if (node.attributes) { 
        for (const attr of node.attributes) { 
            obj[attr.name] = attr.value; 
        } 
    } 
    // Process child nodes 
    for (const child of node.children) { 
        const childName = child.nodeName; 
        const childObject = parseNode(child); 
        // Handle multiple children with the same name as an array 
        if (obj[childName]) { 
            if (!Array.isArray(obj[childName])) { 
                obj[childName] = [obj[childName]]; 
            } 
            obj[childName].push(childObject); 
        } else { 
            obj[childName] = childObject; 
        } 
    } 
    // Add text content if present and no children 
    if (!node.children.length && node.textContent.trim()) { 
        return node.textContent.trim();
    }
    return obj;
}

window.onload = function() {
    const parser = new DOMParser();
    const xmlString = `<cinemateca>
    <film gen="drama">
        <titlu limba="ro">The war within</titlu>
        <regizor>Brett Varvel</regizor>
        <producator>Brett Varvel</producator>
        <scenarist>Brett Varvel</scenarist>
        <scenarist>Gary Varvel</scenarist>
        <scenarist>Rebecca Reid</scenarist>
        <an>2014</an>
        <actor rol="principal">Brett Varvel</actor>
        <actor rol="secundar">Gary Varvel</actor>
        <actor rol="secundar">Rebecca Reid</actor>
        <scor>5</scor>
    </film>
    <film gen="comedie">
        <titlu limba="ro">Nume1</titlu>
        <regizor>Nume 1</regizor>
        <producator>Nume 1</producator>
        <scenarist>Nume 1</scenarist>
        <scenarist>Nume 1</scenarist>
        <scenarist>Nume 1</scenarist>
        <an>1999</an>
        <actor rol="principal">Nume 1</actor>
        <actor rol="secundar">Nume 1</actor>
        <actor rol="secundar">Nume 1</actor>
        <scor>5</scor>
    </film>
    <film gen="comedie">
        <titlu limba="ro">Nume 2</titlu>
        <regizor>Nume 2</regizor>
        <producator>Nume 2</producator>
        <scenarist>Nume 2</scenarist>
        <scenarist>Nume 2</scenarist>
        <scenarist>Nume 2</scenarist>
        <an>1999</an>
        <actor rol="principal">Nume 2</actor>
        <actor rol="secundar">Nume 2</actor>
        <actor rol="secundar">Nume 2</actor>
        <scor>5</scor>
    </film>
</cinemateca>`;
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");
    console.log(xmlDoc);

    const json = parseNode(xmlDoc.documentElement);
    console.log(json);

    console.log(JSON.stringify(json, null, 2));
}