/*!
Author: Agnieszka Wolowska
Assignment:  ANGULAR JS, Digital Skills Academy
Date : 2017/07/03
!*/


angular.module('app', []);

angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.assignment = 'AngularJS';
    vm.searchInput = '';
    vm.shows = [
        {
            assignment: 'Angular JS',
            subject: 'Mobile & Web Application',
            urgent: false
        },
        {
             assignment: 'jQuery',
            subject: 'Mobile & Web Application',
            urgent: true
        },
        {
             assignment: 'Website',
            subject: 'UX & Concept Design',
            urgent: false
        },
        {
             assignment: 'HTML Build',
            subject: 'Web & Device Programming',
            urgent: false
        },
        {
             assignment: 'Business Model',
            subject: 'Enterpreneurial Creat.',
            urgent: false
        }
    ];
    vm.orders = [
        {
            id: 1,
            assignment: 'subject Ascending',
            key: 'subject',
            reverse: false
        },
        {
            id: 2,
            assignment: 'subject Descending',
            key: 'subject',
            reverse: true
        },
        {
            id: 3,
            assignment: 'assignment Ascending',
            key: 'assignment',
            reverse: false
        },
        {
            id: 4,
            assignment: 'assignment Descending',
            key: 'assignment',
            reverse: true
        }
    ];
    vm.order = vm.orders[0];
    vm.new = {};
    vm.addShow = function() {
        vm.shows.push(vm.new);
        vm.new = {};
    };
});
