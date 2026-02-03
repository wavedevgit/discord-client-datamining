package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CreatePersonaSheet;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import wp.g;
import yp.t4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements t4 {

    /* renamed from: d  reason: collision with root package name */
    private final String f20322d;

    /* renamed from: e  reason: collision with root package name */
    private final CreatePersonaSheet.CardCtaPage f20323e;

    /* renamed from: i  reason: collision with root package name */
    private final String f20324i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f20325o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f20326p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f20327q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f20328r;

    /* renamed from: s  reason: collision with root package name */
    private final g f20329s;

    /* renamed from: t  reason: collision with root package name */
    public static final C0263a f20321t = new C0263a(null);
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new b();

    /* renamed from: com.withpersona.sdk2.inquiry.steps.ui.components.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0263a {
        public /* synthetic */ C0263a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a(CreatePersonaSheet config) {
            CreatePersonaSheet.Pages pages;
            CreatePersonaSheet.CardCtaPage ctaCard;
            CreatePersonaSheet.Attributes attributes;
            String url;
            boolean z10;
            Boolean autoCompleteOnDismiss;
            Intrinsics.checkNotNullParameter(config, "config");
            CreatePersonaSheet.Attributes attributes2 = config.getAttributes();
            if (attributes2 == null || (pages = attributes2.getPages()) == null || (ctaCard = pages.getCtaCard()) == null || (attributes = config.getAttributes()) == null || (url = attributes.getUrl()) == null) {
                return null;
            }
            CreatePersonaSheet.Attributes attributes3 = config.getAttributes();
            if (attributes3 != null && (autoCompleteOnDismiss = attributes3.getAutoCompleteOnDismiss()) != null) {
                z10 = autoCompleteOnDismiss.booleanValue();
            } else {
                z10 = false;
            }
            return new a(config, ctaCard, url, z10);
        }

        private C0263a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final a createFromParcel(Parcel parcel) {
            boolean z10;
            boolean z11;
            boolean z12;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            CreatePersonaSheet.CardCtaPage cardCtaPage = (CreatePersonaSheet.CardCtaPage) parcel.readParcelable(a.class.getClassLoader());
            String readString2 = parcel.readString();
            boolean z13 = false;
            boolean z14 = true;
            if (parcel.readInt() != 0) {
                z10 = false;
                z13 = true;
            } else {
                z10 = false;
            }
            if (parcel.readInt() != 0) {
                z11 = true;
            } else {
                z11 = true;
                z14 = z10;
            }
            if (parcel.readInt() != 0) {
                z12 = z11;
            } else {
                z12 = z11;
                z11 = z10;
            }
            if (parcel.readInt() == 0) {
                z12 = z10;
            }
            return new a(readString, cardCtaPage, readString2, z13, z14, z11, z12, g.CREATOR.createFromParcel(parcel));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final a[] newArray(int i10) {
            return new a[i10];
        }
    }

    public a(String name, CreatePersonaSheet.CardCtaPage ctaCard, String url, boolean z10, boolean z11, boolean z12, boolean z13, g screen) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(ctaCard, "ctaCard");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f20322d = name;
        this.f20323e = ctaCard;
        this.f20324i = url;
        this.f20325o = z10;
        this.f20326p = z11;
        this.f20327q = z12;
        this.f20328r = z13;
        this.f20329s = screen;
    }

    public static /* synthetic */ a b(a aVar, String str, CreatePersonaSheet.CardCtaPage cardCtaPage, String str2, boolean z10, boolean z11, boolean z12, boolean z13, g gVar, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = aVar.f20322d;
        }
        if ((i10 & 2) != 0) {
            cardCtaPage = aVar.f20323e;
        }
        if ((i10 & 4) != 0) {
            str2 = aVar.f20324i;
        }
        if ((i10 & 8) != 0) {
            z10 = aVar.f20325o;
        }
        if ((i10 & 16) != 0) {
            z11 = aVar.f20326p;
        }
        if ((i10 & 32) != 0) {
            z12 = aVar.f20327q;
        }
        if ((i10 & 64) != 0) {
            z13 = aVar.f20328r;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            gVar = aVar.f20329s;
        }
        boolean z14 = z13;
        g gVar2 = gVar;
        boolean z15 = z11;
        boolean z16 = z12;
        return aVar.a(str, cardCtaPage, str2, z10, z15, z16, z14, gVar2);
    }

    @Override // yp.t4
    public void J0(boolean z10) {
        this.f20326p = z10;
    }

    @Override // yp.t4
    public boolean K0() {
        return this.f20328r;
    }

    @Override // yp.t4
    public boolean W1() {
        return this.f20326p;
    }

    @Override // yp.t4
    public boolean Z0() {
        return this.f20327q;
    }

    public final a a(String name, CreatePersonaSheet.CardCtaPage ctaCard, String url, boolean z10, boolean z11, boolean z12, boolean z13, g screen) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(ctaCard, "ctaCard");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(screen, "screen");
        return new a(name, ctaCard, url, z10, z11, z12, z13, screen);
    }

    public final boolean c() {
        return this.f20325o;
    }

    public final CreatePersonaSheet.CardCtaPage d() {
        return this.f20323e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final String e() {
        return this.f20324i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f20322d, aVar.f20322d) && Intrinsics.areEqual(this.f20323e, aVar.f20323e) && Intrinsics.areEqual(this.f20324i, aVar.f20324i) && this.f20325o == aVar.f20325o && this.f20326p == aVar.f20326p && this.f20327q == aVar.f20327q && this.f20328r == aVar.f20328r && Intrinsics.areEqual(this.f20329s, aVar.f20329s);
        }
        return false;
    }

    @Override // yp.k5
    public String getName() {
        return this.f20322d;
    }

    @Override // yp.t4
    public g h() {
        return this.f20329s;
    }

    public int hashCode() {
        return (((((((((((((this.f20322d.hashCode() * 31) + this.f20323e.hashCode()) * 31) + this.f20324i.hashCode()) * 31) + Boolean.hashCode(this.f20325o)) * 31) + Boolean.hashCode(this.f20326p)) * 31) + Boolean.hashCode(this.f20327q)) * 31) + Boolean.hashCode(this.f20328r)) * 31) + this.f20329s.hashCode();
    }

    public String toString() {
        String str = this.f20322d;
        CreatePersonaSheet.CardCtaPage cardCtaPage = this.f20323e;
        String str2 = this.f20324i;
        boolean z10 = this.f20325o;
        boolean z11 = this.f20326p;
        boolean z12 = this.f20327q;
        boolean z13 = this.f20328r;
        g gVar = this.f20329s;
        return "CreatePersonaSheetComponent(name=" + str + ", ctaCard=" + cardCtaPage + ", url=" + str2 + ", autoCompleteOnDismiss=" + z10 + ", shown=" + z11 + ", showing=" + z12 + ", hideWhenTappedOutside=" + z13 + ", screen=" + gVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f20322d);
        dest.writeParcelable(this.f20323e, i10);
        dest.writeString(this.f20324i);
        dest.writeInt(this.f20325o ? 1 : 0);
        dest.writeInt(this.f20326p ? 1 : 0);
        dest.writeInt(this.f20327q ? 1 : 0);
        dest.writeInt(this.f20328r ? 1 : 0);
        this.f20329s.writeToParcel(dest, i10);
    }

    @Override // yp.t4
    public void y1(boolean z10) {
        this.f20327q = z10;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ a(java.lang.String r2, com.withpersona.sdk2.inquiry.network.dto.ui.components.CreatePersonaSheet.CardCtaPage r3, java.lang.String r4, boolean r5, boolean r6, boolean r7, boolean r8, wp.g r9, int r10, kotlin.jvm.internal.DefaultConstructorMarker r11) {
        /*
            r1 = this;
            r11 = r10 & 16
            r0 = 0
            if (r11 == 0) goto L6
            r6 = r0
        L6:
            r11 = r10 & 32
            if (r11 == 0) goto Lb
            r7 = r0
        Lb:
            r11 = r10 & 64
            if (r11 == 0) goto L10
            r8 = r0
        L10:
            r10 = r10 & 128(0x80, float:1.794E-43)
            if (r10 == 0) goto L4b
            yp.r r9 = new yp.r
            com.withpersona.sdk2.inquiry.network.dto.NextStep$Ui r10 = r3.getUiStep()
            com.withpersona.sdk2.inquiry.network.dto.NextStep$Ui$Config r10 = r10.getConfig()
            java.util.List r10 = r10.getComponents()
            if (r10 == 0) goto L29
            java.util.List r10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.i(r10)
            goto L2a
        L29:
            r10 = 0
        L2a:
            com.withpersona.sdk2.inquiry.network.dto.NextStep$Ui r11 = r3.getUiStep()
            com.withpersona.sdk2.inquiry.network.dto.NextStep$Ui$Config r11 = r11.getConfig()
            java.util.List r11 = r11.getComponents()
            if (r11 != 0) goto L3c
            java.util.List r11 = kotlin.collections.CollectionsKt.l()
        L3c:
            com.withpersona.sdk2.inquiry.network.dto.NextStep$Ui r0 = r3.getUiStep()
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles$UiStepStyle r0 = r0.getStyles()
            r9.<init>(r10, r11, r0)
            wp.g r9 = wp.c.a(r9)
        L4b:
            r10 = r9
            r9 = r8
            r8 = r7
            r7 = r6
            r6 = r5
            r5 = r4
            r4 = r3
            r3 = r2
            r2 = r1
            r2.<init>(r3, r4, r5, r6, r7, r8, r9, r10)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.a.<init>(java.lang.String, com.withpersona.sdk2.inquiry.network.dto.ui.components.CreatePersonaSheet$CardCtaPage, java.lang.String, boolean, boolean, boolean, boolean, wp.g, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public a(CreatePersonaSheet config, CreatePersonaSheet.CardCtaPage ctaCard, String url, boolean z10) {
        this(config.getName(), ctaCard, url, z10, false, false, false, null, 240, null);
        Intrinsics.checkNotNullParameter(config, "config");
        Intrinsics.checkNotNullParameter(ctaCard, "ctaCard");
        Intrinsics.checkNotNullParameter(url, "url");
    }
}
