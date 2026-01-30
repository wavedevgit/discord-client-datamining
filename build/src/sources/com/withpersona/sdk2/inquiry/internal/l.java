package com.withpersona.sdk2.inquiry.internal;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.events.PointerEventHelper;
import com.withpersona.sdk2.inquiry.StaticInquiryTemplate;
import com.withpersona.sdk2.inquiry.internal.w;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.government_id.CaptureOptionNativeMobile;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import ep.s0;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import mo.j2;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final String f19946d;

    /* renamed from: e  reason: collision with root package name */
    private final String f19947e;

    /* renamed from: i  reason: collision with root package name */
    private final w f19948i;

    /* renamed from: o  reason: collision with root package name */
    private final StepStyle f19949o;

    /* renamed from: p  reason: collision with root package name */
    private final NextStep.CancelDialog f19950p;

    /* renamed from: q  reason: collision with root package name */
    private final String f19951q;

    /* renamed from: r  reason: collision with root package name */
    private final qp.g f19952r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f19953s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends l {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0245a();

        /* renamed from: t  reason: collision with root package name */
        private final String f19954t;

        /* renamed from: u  reason: collision with root package name */
        private final String f19955u;

        /* renamed from: v  reason: collision with root package name */
        private final w f19956v;

        /* renamed from: w  reason: collision with root package name */
        private final String f19957w;

        /* renamed from: x  reason: collision with root package name */
        private final Map f19958x;

        /* renamed from: com.withpersona.sdk2.inquiry.internal.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0245a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                String readString2 = parcel.readString();
                w wVar = (w) parcel.readParcelable(a.class.getClassLoader());
                String readString3 = parcel.readString();
                int readInt = parcel.readInt();
                LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    linkedHashMap.put(parcel.readString(), parcel.readParcelable(a.class.getClassLoader()));
                }
                return new a(readString, readString2, wVar, readString3, linkedHashMap);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(String str, String str2, w wVar, String str3, Map map, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, str2, (i10 & 4) != 0 ? null : wVar, str3, map);
        }

        public static /* synthetic */ a k(a aVar, String str, String str2, w wVar, String str3, Map map, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = aVar.f19954t;
            }
            if ((i10 & 2) != 0) {
                str2 = aVar.f19955u;
            }
            if ((i10 & 4) != 0) {
                wVar = aVar.f19956v;
            }
            if ((i10 & 8) != 0) {
                str3 = aVar.f19957w;
            }
            if ((i10 & 16) != 0) {
                map = aVar.f19958x;
            }
            Map map2 = map;
            w wVar2 = wVar;
            return aVar.j(str, str2, wVar2, str3, map2);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f19954t;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof a) {
                a aVar = (a) obj;
                return Intrinsics.areEqual(this.f19954t, aVar.f19954t) && Intrinsics.areEqual(this.f19955u, aVar.f19955u) && Intrinsics.areEqual(this.f19956v, aVar.f19956v) && Intrinsics.areEqual(this.f19957w, aVar.f19957w) && Intrinsics.areEqual(this.f19958x, aVar.f19958x);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public w f() {
            return this.f19956v;
        }

        public int hashCode() {
            int hashCode = ((this.f19954t.hashCode() * 31) + this.f19955u.hashCode()) * 31;
            w wVar = this.f19956v;
            return ((((hashCode + (wVar == null ? 0 : wVar.hashCode())) * 31) + this.f19957w.hashCode()) * 31) + this.f19958x.hashCode();
        }

        public final a j(String inquiryId, String sessionToken, w wVar, String inquiryStatus, Map fields) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryStatus, "inquiryStatus");
            Intrinsics.checkNotNullParameter(fields, "fields");
            return new a(inquiryId, sessionToken, wVar, inquiryStatus, fields);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String l() {
            return this.f19955u;
        }

        public final Map m() {
            return this.f19958x;
        }

        public final String n() {
            return this.f19957w;
        }

        public String toString() {
            String str = this.f19954t;
            String str2 = this.f19955u;
            w wVar = this.f19956v;
            String str3 = this.f19957w;
            Map map = this.f19958x;
            return "Complete(inquiryId=" + str + ", sessionToken=" + str2 + ", transitionStatus=" + wVar + ", inquiryStatus=" + str3 + ", fields=" + map + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19954t);
            dest.writeString(this.f19955u);
            dest.writeParcelable(this.f19956v, i10);
            dest.writeString(this.f19957w);
            Map map = this.f19958x;
            dest.writeInt(map.size());
            for (Map.Entry entry : map.entrySet()) {
                dest.writeString((String) entry.getKey());
                dest.writeParcelable((Parcelable) entry.getValue(), i10);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String inquiryId, String sessionToken, w wVar, String inquiryStatus, Map fields) {
            super(null, null, null, null, null, null, null, 127, null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryStatus, "inquiryStatus");
            Intrinsics.checkNotNullParameter(fields, "fields");
            this.f19954t = inquiryId;
            this.f19955u = sessionToken;
            this.f19956v = wVar;
            this.f19957w = inquiryStatus;
            this.f19958x = fields;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends l {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();
        private final StaticInquiryTemplate A;

        /* renamed from: t  reason: collision with root package name */
        private final String f19959t;

        /* renamed from: u  reason: collision with root package name */
        private final String f19960u;

        /* renamed from: v  reason: collision with root package name */
        private final String f19961v;

        /* renamed from: w  reason: collision with root package name */
        private final String f19962w;

        /* renamed from: x  reason: collision with root package name */
        private final String f19963x;

        /* renamed from: y  reason: collision with root package name */
        private final Map f19964y;

        /* renamed from: z  reason: collision with root package name */
        private final String f19965z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final b createFromParcel(Parcel parcel) {
                LinkedHashMap linkedHashMap;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                String readString2 = parcel.readString();
                String readString3 = parcel.readString();
                String readString4 = parcel.readString();
                String readString5 = parcel.readString();
                if (parcel.readInt() == 0) {
                    linkedHashMap = null;
                } else {
                    int readInt = parcel.readInt();
                    linkedHashMap = new LinkedHashMap(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        linkedHashMap.put(parcel.readString(), parcel.readParcelable(b.class.getClassLoader()));
                    }
                }
                return new b(readString, readString2, readString3, readString4, readString5, linkedHashMap, parcel.readString(), (StaticInquiryTemplate) parcel.readParcelable(b.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        public b(String str, String str2, String str3, String str4, String str5, Map map, String str6, StaticInquiryTemplate staticInquiryTemplate) {
            super(null, null, null, null, null, null, null, 127, null);
            this.f19959t = str;
            this.f19960u = str2;
            this.f19961v = str3;
            this.f19962w = str4;
            this.f19963x = str5;
            this.f19964y = map;
            this.f19965z = str6;
            this.A = staticInquiryTemplate;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                return Intrinsics.areEqual(this.f19959t, bVar.f19959t) && Intrinsics.areEqual(this.f19960u, bVar.f19960u) && Intrinsics.areEqual(this.f19961v, bVar.f19961v) && Intrinsics.areEqual(this.f19962w, bVar.f19962w) && Intrinsics.areEqual(this.f19963x, bVar.f19963x) && Intrinsics.areEqual(this.f19964y, bVar.f19964y) && Intrinsics.areEqual(this.f19965z, bVar.f19965z) && Intrinsics.areEqual(this.A, bVar.A);
            }
            return false;
        }

        public int hashCode() {
            String str = this.f19959t;
            int hashCode = (str == null ? 0 : str.hashCode()) * 31;
            String str2 = this.f19960u;
            int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
            String str3 = this.f19961v;
            int hashCode3 = (hashCode2 + (str3 == null ? 0 : str3.hashCode())) * 31;
            String str4 = this.f19962w;
            int hashCode4 = (hashCode3 + (str4 == null ? 0 : str4.hashCode())) * 31;
            String str5 = this.f19963x;
            int hashCode5 = (hashCode4 + (str5 == null ? 0 : str5.hashCode())) * 31;
            Map map = this.f19964y;
            int hashCode6 = (hashCode5 + (map == null ? 0 : map.hashCode())) * 31;
            String str6 = this.f19965z;
            int hashCode7 = (hashCode6 + (str6 == null ? 0 : str6.hashCode())) * 31;
            StaticInquiryTemplate staticInquiryTemplate = this.A;
            return hashCode7 + (staticInquiryTemplate != null ? staticInquiryTemplate.hashCode() : 0);
        }

        public final String j() {
            return this.f19961v;
        }

        public final String k() {
            return this.f19962w;
        }

        public final Map m() {
            return this.f19964y;
        }

        public final String n() {
            return this.f19963x;
        }

        public final String o() {
            return this.f19959t;
        }

        public final String p() {
            return this.f19960u;
        }

        public final String q() {
            return this.f19965z;
        }

        public String toString() {
            String str = this.f19959t;
            String str2 = this.f19960u;
            String str3 = this.f19961v;
            String str4 = this.f19962w;
            String str5 = this.f19963x;
            Map map = this.f19964y;
            String str6 = this.f19965z;
            StaticInquiryTemplate staticInquiryTemplate = this.A;
            return "CreateInquiryFromTemplate(templateId=" + str + ", templateVersion=" + str2 + ", accountId=" + str3 + ", environmentId=" + str4 + ", referenceId=" + str5 + ", fields=" + map + ", themeSetId=" + str6 + ", staticInquiryTemplate=" + staticInquiryTemplate + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19959t);
            dest.writeString(this.f19960u);
            dest.writeString(this.f19961v);
            dest.writeString(this.f19962w);
            dest.writeString(this.f19963x);
            Map map = this.f19964y;
            if (map == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeInt(map.size());
                for (Map.Entry entry : map.entrySet()) {
                    dest.writeString((String) entry.getKey());
                    dest.writeParcelable((Parcelable) entry.getValue(), i10);
                }
            }
            dest.writeString(this.f19965z);
            dest.writeParcelable(this.A, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends l {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: t  reason: collision with root package name */
        private final String f19966t;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new c(parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final c[] newArray(int i10) {
                return new c[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String inquiryId) {
            super(null, null, null, null, null, null, null, 127, null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            this.f19966t = inquiryId;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f19966t;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof c) && Intrinsics.areEqual(this.f19966t, ((c) obj).f19966t);
        }

        public int hashCode() {
            return this.f19966t.hashCode();
        }

        public String toString() {
            String str = this.f19966t;
            return "CreateInquirySession(inquiryId=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19966t);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends l implements j2 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();
        private final vn.l A;
        private final NextStep.Document.AssetConfig B;
        private final String C;

        /* renamed from: t  reason: collision with root package name */
        private final String f19967t;

        /* renamed from: u  reason: collision with root package name */
        private final String f19968u;

        /* renamed from: v  reason: collision with root package name */
        private final w f19969v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.DocumentStepStyle f19970w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.CancelDialog f19971x;

        /* renamed from: y  reason: collision with root package name */
        private final NextStep.Document f19972y;

        /* renamed from: z  reason: collision with root package name */
        private final String f19973z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new d(parcel.readString(), parcel.readString(), (w) parcel.readParcelable(d.class.getClassLoader()), (StepStyles.DocumentStepStyle) parcel.readParcelable(d.class.getClassLoader()), (NextStep.CancelDialog) parcel.readParcelable(d.class.getClassLoader()), (NextStep.Document) parcel.readParcelable(d.class.getClassLoader()), parcel.readString(), (vn.l) parcel.readParcelable(d.class.getClassLoader()), (NextStep.Document.AssetConfig) parcel.readParcelable(d.class.getClassLoader()), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        public /* synthetic */ d(String str, String str2, w wVar, StepStyles.DocumentStepStyle documentStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Document document, String str3, vn.l lVar, NextStep.Document.AssetConfig assetConfig, String str4, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, str2, (i10 & 4) != 0 ? null : wVar, documentStepStyle, cancelDialog, document, str3, lVar, assetConfig, str4);
        }

        public static /* synthetic */ d k(d dVar, String str, String str2, w wVar, StepStyles.DocumentStepStyle documentStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Document document, String str3, vn.l lVar, NextStep.Document.AssetConfig assetConfig, String str4, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = dVar.f19967t;
            }
            if ((i10 & 2) != 0) {
                str2 = dVar.f19968u;
            }
            if ((i10 & 4) != 0) {
                wVar = dVar.f19969v;
            }
            if ((i10 & 8) != 0) {
                documentStepStyle = dVar.f19970w;
            }
            if ((i10 & 16) != 0) {
                cancelDialog = dVar.f19971x;
            }
            if ((i10 & 32) != 0) {
                document = dVar.f19972y;
            }
            if ((i10 & 64) != 0) {
                str3 = dVar.f19973z;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                lVar = dVar.A;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                assetConfig = dVar.B;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                str4 = dVar.C;
            }
            NextStep.Document.AssetConfig assetConfig2 = assetConfig;
            String str5 = str4;
            String str6 = str3;
            vn.l lVar2 = lVar;
            NextStep.CancelDialog cancelDialog2 = cancelDialog;
            NextStep.Document document2 = document;
            return dVar.j(str, str2, wVar, documentStepStyle, cancelDialog2, document2, str6, lVar2, assetConfig2, str5);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f19967t;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public NextStep.CancelDialog c() {
            return this.f19971x;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String e() {
            return this.C;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof d) {
                d dVar = (d) obj;
                return Intrinsics.areEqual(this.f19967t, dVar.f19967t) && Intrinsics.areEqual(this.f19968u, dVar.f19968u) && Intrinsics.areEqual(this.f19969v, dVar.f19969v) && Intrinsics.areEqual(this.f19970w, dVar.f19970w) && Intrinsics.areEqual(this.f19971x, dVar.f19971x) && Intrinsics.areEqual(this.f19972y, dVar.f19972y) && Intrinsics.areEqual(this.f19973z, dVar.f19973z) && Intrinsics.areEqual(this.A, dVar.A) && Intrinsics.areEqual(this.B, dVar.B) && Intrinsics.areEqual(this.C, dVar.C);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public w f() {
            return this.f19969v;
        }

        public int hashCode() {
            int hashCode = ((this.f19967t.hashCode() * 31) + this.f19968u.hashCode()) * 31;
            w wVar = this.f19969v;
            int hashCode2 = (hashCode + (wVar == null ? 0 : wVar.hashCode())) * 31;
            StepStyles.DocumentStepStyle documentStepStyle = this.f19970w;
            int hashCode3 = (hashCode2 + (documentStepStyle == null ? 0 : documentStepStyle.hashCode())) * 31;
            NextStep.CancelDialog cancelDialog = this.f19971x;
            int hashCode4 = (((((((hashCode3 + (cancelDialog == null ? 0 : cancelDialog.hashCode())) * 31) + this.f19972y.hashCode()) * 31) + this.f19973z.hashCode()) * 31) + this.A.hashCode()) * 31;
            NextStep.Document.AssetConfig assetConfig = this.B;
            return ((hashCode4 + (assetConfig != null ? assetConfig.hashCode() : 0)) * 31) + this.C.hashCode();
        }

        public final d j(String inquiryId, String sessionToken, w wVar, StepStyles.DocumentStepStyle documentStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Document documentStep, String fromComponent, vn.l pages, NextStep.Document.AssetConfig assetConfig, String fromStep) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(documentStep, "documentStep");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(pages, "pages");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            return new d(inquiryId, sessionToken, wVar, documentStepStyle, cancelDialog, documentStep, fromComponent, pages, assetConfig, fromStep);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String l() {
            return this.f19968u;
        }

        public final NextStep.Document.AssetConfig m() {
            return this.B;
        }

        public final NextStep.Document n() {
            return this.f19972y;
        }

        public final String o() {
            return this.f19973z;
        }

        public final vn.l p() {
            return this.A;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l, mo.j2
        /* renamed from: q */
        public StepStyles.DocumentStepStyle getStyles() {
            return this.f19970w;
        }

        public String toString() {
            String str = this.f19967t;
            String str2 = this.f19968u;
            w wVar = this.f19969v;
            StepStyles.DocumentStepStyle documentStepStyle = this.f19970w;
            NextStep.CancelDialog cancelDialog = this.f19971x;
            NextStep.Document document = this.f19972y;
            String str3 = this.f19973z;
            vn.l lVar = this.A;
            NextStep.Document.AssetConfig assetConfig = this.B;
            String str4 = this.C;
            return "DocumentStepRunning(inquiryId=" + str + ", sessionToken=" + str2 + ", transitionStatus=" + wVar + ", styles=" + documentStepStyle + ", cancelDialog=" + cancelDialog + ", documentStep=" + document + ", fromComponent=" + str3 + ", pages=" + lVar + ", assetConfig=" + assetConfig + ", fromStep=" + str4 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19967t);
            dest.writeString(this.f19968u);
            dest.writeParcelable(this.f19969v, i10);
            dest.writeParcelable(this.f19970w, i10);
            dest.writeParcelable(this.f19971x, i10);
            dest.writeParcelable(this.f19972y, i10);
            dest.writeString(this.f19973z);
            dest.writeParcelable(this.A, i10);
            dest.writeParcelable(this.B, i10);
            dest.writeString(this.C);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String inquiryId, String sessionToken, w wVar, StepStyles.DocumentStepStyle documentStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Document documentStep, String fromComponent, vn.l pages, NextStep.Document.AssetConfig assetConfig, String fromStep) {
            super(null, null, null, null, null, null, null, 127, null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(documentStep, "documentStep");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(pages, "pages");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            this.f19967t = inquiryId;
            this.f19968u = sessionToken;
            this.f19969v = wVar;
            this.f19970w = documentStepStyle;
            this.f19971x = cancelDialog;
            this.f19972y = documentStep;
            this.f19973z = fromComponent;
            this.A = pages;
            this.B = assetConfig;
            this.C = fromStep;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends l {
        @NotNull
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: t  reason: collision with root package name */
        private final String f19974t;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final e createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new e(parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final e[] newArray(int i10) {
                return new e[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String oneTimeLinkCode) {
            super(null, null, null, null, null, null, null, 127, null);
            Intrinsics.checkNotNullParameter(oneTimeLinkCode, "oneTimeLinkCode");
            this.f19974t = oneTimeLinkCode;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof e) && Intrinsics.areEqual(this.f19974t, ((e) obj).f19974t);
        }

        public int hashCode() {
            return this.f19974t.hashCode();
        }

        public final String j() {
            return this.f19974t;
        }

        public String toString() {
            String str = this.f19974t;
            return "ExchangeOneTimeCode(oneTimeLinkCode=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19974t);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends l implements j2 {
        @NotNull
        public static final Parcelable.Creator<f> CREATOR = new a();
        private final String A;
        private final String B;
        private final boolean C;
        private final boolean D;
        private final NextStep.GovernmentId.Localizations E;
        private final List F;
        private final List G;
        private final int H;
        private final long I;
        private final String J;
        private final String K;
        private final boolean L;
        private final List M;
        private final List N;
        private final String O;
        private final NextStep.GovernmentId.AssetConfig P;
        private final bo.a Q;
        private final StyleElements.Axis R;
        private final PendingPageTextPosition S;
        private final boolean T;
        private final go.a U;

        /* renamed from: t  reason: collision with root package name */
        private final String f19975t;

        /* renamed from: u  reason: collision with root package name */
        private final String f19976u;

        /* renamed from: v  reason: collision with root package name */
        private final w f19977v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f19978w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.CancelDialog f19979x;

        /* renamed from: y  reason: collision with root package name */
        private final String f19980y;

        /* renamed from: z  reason: collision with root package name */
        private final List f19981z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            /* JADX WARN: Multi-variable type inference failed */
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final f createFromParcel(Parcel parcel) {
                ArrayList arrayList;
                Class cls;
                int i10;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                String readString2 = parcel.readString();
                w wVar = (w) parcel.readParcelable(f.class.getClassLoader());
                StepStyles.GovernmentIdStepStyle governmentIdStepStyle = (StepStyles.GovernmentIdStepStyle) parcel.readParcelable(f.class.getClassLoader());
                NextStep.CancelDialog cancelDialog = (NextStep.CancelDialog) parcel.readParcelable(f.class.getClassLoader());
                String readString3 = parcel.readString();
                int readInt = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt);
                for (int i11 = 0; i11 != readInt; i11++) {
                    arrayList2.add(parcel.readParcelable(f.class.getClassLoader()));
                }
                String readString4 = parcel.readString();
                String readString5 = parcel.readString();
                boolean z10 = true;
                boolean z11 = parcel.readInt() != 0;
                if (parcel.readInt() == 0) {
                    z10 = false;
                }
                NextStep.GovernmentId.Localizations localizations = (NextStep.GovernmentId.Localizations) parcel.readParcelable(f.class.getClassLoader());
                if (parcel.readInt() == 0) {
                    cls = f.class;
                    arrayList = null;
                } else {
                    int readInt2 = parcel.readInt();
                    arrayList = new ArrayList(readInt2);
                    cls = f.class;
                    for (int i12 = 0; i12 != readInt2; i12++) {
                        arrayList.add(parcel.readParcelable(cls.getClassLoader()));
                    }
                }
                int readInt3 = parcel.readInt();
                ArrayList arrayList3 = new ArrayList(readInt3);
                int i13 = 0;
                while (i13 != readInt3) {
                    arrayList3.add(CaptureOptionNativeMobile.valueOf(parcel.readString()));
                    i13++;
                    readInt3 = readInt3;
                }
                int readInt4 = parcel.readInt();
                Class cls2 = cls;
                long readLong = parcel.readLong();
                String readString6 = parcel.readString();
                boolean z12 = false;
                String readString7 = parcel.readString();
                if (parcel.readInt() != 0) {
                    i10 = 0;
                    z12 = true;
                } else {
                    i10 = 0;
                }
                int readInt5 = parcel.readInt();
                ArrayList arrayList4 = new ArrayList(readInt5);
                int i14 = i10;
                while (i14 != readInt5) {
                    arrayList4.add(NextStep.GovernmentId.CaptureFileType.valueOf(parcel.readString()));
                    i14++;
                    readInt5 = readInt5;
                }
                int readInt6 = parcel.readInt();
                ArrayList arrayList5 = new ArrayList(readInt6);
                int i15 = i10;
                while (i15 != readInt6) {
                    arrayList5.add(NextStep.GovernmentId.VideoCaptureMethod.valueOf(parcel.readString()));
                    i15++;
                    readInt6 = readInt6;
                }
                return new f(readString, readString2, wVar, governmentIdStepStyle, cancelDialog, readString3, arrayList2, readString4, readString5, z11, z10, localizations, arrayList, arrayList3, readInt4, readLong, readString6, readString7, z12, arrayList4, arrayList5, parcel.readString(), (NextStep.GovernmentId.AssetConfig) parcel.readParcelable(cls2.getClassLoader()), (bo.a) parcel.readParcelable(cls2.getClassLoader()), StyleElements.Axis.valueOf(parcel.readString()), PendingPageTextPosition.valueOf(parcel.readString()), parcel.readInt() != 0 ? 1 : i10, (go.a) parcel.readParcelable(cls2.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        public /* synthetic */ f(String str, String str2, w wVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.CancelDialog cancelDialog, String str3, List list, String str4, String str5, boolean z10, boolean z11, NextStep.GovernmentId.Localizations localizations, List list2, List list3, int i10, long j10, String str6, String str7, boolean z12, List list4, List list5, String str8, NextStep.GovernmentId.AssetConfig assetConfig, bo.a aVar, StyleElements.Axis axis, PendingPageTextPosition pendingPageTextPosition, boolean z13, go.a aVar2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, str2, (i11 & 4) != 0 ? null : wVar, governmentIdStepStyle, cancelDialog, str3, list, str4, str5, z10, z11, localizations, list2, list3, i10, j10, str6, str7, z12, list4, list5, str8, assetConfig, aVar, axis, pendingPageTextPosition, z13, aVar2);
        }

        public static /* synthetic */ f k(f fVar, String str, String str2, w wVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.CancelDialog cancelDialog, String str3, List list, String str4, String str5, boolean z10, boolean z11, NextStep.GovernmentId.Localizations localizations, List list2, List list3, int i10, long j10, String str6, String str7, boolean z12, List list4, List list5, String str8, NextStep.GovernmentId.AssetConfig assetConfig, bo.a aVar, StyleElements.Axis axis, PendingPageTextPosition pendingPageTextPosition, boolean z13, go.a aVar2, int i11, Object obj) {
            go.a aVar3;
            boolean z14;
            String str9 = (i11 & 1) != 0 ? fVar.f19975t : str;
            String str10 = (i11 & 2) != 0 ? fVar.f19976u : str2;
            w wVar2 = (i11 & 4) != 0 ? fVar.f19977v : wVar;
            StepStyles.GovernmentIdStepStyle governmentIdStepStyle2 = (i11 & 8) != 0 ? fVar.f19978w : governmentIdStepStyle;
            NextStep.CancelDialog cancelDialog2 = (i11 & 16) != 0 ? fVar.f19979x : cancelDialog;
            String str11 = (i11 & 32) != 0 ? fVar.f19980y : str3;
            List list6 = (i11 & 64) != 0 ? fVar.f19981z : list;
            String str12 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? fVar.A : str4;
            String str13 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? fVar.B : str5;
            boolean z15 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? fVar.C : z10;
            boolean z16 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? fVar.D : z11;
            NextStep.GovernmentId.Localizations localizations2 = (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? fVar.E : localizations;
            List list7 = (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? fVar.F : list2;
            List list8 = (i11 & 8192) != 0 ? fVar.G : list3;
            String str14 = str9;
            int i12 = (i11 & 16384) != 0 ? fVar.H : i10;
            long j11 = (i11 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? fVar.I : j10;
            String str15 = (i11 & 65536) != 0 ? fVar.J : str6;
            String str16 = (i11 & 131072) != 0 ? fVar.K : str7;
            String str17 = str15;
            boolean z17 = (i11 & 262144) != 0 ? fVar.L : z12;
            List list9 = (i11 & 524288) != 0 ? fVar.M : list4;
            List list10 = (i11 & 1048576) != 0 ? fVar.N : list5;
            String str18 = (i11 & 2097152) != 0 ? fVar.O : str8;
            NextStep.GovernmentId.AssetConfig assetConfig2 = (i11 & 4194304) != 0 ? fVar.P : assetConfig;
            bo.a aVar4 = (i11 & 8388608) != 0 ? fVar.Q : aVar;
            StyleElements.Axis axis2 = (i11 & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 0 ? fVar.R : axis;
            PendingPageTextPosition pendingPageTextPosition2 = (i11 & 33554432) != 0 ? fVar.S : pendingPageTextPosition;
            boolean z18 = (i11 & 67108864) != 0 ? fVar.T : z13;
            if ((i11 & 134217728) != 0) {
                z14 = z18;
                aVar3 = fVar.U;
            } else {
                aVar3 = aVar2;
                z14 = z18;
            }
            return fVar.j(str14, str10, wVar2, governmentIdStepStyle2, cancelDialog2, str11, list6, str12, str13, z15, z16, localizations2, list7, list8, i12, j11, str17, str16, z17, list9, list10, str18, assetConfig2, aVar4, axis2, pendingPageTextPosition2, z14, aVar3);
        }

        public final int A() {
            return this.H;
        }

        public final List C() {
            return this.F;
        }

        public final NextStep.GovernmentId.Localizations D() {
            return this.E;
        }

        public final long G() {
            return this.I;
        }

        public final PendingPageTextPosition H() {
            return this.S;
        }

        public final StyleElements.Axis I() {
            return this.R;
        }

        public final boolean J() {
            return this.L;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l, mo.j2
        /* renamed from: K */
        public StepStyles.GovernmentIdStepStyle getStyles() {
            return this.f19978w;
        }

        public final List M() {
            return this.N;
        }

        public final String O() {
            return this.O;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f19975t;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public NextStep.CancelDialog c() {
            return this.f19979x;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String e() {
            return this.B;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof f) {
                f fVar = (f) obj;
                return Intrinsics.areEqual(this.f19975t, fVar.f19975t) && Intrinsics.areEqual(this.f19976u, fVar.f19976u) && Intrinsics.areEqual(this.f19977v, fVar.f19977v) && Intrinsics.areEqual(this.f19978w, fVar.f19978w) && Intrinsics.areEqual(this.f19979x, fVar.f19979x) && Intrinsics.areEqual(this.f19980y, fVar.f19980y) && Intrinsics.areEqual(this.f19981z, fVar.f19981z) && Intrinsics.areEqual(this.A, fVar.A) && Intrinsics.areEqual(this.B, fVar.B) && this.C == fVar.C && this.D == fVar.D && Intrinsics.areEqual(this.E, fVar.E) && Intrinsics.areEqual(this.F, fVar.F) && Intrinsics.areEqual(this.G, fVar.G) && this.H == fVar.H && this.I == fVar.I && Intrinsics.areEqual(this.J, fVar.J) && Intrinsics.areEqual(this.K, fVar.K) && this.L == fVar.L && Intrinsics.areEqual(this.M, fVar.M) && Intrinsics.areEqual(this.N, fVar.N) && Intrinsics.areEqual(this.O, fVar.O) && Intrinsics.areEqual(this.P, fVar.P) && Intrinsics.areEqual(this.Q, fVar.Q) && this.R == fVar.R && this.S == fVar.S && this.T == fVar.T && Intrinsics.areEqual(this.U, fVar.U);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public w f() {
            return this.f19977v;
        }

        public int hashCode() {
            int hashCode = ((this.f19975t.hashCode() * 31) + this.f19976u.hashCode()) * 31;
            w wVar = this.f19977v;
            int hashCode2 = (hashCode + (wVar == null ? 0 : wVar.hashCode())) * 31;
            StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f19978w;
            int hashCode3 = (hashCode2 + (governmentIdStepStyle == null ? 0 : governmentIdStepStyle.hashCode())) * 31;
            NextStep.CancelDialog cancelDialog = this.f19979x;
            int hashCode4 = (hashCode3 + (cancelDialog == null ? 0 : cancelDialog.hashCode())) * 31;
            String str = this.f19980y;
            int hashCode5 = (((((((((((((hashCode4 + (str == null ? 0 : str.hashCode())) * 31) + this.f19981z.hashCode()) * 31) + this.A.hashCode()) * 31) + this.B.hashCode()) * 31) + Boolean.hashCode(this.C)) * 31) + Boolean.hashCode(this.D)) * 31) + this.E.hashCode()) * 31;
            List list = this.F;
            int hashCode6 = (((((((((((((((((hashCode5 + (list == null ? 0 : list.hashCode())) * 31) + this.G.hashCode()) * 31) + Integer.hashCode(this.H)) * 31) + Long.hashCode(this.I)) * 31) + this.J.hashCode()) * 31) + this.K.hashCode()) * 31) + Boolean.hashCode(this.L)) * 31) + this.M.hashCode()) * 31) + this.N.hashCode()) * 31;
            String str2 = this.O;
            int hashCode7 = (hashCode6 + (str2 == null ? 0 : str2.hashCode())) * 31;
            NextStep.GovernmentId.AssetConfig assetConfig = this.P;
            int hashCode8 = (((((((((hashCode7 + (assetConfig == null ? 0 : assetConfig.hashCode())) * 31) + this.Q.hashCode()) * 31) + this.R.hashCode()) * 31) + this.S.hashCode()) * 31) + Boolean.hashCode(this.T)) * 31;
            go.a aVar = this.U;
            return hashCode8 + (aVar != null ? aVar.hashCode() : 0);
        }

        public final f j(String inquiryId, String sessionToken, w wVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.CancelDialog cancelDialog, String str, List enabledIdClasses, String fromComponent, String fromStep, boolean z10, boolean z11, NextStep.GovernmentId.Localizations localizations, List list, List enabledCaptureOptionsNativeMobile, int i10, long j10, String fieldKeyDocument, String fieldKeyIdClass, boolean z12, List enabledCaptureFileTypes, List videoCaptureMethods, String str2, NextStep.GovernmentId.AssetConfig assetConfig, bo.a autoClassificationConfig, StyleElements.Axis reviewCaptureButtonsAxis, PendingPageTextPosition pendingPageTextVerticalPosition, boolean z13, go.a aVar) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(enabledIdClasses, "enabledIdClasses");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            Intrinsics.checkNotNullParameter(localizations, "localizations");
            Intrinsics.checkNotNullParameter(enabledCaptureOptionsNativeMobile, "enabledCaptureOptionsNativeMobile");
            Intrinsics.checkNotNullParameter(fieldKeyDocument, "fieldKeyDocument");
            Intrinsics.checkNotNullParameter(fieldKeyIdClass, "fieldKeyIdClass");
            Intrinsics.checkNotNullParameter(enabledCaptureFileTypes, "enabledCaptureFileTypes");
            Intrinsics.checkNotNullParameter(videoCaptureMethods, "videoCaptureMethods");
            Intrinsics.checkNotNullParameter(autoClassificationConfig, "autoClassificationConfig");
            Intrinsics.checkNotNullParameter(reviewCaptureButtonsAxis, "reviewCaptureButtonsAxis");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            return new f(inquiryId, sessionToken, wVar, governmentIdStepStyle, cancelDialog, str, enabledIdClasses, fromComponent, fromStep, z10, z11, localizations, list, enabledCaptureOptionsNativeMobile, i10, j10, fieldKeyDocument, fieldKeyIdClass, z12, enabledCaptureFileTypes, videoCaptureMethods, str2, assetConfig, autoClassificationConfig, reviewCaptureButtonsAxis, pendingPageTextVerticalPosition, z13, aVar);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String l() {
            return this.f19976u;
        }

        public final NextStep.GovernmentId.AssetConfig m() {
            return this.P;
        }

        public final boolean n() {
            return this.T;
        }

        public final bo.a o() {
            return this.Q;
        }

        public final boolean p() {
            return this.C;
        }

        public final boolean q() {
            return this.D;
        }

        public final String r() {
            return this.f19980y;
        }

        public final go.a s() {
            return this.U;
        }

        public final List t() {
            return this.M;
        }

        public String toString() {
            String str = this.f19975t;
            String str2 = this.f19976u;
            w wVar = this.f19977v;
            StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f19978w;
            NextStep.CancelDialog cancelDialog = this.f19979x;
            String str3 = this.f19980y;
            List list = this.f19981z;
            String str4 = this.A;
            String str5 = this.B;
            boolean z10 = this.C;
            boolean z11 = this.D;
            NextStep.GovernmentId.Localizations localizations = this.E;
            List list2 = this.F;
            List list3 = this.G;
            int i10 = this.H;
            long j10 = this.I;
            String str6 = this.J;
            String str7 = this.K;
            boolean z12 = this.L;
            List list4 = this.M;
            List list5 = this.N;
            String str8 = this.O;
            NextStep.GovernmentId.AssetConfig assetConfig = this.P;
            bo.a aVar = this.Q;
            StyleElements.Axis axis = this.R;
            PendingPageTextPosition pendingPageTextPosition = this.S;
            boolean z13 = this.T;
            go.a aVar2 = this.U;
            return "GovernmentIdStepRunning(inquiryId=" + str + ", sessionToken=" + str2 + ", transitionStatus=" + wVar + ", styles=" + governmentIdStepStyle + ", cancelDialog=" + cancelDialog + ", countryCode=" + str3 + ", enabledIdClasses=" + list + ", fromComponent=" + str4 + ", fromStep=" + str5 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", localizations=" + localizations + ", localizationOverrides=" + list2 + ", enabledCaptureOptionsNativeMobile=" + list3 + ", imageCaptureCount=" + i10 + ", manualCaptureButtonDelayMs=" + j10 + ", fieldKeyDocument=" + str6 + ", fieldKeyIdClass=" + str7 + ", shouldSkipReviewScreen=" + z12 + ", enabledCaptureFileTypes=" + list4 + ", videoCaptureMethods=" + list5 + ", webRtcJwt=" + str8 + ", assetConfig=" + assetConfig + ", autoClassificationConfig=" + aVar + ", reviewCaptureButtonsAxis=" + axis + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ", audioEnabled=" + z13 + ", digitalIdConfig=" + aVar2 + ")";
        }

        public final List u() {
            return this.G;
        }

        public final List v() {
            return this.f19981z;
        }

        public final String w() {
            return this.J;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19975t);
            dest.writeString(this.f19976u);
            dest.writeParcelable(this.f19977v, i10);
            dest.writeParcelable(this.f19978w, i10);
            dest.writeParcelable(this.f19979x, i10);
            dest.writeString(this.f19980y);
            List<Parcelable> list = this.f19981z;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.A);
            dest.writeString(this.B);
            dest.writeInt(this.C ? 1 : 0);
            dest.writeInt(this.D ? 1 : 0);
            dest.writeParcelable(this.E, i10);
            List<Parcelable> list2 = this.F;
            if (list2 == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeInt(list2.size());
                for (Parcelable parcelable2 : list2) {
                    dest.writeParcelable(parcelable2, i10);
                }
            }
            List<CaptureOptionNativeMobile> list3 = this.G;
            dest.writeInt(list3.size());
            for (CaptureOptionNativeMobile captureOptionNativeMobile : list3) {
                dest.writeString(captureOptionNativeMobile.name());
            }
            dest.writeInt(this.H);
            dest.writeLong(this.I);
            dest.writeString(this.J);
            dest.writeString(this.K);
            dest.writeInt(this.L ? 1 : 0);
            List<NextStep.GovernmentId.CaptureFileType> list4 = this.M;
            dest.writeInt(list4.size());
            for (NextStep.GovernmentId.CaptureFileType captureFileType : list4) {
                dest.writeString(captureFileType.name());
            }
            List<NextStep.GovernmentId.VideoCaptureMethod> list5 = this.N;
            dest.writeInt(list5.size());
            for (NextStep.GovernmentId.VideoCaptureMethod videoCaptureMethod : list5) {
                dest.writeString(videoCaptureMethod.name());
            }
            dest.writeString(this.O);
            dest.writeParcelable(this.P, i10);
            dest.writeParcelable(this.Q, i10);
            dest.writeString(this.R.name());
            dest.writeString(this.S.name());
            dest.writeInt(this.T ? 1 : 0);
            dest.writeParcelable(this.U, i10);
        }

        public final String y() {
            return this.K;
        }

        public final String z() {
            return this.A;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String inquiryId, String sessionToken, w wVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.CancelDialog cancelDialog, String str, List enabledIdClasses, String fromComponent, String fromStep, boolean z10, boolean z11, NextStep.GovernmentId.Localizations localizations, List list, List enabledCaptureOptionsNativeMobile, int i10, long j10, String fieldKeyDocument, String fieldKeyIdClass, boolean z12, List enabledCaptureFileTypes, List videoCaptureMethods, String str2, NextStep.GovernmentId.AssetConfig assetConfig, bo.a autoClassificationConfig, StyleElements.Axis reviewCaptureButtonsAxis, PendingPageTextPosition pendingPageTextVerticalPosition, boolean z13, go.a aVar) {
            super(null, null, null, null, null, null, null, 127, null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(enabledIdClasses, "enabledIdClasses");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            Intrinsics.checkNotNullParameter(localizations, "localizations");
            Intrinsics.checkNotNullParameter(enabledCaptureOptionsNativeMobile, "enabledCaptureOptionsNativeMobile");
            Intrinsics.checkNotNullParameter(fieldKeyDocument, "fieldKeyDocument");
            Intrinsics.checkNotNullParameter(fieldKeyIdClass, "fieldKeyIdClass");
            Intrinsics.checkNotNullParameter(enabledCaptureFileTypes, "enabledCaptureFileTypes");
            Intrinsics.checkNotNullParameter(videoCaptureMethods, "videoCaptureMethods");
            Intrinsics.checkNotNullParameter(autoClassificationConfig, "autoClassificationConfig");
            Intrinsics.checkNotNullParameter(reviewCaptureButtonsAxis, "reviewCaptureButtonsAxis");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            this.f19975t = inquiryId;
            this.f19976u = sessionToken;
            this.f19977v = wVar;
            this.f19978w = governmentIdStepStyle;
            this.f19979x = cancelDialog;
            this.f19980y = str;
            this.f19981z = enabledIdClasses;
            this.A = fromComponent;
            this.B = fromStep;
            this.C = z10;
            this.D = z11;
            this.E = localizations;
            this.F = list;
            this.G = enabledCaptureOptionsNativeMobile;
            this.H = i10;
            this.I = j10;
            this.J = fieldKeyDocument;
            this.K = fieldKeyIdClass;
            this.L = z12;
            this.M = enabledCaptureFileTypes;
            this.N = videoCaptureMethods;
            this.O = str2;
            this.P = assetConfig;
            this.Q = autoClassificationConfig;
            this.R = reviewCaptureButtonsAxis;
            this.S = pendingPageTextVerticalPosition;
            this.T = z13;
            this.U = aVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends l {
        @NotNull
        public static final Parcelable.Creator<g> CREATOR = new a();

        /* renamed from: t  reason: collision with root package name */
        private final String f19982t;

        /* renamed from: u  reason: collision with root package name */
        private final String f19983u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final g createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new g(parcel.readString(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final g[] newArray(int i10) {
                return new g[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String fallbackInquiryId, String fallbackSessionToken) {
            super(null, null, null, null, null, null, null, 127, null);
            Intrinsics.checkNotNullParameter(fallbackInquiryId, "fallbackInquiryId");
            Intrinsics.checkNotNullParameter(fallbackSessionToken, "fallbackSessionToken");
            this.f19982t = fallbackInquiryId;
            this.f19983u = fallbackSessionToken;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof g) {
                g gVar = (g) obj;
                return Intrinsics.areEqual(this.f19982t, gVar.f19982t) && Intrinsics.areEqual(this.f19983u, gVar.f19983u);
            }
            return false;
        }

        public int hashCode() {
            return (this.f19982t.hashCode() * 31) + this.f19983u.hashCode();
        }

        public final String j() {
            return this.f19982t;
        }

        public final String k() {
            return this.f19983u;
        }

        public String toString() {
            String str = this.f19982t;
            String str2 = this.f19983u;
            return "ResumeFallbackInquiry(fallbackInquiryId=" + str + ", fallbackSessionToken=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19982t);
            dest.writeString(this.f19983u);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends l implements j2 {
        @NotNull
        public static final Parcelable.Creator<h> CREATOR = new a();
        private final String A;
        private final boolean B;
        private final boolean C;
        private final String D;
        private final boolean E;
        private final boolean F;
        private final NextStep.Selfie.Localizations G;
        private final List H;
        private final List I;
        private final NextStep.Selfie.AssetConfig J;
        private final String K;
        private final List L;
        private final PendingPageTextPosition M;
        private final boolean N;
        private final s0 O;
        private final ep.b0 P;

        /* renamed from: t  reason: collision with root package name */
        private final String f19984t;

        /* renamed from: u  reason: collision with root package name */
        private final String f19985u;

        /* renamed from: v  reason: collision with root package name */
        private final w f19986v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.SelfieStepStyle f19987w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.CancelDialog f19988x;

        /* renamed from: y  reason: collision with root package name */
        private final NextStep.Selfie.CaptureMethod f19989y;

        /* renamed from: z  reason: collision with root package name */
        private final String f19990z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final h createFromParcel(Parcel parcel) {
                boolean z10;
                boolean z11;
                boolean z12;
                String str;
                boolean z13;
                boolean z14;
                NextStep.Selfie.AssetConfig assetConfig;
                Class cls;
                ArrayList arrayList;
                String str2;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                String readString2 = parcel.readString();
                w wVar = (w) parcel.readParcelable(h.class.getClassLoader());
                StepStyles.SelfieStepStyle selfieStepStyle = (StepStyles.SelfieStepStyle) parcel.readParcelable(h.class.getClassLoader());
                NextStep.CancelDialog cancelDialog = (NextStep.CancelDialog) parcel.readParcelable(h.class.getClassLoader());
                NextStep.Selfie.CaptureMethod valueOf = NextStep.Selfie.CaptureMethod.valueOf(parcel.readString());
                String readString3 = parcel.readString();
                String readString4 = parcel.readString();
                boolean z15 = false;
                boolean z16 = true;
                if (parcel.readInt() != 0) {
                    z10 = false;
                    z15 = true;
                } else {
                    z10 = false;
                }
                if (parcel.readInt() != 0) {
                    z11 = true;
                } else {
                    z11 = true;
                    z16 = z10;
                }
                String readString5 = parcel.readString();
                if (parcel.readInt() != 0) {
                    z12 = z11;
                    str = readString5;
                    z13 = z12;
                } else {
                    z12 = z11;
                    str = readString5;
                    z13 = z10;
                }
                if (parcel.readInt() != 0) {
                    z14 = z12;
                } else {
                    z14 = z12;
                    z12 = z10;
                }
                NextStep.Selfie.Localizations localizations = (NextStep.Selfie.Localizations) parcel.readParcelable(h.class.getClassLoader());
                int readInt = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt);
                int i10 = 0;
                while (i10 != readInt) {
                    arrayList2.add(NextStep.Selfie.CaptureFileType.valueOf(parcel.readString()));
                    i10++;
                    readInt = readInt;
                }
                int readInt2 = parcel.readInt();
                ArrayList arrayList3 = new ArrayList(readInt2);
                int i11 = 0;
                while (i11 != readInt2) {
                    arrayList3.add(NextStep.Selfie.VideoCaptureMethod.valueOf(parcel.readString()));
                    i11++;
                    readInt2 = readInt2;
                }
                NextStep.Selfie.AssetConfig assetConfig2 = (NextStep.Selfie.AssetConfig) parcel.readParcelable(h.class.getClassLoader());
                String readString6 = parcel.readString();
                if (parcel.readInt() == 0) {
                    cls = h.class;
                    str2 = readString;
                    arrayList = null;
                    assetConfig = assetConfig2;
                } else {
                    assetConfig = assetConfig2;
                    int readInt3 = parcel.readInt();
                    cls = h.class;
                    arrayList = new ArrayList(readInt3);
                    str2 = readString;
                    int i12 = 0;
                    while (i12 != readInt3) {
                        arrayList.add(NextStep.Selfie.SelfiePose.valueOf(parcel.readString()));
                        i12++;
                        readInt3 = readInt3;
                    }
                }
                PendingPageTextPosition valueOf2 = PendingPageTextPosition.valueOf(parcel.readString());
                if (parcel.readInt() == 0) {
                    z14 = false;
                }
                return new h(str2, readString2, wVar, selfieStepStyle, cancelDialog, valueOf, readString3, readString4, z15, z16, str, z13, z12, localizations, arrayList2, arrayList3, assetConfig, readString6, arrayList, valueOf2, z14, (s0) parcel.readParcelable(cls.getClassLoader()), ep.b0.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final h[] newArray(int i10) {
                return new h[i10];
            }
        }

        public /* synthetic */ h(String str, String str2, w wVar, StepStyles.SelfieStepStyle selfieStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Selfie.CaptureMethod captureMethod, String str3, String str4, boolean z10, boolean z11, String str5, boolean z12, boolean z13, NextStep.Selfie.Localizations localizations, List list, List list2, NextStep.Selfie.AssetConfig assetConfig, String str6, List list3, PendingPageTextPosition pendingPageTextPosition, boolean z14, s0 s0Var, ep.b0 b0Var, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, str2, (i10 & 4) != 0 ? null : wVar, selfieStepStyle, cancelDialog, captureMethod, str3, str4, z10, z11, str5, z12, z13, localizations, list, list2, assetConfig, str6, list3, pendingPageTextPosition, z14, s0Var, b0Var);
        }

        public static /* synthetic */ h k(h hVar, String str, String str2, w wVar, StepStyles.SelfieStepStyle selfieStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Selfie.CaptureMethod captureMethod, String str3, String str4, boolean z10, boolean z11, String str5, boolean z12, boolean z13, NextStep.Selfie.Localizations localizations, List list, List list2, NextStep.Selfie.AssetConfig assetConfig, String str6, List list3, PendingPageTextPosition pendingPageTextPosition, boolean z14, s0 s0Var, ep.b0 b0Var, int i10, Object obj) {
            ep.b0 b0Var2;
            s0 s0Var2;
            String str7 = (i10 & 1) != 0 ? hVar.f19984t : str;
            String str8 = (i10 & 2) != 0 ? hVar.f19985u : str2;
            w wVar2 = (i10 & 4) != 0 ? hVar.f19986v : wVar;
            StepStyles.SelfieStepStyle selfieStepStyle2 = (i10 & 8) != 0 ? hVar.f19987w : selfieStepStyle;
            NextStep.CancelDialog cancelDialog2 = (i10 & 16) != 0 ? hVar.f19988x : cancelDialog;
            NextStep.Selfie.CaptureMethod captureMethod2 = (i10 & 32) != 0 ? hVar.f19989y : captureMethod;
            String str9 = (i10 & 64) != 0 ? hVar.f19990z : str3;
            String str10 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? hVar.A : str4;
            boolean z15 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? hVar.B : z10;
            boolean z16 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? hVar.C : z11;
            String str11 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? hVar.D : str5;
            boolean z17 = (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? hVar.E : z12;
            boolean z18 = (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? hVar.F : z13;
            NextStep.Selfie.Localizations localizations2 = (i10 & 8192) != 0 ? hVar.G : localizations;
            String str12 = str7;
            List list4 = (i10 & 16384) != 0 ? hVar.H : list;
            List list5 = (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? hVar.I : list2;
            NextStep.Selfie.AssetConfig assetConfig2 = (i10 & 65536) != 0 ? hVar.J : assetConfig;
            String str13 = (i10 & 131072) != 0 ? hVar.K : str6;
            List list6 = (i10 & 262144) != 0 ? hVar.L : list3;
            PendingPageTextPosition pendingPageTextPosition2 = (i10 & 524288) != 0 ? hVar.M : pendingPageTextPosition;
            boolean z19 = (i10 & 1048576) != 0 ? hVar.N : z14;
            s0 s0Var3 = (i10 & 2097152) != 0 ? hVar.O : s0Var;
            if ((i10 & 4194304) != 0) {
                s0Var2 = s0Var3;
                b0Var2 = hVar.P;
            } else {
                b0Var2 = b0Var;
                s0Var2 = s0Var3;
            }
            return hVar.j(str12, str8, wVar2, selfieStepStyle2, cancelDialog2, captureMethod2, str9, str10, z15, z16, str11, z17, z18, localizations2, list4, list5, assetConfig2, str13, list6, pendingPageTextPosition2, z19, s0Var2, b0Var2);
        }

        public final NextStep.Selfie.CaptureMethod A() {
            return this.f19989y;
        }

        public final boolean C() {
            return this.F;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l, mo.j2
        /* renamed from: D */
        public StepStyles.SelfieStepStyle getStyles() {
            return this.f19987w;
        }

        public final List G() {
            return this.I;
        }

        public final String H() {
            return this.K;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f19984t;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public NextStep.CancelDialog c() {
            return this.f19988x;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String e() {
            return this.A;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof h) {
                h hVar = (h) obj;
                return Intrinsics.areEqual(this.f19984t, hVar.f19984t) && Intrinsics.areEqual(this.f19985u, hVar.f19985u) && Intrinsics.areEqual(this.f19986v, hVar.f19986v) && Intrinsics.areEqual(this.f19987w, hVar.f19987w) && Intrinsics.areEqual(this.f19988x, hVar.f19988x) && this.f19989y == hVar.f19989y && Intrinsics.areEqual(this.f19990z, hVar.f19990z) && Intrinsics.areEqual(this.A, hVar.A) && this.B == hVar.B && this.C == hVar.C && Intrinsics.areEqual(this.D, hVar.D) && this.E == hVar.E && this.F == hVar.F && Intrinsics.areEqual(this.G, hVar.G) && Intrinsics.areEqual(this.H, hVar.H) && Intrinsics.areEqual(this.I, hVar.I) && Intrinsics.areEqual(this.J, hVar.J) && Intrinsics.areEqual(this.K, hVar.K) && Intrinsics.areEqual(this.L, hVar.L) && this.M == hVar.M && this.N == hVar.N && Intrinsics.areEqual(this.O, hVar.O) && this.P == hVar.P;
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public w f() {
            return this.f19986v;
        }

        public int hashCode() {
            int hashCode = ((this.f19984t.hashCode() * 31) + this.f19985u.hashCode()) * 31;
            w wVar = this.f19986v;
            int hashCode2 = (hashCode + (wVar == null ? 0 : wVar.hashCode())) * 31;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f19987w;
            int hashCode3 = (hashCode2 + (selfieStepStyle == null ? 0 : selfieStepStyle.hashCode())) * 31;
            NextStep.CancelDialog cancelDialog = this.f19988x;
            int hashCode4 = (((((((((((((((((((((((hashCode3 + (cancelDialog == null ? 0 : cancelDialog.hashCode())) * 31) + this.f19989y.hashCode()) * 31) + this.f19990z.hashCode()) * 31) + this.A.hashCode()) * 31) + Boolean.hashCode(this.B)) * 31) + Boolean.hashCode(this.C)) * 31) + this.D.hashCode()) * 31) + Boolean.hashCode(this.E)) * 31) + Boolean.hashCode(this.F)) * 31) + this.G.hashCode()) * 31) + this.H.hashCode()) * 31) + this.I.hashCode()) * 31;
            NextStep.Selfie.AssetConfig assetConfig = this.J;
            int hashCode5 = (hashCode4 + (assetConfig == null ? 0 : assetConfig.hashCode())) * 31;
            String str = this.K;
            int hashCode6 = (hashCode5 + (str == null ? 0 : str.hashCode())) * 31;
            List list = this.L;
            return ((((((((hashCode6 + (list != null ? list.hashCode() : 0)) * 31) + this.M.hashCode()) * 31) + Boolean.hashCode(this.N)) * 31) + this.O.hashCode()) * 31) + this.P.hashCode();
        }

        public final h j(String inquiryId, String sessionToken, w wVar, StepStyles.SelfieStepStyle selfieStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Selfie.CaptureMethod selfieType, String fromComponent, String fromStep, boolean z10, boolean z11, String fieldKeySelfie, boolean z12, boolean z13, NextStep.Selfie.Localizations localizations, List enabledCaptureFileTypes, List videoCaptureMethods, NextStep.Selfie.AssetConfig assetConfig, String str, List list, PendingPageTextPosition pendingPageTextVerticalPosition, boolean z14, s0 poseConfigs, ep.b0 designVersion) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(selfieType, "selfieType");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            Intrinsics.checkNotNullParameter(fieldKeySelfie, "fieldKeySelfie");
            Intrinsics.checkNotNullParameter(localizations, "localizations");
            Intrinsics.checkNotNullParameter(enabledCaptureFileTypes, "enabledCaptureFileTypes");
            Intrinsics.checkNotNullParameter(videoCaptureMethods, "videoCaptureMethods");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(designVersion, "designVersion");
            return new h(inquiryId, sessionToken, wVar, selfieStepStyle, cancelDialog, selfieType, fromComponent, fromStep, z10, z11, fieldKeySelfie, z12, z13, localizations, enabledCaptureFileTypes, videoCaptureMethods, assetConfig, str, list, pendingPageTextVerticalPosition, z14, poseConfigs, designVersion);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String l() {
            return this.f19985u;
        }

        public final NextStep.Selfie.AssetConfig m() {
            return this.J;
        }

        public final boolean n() {
            return this.N;
        }

        public final boolean o() {
            return this.B;
        }

        public final boolean p() {
            return this.C;
        }

        public final ep.b0 q() {
            return this.P;
        }

        public final List r() {
            return this.H;
        }

        public final String s() {
            return this.D;
        }

        public final String t() {
            return this.f19990z;
        }

        public String toString() {
            String str = this.f19984t;
            String str2 = this.f19985u;
            w wVar = this.f19986v;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f19987w;
            NextStep.CancelDialog cancelDialog = this.f19988x;
            NextStep.Selfie.CaptureMethod captureMethod = this.f19989y;
            String str3 = this.f19990z;
            String str4 = this.A;
            boolean z10 = this.B;
            boolean z11 = this.C;
            String str5 = this.D;
            boolean z12 = this.E;
            boolean z13 = this.F;
            NextStep.Selfie.Localizations localizations = this.G;
            List list = this.H;
            List list2 = this.I;
            NextStep.Selfie.AssetConfig assetConfig = this.J;
            String str6 = this.K;
            List list3 = this.L;
            PendingPageTextPosition pendingPageTextPosition = this.M;
            boolean z14 = this.N;
            s0 s0Var = this.O;
            ep.b0 b0Var = this.P;
            return "SelfieStepRunning(inquiryId=" + str + ", sessionToken=" + str2 + ", transitionStatus=" + wVar + ", styles=" + selfieStepStyle + ", cancelDialog=" + cancelDialog + ", selfieType=" + captureMethod + ", fromComponent=" + str3 + ", fromStep=" + str4 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", fieldKeySelfie=" + str5 + ", requireStrictSelfieCapture=" + z12 + ", skipPromptPage=" + z13 + ", localizations=" + localizations + ", enabledCaptureFileTypes=" + list + ", videoCaptureMethods=" + list2 + ", assetConfig=" + assetConfig + ", webRtcJwt=" + str6 + ", orderedPoses=" + list3 + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ", audioEnabled=" + z14 + ", poseConfigs=" + s0Var + ", designVersion=" + b0Var + ")";
        }

        public final NextStep.Selfie.Localizations u() {
            return this.G;
        }

        public final List v() {
            return this.L;
        }

        public final PendingPageTextPosition w() {
            return this.M;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19984t);
            dest.writeString(this.f19985u);
            dest.writeParcelable(this.f19986v, i10);
            dest.writeParcelable(this.f19987w, i10);
            dest.writeParcelable(this.f19988x, i10);
            dest.writeString(this.f19989y.name());
            dest.writeString(this.f19990z);
            dest.writeString(this.A);
            dest.writeInt(this.B ? 1 : 0);
            dest.writeInt(this.C ? 1 : 0);
            dest.writeString(this.D);
            dest.writeInt(this.E ? 1 : 0);
            dest.writeInt(this.F ? 1 : 0);
            dest.writeParcelable(this.G, i10);
            List<NextStep.Selfie.CaptureFileType> list = this.H;
            dest.writeInt(list.size());
            for (NextStep.Selfie.CaptureFileType captureFileType : list) {
                dest.writeString(captureFileType.name());
            }
            List<NextStep.Selfie.VideoCaptureMethod> list2 = this.I;
            dest.writeInt(list2.size());
            for (NextStep.Selfie.VideoCaptureMethod videoCaptureMethod : list2) {
                dest.writeString(videoCaptureMethod.name());
            }
            dest.writeParcelable(this.J, i10);
            dest.writeString(this.K);
            List<NextStep.Selfie.SelfiePose> list3 = this.L;
            if (list3 == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeInt(list3.size());
                for (NextStep.Selfie.SelfiePose selfiePose : list3) {
                    dest.writeString(selfiePose.name());
                }
            }
            dest.writeString(this.M.name());
            dest.writeInt(this.N ? 1 : 0);
            dest.writeParcelable(this.O, i10);
            dest.writeString(this.P.name());
        }

        public final s0 y() {
            return this.O;
        }

        public final boolean z() {
            return this.E;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String inquiryId, String sessionToken, w wVar, StepStyles.SelfieStepStyle selfieStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Selfie.CaptureMethod selfieType, String fromComponent, String fromStep, boolean z10, boolean z11, String fieldKeySelfie, boolean z12, boolean z13, NextStep.Selfie.Localizations localizations, List enabledCaptureFileTypes, List videoCaptureMethods, NextStep.Selfie.AssetConfig assetConfig, String str, List list, PendingPageTextPosition pendingPageTextVerticalPosition, boolean z14, s0 poseConfigs, ep.b0 designVersion) {
            super(null, null, null, null, null, null, null, 127, null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(selfieType, "selfieType");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            Intrinsics.checkNotNullParameter(fieldKeySelfie, "fieldKeySelfie");
            Intrinsics.checkNotNullParameter(localizations, "localizations");
            Intrinsics.checkNotNullParameter(enabledCaptureFileTypes, "enabledCaptureFileTypes");
            Intrinsics.checkNotNullParameter(videoCaptureMethods, "videoCaptureMethods");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(designVersion, "designVersion");
            this.f19984t = inquiryId;
            this.f19985u = sessionToken;
            this.f19986v = wVar;
            this.f19987w = selfieStepStyle;
            this.f19988x = cancelDialog;
            this.f19989y = selfieType;
            this.f19990z = fromComponent;
            this.A = fromStep;
            this.B = z10;
            this.C = z11;
            this.D = fieldKeySelfie;
            this.E = z12;
            this.F = z13;
            this.G = localizations;
            this.H = enabledCaptureFileTypes;
            this.I = videoCaptureMethods;
            this.J = assetConfig;
            this.K = str;
            this.L = list;
            this.M = pendingPageTextVerticalPosition;
            this.N = z14;
            this.O = poseConfigs;
            this.P = designVersion;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends l implements j2 {
        @NotNull
        public static final Parcelable.Creator<j> CREATOR = new a();
        private final String A;
        private final List B;
        private final boolean C;
        private final boolean D;
        private final boolean E;
        private final Map F;
        private final String G;
        private final List H;
        private final InternalErrorInfo I;
        private final qp.g J;
        private final boolean K;

        /* renamed from: t  reason: collision with root package name */
        private final String f19997t;

        /* renamed from: u  reason: collision with root package name */
        private final String f19998u;

        /* renamed from: v  reason: collision with root package name */
        private final w f19999v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.UiStepStyle f20000w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.CancelDialog f20001x;

        /* renamed from: y  reason: collision with root package name */
        private final NextStep.Ui.Localizations f20002y;

        /* renamed from: z  reason: collision with root package name */
        private final String f20003z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final j createFromParcel(Parcel parcel) {
                ArrayList arrayList;
                boolean z10;
                ArrayList arrayList2;
                ArrayList arrayList3;
                boolean z11;
                boolean z12;
                String str;
                ArrayList arrayList4;
                String str2;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                String readString2 = parcel.readString();
                w wVar = (w) parcel.readParcelable(j.class.getClassLoader());
                StepStyles.UiStepStyle uiStepStyle = (StepStyles.UiStepStyle) parcel.readParcelable(j.class.getClassLoader());
                NextStep.CancelDialog cancelDialog = (NextStep.CancelDialog) parcel.readParcelable(j.class.getClassLoader());
                NextStep.Ui.Localizations localizations = (NextStep.Ui.Localizations) parcel.readParcelable(j.class.getClassLoader());
                String readString3 = parcel.readString();
                String readString4 = parcel.readString();
                boolean z13 = false;
                if (parcel.readInt() == 0) {
                    arrayList = null;
                } else {
                    int readInt = parcel.readInt();
                    arrayList = new ArrayList(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        arrayList.add(parcel.readParcelable(j.class.getClassLoader()));
                    }
                }
                boolean z14 = true;
                if (parcel.readInt() != 0) {
                    z10 = false;
                    z13 = true;
                } else {
                    z10 = false;
                }
                if (parcel.readInt() != 0) {
                    arrayList2 = null;
                    arrayList3 = arrayList;
                    z11 = true;
                } else {
                    arrayList2 = null;
                    arrayList3 = arrayList;
                    z11 = z10;
                }
                if (parcel.readInt() != 0) {
                    z12 = true;
                } else {
                    z12 = true;
                    z14 = z10;
                }
                int readInt2 = parcel.readInt();
                ArrayList arrayList5 = arrayList2;
                LinkedHashMap linkedHashMap = new LinkedHashMap(readInt2);
                int i11 = 0;
                while (i11 != readInt2) {
                    linkedHashMap.put(parcel.readString(), parcel.readParcelable(j.class.getClassLoader()));
                    i11++;
                    readInt2 = readInt2;
                }
                String readString5 = parcel.readString();
                if (parcel.readInt() == 0) {
                    str = readString5;
                    arrayList4 = arrayList5;
                    str2 = readString;
                } else {
                    int readInt3 = parcel.readInt();
                    str = readString5;
                    arrayList4 = new ArrayList(readInt3);
                    str2 = readString;
                    int i12 = 0;
                    while (i12 != readInt3) {
                        arrayList4.add(parcel.readParcelable(j.class.getClassLoader()));
                        i12++;
                        readInt3 = readInt3;
                    }
                }
                InternalErrorInfo internalErrorInfo = (InternalErrorInfo) parcel.readParcelable(j.class.getClassLoader());
                qp.g gVar = (qp.g) parcel.readParcelable(j.class.getClassLoader());
                if (parcel.readInt() == 0) {
                    z12 = false;
                }
                return new j(str2, readString2, wVar, uiStepStyle, cancelDialog, localizations, readString3, readString4, arrayList3, z13, z11, z14, linkedHashMap, str, arrayList4, internalErrorInfo, gVar, z12);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final j[] newArray(int i10) {
                return new j[i10];
            }
        }

        public /* synthetic */ j(String str, String str2, w wVar, StepStyles.UiStepStyle uiStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Ui.Localizations localizations, String str3, String str4, List list, boolean z10, boolean z11, boolean z12, Map map, String str5, List list2, InternalErrorInfo internalErrorInfo, qp.g gVar, boolean z13, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, str2, (i10 & 4) != 0 ? null : wVar, uiStepStyle, cancelDialog, localizations, str3, str4, list, z10, z11, z12, map, str5, list2, (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? null : internalErrorInfo, (i10 & 65536) != 0 ? qp.g.f47612o.a() : gVar, z13);
        }

        public static /* synthetic */ j k(j jVar, String str, String str2, w wVar, StepStyles.UiStepStyle uiStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Ui.Localizations localizations, String str3, String str4, List list, boolean z10, boolean z11, boolean z12, Map map, String str5, List list2, InternalErrorInfo internalErrorInfo, qp.g gVar, boolean z13, int i10, Object obj) {
            boolean z14;
            qp.g gVar2;
            String str6 = (i10 & 1) != 0 ? jVar.f19997t : str;
            String str7 = (i10 & 2) != 0 ? jVar.f19998u : str2;
            w wVar2 = (i10 & 4) != 0 ? jVar.f19999v : wVar;
            StepStyles.UiStepStyle uiStepStyle2 = (i10 & 8) != 0 ? jVar.f20000w : uiStepStyle;
            NextStep.CancelDialog cancelDialog2 = (i10 & 16) != 0 ? jVar.f20001x : cancelDialog;
            NextStep.Ui.Localizations localizations2 = (i10 & 32) != 0 ? jVar.f20002y : localizations;
            String str8 = (i10 & 64) != 0 ? jVar.f20003z : str3;
            String str9 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? jVar.A : str4;
            List list3 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? jVar.B : list;
            boolean z15 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? jVar.C : z10;
            boolean z16 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? jVar.D : z11;
            boolean z17 = (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? jVar.E : z12;
            Map map2 = (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? jVar.F : map;
            String str10 = (i10 & 8192) != 0 ? jVar.G : str5;
            String str11 = str6;
            List list4 = (i10 & 16384) != 0 ? jVar.H : list2;
            InternalErrorInfo internalErrorInfo2 = (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? jVar.I : internalErrorInfo;
            qp.g gVar3 = (i10 & 65536) != 0 ? jVar.J : gVar;
            if ((i10 & 131072) != 0) {
                gVar2 = gVar3;
                z14 = jVar.K;
            } else {
                z14 = z13;
                gVar2 = gVar3;
            }
            return jVar.j(str11, str7, wVar2, uiStepStyle2, cancelDialog2, localizations2, str8, str9, list3, z15, z16, z17, map2, str10, list4, internalErrorInfo2, gVar2, z14);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public qp.g a() {
            return this.J;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f19997t;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public NextStep.CancelDialog c() {
            return this.f20001x;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String e() {
            return this.A;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof j) {
                j jVar = (j) obj;
                return Intrinsics.areEqual(this.f19997t, jVar.f19997t) && Intrinsics.areEqual(this.f19998u, jVar.f19998u) && Intrinsics.areEqual(this.f19999v, jVar.f19999v) && Intrinsics.areEqual(this.f20000w, jVar.f20000w) && Intrinsics.areEqual(this.f20001x, jVar.f20001x) && Intrinsics.areEqual(this.f20002y, jVar.f20002y) && Intrinsics.areEqual(this.f20003z, jVar.f20003z) && Intrinsics.areEqual(this.A, jVar.A) && Intrinsics.areEqual(this.B, jVar.B) && this.C == jVar.C && this.D == jVar.D && this.E == jVar.E && Intrinsics.areEqual(this.F, jVar.F) && Intrinsics.areEqual(this.G, jVar.G) && Intrinsics.areEqual(this.H, jVar.H) && Intrinsics.areEqual(this.I, jVar.I) && Intrinsics.areEqual(this.J, jVar.J) && this.K == jVar.K;
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public w f() {
            return this.f19999v;
        }

        public final List getComponents() {
            return this.B;
        }

        public int hashCode() {
            int hashCode = ((this.f19997t.hashCode() * 31) + this.f19998u.hashCode()) * 31;
            w wVar = this.f19999v;
            int hashCode2 = (hashCode + (wVar == null ? 0 : wVar.hashCode())) * 31;
            StepStyles.UiStepStyle uiStepStyle = this.f20000w;
            int hashCode3 = (hashCode2 + (uiStepStyle == null ? 0 : uiStepStyle.hashCode())) * 31;
            NextStep.CancelDialog cancelDialog = this.f20001x;
            int hashCode4 = (hashCode3 + (cancelDialog == null ? 0 : cancelDialog.hashCode())) * 31;
            NextStep.Ui.Localizations localizations = this.f20002y;
            int hashCode5 = (((((hashCode4 + (localizations == null ? 0 : localizations.hashCode())) * 31) + this.f20003z.hashCode()) * 31) + this.A.hashCode()) * 31;
            List list = this.B;
            int hashCode6 = (((((((((((hashCode5 + (list == null ? 0 : list.hashCode())) * 31) + Boolean.hashCode(this.C)) * 31) + Boolean.hashCode(this.D)) * 31) + Boolean.hashCode(this.E)) * 31) + this.F.hashCode()) * 31) + this.G.hashCode()) * 31;
            List list2 = this.H;
            int hashCode7 = (hashCode6 + (list2 == null ? 0 : list2.hashCode())) * 31;
            InternalErrorInfo internalErrorInfo = this.I;
            return ((((hashCode7 + (internalErrorInfo != null ? internalErrorInfo.hashCode() : 0)) * 31) + this.J.hashCode()) * 31) + Boolean.hashCode(this.K);
        }

        public final j j(String inquiryId, String sessionToken, w wVar, StepStyles.UiStepStyle uiStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Ui.Localizations localizations, String inquiryStatus, String stepName, List list, boolean z10, boolean z11, boolean z12, Map fields, String clientSideKey, List list2, InternalErrorInfo internalErrorInfo, qp.g inquirySessionConfig, boolean z13) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryStatus, "inquiryStatus");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(fields, "fields");
            Intrinsics.checkNotNullParameter(clientSideKey, "clientSideKey");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            return new j(inquiryId, sessionToken, wVar, uiStepStyle, cancelDialog, localizations, inquiryStatus, stepName, list, z10, z11, z12, fields, clientSideKey, list2, internalErrorInfo, inquirySessionConfig, z13);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String l() {
            return this.f19998u;
        }

        public final boolean m() {
            return this.C;
        }

        public final boolean n() {
            return this.D;
        }

        public final String o() {
            return this.G;
        }

        public final Map p() {
            return this.F;
        }

        public final boolean q() {
            return this.E;
        }

        public final String r() {
            return this.f20003z;
        }

        public final NextStep.Ui.Localizations s() {
            return this.f20002y;
        }

        public final List t() {
            return this.H;
        }

        public String toString() {
            String str = this.f19997t;
            String str2 = this.f19998u;
            w wVar = this.f19999v;
            StepStyles.UiStepStyle uiStepStyle = this.f20000w;
            NextStep.CancelDialog cancelDialog = this.f20001x;
            NextStep.Ui.Localizations localizations = this.f20002y;
            String str3 = this.f20003z;
            String str4 = this.A;
            List list = this.B;
            boolean z10 = this.C;
            boolean z11 = this.D;
            boolean z12 = this.E;
            Map map = this.F;
            String str5 = this.G;
            List list2 = this.H;
            InternalErrorInfo internalErrorInfo = this.I;
            qp.g gVar = this.J;
            boolean z13 = this.K;
            return "UiStepRunning(inquiryId=" + str + ", sessionToken=" + str2 + ", transitionStatus=" + wVar + ", styles=" + uiStepStyle + ", cancelDialog=" + cancelDialog + ", localizations=" + localizations + ", inquiryStatus=" + str3 + ", stepName=" + str4 + ", components=" + list + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", finalStep=" + z12 + ", fields=" + map + ", clientSideKey=" + str5 + ", serverComponentErrors=" + list2 + ", transitionError=" + internalErrorInfo + ", inquirySessionConfig=" + gVar + ", isRestoringState=" + z13 + ")";
        }

        public final String u() {
            return this.A;
        }

        public final InternalErrorInfo v() {
            return this.I;
        }

        public final boolean w() {
            return this.K;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19997t);
            dest.writeString(this.f19998u);
            dest.writeParcelable(this.f19999v, i10);
            dest.writeParcelable(this.f20000w, i10);
            dest.writeParcelable(this.f20001x, i10);
            dest.writeParcelable(this.f20002y, i10);
            dest.writeString(this.f20003z);
            dest.writeString(this.A);
            List<Parcelable> list = this.B;
            if (list == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
            }
            dest.writeInt(this.C ? 1 : 0);
            dest.writeInt(this.D ? 1 : 0);
            dest.writeInt(this.E ? 1 : 0);
            Map map = this.F;
            dest.writeInt(map.size());
            for (Map.Entry entry : map.entrySet()) {
                dest.writeString((String) entry.getKey());
                dest.writeParcelable((Parcelable) entry.getValue(), i10);
            }
            dest.writeString(this.G);
            List<Parcelable> list2 = this.H;
            if (list2 == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeInt(list2.size());
                for (Parcelable parcelable2 : list2) {
                    dest.writeParcelable(parcelable2, i10);
                }
            }
            dest.writeParcelable(this.I, i10);
            dest.writeParcelable(this.J, i10);
            dest.writeInt(this.K ? 1 : 0);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l, mo.j2
        public StepStyles.UiStepStyle getStyles() {
            return this.f20000w;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(String inquiryId, String sessionToken, w wVar, StepStyles.UiStepStyle uiStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Ui.Localizations localizations, String inquiryStatus, String stepName, List list, boolean z10, boolean z11, boolean z12, Map fields, String clientSideKey, List list2, InternalErrorInfo internalErrorInfo, qp.g inquirySessionConfig, boolean z13) {
            super(null, null, null, null, null, null, null, 127, null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryStatus, "inquiryStatus");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(fields, "fields");
            Intrinsics.checkNotNullParameter(clientSideKey, "clientSideKey");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f19997t = inquiryId;
            this.f19998u = sessionToken;
            this.f19999v = wVar;
            this.f20000w = uiStepStyle;
            this.f20001x = cancelDialog;
            this.f20002y = localizations;
            this.f20003z = inquiryStatus;
            this.A = stepName;
            this.B = list;
            this.C = z10;
            this.D = z11;
            this.E = z12;
            this.F = fields;
            this.G = clientSideKey;
            this.H = list2;
            this.I = internalErrorInfo;
            this.J = inquirySessionConfig;
            this.K = z13;
        }
    }

    public /* synthetic */ l(String str, String str2, w wVar, StepStyle stepStyle, NextStep.CancelDialog cancelDialog, String str3, qp.g gVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, wVar, stepStyle, cancelDialog, str3, gVar);
    }

    public qp.g a() {
        return this.f19952r;
    }

    public String b() {
        return this.f19947e;
    }

    public NextStep.CancelDialog c() {
        return this.f19950p;
    }

    public final boolean d() {
        return this.f19953s;
    }

    public String e() {
        return this.f19951q;
    }

    public w f() {
        return this.f19948i;
    }

    public final void g(boolean z10) {
        this.f19953s = z10;
    }

    public StepStyle getStyles() {
        return this.f19949o;
    }

    public final l i(w wVar) {
        if (this instanceof a) {
            return a.k((a) this, null, null, wVar, null, null, 27, null);
        }
        if ((this instanceof b) || (this instanceof g) || (this instanceof c) || (this instanceof e)) {
            return this;
        }
        if (this instanceof d) {
            return d.k((d) this, null, null, wVar, null, null, null, null, null, null, null, 1019, null);
        }
        if (this instanceof f) {
            return f.k((f) this, null, null, wVar, null, null, null, null, null, null, false, false, null, null, null, 0, 0L, null, null, false, null, null, null, null, null, null, null, false, null, 268435451, null);
        }
        if (this instanceof h) {
            return h.k((h) this, null, null, wVar, null, null, null, null, null, false, false, null, false, false, null, null, null, null, null, null, null, false, null, null, 8388603, null);
        }
        if (this instanceof i) {
            return i.k((i) this, null, wVar, null, null, false, null, 61, null);
        }
        if (this instanceof j) {
            return j.k((j) this, null, null, wVar, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null);
        }
        throw new ir.p();
    }

    public String l() {
        return this.f19946d;
    }

    private l(String str, String str2, w wVar, StepStyle stepStyle, NextStep.CancelDialog cancelDialog, String str3, qp.g gVar) {
        this.f19946d = str;
        this.f19947e = str2;
        this.f19948i = wVar;
        this.f19949o = stepStyle;
        this.f19950p = cancelDialog;
        this.f19951q = str3;
        this.f19952r = gVar;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends l {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: t  reason: collision with root package name */
        private final String f19991t;

        /* renamed from: u  reason: collision with root package name */
        private final w f19992u;

        /* renamed from: v  reason: collision with root package name */
        private final String f19993v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyle f19994w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f19995x;

        /* renamed from: y  reason: collision with root package name */
        private final qp.g f19996y;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final i createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new i(parcel.readString(), (w) parcel.readParcelable(i.class.getClassLoader()), parcel.readString(), (StepStyle) parcel.readParcelable(i.class.getClassLoader()), parcel.readInt() != 0, (qp.g) parcel.readParcelable(i.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final i[] newArray(int i10) {
                return new i[i10];
            }
        }

        public /* synthetic */ i(String str, w wVar, String str2, StepStyle stepStyle, boolean z10, qp.g gVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? new w.a(null, 1, null) : wVar, str2, stepStyle, z10, (i10 & 32) != 0 ? qp.g.f47612o.a() : gVar);
        }

        public static /* synthetic */ i k(i iVar, String str, w wVar, String str2, StepStyle stepStyle, boolean z10, qp.g gVar, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = iVar.f19991t;
            }
            if ((i10 & 2) != 0) {
                wVar = iVar.f19992u;
            }
            if ((i10 & 4) != 0) {
                str2 = iVar.f19993v;
            }
            if ((i10 & 8) != 0) {
                stepStyle = iVar.f19994w;
            }
            if ((i10 & 16) != 0) {
                z10 = iVar.f19995x;
            }
            if ((i10 & 32) != 0) {
                gVar = iVar.f19996y;
            }
            boolean z11 = z10;
            qp.g gVar2 = gVar;
            return iVar.j(str, wVar, str2, stepStyle, z11, gVar2);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public qp.g a() {
            return this.f19996y;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f19993v;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof i) {
                i iVar = (i) obj;
                return Intrinsics.areEqual(this.f19991t, iVar.f19991t) && Intrinsics.areEqual(this.f19992u, iVar.f19992u) && Intrinsics.areEqual(this.f19993v, iVar.f19993v) && Intrinsics.areEqual(this.f19994w, iVar.f19994w) && this.f19995x == iVar.f19995x && Intrinsics.areEqual(this.f19996y, iVar.f19996y);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public w f() {
            return this.f19992u;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l, mo.j2
        public StepStyle getStyles() {
            return this.f19994w;
        }

        public int hashCode() {
            int hashCode = this.f19991t.hashCode() * 31;
            w wVar = this.f19992u;
            int hashCode2 = (((hashCode + (wVar == null ? 0 : wVar.hashCode())) * 31) + this.f19993v.hashCode()) * 31;
            StepStyle stepStyle = this.f19994w;
            return ((((hashCode2 + (stepStyle != null ? stepStyle.hashCode() : 0)) * 31) + Boolean.hashCode(this.f19995x)) * 31) + this.f19996y.hashCode();
        }

        public final i j(String sessionToken, w wVar, String inquiryId, StepStyle stepStyle, boolean z10, qp.g inquirySessionConfig) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            return new i(sessionToken, wVar, inquiryId, stepStyle, z10, inquirySessionConfig);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String l() {
            return this.f19991t;
        }

        public final boolean m() {
            return this.f19995x;
        }

        public String toString() {
            String str = this.f19991t;
            w wVar = this.f19992u;
            String str2 = this.f19993v;
            StepStyle stepStyle = this.f19994w;
            boolean z10 = this.f19995x;
            qp.g gVar = this.f19996y;
            return "ShowLoadingSpinner(sessionToken=" + str + ", transitionStatus=" + wVar + ", inquiryId=" + str2 + ", styles=" + stepStyle + ", useBasicSpinner=" + z10 + ", inquirySessionConfig=" + gVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19991t);
            dest.writeParcelable(this.f19992u, i10);
            dest.writeString(this.f19993v);
            dest.writeParcelable(this.f19994w, i10);
            dest.writeInt(this.f19995x ? 1 : 0);
            dest.writeParcelable(this.f19996y, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(String sessionToken, w wVar, String inquiryId, StepStyle stepStyle, boolean z10, qp.g inquirySessionConfig) {
            super(null, null, null, null, null, null, null, 127, null);
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f19991t = sessionToken;
            this.f19992u = wVar;
            this.f19993v = inquiryId;
            this.f19994w = stepStyle;
            this.f19995x = z10;
            this.f19996y = inquirySessionConfig;
        }
    }

    public /* synthetic */ l(String str, String str2, w wVar, StepStyle stepStyle, NextStep.CancelDialog cancelDialog, String str3, qp.g gVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : wVar, (i10 & 8) != 0 ? null : stepStyle, (i10 & 16) != 0 ? null : cancelDialog, (i10 & 32) != 0 ? null : str3, (i10 & 64) != 0 ? qp.g.f47612o.a() : gVar, null);
    }
}
