package jl;

import com.henninghall.date_picker.pickers.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements h {

    /* renamed from: a  reason: collision with root package name */
    private final il.f f30237a;

    /* renamed from: jl.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0454a implements a.InterfaceC0219a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ kl.g f30238a;

        C0454a(kl.g gVar) {
            this.f30238a = gVar;
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0219a
        public void a() {
            a.this.f30237a.b(this.f30238a);
        }

        @Override // com.henninghall.date_picker.pickers.a.InterfaceC0219a
        public void b() {
            a.this.f30237a.a(this.f30238a);
        }
    }

    public a(il.f fVar) {
        this.f30237a = fVar;
    }

    @Override // jl.h
    public void a(kl.g gVar) {
        gVar.f30946d.setOnValueChangedListener(new C0454a(gVar));
    }
}
