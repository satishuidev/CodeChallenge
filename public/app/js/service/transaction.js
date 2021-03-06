(function(angular) {
    angular.module('PeachtreeApp')
        .service('transactionService', function($http, $q) {
            this.getTransactions = function() {
                return $http.get('./app/data/transactions.json')
                    .then(function(data) {
                        return data.data.data;
                    });
            };
            this.getDefaultTransaction = function() {
                var transction = {
                    total: 5824.76,
                    amount: null,
                    merchantLogo: 'data:image/png;base64,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/GMzLdsAADoyaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNy0wNS0yOFQxNzo1NDozMS0wNDowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTctMDUtMjhUMTc6NTQ6MzEtMDQ6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE3LTA1LTI4VDE3OjU0OjMxLTA0OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDowYjM3YjkwNi1hNWYzLTVjNDMtYjg4OC00MDEzZjJmNWZjZGQ8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNTQwMjMwZS00M2YwLTExZTctOTMyZC05MTgwOTdkOGFmOGY8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo2OGI2NzVmYy05OWY0LTZiNDgtODZjZC0yNWI4OWI0ZDg4NDg8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NjhiNjc1ZmMtOTlmNC02YjQ4LTg2Y2QtMjViODliNGQ4ODQ4PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTA1LTI4VDE3OjU0OjMxLTA0OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjBiMzdiOTA2LWE1ZjMtNWM0My1iODg4LTQwMTNmMmY1ZmNkZDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNy0wNS0yOFQxNzo1NDozMS0wNDowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI1MDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNTA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Prrkp30AAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAJqZJREFUeNrsnXmcXFWVx79V1Uu6O3uAkISEJQlLgAhBRBFZBkTFQUBFEBdEGQVEcMUFxWHGZdTRGYVRcV9QQcDBQURAQFBZQgAFgoSdECQLCUk66aTTtcwf5zz79cvbqroqNOT3/Xz6k3T1q7fcd3/3nnvuvecUarUaQogXN0UVgRASuhBCQhdCSOhCCAldCCGhCyEkdCGEhC6EkNCFkNCFEBK6EEJCF0JI6EIICV0IIaELISR0IYSELoSELoSQ0IUQEroQQkIXQkjoQggJXQghoQshJHQhJHQhhIQuhJDQhRASuhBCQhdCSOhCCAldCCGhCyEkdCEkdCGEhC6EkNCFEBK6EEJCF0JI6EIICV0IIaELIaELISR0IYSELoSQ0IUQEroQQkIXQkjoQggJXQgJXQghoQshJHQhhIQuhJDQhRASuhBCQhdCSOhCCAldCAld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',
                    categoryCode: '#c12020',
                    merchant: null,
                    transactionDate: new Date(),
                    transactionType: 'Online Transfer',
                    isValid: true,
                    amountNotAllowed: false,
                    insufficientFunds: false,
                    showTransfer: false,
                };
                return transction;
            };
        })
})(angular);
