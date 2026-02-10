package an;

import bn.c;
import com.squareup.moshi.h;
import com.squareup.moshi.j;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends h {

    /* renamed from: a  reason: collision with root package name */
    final Class f850a;

    /* renamed from: b  reason: collision with root package name */
    final String[] f851b;

    /* renamed from: c  reason: collision with root package name */
    final Enum[] f852c;

    /* renamed from: d  reason: collision with root package name */
    final m.b f853d;

    /* renamed from: e  reason: collision with root package name */
    final boolean f854e;

    /* renamed from: f  reason: collision with root package name */
    final Enum f855f;

    a(Class cls, Enum r42, boolean z10) {
        this.f850a = cls;
        this.f855f = r42;
        this.f854e = z10;
        try {
            Enum[] enumArr = (Enum[]) cls.getEnumConstants();
            this.f852c = enumArr;
            this.f851b = new String[enumArr.length];
            int i10 = 0;
            while (true) {
                Enum[] enumArr2 = this.f852c;
                if (i10 < enumArr2.length) {
                    String name = enumArr2[i10].name();
                    this.f851b[i10] = c.n(name, cls.getField(name));
                    i10++;
                } else {
                    this.f853d = m.b.a(this.f851b);
                    return;
                }
            }
        } catch (NoSuchFieldException e10) {
            throw new AssertionError("Missing field in " + cls.getName(), e10);
        }
    }

    public static a a(Class cls) {
        return new a(cls, null, false);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public Enum fromJson(m mVar) {
        int Q = mVar.Q(this.f853d);
        if (Q != -1) {
            return this.f852c[Q];
        }
        String t10 = mVar.t();
        if (this.f854e) {
            if (mVar.s() == m.c.STRING) {
                mVar.T();
                return this.f855f;
            }
            throw new j("Expected a string but was " + mVar.s() + " at path " + t10);
        }
        String b12 = mVar.b1();
        throw new j("Expected one of " + Arrays.asList(this.f851b) + " but was " + b12 + " at path " + t10);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: c */
    public void toJson(t tVar, Enum r32) {
        if (r32 != null) {
            tVar.r1(this.f851b[r32.ordinal()]);
            return;
        }
        throw new NullPointerException("value was null! Wrap in .nullSafe() to write nullable values.");
    }

    public a d(Enum r42) {
        return new a(this.f850a, r42, true);
    }

    public String toString() {
        return "EnumJsonAdapter(" + this.f850a.getName() + ")";
    }
}
