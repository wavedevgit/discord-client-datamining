package dh;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import bh.d;
import bh.i;
import bh.j;
import bh.k;
import bh.l;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.material.internal.m;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final a f21705a;

    /* renamed from: b  reason: collision with root package name */
    private final a f21706b;

    /* renamed from: c  reason: collision with root package name */
    final float f21707c;

    /* renamed from: d  reason: collision with root package name */
    final float f21708d;

    /* renamed from: e  reason: collision with root package name */
    final float f21709e;

    /* renamed from: f  reason: collision with root package name */
    final float f21710f;

    /* renamed from: g  reason: collision with root package name */
    final float f21711g;

    /* renamed from: h  reason: collision with root package name */
    final float f21712h;

    /* renamed from: i  reason: collision with root package name */
    final int f21713i;

    /* renamed from: j  reason: collision with root package name */
    final int f21714j;

    /* renamed from: k  reason: collision with root package name */
    int f21715k;

    /* renamed from: l  reason: collision with root package name */
    int f21716l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context, int i10, int i11, int i12, a aVar) {
        CharSequence charSequence;
        int i13;
        int i14;
        int i15;
        int i16;
        int intValue;
        int intValue2;
        int intValue3;
        int intValue4;
        int intValue5;
        int intValue6;
        int intValue7;
        int intValue8;
        int intValue9;
        int intValue10;
        int intValue11;
        int intValue12;
        int intValue13;
        int intValue14;
        boolean booleanValue;
        a aVar2 = new a();
        this.f21706b = aVar2;
        aVar = aVar == null ? new a() : aVar;
        if (i10 != 0) {
            aVar.f21717d = i10;
        }
        TypedArray c10 = c(context, aVar.f21717d, i11, i12);
        Resources resources = context.getResources();
        this.f21707c = c10.getDimensionPixelSize(l.f7156v, -1);
        this.f21713i = context.getResources().getDimensionPixelSize(d.Y);
        this.f21714j = context.getResources().getDimensionPixelSize(d.f6775a0);
        this.f21708d = c10.getDimensionPixelSize(l.F, -1);
        this.f21709e = c10.getDimension(l.D, resources.getDimension(d.f6816v));
        this.f21711g = c10.getDimension(l.I, resources.getDimension(d.f6818w));
        this.f21710f = c10.getDimension(l.f7147u, resources.getDimension(d.f6816v));
        this.f21712h = c10.getDimension(l.E, resources.getDimension(d.f6818w));
        boolean z10 = true;
        this.f21715k = c10.getInt(l.P, 1);
        this.f21716l = c10.getInt(l.f7129s, 0);
        aVar2.f21725t = aVar.f21725t == -2 ? SetSpanOperation.SPAN_MAX_PRIORITY : aVar.f21725t;
        if (aVar.f21727v != -2) {
            aVar2.f21727v = aVar.f21727v;
        } else if (c10.hasValue(l.O)) {
            aVar2.f21727v = c10.getInt(l.O, 0);
        } else {
            aVar2.f21727v = -1;
        }
        if (aVar.f21726u != null) {
            aVar2.f21726u = aVar.f21726u;
        } else if (c10.hasValue(l.f7183y)) {
            aVar2.f21726u = c10.getString(l.f7183y);
        }
        aVar2.f21731z = aVar.f21731z;
        if (aVar.A != null) {
            charSequence = aVar.A;
        } else {
            charSequence = context.getString(j.f6909j);
        }
        aVar2.A = charSequence;
        if (aVar.B != 0) {
            i13 = aVar.B;
        } else {
            i13 = i.f6899a;
        }
        aVar2.B = i13;
        if (aVar.C != 0) {
            i14 = aVar.C;
        } else {
            i14 = j.f6914o;
        }
        aVar2.C = i14;
        if (aVar.E != null && !aVar.E.booleanValue()) {
            z10 = false;
        }
        aVar2.E = Boolean.valueOf(z10);
        if (aVar.f21728w != -2) {
            i15 = aVar.f21728w;
        } else {
            i15 = c10.getInt(l.M, -2);
        }
        aVar2.f21728w = i15;
        if (aVar.f21729x != -2) {
            i16 = aVar.f21729x;
        } else {
            i16 = c10.getInt(l.N, -2);
        }
        aVar2.f21729x = i16;
        if (aVar.f21721p != null) {
            intValue = aVar.f21721p.intValue();
        } else {
            intValue = c10.getResourceId(l.f7165w, k.f6927b);
        }
        aVar2.f21721p = Integer.valueOf(intValue);
        if (aVar.f21722q != null) {
            intValue2 = aVar.f21722q.intValue();
        } else {
            intValue2 = c10.getResourceId(l.f7174x, 0);
        }
        aVar2.f21722q = Integer.valueOf(intValue2);
        if (aVar.f21723r != null) {
            intValue3 = aVar.f21723r.intValue();
        } else {
            intValue3 = c10.getResourceId(l.G, k.f6927b);
        }
        aVar2.f21723r = Integer.valueOf(intValue3);
        if (aVar.f21724s != null) {
            intValue4 = aVar.f21724s.intValue();
        } else {
            intValue4 = c10.getResourceId(l.H, 0);
        }
        aVar2.f21724s = Integer.valueOf(intValue4);
        if (aVar.f21718e != null) {
            intValue5 = aVar.f21718e.intValue();
        } else {
            intValue5 = J(context, c10, l.f7120r);
        }
        aVar2.f21718e = Integer.valueOf(intValue5);
        if (aVar.f21720o != null) {
            intValue6 = aVar.f21720o.intValue();
        } else {
            intValue6 = c10.getResourceId(l.f7192z, k.f6928c);
        }
        aVar2.f21720o = Integer.valueOf(intValue6);
        if (aVar.f21719i != null) {
            aVar2.f21719i = aVar.f21719i;
        } else if (c10.hasValue(l.A)) {
            aVar2.f21719i = Integer.valueOf(J(context, c10, l.A));
        } else {
            aVar2.f21719i = Integer.valueOf(new qh.d(context, aVar2.f21720o.intValue()).j().getDefaultColor());
        }
        if (aVar.D != null) {
            intValue7 = aVar.D.intValue();
        } else {
            intValue7 = c10.getInt(l.f7138t, 8388661);
        }
        aVar2.D = Integer.valueOf(intValue7);
        if (aVar.F != null) {
            intValue8 = aVar.F.intValue();
        } else {
            intValue8 = c10.getDimensionPixelSize(l.C, resources.getDimensionPixelSize(d.Z));
        }
        aVar2.F = Integer.valueOf(intValue8);
        if (aVar.G != null) {
            intValue9 = aVar.G.intValue();
        } else {
            intValue9 = c10.getDimensionPixelSize(l.B, resources.getDimensionPixelSize(d.f6820x));
        }
        aVar2.G = Integer.valueOf(intValue9);
        if (aVar.H != null) {
            intValue10 = aVar.H.intValue();
        } else {
            intValue10 = c10.getDimensionPixelOffset(l.J, 0);
        }
        aVar2.H = Integer.valueOf(intValue10);
        if (aVar.I != null) {
            intValue11 = aVar.I.intValue();
        } else {
            intValue11 = c10.getDimensionPixelOffset(l.Q, 0);
        }
        aVar2.I = Integer.valueOf(intValue11);
        if (aVar.J != null) {
            intValue12 = aVar.J.intValue();
        } else {
            intValue12 = c10.getDimensionPixelOffset(l.K, aVar2.H.intValue());
        }
        aVar2.J = Integer.valueOf(intValue12);
        if (aVar.K != null) {
            intValue13 = aVar.K.intValue();
        } else {
            intValue13 = c10.getDimensionPixelOffset(l.R, aVar2.I.intValue());
        }
        aVar2.K = Integer.valueOf(intValue13);
        if (aVar.N != null) {
            intValue14 = aVar.N.intValue();
        } else {
            intValue14 = c10.getDimensionPixelOffset(l.L, 0);
        }
        aVar2.N = Integer.valueOf(intValue14);
        aVar2.L = Integer.valueOf(aVar.L == null ? 0 : aVar.L.intValue());
        aVar2.M = Integer.valueOf(aVar.M == null ? 0 : aVar.M.intValue());
        if (aVar.O != null) {
            booleanValue = aVar.O.booleanValue();
        } else {
            booleanValue = c10.getBoolean(l.f7111q, false);
        }
        aVar2.O = Boolean.valueOf(booleanValue);
        c10.recycle();
        if (aVar.f21730y == null) {
            aVar2.f21730y = Locale.getDefault(Locale.Category.FORMAT);
        } else {
            aVar2.f21730y = aVar.f21730y;
        }
        this.f21705a = aVar;
    }

    private static int J(Context context, TypedArray typedArray, int i10) {
        return qh.c.a(context, typedArray, i10).getDefaultColor();
    }

    private TypedArray c(Context context, int i10, int i11, int i12) {
        AttributeSet attributeSet;
        int i13;
        int i14;
        if (i10 != 0) {
            attributeSet = com.google.android.material.drawable.c.k(context, i10, "badge");
            i13 = attributeSet.getStyleAttribute();
        } else {
            attributeSet = null;
            i13 = 0;
        }
        AttributeSet attributeSet2 = attributeSet;
        if (i13 == 0) {
            i14 = i12;
        } else {
            i14 = i13;
        }
        return m.i(context, attributeSet2, l.f7102p, i11, i14, new int[0]);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a A() {
        return this.f21705a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String B() {
        return this.f21706b.f21726u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int C() {
        return this.f21706b.f21720o.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int D() {
        return this.f21706b.K.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int E() {
        return this.f21706b.I.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean F() {
        if (this.f21706b.f21727v != -1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean G() {
        if (this.f21706b.f21726u != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean H() {
        return this.f21706b.O.booleanValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean I() {
        return this.f21706b.E.booleanValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(int i10) {
        this.f21705a.f21725t = i10;
        this.f21706b.f21725t = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(int i10) {
        this.f21705a.f21718e = Integer.valueOf(i10);
        this.f21706b.f21718e = Integer.valueOf(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M(int i10) {
        this.f21705a.f21719i = Integer.valueOf(i10);
        this.f21706b.f21719i = Integer.valueOf(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(int i10) {
        this.f21705a.f21727v = i10;
        this.f21706b.f21727v = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void O(String str) {
        this.f21705a.f21726u = str;
        this.f21706b.f21726u = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void P(boolean z10) {
        this.f21705a.E = Boolean.valueOf(z10);
        this.f21706b.E = Boolean.valueOf(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        N(-1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        O(null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f21706b.L.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f21706b.M.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f21706b.f21725t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f21706b.f21718e.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int h() {
        return this.f21706b.D.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f21706b.F.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f21706b.f21722q.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int k() {
        return this.f21706b.f21721p.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int l() {
        return this.f21706b.f21719i.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int m() {
        return this.f21706b.G.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f21706b.f21724s.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int o() {
        return this.f21706b.f21723r.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f21706b.C;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence q() {
        return this.f21706b.f21731z;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence r() {
        return this.f21706b.A;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int s() {
        return this.f21706b.B;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int t() {
        return this.f21706b.J.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int u() {
        return this.f21706b.H.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int v() {
        return this.f21706b.N.intValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int w() {
        return this.f21706b.f21728w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int x() {
        return this.f21706b.f21729x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int y() {
        return this.f21706b.f21727v;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Locale z() {
        return this.f21706b.f21730y;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable {
        public static final Parcelable.Creator<a> CREATOR = new C0292a();
        private CharSequence A;
        private int B;
        private int C;
        private Integer D;
        private Boolean E;
        private Integer F;
        private Integer G;
        private Integer H;
        private Integer I;
        private Integer J;
        private Integer K;
        private Integer L;
        private Integer M;
        private Integer N;
        private Boolean O;
        private Integer P;

        /* renamed from: d  reason: collision with root package name */
        private int f21717d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f21718e;

        /* renamed from: i  reason: collision with root package name */
        private Integer f21719i;

        /* renamed from: o  reason: collision with root package name */
        private Integer f21720o;

        /* renamed from: p  reason: collision with root package name */
        private Integer f21721p;

        /* renamed from: q  reason: collision with root package name */
        private Integer f21722q;

        /* renamed from: r  reason: collision with root package name */
        private Integer f21723r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f21724s;

        /* renamed from: t  reason: collision with root package name */
        private int f21725t;

        /* renamed from: u  reason: collision with root package name */
        private String f21726u;

        /* renamed from: v  reason: collision with root package name */
        private int f21727v;

        /* renamed from: w  reason: collision with root package name */
        private int f21728w;

        /* renamed from: x  reason: collision with root package name */
        private int f21729x;

        /* renamed from: y  reason: collision with root package name */
        private Locale f21730y;

        /* renamed from: z  reason: collision with root package name */
        private CharSequence f21731z;

        /* renamed from: dh.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class C0292a implements Parcelable.Creator {
            C0292a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public a createFromParcel(Parcel parcel) {
                return new a(parcel);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public a() {
            this.f21725t = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f21727v = -2;
            this.f21728w = -2;
            this.f21729x = -2;
            this.E = Boolean.TRUE;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            String str;
            parcel.writeInt(this.f21717d);
            parcel.writeSerializable(this.f21718e);
            parcel.writeSerializable(this.f21719i);
            parcel.writeSerializable(this.f21720o);
            parcel.writeSerializable(this.f21721p);
            parcel.writeSerializable(this.f21722q);
            parcel.writeSerializable(this.f21723r);
            parcel.writeSerializable(this.f21724s);
            parcel.writeInt(this.f21725t);
            parcel.writeString(this.f21726u);
            parcel.writeInt(this.f21727v);
            parcel.writeInt(this.f21728w);
            parcel.writeInt(this.f21729x);
            CharSequence charSequence = this.f21731z;
            String str2 = null;
            if (charSequence != null) {
                str = charSequence.toString();
            } else {
                str = null;
            }
            parcel.writeString(str);
            CharSequence charSequence2 = this.A;
            if (charSequence2 != null) {
                str2 = charSequence2.toString();
            }
            parcel.writeString(str2);
            parcel.writeInt(this.B);
            parcel.writeSerializable(this.D);
            parcel.writeSerializable(this.F);
            parcel.writeSerializable(this.G);
            parcel.writeSerializable(this.H);
            parcel.writeSerializable(this.I);
            parcel.writeSerializable(this.J);
            parcel.writeSerializable(this.K);
            parcel.writeSerializable(this.N);
            parcel.writeSerializable(this.L);
            parcel.writeSerializable(this.M);
            parcel.writeSerializable(this.E);
            parcel.writeSerializable(this.f21730y);
            parcel.writeSerializable(this.O);
            parcel.writeSerializable(this.P);
        }

        a(Parcel parcel) {
            this.f21725t = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f21727v = -2;
            this.f21728w = -2;
            this.f21729x = -2;
            this.E = Boolean.TRUE;
            this.f21717d = parcel.readInt();
            this.f21718e = (Integer) parcel.readSerializable();
            this.f21719i = (Integer) parcel.readSerializable();
            this.f21720o = (Integer) parcel.readSerializable();
            this.f21721p = (Integer) parcel.readSerializable();
            this.f21722q = (Integer) parcel.readSerializable();
            this.f21723r = (Integer) parcel.readSerializable();
            this.f21724s = (Integer) parcel.readSerializable();
            this.f21725t = parcel.readInt();
            this.f21726u = parcel.readString();
            this.f21727v = parcel.readInt();
            this.f21728w = parcel.readInt();
            this.f21729x = parcel.readInt();
            this.f21731z = parcel.readString();
            this.A = parcel.readString();
            this.B = parcel.readInt();
            this.D = (Integer) parcel.readSerializable();
            this.F = (Integer) parcel.readSerializable();
            this.G = (Integer) parcel.readSerializable();
            this.H = (Integer) parcel.readSerializable();
            this.I = (Integer) parcel.readSerializable();
            this.J = (Integer) parcel.readSerializable();
            this.K = (Integer) parcel.readSerializable();
            this.N = (Integer) parcel.readSerializable();
            this.L = (Integer) parcel.readSerializable();
            this.M = (Integer) parcel.readSerializable();
            this.E = (Boolean) parcel.readSerializable();
            this.f21730y = (Locale) parcel.readSerializable();
            this.O = (Boolean) parcel.readSerializable();
            this.P = (Integer) parcel.readSerializable();
        }
    }
}
