package xm;

import com.squareup.moshi.h;
import com.squareup.moshi.j;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import java.util.Arrays;
import ym.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends h {

    /* renamed from: a  reason: collision with root package name */
    final Class f53973a;

    /* renamed from: b  reason: collision with root package name */
    final String[] f53974b;

    /* renamed from: c  reason: collision with root package name */
    final Enum[] f53975c;

    /* renamed from: d  reason: collision with root package name */
    final m.b f53976d;

    /* renamed from: e  reason: collision with root package name */
    final boolean f53977e;

    /* renamed from: f  reason: collision with root package name */
    final Enum f53978f;

    a(Class cls, Enum r42, boolean z10) {
        this.f53973a = cls;
        this.f53978f = r42;
        this.f53977e = z10;
        try {
            Enum[] enumArr = (Enum[]) cls.getEnumConstants();
            this.f53975c = enumArr;
            this.f53974b = new String[enumArr.length];
            int i10 = 0;
            while (true) {
                Enum[] enumArr2 = this.f53975c;
                if (i10 < enumArr2.length) {
                    String name = enumArr2[i10].name();
                    this.f53974b[i10] = c.n(name, cls.getField(name));
                    i10++;
                } else {
                    this.f53976d = m.b.a(this.f53974b);
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
        int C0 = mVar.C0(this.f53976d);
        if (C0 != -1) {
            return this.f53975c[C0];
        }
        String r10 = mVar.r();
        if (this.f53977e) {
            if (mVar.E() == m.c.STRING) {
                mVar.P();
                return this.f53978f;
            }
            throw new j("Expected a string but was " + mVar.E() + " at path " + r10);
        }
        String f12 = mVar.f1();
        throw new j("Expected one of " + Arrays.asList(this.f53974b) + " but was " + f12 + " at path " + r10);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: c */
    public void toJson(t tVar, Enum r32) {
        if (r32 != null) {
            tVar.x1(this.f53974b[r32.ordinal()]);
            return;
        }
        throw new NullPointerException("value was null! Wrap in .nullSafe() to write nullable values.");
    }

    public a d(Enum r42) {
        return new a(this.f53973a, r42, true);
    }

    public String toString() {
        return "EnumJsonAdapter(" + this.f53973a.getName() + ")";
    }
}
