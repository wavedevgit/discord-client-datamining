package g5;

import android.graphics.drawable.Drawable;
import e5.c;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f23583a;

    /* renamed from: b  reason: collision with root package name */
    private final h f23584b;

    /* renamed from: c  reason: collision with root package name */
    private final x4.h f23585c;

    /* renamed from: d  reason: collision with root package name */
    private final c.b f23586d;

    /* renamed from: e  reason: collision with root package name */
    private final String f23587e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f23588f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f23589g;

    public q(Drawable drawable, h hVar, x4.h hVar2, c.b bVar, String str, boolean z10, boolean z11) {
        super(null);
        this.f23583a = drawable;
        this.f23584b = hVar;
        this.f23585c = hVar2;
        this.f23586d = bVar;
        this.f23587e = str;
        this.f23588f = z10;
        this.f23589g = z11;
    }

    @Override // g5.i
    public Drawable a() {
        return this.f23583a;
    }

    @Override // g5.i
    public h b() {
        return this.f23584b;
    }

    public final x4.h c() {
        return this.f23585c;
    }

    public final boolean d() {
        return this.f23589g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof q) {
            q qVar = (q) obj;
            if (Intrinsics.areEqual(a(), qVar.a()) && Intrinsics.areEqual(b(), qVar.b()) && this.f23585c == qVar.f23585c && Intrinsics.areEqual(this.f23586d, qVar.f23586d) && Intrinsics.areEqual(this.f23587e, qVar.f23587e) && this.f23588f == qVar.f23588f && this.f23589g == qVar.f23589g) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((((a().hashCode() * 31) + b().hashCode()) * 31) + this.f23585c.hashCode()) * 31;
        c.b bVar = this.f23586d;
        int i11 = 0;
        if (bVar != null) {
            i10 = bVar.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str = this.f23587e;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((i12 + i11) * 31) + Boolean.hashCode(this.f23588f)) * 31) + Boolean.hashCode(this.f23589g);
    }
}
