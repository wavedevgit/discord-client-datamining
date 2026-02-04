package um;

import com.squareup.moshi.h;
import com.squareup.moshi.j;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import java.util.Arrays;
import vm.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends h {

    /* renamed from: a  reason: collision with root package name */
    final Class f50734a;

    /* renamed from: b  reason: collision with root package name */
    final String[] f50735b;

    /* renamed from: c  reason: collision with root package name */
    final Enum[] f50736c;

    /* renamed from: d  reason: collision with root package name */
    final m.b f50737d;

    /* renamed from: e  reason: collision with root package name */
    final boolean f50738e;

    /* renamed from: f  reason: collision with root package name */
    final Enum f50739f;

    a(Class cls, Enum r42, boolean z10) {
        this.f50734a = cls;
        this.f50739f = r42;
        this.f50738e = z10;
        try {
            Enum[] enumArr = (Enum[]) cls.getEnumConstants();
            this.f50736c = enumArr;
            this.f50735b = new String[enumArr.length];
            int i10 = 0;
            while (true) {
                Enum[] enumArr2 = this.f50736c;
                if (i10 < enumArr2.length) {
                    String name = enumArr2[i10].name();
                    this.f50735b[i10] = c.n(name, cls.getField(name));
                    i10++;
                } else {
                    this.f50737d = m.b.a(this.f50735b);
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
        int C0 = mVar.C0(this.f50737d);
        if (C0 != -1) {
            return this.f50736c[C0];
        }
        String q10 = mVar.q();
        if (this.f50738e) {
            if (mVar.E() == m.c.STRING) {
                mVar.P();
                return this.f50739f;
            }
            throw new j("Expected a string but was " + mVar.E() + " at path " + q10);
        }
        String f12 = mVar.f1();
        throw new j("Expected one of " + Arrays.asList(this.f50735b) + " but was " + f12 + " at path " + q10);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: c */
    public void toJson(t tVar, Enum r32) {
        if (r32 != null) {
            tVar.x1(this.f50735b[r32.ordinal()]);
            return;
        }
        throw new NullPointerException("value was null! Wrap in .nullSafe() to write nullable values.");
    }

    public a d(Enum r42) {
        return new a(this.f50734a, r42, true);
    }

    public String toString() {
        return "EnumJsonAdapter(" + this.f50734a.getName() + ")";
    }
}
