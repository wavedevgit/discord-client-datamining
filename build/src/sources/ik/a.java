package ik;

import gk.d;
import hf.o;
import hk.c;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements d {

    /* renamed from: d  reason: collision with root package name */
    public static final a f27973d = new C0381a().a();

    /* renamed from: b  reason: collision with root package name */
    private final Executor f27975b;

    /* renamed from: a  reason: collision with root package name */
    final AtomicReference f27974a = new AtomicReference();

    /* renamed from: c  reason: collision with root package name */
    private final String f27976c = "taser_tflite_gocrlatin_mbv2_scriptid_aksara_layout_gcn_mobile";

    /* renamed from: ik.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0381a {

        /* renamed from: a  reason: collision with root package name */
        private Executor f27977a;

        public a a() {
            return new a(this.f27977a, "taser_tflite_gocrlatin_mbv2_scriptid_aksara_layout_gcn_mobile");
        }
    }

    public a(Executor executor, String str) {
        this.f27975b = executor;
    }

    @Override // gk.d
    public final Executor a() {
        return this.f27975b;
    }

    @Override // gk.d
    public final String b() {
        if (true != d()) {
            return "play-services-mlkit-text-recognition";
        }
        return "text-recognition";
    }

    @Override // gk.d
    public final String c() {
        return this.f27976c;
    }

    @Override // gk.d
    public final boolean d() {
        return c.a(this.f27974a, "com.google.mlkit.dynamite.text.latin");
    }

    @Override // gk.d
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
        return o.a(this.f27975b, ((a) obj).f27975b);
    }

    @Override // gk.d
    public final String f() {
        if (true != d()) {
            return "com.google.android.gms.vision.ocr";
        }
        return "com.google.mlkit.dynamite.text.latin";
    }

    @Override // gk.d
    public final String g() {
        return "en";
    }

    @Override // gk.d
    public final int h() {
        return 1;
    }

    public int hashCode() {
        return o.b(this.f27975b);
    }

    @Override // gk.d
    public final String i() {
        return "optional-module-text-latin";
    }
}
