package ll;

import com.henninghall.date_picker.pickers.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements h {

    /* renamed from: a  reason: collision with root package name */
    private final kl.f f36462a;

    /* renamed from: ll.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0494a implements a.InterfaceC0200a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ ml.g f36463a;

        C0494a(ml.g gVar) {
            this.f36463a = gVar;
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0200a
        public void a() {
            a.this.f36462a.b(this.f36463a);
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0200a
        public void b() {
            a.this.f36462a.a(this.f36463a);
        }
    }

    public a(kl.f fVar) {
        this.f36462a = fVar;
    }

    @Override // ll.h
    public void a(ml.g gVar) {
        gVar.f37116d.setOnValueChangedListener(new C0494a(gVar));
    }
}
