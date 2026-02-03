package dl;

import com.henninghall.date_picker.pickers.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements h {

    /* renamed from: a  reason: collision with root package name */
    private final cl.f f20659a;

    /* renamed from: dl.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0270a implements a.InterfaceC0184a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ el.g f20660a;

        C0270a(el.g gVar) {
            this.f20660a = gVar;
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0184a
        public void a() {
            a.this.f20659a.b(this.f20660a);
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0184a
        public void b() {
            a.this.f20659a.a(this.f20660a);
        }
    }

    public a(cl.f fVar) {
        this.f20659a = fVar;
    }

    @Override // dl.h
    public void a(el.g gVar) {
        gVar.f21639d.setOnValueChangedListener(new C0270a(gVar));
    }
}
