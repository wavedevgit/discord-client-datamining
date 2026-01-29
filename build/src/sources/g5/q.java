package g5;

import android.graphics.drawable.Drawable;
import e5.c;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f25814a;

    /* renamed from: b  reason: collision with root package name */
    private final h f25815b;

    /* renamed from: c  reason: collision with root package name */
    private final x4.h f25816c;

    /* renamed from: d  reason: collision with root package name */
    private final c.b f25817d;

    /* renamed from: e  reason: collision with root package name */
    private final String f25818e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f25819f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f25820g;

    public q(Drawable drawable, h hVar, x4.h hVar2, c.b bVar, String str, boolean z10, boolean z11) {
        super(null);
        this.f25814a = drawable;
        this.f25815b = hVar;
        this.f25816c = hVar2;
        this.f25817d = bVar;
        this.f25818e = str;
        this.f25819f = z10;
        this.f25820g = z11;
    }

    @Override // g5.i
    public Drawable a() {
        return this.f25814a;
    }

    @Override // g5.i
    public h b() {
        return this.f25815b;
    }

    public final x4.h c() {
        return this.f25816c;
    }

    public final boolean d() {
        return this.f25820g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof q) {
            q qVar = (q) obj;
            if (Intrinsics.areEqual(a(), qVar.a()) && Intrinsics.areEqual(b(), qVar.b()) && this.f25816c == qVar.f25816c && Intrinsics.areEqual(this.f25817d, qVar.f25817d) && Intrinsics.areEqual(this.f25818e, qVar.f25818e) && this.f25819f == qVar.f25819f && this.f25820g == qVar.f25820g) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((((a().hashCode() * 31) + b().hashCode()) * 31) + this.f25816c.hashCode()) * 31;
        c.b bVar = this.f25817d;
        int i11 = 0;
        if (bVar != null) {
            i10 = bVar.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str = this.f25818e;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((i12 + i11) * 31) + Boolean.hashCode(this.f25819f)) * 31) + Boolean.hashCode(this.f25820g);
    }
}
