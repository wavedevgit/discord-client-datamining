package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CreatePersonaSheet;
import dq.g;
import fq.t4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements t4 {

    /* renamed from: d  reason: collision with root package name */
    private final String f19690d;

    /* renamed from: e  reason: collision with root package name */
    private final CreatePersonaSheet.CardCtaPage f19691e;

    /* renamed from: i  reason: collision with root package name */
    private final String f19692i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f19693o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f19694p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f19695q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f19696r;

    /* renamed from: s  reason: collision with root package name */
    private final g f19697s;

    /* renamed from: t  reason: collision with root package name */
    public static final C0254a f19689t = new C0254a(null);
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new b();

    /* renamed from: com.withpersona.sdk2.inquiry.steps.ui.components.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0254a {
        public /* synthetic */ C0254a(DefaultConstructorMarker defaultConstructorMarker) {
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

        private C0254a() {
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
        this.f19690d = name;
        this.f19691e = ctaCard;
        this.f19692i = url;
        this.f19693o = z10;
        this.f19694p = z11;
        this.f19695q = z12;
        this.f19696r = z13;
        this.f19697s = screen;
    }

    public static /* synthetic */ a b(a aVar, String str, CreatePersonaSheet.CardCtaPage cardCtaPage, String str2, boolean z10, boolean z11, boolean z12, boolean z13, g gVar, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = aVar.f19690d;
        }
        if ((i10 & 2) != 0) {
            cardCtaPage = aVar.f19691e;
        }
        if ((i10 & 4) != 0) {
            str2 = aVar.f19692i;
        }
        if ((i10 & 8) != 0) {
            z10 = aVar.f19693o;
        }
        if ((i10 & 16) != 0) {
            z11 = aVar.f19694p;
        }
        if ((i10 & 32) != 0) {
            z12 = aVar.f19695q;
        }
        if ((i10 & 64) != 0) {
            z13 = aVar.f19696r;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            gVar = aVar.f19697s;
        }
        boolean z14 = z13;
        g gVar2 = gVar;
        boolean z15 = z11;
        boolean z16 = z12;
        return aVar.a(str, cardCtaPage, str2, z10, z15, z16, z14, gVar2);
    }

    @Override // fq.t4
    public void I0(boolean z10) {
        this.f19694p = z10;
    }

    @Override // fq.t4
    public boolean J0() {
        return this.f19696r;
    }

    @Override // fq.t4
    public boolean V1() {
        return this.f19694p;
    }

    @Override // fq.t4
    public boolean Y0() {
        return this.f19695q;
    }

    public final a a(String name, CreatePersonaSheet.CardCtaPage ctaCard, String url, boolean z10, boolean z11, boolean z12, boolean z13, g screen) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(ctaCard, "ctaCard");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(screen, "screen");
        return new a(name, ctaCard, url, z10, z11, z12, z13, screen);
    }

    public final boolean c() {
        return this.f19693o;
    }

    public final CreatePersonaSheet.CardCtaPage d() {
        return this.f19691e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final String e() {
        return this.f19692i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f19690d, aVar.f19690d) && Intrinsics.areEqual(this.f19691e, aVar.f19691e) && Intrinsics.areEqual(this.f19692i, aVar.f19692i) && this.f19693o == aVar.f19693o && this.f19694p == aVar.f19694p && this.f19695q == aVar.f19695q && this.f19696r == aVar.f19696r && Intrinsics.areEqual(this.f19697s, aVar.f19697s);
        }
        return false;
    }

    @Override // fq.t4
    public g g() {
        return this.f19697s;
    }

    @Override // fq.k5
    public String getName() {
        return this.f19690d;
    }

    public int hashCode() {
        return (((((((((((((this.f19690d.hashCode() * 31) + this.f19691e.hashCode()) * 31) + this.f19692i.hashCode()) * 31) + Boolean.hashCode(this.f19693o)) * 31) + Boolean.hashCode(this.f19694p)) * 31) + Boolean.hashCode(this.f19695q)) * 31) + Boolean.hashCode(this.f19696r)) * 31) + this.f19697s.hashCode();
    }

    public String toString() {
        String str = this.f19690d;
        CreatePersonaSheet.CardCtaPage cardCtaPage = this.f19691e;
        String str2 = this.f19692i;
        boolean z10 = this.f19693o;
        boolean z11 = this.f19694p;
        boolean z12 = this.f19695q;
        boolean z13 = this.f19696r;
        g gVar = this.f19697s;
        return "CreatePersonaSheetComponent(name=" + str + ", ctaCard=" + cardCtaPage + ", url=" + str2 + ", autoCompleteOnDismiss=" + z10 + ", shown=" + z11 + ", showing=" + z12 + ", hideWhenTappedOutside=" + z13 + ", screen=" + gVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f19690d);
        dest.writeParcelable(this.f19691e, i10);
        dest.writeString(this.f19692i);
        dest.writeInt(this.f19693o ? 1 : 0);
        dest.writeInt(this.f19694p ? 1 : 0);
        dest.writeInt(this.f19695q ? 1 : 0);
        dest.writeInt(this.f19696r ? 1 : 0);
        this.f19697s.writeToParcel(dest, i10);
    }

    @Override // fq.t4
    public void x1(boolean z10) {
        this.f19695q = z10;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ a(java.lang.String r2, com.withpersona.sdk2.inquiry.network.dto.ui.components.CreatePersonaSheet.CardCtaPage r3, java.lang.String r4, boolean r5, boolean r6, boolean r7, boolean r8, dq.g r9, int r10, kotlin.jvm.internal.DefaultConstructorMarker r11) {
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
            fq.r r9 = new fq.r
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
            dq.g r9 = dq.c.a(r9)
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
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.a.<init>(java.lang.String, com.withpersona.sdk2.inquiry.network.dto.ui.components.CreatePersonaSheet$CardCtaPage, java.lang.String, boolean, boolean, boolean, boolean, dq.g, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public a(CreatePersonaSheet config, CreatePersonaSheet.CardCtaPage ctaCard, String url, boolean z10) {
        this(config.getName(), ctaCard, url, z10, false, false, false, null, 240, null);
        Intrinsics.checkNotNullParameter(config, "config");
        Intrinsics.checkNotNullParameter(ctaCard, "ctaCard");
        Intrinsics.checkNotNullParameter(url, "url");
    }
}
