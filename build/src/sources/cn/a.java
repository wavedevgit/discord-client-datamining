package cn;

import com.squareup.moshi.h;
import com.squareup.moshi.j;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import dn.c;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends h {

    /* renamed from: a  reason: collision with root package name */
    final Class f8355a;

    /* renamed from: b  reason: collision with root package name */
    final String[] f8356b;

    /* renamed from: c  reason: collision with root package name */
    final Enum[] f8357c;

    /* renamed from: d  reason: collision with root package name */
    final m.b f8358d;

    /* renamed from: e  reason: collision with root package name */
    final boolean f8359e;

    /* renamed from: f  reason: collision with root package name */
    final Enum f8360f;

    a(Class cls, Enum r42, boolean z10) {
        this.f8355a = cls;
        this.f8360f = r42;
        this.f8359e = z10;
        try {
            Enum[] enumArr = (Enum[]) cls.getEnumConstants();
            this.f8357c = enumArr;
            this.f8356b = new String[enumArr.length];
            int i10 = 0;
            while (true) {
                Enum[] enumArr2 = this.f8357c;
                if (i10 < enumArr2.length) {
                    String name = enumArr2[i10].name();
                    this.f8356b[i10] = c.n(name, cls.getField(name));
                    i10++;
                } else {
                    this.f8358d = m.b.a(this.f8356b);
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
        int Q = mVar.Q(this.f8358d);
        if (Q != -1) {
            return this.f8357c[Q];
        }
        String t10 = mVar.t();
        if (this.f8359e) {
            if (mVar.s() == m.c.STRING) {
                mVar.T();
                return this.f8360f;
            }
            throw new j("Expected a string but was " + mVar.s() + " at path " + t10);
        }
        String g12 = mVar.g1();
        throw new j("Expected one of " + Arrays.asList(this.f8356b) + " but was " + g12 + " at path " + t10);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: c */
    public void toJson(t tVar, Enum r32) {
        if (r32 != null) {
            tVar.V0(this.f8356b[r32.ordinal()]);
            return;
        }
        throw new NullPointerException("value was null! Wrap in .nullSafe() to write nullable values.");
    }

    public a d(Enum r42) {
        return new a(this.f8355a, r42, true);
    }

    public String toString() {
        return "EnumJsonAdapter(" + this.f8355a.getName() + ")";
    }
}
