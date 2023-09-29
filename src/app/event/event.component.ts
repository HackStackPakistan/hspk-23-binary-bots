import { Component, inject } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EventService } from './services/event.service';
import { CalendarModule } from 'primeng/calendar';
import { NavbarComponent } from '../home/components/navbar/navbar.component';


@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    NavbarComponent,
    /* COMMON MODULES */
    CommonModule,
    /* PRIMENG */
    CardModule,
    ButtonModule,
    CalendarModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    InputTextareaModule,
    ToastModule,
    /* FORM */
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [MessageService]
})
export class EventComponent {



  // Calendar=new Date();
  currentDate=new Date();

  eventFormGroup: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(55)]),
    interests: new FormControl(undefined, [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.min(50)]),
    location: new FormControl('', [Validators.required]),
    cities: new FormControl(undefined, [Validators.required]),
    timeNDate:new FormControl('', [Validators.required]),
  });

  interests: { label: string; value: string }[] = [
    { label: 'Technology', value: 'technology' },
    { label: 'Writing', value: 'writing' },
    { label: 'Sports', value: 'sports' },
    { label: 'Technical', value: 'technical' },
    { label: 'Non-Technical', value: 'nontechnical' },
    { label: 'Socializing ', value: 'socializing' },
    { label: 'Others', value: 'others' }
  ]

  

  cities: { label: string; value: string }[] = [

    { label: "Islamabad", value: "Islamabad" },
    { label: "Ahmed Nager Chatha", value: "Ahmed Nager Chatha" },
    { label: "Ahmadpur East", value: "Ahmadpur East" },
    { label: "Ali Khan Abad", value: "Ali Khan Abad" },
    { label: "Alipur", value: "Alipur" },
    { label: "Arifwala", value: "Arifwala" },
    { label: "Attock", value: "Attock" },
    { label: "Bhera", value: "Bhera" },
    { label: "Bhalwal", value: "Bhalwal" },
    { label: "Bahawalnagar", value: "Bahawalnagar" },
    { label: "Bahawalpur", value: "Bahawalpur" },
    { label: "Bhakkar", value: "Bhakkar" },
    { label: "Burewala", value: "Burewala" },
    { label: "Chillianwala", value: "Chillianwala" },
    { label: "Chakwal", value: "Chakwal" },
    { label: "Chichawatni", value: "Chichawatni" },
    { label: "Chiniot", value: "Chiniot" },
    { label: "Chishtian", value: "Chishtian" },
    { label: "Daska", value: "Daska" },
    { label: "Darya Khan", value: "Darya Khan" },
    { label: "Dera Ghazi Khan", value: "Dera Ghazi Khan" },
    { label: "Dhaular", value: "Dhaular" },
    { label: "Dina", value: "Dina" },
    { label: "Dinga", value: "Dinga" },
    { label: "Dipalpur", value: "Dipalpur" },
    { label: "Faisalabad", value: "Faisalabad" },
    { label: "Ferozewala", value: "Ferozewala" },
    { label: "Fateh Jhang", value: "Fateh Jang" },
    { label: "Ghakhar Mandi", value: "Ghakhar Mandi" },
    { label: "Gojra", value: "Gojra" },
    { label: "Gujranwala", value: "Gujranwala" },
    { label: "Gujrat", value: "Gujrat" },
    { label: "Gujar Khan", value: "Gujar Khan" },
    { label: "Hafizabad", value: "Hafizabad" },
    { label: "Haroonabad", value: "Haroonabad" },
    { label: "Hasilpur", value: "Hasilpur" },
    { label: "Haveli Lakha", value: "Haveli Lakha" },
    { label: "Jatoi", value: "Jatoi" },
    { label: "Jalalpur", value: "Jalalpur" },
    { label: "Jattan", value: "Jattan" },
    { label: "Jampur", value: "Jampur" },
    { label: "Jaranwala", value: "Jaranwala" },
    { label: "Jhang", value: "Jhang" },
    { label: "Jhelum", value: "Jhelum" },
    { label: "Kalabagh", value: "Kalabagh" },
    { label: "Karor Lal Esan", value: "Karor Lal Esan" },
    { label: "Kasur", value: "Kasur" },
    { label: "Kamalia", value: "Kamalia" },
    { label: "Kamoke", value: "Kamoke" },
    { label: "Khanewal", value: "Khanewal" },
    { label: "Khanpur", value: "Khanpur" },
    { label: "Kharian", value: "Kharian" },
    { label: "Khushab", value: "Khushab" },
    { label: "Kot Addu", value: "Kot Addu" },
    { label: "Jauharabad", value: "Jauharabad" },
    { label: "Lahore", value: "Lahore" },
    { label: "Lalamusa", value: "Lalamusa" },
    { label: "Layyah", value: "Layyah" },
    { label: "Liaquat Pur", value: "Liaquat Pur" },
    { label: "Lodhran", value: "Lodhran" },
    { label: "Malakwal", value: "Malakwal" },
    { label: "Mamoori", value: "Mamoori" },
    { label: "Mailsi", value: "Mailsi" },
    { label: "Mandi Bahauddin", value: "Mandi Bahauddin" },
    { label: "Mian Channu", value: "Mian Channu" },
    { label: "Mianwali", value: "Mianwali" },
    { label: "Multan", value: "Multan" },
    { label: "Murree", value: "Murree" },
    { label: "Muridke", value: "Muridke" },
    { label: "Mianwali Bangla", value: "Mianwali Bangla" },
    { label: "Muzaffargarh", value: "Muzaffargarh" },
    { label: "Narowal", value: "Narowal" },
    { label: "Nankana Sahib", value: "Nankana Sahib" },
    { label: "Okara", value: "Okara" },
    { label: "Renala Khurd", value: "Renala Khurd" },
    { label: "Pakpattan", value: "Pakpattan" },
    { label: "Pattoki", value: "Pattoki" },
    { label: "Pir Mahal", value: "Pir Mahal" },
    { label: "Qaimpur", value: "Qaimpur" },
    { label: "Qila Didar Singh", value: "Qila Didar Singh" },
    { label: "Rabwah", value: "Rabwah" },
    { label: "Raiwind", value: "Raiwind" },
    { label: "Rajanpur", value: "Rajanpur" },
    { label: "Rahim Yar Khan", value: "Rahim Yar Khan" },
    { label: "Rawalpindi", value: "Rawalpindi" },
    { label: "Sadiqabad", value: "Sadiqabad" },
    { label: "Safdarabad", value: "Safdarabad" },
    { label: "Sahiwal", value: "Sahiwal" },
    { label: "Sangla Hill", value: "Sangla Hill" },
    { label: "Sarai Alamgir", value: "Sarai Alamgir" },
    { label: "Sargodha", value: "Sargodha" },
    { label: "Shakargarh", value: "Shakargarh" },
    { label: "Sheikhupura", value: "Sheikhupura" },
    { label: "Sialkot", value: "Sialkot" },
    { label: "Sohawa", value: "Sohawa" },
    { label: "Soianwala", value: "Soianwala" },
    { label: "Siranwali", value: "Siranwali" },
    { label: "Talagang", value: "Talagang" },
    { label: "Taxila", value: "Taxila" },
    { label: "Toba Tek Singh", value: "Toba Tek Singh" },
    { label: "Vehari", value: "Vehari" },
    { label: "Wah Cantonment", value: "Wah Cantonment" },
    { label: "Wazirabad", value: "Wazirabad" },
    { label: "Badin", value: "Badin" },
    { label: "Bhirkan", value: "Bhirkan" },
    { label: "Rajo Khanani", value: "Rajo Khanani" },
    { label: "Chak", value: "Chak" },
    { label: "Dadu", value: "Dadu" },
    { label: "Digri", value: "Digri" },
    { label: "Diplo", value: "Diplo" },
    { label: "Dokri", value: "Dokri" },
    { label: "Ghotki", value: "Ghotki" },
    { label: "Haala", value: "Haala" },
    { label: "Hyderabad", value: "Hyderabad" },
    { label: "Islamkot", value: "Islamkot" },
    { label: "Jacobabad", value: "Jacobabad" },
    { label: "Jamshoro", value: "Jamshoro" },
    { label: "Jungshahi", value: "Jungshahi" },
    { label: "Kandhkot", value: "Kandhkot" },
    { label: "Kandiaro", value: "Kandiaro" },
    { label: "Karachi", value: "Karachi" },
    { label: "Kashmore", value: "Kashmore" },
    { label: "Keti Bandar", value: "Keti Bandar" },
    { label: "Khairpur", value: "Khairpur" },
    { label: "Kotri", value: "Kotri" },
    { label: "Larkana", value: "Larkana" },
    { label: "Matiari", value: "Matiari" },
    { label: "Mehar", value: "Mehar" },
    { label: "Mirpur Khas", value: "Mirpur Khas" },
    { label: "Mithani", value: "Mithani" },
    { label: "Mithi", value: "Mithi" },
    { label: "Mehrabpur", value: "Mehrabpur" },
    { label: "Moro", value: "Moro" },
    { label: "Nagarparkar", value: "Nagarparkar" },
    { label: "Naudero", value: "Naudero" },
    { label: "Naushahro Feroze", value: "Naushahro Feroze" },
    { label: "Naushara", value: "Naushara" },
    { label: "Nawabshah", value: "Nawabshah" },
    { label: "Nazimabad", value: "Nazimabad" },
    { label: "Qambar", value: "Qambar" },
    { label: "Qasimabad", value: "Qasimabad" },
    { label: "Ranipur", value: "Ranipur" },
    { label: "Ratodero", value: "Ratodero" },
    { label: "Rohri", value: "Rohri" },
    { label: "Sakrand", value: "Sakrand" },
    { label: "Sanghar", value: "Sanghar" },
    { label: "Shahbandar", value: "Shahbandar" },
    { label: "Shahdadkot", value: "Shahdadkot" },
    { label: "Shahdadpur", value: "Shahdadpur" },
    { label: "Shahpur Chakar", value: "Shahpur Chakar" },
    { label: "Shikarpaur", value: "Shikarpaur" },
    { label: "Sukkur", value: "Sukkur" },
    { label: "Tangwani", value: "Tangwani" },
    { label: "Tando Adam Khan", value: "Tando Adam Khan" },
    { label: "Tando Allahyar", value: "Tando Allahyar" },
    { label: "Tando Muhammad Khan", value: "Tando Muhammad Khan" },
    { label: "Thatta", value: "Thatta" },
    { label: "Umerkot", value: "Umerkot" },
    { label: "Warah", value: "Warah" },
    { label: "Abbottabad", value: "Abbottabad" },
    { label: "Adezai", value: "Adezai" },
    { label: "Alpuri", value: "Alpuri" },
    { label: "Akora Khattak", value: "Akora Khattak" },
    { label: "Ayubia", value: "Ayubia" },
    { label: "Banda Daud Shah", value: "Banda Daud Shah" },
    { label: "Bannu", value: "Bannu" },
    { label: "Batkhela", value: "Batkhela" },
    { label: "Battagram", value: "Battagram" },
    { label: "Birote", value: "Birote" },
    { label: "Chakdara", value: "Chakdara" },
    { label: "Charsadda", value: "Charsadda" },
    { label: "Chitral", value: "Chitral" },
    { label: "Daggar", value: "Daggar" },
    { label: "Dargai", value: "Dargai" },
    { label: "Darya Khan", value: "Darya Khan" },
    { label: "Dera Ismail Khan", value: "Dera Ismail Khan" },
    { label: "Doaba", value: "Doaba" },
    { label: "Dir", value: "Dir" },
    { label: "Drosh", value: "Drosh" },
    { label: "Hangu", value: "Hangu" },
    { label: "Haripur", value: "Haripur" },
    { label: "Karak", value: "Karak" },
    { label: "Kohat", value: "Kohat" },
    { label: "Kulachi", value: "Kulachi" },
    { label: "Lakki Marwat", value: "Lakki Marwat" },
    { label: "Latamber", value: "Latamber" },
    { label: "Madyan", value: "Madyan" },
    { label: "Mansehra", value: "Mansehra" },
    { label: "Mardan", value: "Mardan" },
    { label: "Mastuj", value: "Mastuj" },
    { label: "Mingora", value: "Mingora" },
    { label: "Nowshera", value: "Nowshera" },
    { label: "Paharpur", value: "Paharpur" },
    { label: "Pabbi", value: "Pabbi" },
    { label: "Peshawar", value: "Peshawar" },
    { label: "Saidu Sharif", value: "Saidu Sharif" },
    { label: "Shorkot", value: "Shorkot" },
    { label: "Shewa Adda", value: "Shewa Adda" },
    { label: "Swabi", value: "Swabi" },
    { label: "Swat", value: "Swat" },
    { label: "Tangi", value: "Tangi" },
    { label: "Tank", value: "Tank" },
    { label: "Thall", value: "Thall" },
    { label: "Timergara", value: "Timergara" },
    { label: "Tordher", value: "Tordher" },
    { label: "Awaran", value: "Awaran" },
    { label: "Barkhan", value: "Barkhan" },
    { label: "Chagai", value: "Chagai" },
    { label: "Dera Bugti", value: "Dera Bugti" },
    { label: "Gwadar", value: "Gwadar" },
    { label: "Harnai", value: "Harnai" },
    { label: "Jafarabad", value: "Jafarabad" },
    { label: "Jhal Magsi", value: "Jhal Magsi" },
    { label: "Kacchi", value: "Kacchi" },
    { label: "Kalat", value: "Kalat" },
    { label: "Kech", value: "Kech" },
    { label: "Kharan", value: "Kharan" },
    { label: "Khuzdar", value: "Khuzdar" },
    { label: "Killa Abdullah", value: "Killa Abdullah" },
    { label: "Killa Saifullah", value: "Killa Saifullah" },
    { label: "Kohlu", value: "Kohlu" },
    { label: "Lasbela", value: "Lasbela" },
    { label: "Lehri", value: "Lehri" },
    { label: "Loralai", value: "Loralai" },
    { label: "Mastung", value: "Mastung" },
    { label: "Musakhel", value: "Musakhel" },
    { label: "Nasirabad", value: "Nasirabad" },
    { label: "Nushki", value: "Nushki" },
    { label: "Panjgur", value: "Panjgur" },
    { label: "Pishin Valley", value: "Pishin Valley" },
    { label: "Quetta", value: "Quetta" },
    { label: "Sherani", value: "Sherani" },
    { label: "Sibi", value: "Sibi" },
    { label: "Sohbatpur", value: "Sohbatpur" },
    { label: "Washuk", value: "Washuk" },
    { label: "Zhob", value: "Zhob" },
    { label: "Ziarat", value: "Ziarat" },
  ]


  isAPIBeingCalled: boolean = false;

  eventService = inject(EventService);
  toastService = inject(MessageService);

  getErrorMessages(key: string) {
    let message: string = '';

    switch (key) {
      case "age":
        if (this.eventFormGroup.get('age')?.hasError('min')) message = "You're quite young for meetups, aren't you?";
        if (this.eventFormGroup.get('age')?.hasError('max')) message = "You're waaaay too old for meetups.";
        if (!this.eventFormGroup.get('age')?.value) message = "This field is required";
        break;
      case "title":
        if (!this.eventFormGroup.get('title')?.value) message = "Fill the title field is required";
        break;
      case "location":
        if (!this.eventFormGroup.get('location')?.value) message = "Fill the location field is required";
        break;
      case "description":
        if (!this.eventFormGroup.get('description')?.value) message = "Description field is required";
        break;
        case "timeNDate":
          if (!this.eventFormGroup.get('timeNDate')?.value) message = "Time and Date field is required";
          break;
    }

    return message;
  }

  async nextPage() {
    try {
      this.isAPIBeingCalled = true;
console.log(this.eventFormGroup.value);
      await this.eventService.setEventInfo(this.eventFormGroup.value);
    } catch (error) {
      this.toastService.add({
        severity: 'error',
        summary: 'Error',
        detail: "Something went wrong while trying to update the profile!",
      });
    } finally {
      this.isAPIBeingCalled = false;
    }
  }
}
