export interface ShowAllCategroiesModel {
  id: string
  activityName: string
  activityCategory: string
  modifiedDate: string
  activityShortDescription: string
  events: Event[]
}

export interface Event {
  id: string
  name: string
  shortDescription: string
  submitDate: string
  submitTime: string
}
