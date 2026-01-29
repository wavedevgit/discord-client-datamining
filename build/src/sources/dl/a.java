package dl;

import com.henninghall.date_picker.pickers.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements h {

    /* renamed from: a  reason: collision with root package name */
    private final cl.f f22224a;

    /* renamed from: dl.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0279a implements a.InterfaceC0198a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ el.g f22225a;

        C0279a(el.g gVar) {
            this.f22225a = gVar;
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0198a
        public void a() {
            a.this.f22224a.b(this.f22225a);
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0198a
        public void b() {
            a.this.f22224a.a(this.f22225a);
        }
    }

    public a(cl.f fVar) {
        this.f22224a = fVar;
    }

    @Override // dl.h
    public void a(el.g gVar) {
        gVar.f22916d.setOnValueChangedListener(new C0279a(gVar));
    }
}
