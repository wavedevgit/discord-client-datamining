package g5;

import android.graphics.drawable.Drawable;
import e5.c;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f23805a;

    /* renamed from: b  reason: collision with root package name */
    private final h f23806b;

    /* renamed from: c  reason: collision with root package name */
    private final x4.h f23807c;

    /* renamed from: d  reason: collision with root package name */
    private final c.b f23808d;

    /* renamed from: e  reason: collision with root package name */
    private final String f23809e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f23810f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f23811g;

    public q(Drawable drawable, h hVar, x4.h hVar2, c.b bVar, String str, boolean z10, boolean z11) {
        super(null);
        this.f23805a = drawable;
        this.f23806b = hVar;
        this.f23807c = hVar2;
        this.f23808d = bVar;
        this.f23809e = str;
        this.f23810f = z10;
        this.f23811g = z11;
    }

    @Override // g5.i
    public Drawable a() {
        return this.f23805a;
    }

    @Override // g5.i
    public h b() {
        return this.f23806b;
    }

    public final x4.h c() {
        return this.f23807c;
    }

    public final boolean d() {
        return this.f23811g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof q) {
            q qVar = (q) obj;
            if (Intrinsics.areEqual(a(), qVar.a()) && Intrinsics.areEqual(b(), qVar.b()) && this.f23807c == qVar.f23807c && Intrinsics.areEqual(this.f23808d, qVar.f23808d) && Intrinsics.areEqual(this.f23809e, qVar.f23809e) && this.f23810f == qVar.f23810f && this.f23811g == qVar.f23811g) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((((a().hashCode() * 31) + b().hashCode()) * 31) + this.f23807c.hashCode()) * 31;
        c.b bVar = this.f23808d;
        int i11 = 0;
        if (bVar != null) {
            i10 = bVar.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str = this.f23809e;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((i12 + i11) * 31) + Boolean.hashCode(this.f23810f)) * 31) + Boolean.hashCode(this.f23811g);
    }
}
