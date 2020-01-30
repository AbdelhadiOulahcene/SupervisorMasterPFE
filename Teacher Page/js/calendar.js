"use strict";
$('#calendar').fullCalendar({
    header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
    },
    defaultDate: '2019-01-01',
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar
    drop: function() {
        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
            // if so, remove the element from the "Draggable Events" list
            $(this).remove();
        }
    },
    eventLimit: true, // allow "more" link when too many events
    events: [
        {
            title: 'Réunion-G04',
            start: '2019-01-01',
            className: 'bg-warning'
            
        },
        {
            title: 'Deadline-G06',
            start: '2019-01-16',
            className: 'bg-danger'
        },

        {
            title: 'Réunion-G04',
            start: '2019-01-19',
            className: 'bg-warning'
        },
        {
            title: 'Réunion-G10',
            start: '2019-01-21',
            className: 'bg-warning'
        },
        {
            title: 'Présentation-G04',
            start: '2019-01-29',
            className: 'bg-danger'
        }
       
    ]
});

    