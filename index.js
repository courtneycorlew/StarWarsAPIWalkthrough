// DOCUMENT READY
// $(() => {
// alert('working!')
// })


$(() => {

  let loaded = false;

  $('#infoButton').click(() => {
    $('#tableBody').empty()
    loaded = false
    if(!loaded) {
      loaded = true;
      $.ajax({
        type: 'GET',
        url: 'https://swapi.co/api/people'
      }).done((res) => {
        let people = res.results
        for (p of people) {
        $('#tableBody').append(createTableRow(p))
        }
      
    })
    }
  })

  $('#planetButton').click( () => {
      $('#tableBody').empty()
      loaded = false
    if(!loaded) {
      loaded = true;
      $.ajax( {
        url: 'https://swapi.co/api/planets',
        type: 'GET'
      }).done( (data) => {
        let planets = data.results
        for (planet of planets){
          $('#tableBody').append(createPlanetTableRow(planet))
        } 
        })
    }
  })

  $('#clearButton').click( () => {
    $('#tableBody').empty()
    loaded = false
    $( "th:nth-child(1)" ).replaceWith( "<th>Pick </th>" );
    $( "th:nth-child(2)" ).replaceWith( "<th>From</th>" );
    $( "th:nth-child(3)" ).replaceWith( "<th>Above!</th>" );

  })

  function createTableRow(person) {
    let row = $(`<tr></tr>`) 
    let name = $(`<td> ${person.name}</td>`)
    let height = $(`<td>${person.height}</td>`)
    let birth = $(`<td> ${person.birth_year}</td>`)

    row.append(name)
    row.append(height)
    row.append(birth)


    $( "th:nth-child(1)" ).replaceWith( "<th>Name </th>" );
    $( "th:nth-child(2)" ).replaceWith( "<th>Height</th>" );
    $( "th:nth-child(3)" ).replaceWith( "<th>Birth Year </th>" );
    
    return row
  }

  function createPlanetTableRow(planetData) {
    
      let row = $(`<tr></tr>`) 
      let planetName = $(`<td> ${planetData.name}</td>`)
      let climate = $(`<td>${planetData.climate}</td>`)
      let population = $(`<td> ${planetData.population}</td>`)

      row.append(planetName)
      row.append(climate)
      row.append(population)


      $( "th:nth-child(1)" ).replaceWith( "<th>Planet Name </th>" );
      $( "th:nth-child(2)" ).replaceWith( "<th>Climate </th>" );
      $( "th:nth-child(3)" ).replaceWith( "<th>Population </th>" );

      return row
    

  }

  $('#searchPersonForm').submit((e) => {
    e.preventDefault()
    let input = $('#inputName').val()
    $.get(`https://swapi.co/api/people/?search=${input}`).done((res) => {
      let person = res.results[0]
    $('#personInfoPanel').text(`Hair color: ${person.hair_color}`)
    })
  })
})



