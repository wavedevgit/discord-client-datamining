package rm;

import com.squareup.moshi.h;
import com.squareup.moshi.j;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import java.util.Arrays;
import sm.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends h {

    /* renamed from: a  reason: collision with root package name */
    final Class f48360a;

    /* renamed from: b  reason: collision with root package name */
    final String[] f48361b;

    /* renamed from: c  reason: collision with root package name */
    final Enum[] f48362c;

    /* renamed from: d  reason: collision with root package name */
    final m.b f48363d;

    /* renamed from: e  reason: collision with root package name */
    final boolean f48364e;

    /* renamed from: f  reason: collision with root package name */
    final Enum f48365f;

    a(Class cls, Enum r42, boolean z10) {
        this.f48360a = cls;
        this.f48365f = r42;
        this.f48364e = z10;
        try {
            Enum[] enumArr = (Enum[]) cls.getEnumConstants();
            this.f48362c = enumArr;
            this.f48361b = new String[enumArr.length];
            int i10 = 0;
            while (true) {
                Enum[] enumArr2 = this.f48362c;
                if (i10 < enumArr2.length) {
                    String name = enumArr2[i10].name();
                    this.f48361b[i10] = c.n(name, cls.getField(name));
                    i10++;
                } else {
                    this.f48363d = m.b.a(this.f48361b);
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
        int C0 = mVar.C0(this.f48363d);
        if (C0 != -1) {
            return this.f48362c[C0];
        }
        String q10 = mVar.q();
        if (this.f48364e) {
            if (mVar.E() == m.c.STRING) {
                mVar.P();
                return this.f48365f;
            }
            throw new j("Expected a string but was " + mVar.E() + " at path " + q10);
        }
        String e12 = mVar.e1();
        throw new j("Expected one of " + Arrays.asList(this.f48361b) + " but was " + e12 + " at path " + q10);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: c */
    public void toJson(t tVar, Enum r32) {
        if (r32 != null) {
            tVar.x1(this.f48361b[r32.ordinal()]);
            return;
        }
        throw new NullPointerException("value was null! Wrap in .nullSafe() to write nullable values.");
    }

    public a d(Enum r42) {
        return new a(this.f48360a, r42, true);
    }

    public String toString() {
        return "EnumJsonAdapter(" + this.f48360a.getName() + ")";
    }
}
