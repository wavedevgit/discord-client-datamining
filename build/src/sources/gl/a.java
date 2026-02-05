package gl;

import com.henninghall.date_picker.pickers.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements h {

    /* renamed from: a  reason: collision with root package name */
    private final fl.f f24983a;

    /* renamed from: gl.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0342a implements a.InterfaceC0200a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ hl.g f24984a;

        C0342a(hl.g gVar) {
            this.f24984a = gVar;
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0200a
        public void a() {
            a.this.f24983a.b(this.f24984a);
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0200a
        public void b() {
            a.this.f24983a.a(this.f24984a);
        }
    }

    public a(fl.f fVar) {
        this.f24983a = fVar;
    }

    @Override // gl.h
    public void a(hl.g gVar) {
        gVar.f25951d.setOnValueChangedListener(new C0342a(gVar));
    }
}
