package bk;

import ak.c;
import gf.o;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicReference;
import zj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements d {

    /* renamed from: d  reason: collision with root package name */
    public static final a f6618d = new C0105a().a();

    /* renamed from: b  reason: collision with root package name */
    private final Executor f6620b;

    /* renamed from: a  reason: collision with root package name */
    final AtomicReference f6619a = new AtomicReference();

    /* renamed from: c  reason: collision with root package name */
    private final String f6621c = "taser_tflite_gocrlatin_mbv2_scriptid_aksara_layout_gcn_mobile";

    /* renamed from: bk.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0105a {

        /* renamed from: a  reason: collision with root package name */
        private Executor f6622a;

        public a a() {
            return new a(this.f6622a, "taser_tflite_gocrlatin_mbv2_scriptid_aksara_layout_gcn_mobile");
        }
    }

    public a(Executor executor, String str) {
        this.f6620b = executor;
    }

    @Override // zj.d
    public final Executor a() {
        return this.f6620b;
    }

    @Override // zj.d
    public final String b() {
        if (true != d()) {
            return "play-services-mlkit-text-recognition";
        }
        return "text-recognition";
    }

    @Override // zj.d
    public final String c() {
        return this.f6621c;
    }

    @Override // zj.d
    public final boolean d() {
        return c.a(this.f6619a, "com.google.mlkit.dynamite.text.latin");
    }

    @Override // zj.d
    public final int e() {
        if (d()) {
            return 24317;
        }
        return 24306;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        return o.a(this.f6620b, ((a) obj).f6620b);
    }

    @Override // zj.d
    public final String f() {
        if (true != d()) {
            return "com.google.android.gms.vision.ocr";
        }
        return "com.google.mlkit.dynamite.text.latin";
    }

    @Override // zj.d
    public final String g() {
        return "en";
    }

    @Override // zj.d
    public final int h() {
        return 1;
    }

    public int hashCode() {
        return o.b(this.f6620b);
    }

    @Override // zj.d
    public final String i() {
        return "optional-module-text-latin";
    }
}
