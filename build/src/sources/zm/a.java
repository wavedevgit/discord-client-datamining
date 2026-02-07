package zm;

import an.c;
import com.squareup.moshi.h;
import com.squareup.moshi.j;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends h {

    /* renamed from: a  reason: collision with root package name */
    final Class f56382a;

    /* renamed from: b  reason: collision with root package name */
    final String[] f56383b;

    /* renamed from: c  reason: collision with root package name */
    final Enum[] f56384c;

    /* renamed from: d  reason: collision with root package name */
    final m.b f56385d;

    /* renamed from: e  reason: collision with root package name */
    final boolean f56386e;

    /* renamed from: f  reason: collision with root package name */
    final Enum f56387f;

    a(Class cls, Enum r42, boolean z10) {
        this.f56382a = cls;
        this.f56387f = r42;
        this.f56386e = z10;
        try {
            Enum[] enumArr = (Enum[]) cls.getEnumConstants();
            this.f56384c = enumArr;
            this.f56383b = new String[enumArr.length];
            int i10 = 0;
            while (true) {
                Enum[] enumArr2 = this.f56384c;
                if (i10 < enumArr2.length) {
                    String name = enumArr2[i10].name();
                    this.f56383b[i10] = c.n(name, cls.getField(name));
                    i10++;
                } else {
                    this.f56385d = m.b.a(this.f56383b);
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
        int P = mVar.P(this.f56385d);
        if (P != -1) {
            return this.f56384c[P];
        }
        String t10 = mVar.t();
        if (this.f56386e) {
            if (mVar.s() == m.c.STRING) {
                mVar.S();
                return this.f56387f;
            }
            throw new j("Expected a string but was " + mVar.s() + " at path " + t10);
        }
        String e12 = mVar.e1();
        throw new j("Expected one of " + Arrays.asList(this.f56383b) + " but was " + e12 + " at path " + t10);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: c */
    public void toJson(t tVar, Enum r32) {
        if (r32 != null) {
            tVar.w1(this.f56383b[r32.ordinal()]);
            return;
        }
        throw new NullPointerException("value was null! Wrap in .nullSafe() to write nullable values.");
    }

    public a d(Enum r42) {
        return new a(this.f56382a, r42, true);
    }

    public String toString() {
        return "EnumJsonAdapter(" + this.f56382a.getName() + ")";
    }
}
