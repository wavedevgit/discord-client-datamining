package dl;

import com.henninghall.date_picker.pickers.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements h {

    /* renamed from: a  reason: collision with root package name */
    private final cl.f f21800a;

    /* renamed from: dl.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0285a implements a.InterfaceC0203a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ el.g f21801a;

        C0285a(el.g gVar) {
            this.f21801a = gVar;
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0203a
        public void a() {
            a.this.f21800a.b(this.f21801a);
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0203a
        public void b() {
            a.this.f21800a.a(this.f21801a);
        }
    }

    public a(cl.f fVar) {
        this.f21800a = fVar;
    }

    @Override // dl.h
    public void a(el.g gVar) {
        gVar.f22948d.setOnValueChangedListener(new C0285a(gVar));
    }
}
