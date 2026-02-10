package g5;

import android.graphics.drawable.Drawable;
import e5.c;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f24883a;

    /* renamed from: b  reason: collision with root package name */
    private final h f24884b;

    /* renamed from: c  reason: collision with root package name */
    private final x4.h f24885c;

    /* renamed from: d  reason: collision with root package name */
    private final c.b f24886d;

    /* renamed from: e  reason: collision with root package name */
    private final String f24887e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f24888f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f24889g;

    public q(Drawable drawable, h hVar, x4.h hVar2, c.b bVar, String str, boolean z10, boolean z11) {
        super(null);
        this.f24883a = drawable;
        this.f24884b = hVar;
        this.f24885c = hVar2;
        this.f24886d = bVar;
        this.f24887e = str;
        this.f24888f = z10;
        this.f24889g = z11;
    }

    @Override // g5.i
    public Drawable a() {
        return this.f24883a;
    }

    @Override // g5.i
    public h b() {
        return this.f24884b;
    }

    public final x4.h c() {
        return this.f24885c;
    }

    public final boolean d() {
        return this.f24889g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof q) {
            q qVar = (q) obj;
            if (Intrinsics.areEqual(a(), qVar.a()) && Intrinsics.areEqual(b(), qVar.b()) && this.f24885c == qVar.f24885c && Intrinsics.areEqual(this.f24886d, qVar.f24886d) && Intrinsics.areEqual(this.f24887e, qVar.f24887e) && this.f24888f == qVar.f24888f && this.f24889g == qVar.f24889g) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((((a().hashCode() * 31) + b().hashCode()) * 31) + this.f24885c.hashCode()) * 31;
        c.b bVar = this.f24886d;
        int i11 = 0;
        if (bVar != null) {
            i10 = bVar.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str = this.f24887e;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((i12 + i11) * 31) + Boolean.hashCode(this.f24888f)) * 31) + Boolean.hashCode(this.f24889g);
    }
}
