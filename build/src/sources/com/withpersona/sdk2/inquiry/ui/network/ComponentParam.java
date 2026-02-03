package com.withpersona.sdk2.inquiry.ui.network;

import android.os.Parcel;
import android.os.Parcelable;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.z;
import java.math.BigDecimal;
import java.util.List;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lr.p;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class ComponentParam implements Parcelable {

    @kotlin.Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0019\u0010\u0007\u001a\u0004\u0018\u00010\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/ComponentParam$Adapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/ui/network/ComponentParam;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/ui/network/ComponentParam;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/ui/network/ComponentParam;)V", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Adapter extends com.squareup.moshi.h {

        /* renamed from: a  reason: collision with root package name */
        public static final Adapter f19389a = new Adapter();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f19390a;

            static {
                int[] iArr = new int[bp.a.values().length];
                try {
                    iArr[bp.a.f6647d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[bp.a.f6648e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[bp.a.f6649i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                try {
                    iArr[bp.a.f6650o.ordinal()] = 4;
                } catch (NoSuchFieldError unused4) {
                }
                f19390a = iArr;
            }
        }

        private Adapter() {
        }

        @Override // com.squareup.moshi.h
        @com.squareup.moshi.f
        public ComponentParam fromJson(@NotNull m reader) {
            Intrinsics.checkNotNullParameter(reader, "reader");
            return null;
        }

        @Override // com.squareup.moshi.h
        @z
        public void toJson(@NotNull t writer, ComponentParam componentParam) {
            String str;
            Intrinsics.checkNotNullParameter(writer, "writer");
            if (componentParam instanceof d) {
                writer.x1(((d) componentParam).a());
            } else if (componentParam instanceof e) {
                writer.a();
                for (String str2 : ((e) componentParam).a()) {
                    writer.x1(str2);
                }
                writer.x();
            } else if (componentParam instanceof a) {
                writer.l();
                a aVar = (a) componentParam;
                String c10 = aVar.c();
                if (c10 != null) {
                    writer.A0("street_1");
                    writer.x1(c10);
                }
                String d10 = aVar.d();
                if (d10 != null) {
                    writer.A0("street_2");
                    writer.x1(d10);
                }
                String a10 = aVar.a();
                if (a10 != null) {
                    writer.A0("city");
                    writer.x1(a10);
                }
                String e10 = aVar.e();
                if (e10 != null) {
                    writer.A0("subdivision");
                    writer.x1(e10);
                }
                String b10 = aVar.b();
                if (b10 != null) {
                    writer.A0("postal_code");
                    writer.x1(b10);
                }
                writer.E();
            } else if (componentParam instanceof b) {
                writer.y1(((b) componentParam).a());
            } else if (componentParam instanceof c) {
                writer.x1(new BigDecimal(((c) componentParam).a().doubleValue()).toPlainString());
            } else if (componentParam instanceof f) {
                writer.x1(((f) componentParam).a());
            } else if (componentParam instanceof g) {
                writer.l();
                g gVar = (g) componentParam;
                bp.a a11 = gVar.a();
                if (a11 != null) {
                    writer.A0("caFlag");
                    int i10 = a.f19390a[a11.ordinal()];
                    if (i10 == 1) {
                        str = "notRequested";
                    } else if (i10 == 2) {
                        str = "notSupported";
                    } else if (i10 == 3) {
                        str = "failed";
                    } else if (i10 == 4) {
                        str = "success";
                    } else {
                        throw new p();
                    }
                    writer.x1(str);
                }
                String b11 = gVar.b();
                if (b11 != null) {
                    writer.A0("dg1");
                    writer.x1(b11);
                }
                String c11 = gVar.c();
                if (c11 != null) {
                    writer.A0("dg2");
                    writer.x1(c11);
                }
                String d11 = gVar.d();
                if (d11 != null) {
                    writer.A0("sod");
                    writer.x1(d11);
                }
                writer.E();
            } else if (componentParam instanceof h) {
                writer.l();
                h hVar = (h) componentParam;
                String a12 = hVar.a();
                if (a12 != null) {
                    writer.A0("idb_country");
                    writer.x1(a12);
                }
                String b12 = hVar.b();
                if (b12 != null) {
                    writer.A0("idb_type");
                    writer.x1(b12);
                }
                String c12 = hVar.c();
                if (c12 != null) {
                    writer.A0("idb_value");
                    writer.x1(c12);
                }
                writer.E();
            } else {
                if (componentParam == null) {
                    Unit unit = Unit.f32464a;
                    return;
                }
                throw new p();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends ComponentParam {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0246a();

        /* renamed from: d  reason: collision with root package name */
        private final String f19391d;

        /* renamed from: e  reason: collision with root package name */
        private final String f19392e;

        /* renamed from: i  reason: collision with root package name */
        private final String f19393i;

        /* renamed from: o  reason: collision with root package name */
        private final String f19394o;

        /* renamed from: p  reason: collision with root package name */
        private final String f19395p;

        /* renamed from: com.withpersona.sdk2.inquiry.ui.network.ComponentParam$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0246a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public a(String str, String str2, String str3, String str4, String str5) {
            super(null);
            this.f19391d = str;
            this.f19392e = str2;
            this.f19393i = str3;
            this.f19394o = str4;
            this.f19395p = str5;
        }

        public final String a() {
            return this.f19393i;
        }

        public final String b() {
            return this.f19395p;
        }

        public final String c() {
            return this.f19391d;
        }

        public final String d() {
            return this.f19392e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String e() {
            return this.f19394o;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19391d);
            dest.writeString(this.f19392e);
            dest.writeString(this.f19393i);
            dest.writeString(this.f19394o);
            dest.writeString(this.f19395p);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends ComponentParam {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f19396d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new b(parcel.readInt() != 0);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        public b(boolean z10) {
            super(null);
            this.f19396d = z10;
        }

        public final boolean a() {
            return this.f19396d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(this.f19396d ? 1 : 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends ComponentParam {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final Number f19397d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new c((Number) parcel.readSerializable());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final c[] newArray(int i10) {
                return new c[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Number value) {
            super(null);
            Intrinsics.checkNotNullParameter(value, "value");
            this.f19397d = value;
        }

        public final Number a() {
            return this.f19397d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeSerializable(this.f19397d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends ComponentParam {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f19398d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new d(parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String value) {
            super(null);
            Intrinsics.checkNotNullParameter(value, "value");
            this.f19398d = value;
        }

        public final String a() {
            return this.f19398d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19398d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends ComponentParam {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f19399d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final e createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new e(parcel.createStringArrayList());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final e[] newArray(int i10) {
                return new e[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(List value) {
            super(null);
            Intrinsics.checkNotNullParameter(value, "value");
            this.f19399d = value;
        }

        public final List a() {
            return this.f19399d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeStringList(this.f19399d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends ComponentParam {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f19400d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final f createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new f(parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        public f(String str) {
            super(null);
            this.f19400d = str;
        }

        public final String a() {
            return this.f19400d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19400d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends ComponentParam {
        @NotNull
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f19401d;

        /* renamed from: e  reason: collision with root package name */
        private final String f19402e;

        /* renamed from: i  reason: collision with root package name */
        private final String f19403i;

        /* renamed from: o  reason: collision with root package name */
        private final bp.a f19404o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final g createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new g(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readInt() == 0 ? null : bp.a.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final g[] newArray(int i10) {
                return new g[i10];
            }
        }

        public g(String str, String str2, String str3, bp.a aVar) {
            super(null);
            this.f19401d = str;
            this.f19402e = str2;
            this.f19403i = str3;
            this.f19404o = aVar;
        }

        public final bp.a a() {
            return this.f19404o;
        }

        public final String b() {
            return this.f19401d;
        }

        public final String c() {
            return this.f19402e;
        }

        public final String d() {
            return this.f19403i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19401d);
            dest.writeString(this.f19402e);
            dest.writeString(this.f19403i);
            bp.a aVar = this.f19404o;
            if (aVar == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            dest.writeString(aVar.name());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends ComponentParam {
        @NotNull
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f19405d;

        /* renamed from: e  reason: collision with root package name */
        private final String f19406e;

        /* renamed from: i  reason: collision with root package name */
        private final String f19407i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final h createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new h(parcel.readString(), parcel.readString(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final h[] newArray(int i10) {
                return new h[i10];
            }
        }

        public h(String str, String str2, String str3) {
            super(null);
            this.f19405d = str;
            this.f19406e = str2;
            this.f19407i = str3;
        }

        public final String a() {
            return this.f19405d;
        }

        public final String b() {
            return this.f19406e;
        }

        public final String c() {
            return this.f19407i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19405d);
            dest.writeString(this.f19406e);
            dest.writeString(this.f19407i);
        }
    }

    public /* synthetic */ ComponentParam(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private ComponentParam() {
    }
}
