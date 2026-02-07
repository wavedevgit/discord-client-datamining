package il;

import com.henninghall.date_picker.pickers.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements h {

    /* renamed from: a  reason: collision with root package name */
    private final hl.f f26833a;

    /* renamed from: il.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0381a implements a.InterfaceC0192a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ jl.g f26834a;

        C0381a(jl.g gVar) {
            this.f26834a = gVar;
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0192a
        public void a() {
            a.this.f26833a.a(this.f26834a);
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0192a
        public void b() {
            a.this.f26833a.b(this.f26834a);
        }
    }

    public a(hl.f fVar) {
        this.f26833a = fVar;
    }

    @Override // il.h
    public void a(jl.g gVar) {
        gVar.f29995d.setOnValueChangedListener(new C0381a(gVar));
    }
}
