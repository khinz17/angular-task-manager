export const tasks = [
    {
        taskId: 1, 
        taskName: 'Study', 
        taskDescription: 'Learning C#', 
        status: 'Complete', 
        completionRating: 5, 
        taskCreated: new Date(), 
        taskCompleted: new Date(),
        tags: [ 
            { tagId: 1, tagName: 'Sample' }
        ]
    },

    {
        taskId: 2, 
        taskName: 'Study', 
        taskDescription: 'Learning C#', 
        status: 'Progress', completionRating: 5, 
        taskCreated: new Date(), 
        taskCompleted: new Date(),
        tags:[
            {tagId: 2, tagName: 'sample'}
        ]
    },

    {
        taskId: 3, 
        taskName: 'Study', 
        taskDescription: 'Learning C#', 
        status: 'New', 
        completionRating: 5, 
        taskCreated: new Date(), 
        taskCompleted: new Date(),
        tags:[
            {tagId: 3, tagName: 'sample'}
        ]
        },

    {
        taskId: 4, 
        taskName: 'Study', 
        taskDescription: 'Learning JS', 
        status: 'Complete', 
        completionRating: 5, 
        taskCreated: new Date(), 
        taskCompleted: new Date(),
        tags:[
            {tagId: 2, tagName: 'sample'}
        ]
        },

    {
        taskId: 5, 
        taskName: 'Study', 
        taskDescription: 'Learning JS', 
        status: 'Progress', 
        completionRating: 5, 
        taskCreated: new Date(), 
        taskCompleted: new Date(),
        tags:[
            {tagId: 2, tagName: 'sample'}
        ]
    
    }]