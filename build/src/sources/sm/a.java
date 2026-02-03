package sm;

import com.squareup.moshi.h;
import com.squareup.moshi.j;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import java.util.Arrays;
import tm.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends h {

    /* renamed from: a  reason: collision with root package name */
    final Class f49141a;

    /* renamed from: b  reason: collision with root package name */
    final String[] f49142b;

    /* renamed from: c  reason: collision with root package name */
    final Enum[] f49143c;

    /* renamed from: d  reason: collision with root package name */
    final m.b f49144d;

    /* renamed from: e  reason: collision with root package name */
    final boolean f49145e;

    /* renamed from: f  reason: collision with root package name */
    final Enum f49146f;

    a(Class cls, Enum r42, boolean z10) {
        this.f49141a = cls;
        this.f49146f = r42;
        this.f49145e = z10;
        try {
            Enum[] enumArr = (Enum[]) cls.getEnumConstants();
            this.f49143c = enumArr;
            this.f49142b = new String[enumArr.length];
            int i10 = 0;
            while (true) {
                Enum[] enumArr2 = this.f49143c;
                if (i10 < enumArr2.length) {
                    String name = enumArr2[i10].name();
                    this.f49142b[i10] = c.n(name, cls.getField(name));
                    i10++;
                } else {
                    this.f49144d = m.b.a(this.f49142b);
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
        int D0 = mVar.D0(this.f49144d);
        if (D0 != -1) {
            return this.f49143c[D0];
        }
        String q10 = mVar.q();
        if (this.f49145e) {
            if (mVar.E() == m.c.STRING) {
                mVar.P();
                return this.f49146f;
            }
            throw new j("Expected a string but was " + mVar.E() + " at path " + q10);
        }
        String f12 = mVar.f1();
        throw new j("Expected one of " + Arrays.asList(this.f49142b) + " but was " + f12 + " at path " + q10);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: c */
    public void toJson(t tVar, Enum r32) {
        if (r32 != null) {
            tVar.x1(this.f49142b[r32.ordinal()]);
            return;
        }
        throw new NullPointerException("value was null! Wrap in .nullSafe() to write nullable values.");
    }

    public a d(Enum r42) {
        return new a(this.f49141a, r42, true);
    }

    public String toString() {
        return "EnumJsonAdapter(" + this.f49141a.getName() + ")";
    }
}
