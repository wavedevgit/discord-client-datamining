package gk;

import ek.d;
import fk.c;
import hf.o;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements d {

    /* renamed from: d  reason: collision with root package name */
    public static final a f24404d = new C0375a().a();

    /* renamed from: b  reason: collision with root package name */
    private final Executor f24406b;

    /* renamed from: a  reason: collision with root package name */
    final AtomicReference f24405a = new AtomicReference();

    /* renamed from: c  reason: collision with root package name */
    private final String f24407c = "taser_tflite_gocrlatin_mbv2_scriptid_aksara_layout_gcn_mobile";

    /* renamed from: gk.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0375a {

        /* renamed from: a  reason: collision with root package name */
        private Executor f24408a;

        public a a() {
            return new a(this.f24408a, "taser_tflite_gocrlatin_mbv2_scriptid_aksara_layout_gcn_mobile");
        }
    }

    public a(Executor executor, String str) {
        this.f24406b = executor;
    }

    @Override // ek.d
    public final Executor a() {
        return this.f24406b;
    }

    @Override // ek.d
    public final String b() {
        if (true != d()) {
            return "play-services-mlkit-text-recognition";
        }
        return "text-recognition";
    }

    @Override // ek.d
    public final String c() {
        return this.f24407c;
    }

    @Override // ek.d
    public final boolean d() {
        return c.a(this.f24405a, "com.google.mlkit.dynamite.text.latin");
    }

    @Override // ek.d
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
        return o.a(this.f24406b, ((a) obj).f24406b);
    }

    @Override // ek.d
    public final String f() {
        if (true != d()) {
            return "com.google.android.gms.vision.ocr";
        }
        return "com.google.mlkit.dynamite.text.latin";
    }

    @Override // ek.d
    public final String g() {
        return "en";
    }

    @Override // ek.d
    public final int h() {
        return 1;
    }

    public int hashCode() {
        return o.b(this.f24406b);
    }

    @Override // ek.d
    public final String i() {
        return "optional-module-text-latin";
    }
}
