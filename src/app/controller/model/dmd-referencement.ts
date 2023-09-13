export interface DmdReferencement {
  raisonSosial?: string;
  id?: number;
  numDemande?: string;
  raisonSociale?: string;
  typeDemandeur?: string;
  dateCreation?: Date;
  adresse?: string;
  telEntreprise?: string;
  faxEntreprise?: string;
  emailEntreprise?: string;
  formeJuridique?: string;
  capital?: number;
  secteurActivite?: string;
  dirigeant?: string;
  representant?: string;
  fonction?: string;
  gsm?: string;
  faxRepresnetant?: string;
  emailRepresentant?: string;
  registreCommerce?: string;
  identifiantFiscal?: string;
  ice?: string;
  patente?: string;
  numTva?: string;
  numeroCnss?: string;
  direct?: string;
  chiffreAffaire?: number;
  effectif?: number;
  validationAssistant?: boolean;
  validationDirecteur?: boolean;
  validationComite?: boolean;
  assistant?: string;
  directeur?: string;
  avisDirecteur?: string;
  avisFinale?: string;
  sommation_final?: number;
  note_final?: number;
  caAnnee?: string;
  commentaireFinale?: string;
  caLastYears?: string;
  typeDmndRef?: string;
  dateExperationFiscale?: Date;
  dateExperationCNSS?: Date;
  dateExperationChiffreAffaires?:Date;


}
