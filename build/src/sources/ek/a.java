package ek;

import ck.d;
import dk.c;
import gf.o;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements d {

    /* renamed from: d  reason: collision with root package name */
    public static final a f21628d = new C0297a().a();

    /* renamed from: b  reason: collision with root package name */
    private final Executor f21630b;

    /* renamed from: a  reason: collision with root package name */
    final AtomicReference f21629a = new AtomicReference();

    /* renamed from: c  reason: collision with root package name */
    private final String f21631c = "taser_tflite_gocrlatin_mbv2_scriptid_aksara_layout_gcn_mobile";

    /* renamed from: ek.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0297a {

        /* renamed from: a  reason: collision with root package name */
        private Executor f21632a;

        public a a() {
            return new a(this.f21632a, "taser_tflite_gocrlatin_mbv2_scriptid_aksara_layout_gcn_mobile");
        }
    }

    public a(Executor executor, String str) {
        this.f21630b = executor;
    }

    @Override // ck.d
    public final Executor a() {
        return this.f21630b;
    }

    @Override // ck.d
    public final String b() {
        if (true != d()) {
            return "play-services-mlkit-text-recognition";
        }
        return "text-recognition";
    }

    @Override // ck.d
    public final String c() {
        return this.f21631c;
    }

    @Override // ck.d
    public final boolean d() {
        return c.a(this.f21629a, "com.google.mlkit.dynamite.text.latin");
    }

    @Override // ck.d
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
        return o.a(this.f21630b, ((a) obj).f21630b);
    }

    @Override // ck.d
    public final String f() {
        if (true != d()) {
            return "com.google.android.gms.vision.ocr";
        }
        return "com.google.mlkit.dynamite.text.latin";
    }

    @Override // ck.d
    public final String g() {
        return "en";
    }

    @Override // ck.d
    public final int h() {
        return 1;
    }

    public int hashCode() {
        return o.b(this.f21630b);
    }

    @Override // ck.d
    public final String i() {
        return "optional-module-text-latin";
    }
}
