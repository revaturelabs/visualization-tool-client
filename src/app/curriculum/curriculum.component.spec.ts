import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CurriculumComponent } from './curriculum.component';

describe('CurriculumComponent', () => {
  let component: CurriculumComponent;
  let mockCurriculumService; 
  let Curricula;
  let currentSkillList; 
  let currentCategory;
  let fixture 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ CurriculumComponent ]
    }); 

    currentCategory = {cagegoryID:1, categoryName:'TestCategory1', cateogryDescription: 'Testing this Category 1', categoryColor: '#FF5733'}; 

    currentSkillList = [
      {skillId: 1, skillName: 'TestSkill1', category: currentCategory, isActive: true, color: 'FF5733'},
      {skillId: 2, skillName: 'TestSkill2', category: currentCategory, isActive: true, color: 'FF5733'},
      {skillId: 3, skillName: 'TestSkill3', category: currentCategory, isActive: true, color: 'FF5733'}
    ]
    
    Curricula = [
      {curriculumId: 1, curriculumName: 'TestCurriculum 1', skillList: currentSkillList, isActive: true},
      {curriculumId: 2, curriculumName: 'TestCurriculum 2', skillList: currentSkillList, isActive: true},
      {curriculumId: 3, curriculumName: 'TestCurriculum 3', skillList: currentSkillList, isActive: true}
    ]

    fixture = TestBed.createComponent(CurriculumComponent);
    component = new CurriculumComponent; 
    mockCurriculumService = jasmine.createSpyObj('curriculumService', ['getAllCurriculum', 'addCurriculum', 'updateCurriculum', 'deleteCurriculum']);

    component.currentCurriculumList = Curricula; 
    component.currentCurriculumId.emit(1); 
  });

  it('should contain a list of Curricula', () => { 
    let expected = Curricula; 
    let actual = component.currentCurriculumList; 
    expect(actual).toEqual(expected); 
  });

  it('should change the list if something is changed on the page', () => { 
    let expectedCurriculaList = Curricula; 
    component.ngOnChanges(); 
    let actual = component.currentCurriculumList;  
    expect(actual).toEqual(expectedCurriculaList); 
  });
});
