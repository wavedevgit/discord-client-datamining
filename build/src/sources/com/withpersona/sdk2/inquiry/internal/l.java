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
import ep.j2;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
import wp.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final String f19967d;

    /* renamed from: e  reason: collision with root package name */
    private final String f19968e;

    /* renamed from: i  reason: collision with root package name */
    private final w f19969i;

    /* renamed from: o  reason: collision with root package name */
    private final StepStyle f19970o;

    /* renamed from: p  reason: collision with root package name */
    private final NextStep.CancelDialog f19971p;

    /* renamed from: q  reason: collision with root package name */
    private final String f19972q;

    /* renamed from: r  reason: collision with root package name */
    private final iq.g f19973r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f19974s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends l {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0253a();

        /* renamed from: t  reason: collision with root package name */
        private final String f19975t;

        /* renamed from: u  reason: collision with root package name */
        private final String f19976u;

        /* renamed from: v  reason: collision with root package name */
        private final w f19977v;

        /* renamed from: w  reason: collision with root package name */
        private final String f19978w;

        /* renamed from: x  reason: collision with root package name */
        private final Map f19979x;

        /* renamed from: com.withpersona.sdk2.inquiry.internal.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0253a implements Parcelable.Creator {
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
                str = aVar.f19975t;
            }
            if ((i10 & 2) != 0) {
                str2 = aVar.f19976u;
            }
            if ((i10 & 4) != 0) {
                wVar = aVar.f19977v;
            }
            if ((i10 & 8) != 0) {
                str3 = aVar.f19978w;
            }
            if ((i10 & 16) != 0) {
                map = aVar.f19979x;
            }
            Map map2 = map;
            w wVar2 = wVar;
            return aVar.j(str, str2, wVar2, str3, map2);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f19975t;
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
                return Intrinsics.areEqual(this.f19975t, aVar.f19975t) && Intrinsics.areEqual(this.f19976u, aVar.f19976u) && Intrinsics.areEqual(this.f19977v, aVar.f19977v) && Intrinsics.areEqual(this.f19978w, aVar.f19978w) && Intrinsics.areEqual(this.f19979x, aVar.f19979x);
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
            return ((((hashCode + (wVar == null ? 0 : wVar.hashCode())) * 31) + this.f19978w.hashCode()) * 31) + this.f19979x.hashCode();
        }

        public final a j(String inquiryId, String sessionToken, w wVar, String inquiryStatus, Map fields) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryStatus, "inquiryStatus");
            Intrinsics.checkNotNullParameter(fields, "fields");
            return new a(inquiryId, sessionToken, wVar, inquiryStatus, fields);
        }

        public final Map l() {
            return this.f19979x;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String m() {
            return this.f19976u;
        }

        public final String o() {
            return this.f19978w;
        }

        public String toString() {
            String str = this.f19975t;
            String str2 = this.f19976u;
            w wVar = this.f19977v;
            String str3 = this.f19978w;
            Map map = this.f19979x;
            return "Complete(inquiryId=" + str + ", sessionToken=" + str2 + ", transitionStatus=" + wVar + ", inquiryStatus=" + str3 + ", fields=" + map + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19975t);
            dest.writeString(this.f19976u);
            dest.writeParcelable(this.f19977v, i10);
            dest.writeString(this.f19978w);
            Map map = this.f19979x;
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
            this.f19975t = inquiryId;
            this.f19976u = sessionToken;
            this.f19977v = wVar;
            this.f19978w = inquiryStatus;
            this.f19979x = fields;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends l {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();
        private final StaticInquiryTemplate A;

        /* renamed from: t  reason: collision with root package name */
        private final String f19980t;

        /* renamed from: u  reason: collision with root package name */
        private final String f19981u;

        /* renamed from: v  reason: collision with root package name */
        private final String f19982v;

        /* renamed from: w  reason: collision with root package name */
        private final String f19983w;

        /* renamed from: x  reason: collision with root package name */
        private final String f19984x;

        /* renamed from: y  reason: collision with root package name */
        private final Map f19985y;

        /* renamed from: z  reason: collision with root package name */
        private final String f19986z;

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
            this.f19980t = str;
            this.f19981u = str2;
            this.f19982v = str3;
            this.f19983w = str4;
            this.f19984x = str5;
            this.f19985y = map;
            this.f19986z = str6;
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
                return Intrinsics.areEqual(this.f19980t, bVar.f19980t) && Intrinsics.areEqual(this.f19981u, bVar.f19981u) && Intrinsics.areEqual(this.f19982v, bVar.f19982v) && Intrinsics.areEqual(this.f19983w, bVar.f19983w) && Intrinsics.areEqual(this.f19984x, bVar.f19984x) && Intrinsics.areEqual(this.f19985y, bVar.f19985y) && Intrinsics.areEqual(this.f19986z, bVar.f19986z) && Intrinsics.areEqual(this.A, bVar.A);
            }
            return false;
        }

        public int hashCode() {
            String str = this.f19980t;
            int hashCode = (str == null ? 0 : str.hashCode()) * 31;
            String str2 = this.f19981u;
            int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
            String str3 = this.f19982v;
            int hashCode3 = (hashCode2 + (str3 == null ? 0 : str3.hashCode())) * 31;
            String str4 = this.f19983w;
            int hashCode4 = (hashCode3 + (str4 == null ? 0 : str4.hashCode())) * 31;
            String str5 = this.f19984x;
            int hashCode5 = (hashCode4 + (str5 == null ? 0 : str5.hashCode())) * 31;
            Map map = this.f19985y;
            int hashCode6 = (hashCode5 + (map == null ? 0 : map.hashCode())) * 31;
            String str6 = this.f19986z;
            int hashCode7 = (hashCode6 + (str6 == null ? 0 : str6.hashCode())) * 31;
            StaticInquiryTemplate staticInquiryTemplate = this.A;
            return hashCode7 + (staticInquiryTemplate != null ? staticInquiryTemplate.hashCode() : 0);
        }

        public final String j() {
            return this.f19982v;
        }

        public final String k() {
            return this.f19983w;
        }

        public final Map l() {
            return this.f19985y;
        }

        public final String o() {
            return this.f19984x;
        }

        public final String p() {
            return this.f19980t;
        }

        public final String q() {
            return this.f19981u;
        }

        public final String r() {
            return this.f19986z;
        }

        public String toString() {
            String str = this.f19980t;
            String str2 = this.f19981u;
            String str3 = this.f19982v;
            String str4 = this.f19983w;
            String str5 = this.f19984x;
            Map map = this.f19985y;
            String str6 = this.f19986z;
            StaticInquiryTemplate staticInquiryTemplate = this.A;
            return "CreateInquiryFromTemplate(templateId=" + str + ", templateVersion=" + str2 + ", accountId=" + str3 + ", environmentId=" + str4 + ", referenceId=" + str5 + ", fields=" + map + ", themeSetId=" + str6 + ", staticInquiryTemplate=" + staticInquiryTemplate + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19980t);
            dest.writeString(this.f19981u);
            dest.writeString(this.f19982v);
            dest.writeString(this.f19983w);
            dest.writeString(this.f19984x);
            Map map = this.f19985y;
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
            dest.writeString(this.f19986z);
            dest.writeParcelable(this.A, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends l {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: t  reason: collision with root package name */
        private final String f19987t;

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
            this.f19987t = inquiryId;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f19987t;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof c) && Intrinsics.areEqual(this.f19987t, ((c) obj).f19987t);
        }

        public int hashCode() {
            return this.f19987t.hashCode();
        }

        public String toString() {
            String str = this.f19987t;
            return "CreateInquirySession(inquiryId=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19987t);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends l implements j2 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();
        private final oo.l A;
        private final NextStep.Document.AssetConfig B;
        private final String C;

        /* renamed from: t  reason: collision with root package name */
        private final String f19988t;

        /* renamed from: u  reason: collision with root package name */
        private final String f19989u;

        /* renamed from: v  reason: collision with root package name */
        private final w f19990v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.DocumentStepStyle f19991w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.CancelDialog f19992x;

        /* renamed from: y  reason: collision with root package name */
        private final NextStep.Document f19993y;

        /* renamed from: z  reason: collision with root package name */
        private final String f19994z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new d(parcel.readString(), parcel.readString(), (w) parcel.readParcelable(d.class.getClassLoader()), (StepStyles.DocumentStepStyle) parcel.readParcelable(d.class.getClassLoader()), (NextStep.CancelDialog) parcel.readParcelable(d.class.getClassLoader()), (NextStep.Document) parcel.readParcelable(d.class.getClassLoader()), parcel.readString(), (oo.l) parcel.readParcelable(d.class.getClassLoader()), (NextStep.Document.AssetConfig) parcel.readParcelable(d.class.getClassLoader()), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        public /* synthetic */ d(String str, String str2, w wVar, StepStyles.DocumentStepStyle documentStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Document document, String str3, oo.l lVar, NextStep.Document.AssetConfig assetConfig, String str4, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, str2, (i10 & 4) != 0 ? null : wVar, documentStepStyle, cancelDialog, document, str3, lVar, assetConfig, str4);
        }

        public static /* synthetic */ d k(d dVar, String str, String str2, w wVar, StepStyles.DocumentStepStyle documentStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Document document, String str3, oo.l lVar, NextStep.Document.AssetConfig assetConfig, String str4, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = dVar.f19988t;
            }
            if ((i10 & 2) != 0) {
                str2 = dVar.f19989u;
            }
            if ((i10 & 4) != 0) {
                wVar = dVar.f19990v;
            }
            if ((i10 & 8) != 0) {
                documentStepStyle = dVar.f19991w;
            }
            if ((i10 & 16) != 0) {
                cancelDialog = dVar.f19992x;
            }
            if ((i10 & 32) != 0) {
                document = dVar.f19993y;
            }
            if ((i10 & 64) != 0) {
                str3 = dVar.f19994z;
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
            oo.l lVar2 = lVar;
            NextStep.CancelDialog cancelDialog2 = cancelDialog;
            NextStep.Document document2 = document;
            return dVar.j(str, str2, wVar, documentStepStyle, cancelDialog2, document2, str6, lVar2, assetConfig2, str5);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f19988t;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public NextStep.CancelDialog c() {
            return this.f19992x;
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
                return Intrinsics.areEqual(this.f19988t, dVar.f19988t) && Intrinsics.areEqual(this.f19989u, dVar.f19989u) && Intrinsics.areEqual(this.f19990v, dVar.f19990v) && Intrinsics.areEqual(this.f19991w, dVar.f19991w) && Intrinsics.areEqual(this.f19992x, dVar.f19992x) && Intrinsics.areEqual(this.f19993y, dVar.f19993y) && Intrinsics.areEqual(this.f19994z, dVar.f19994z) && Intrinsics.areEqual(this.A, dVar.A) && Intrinsics.areEqual(this.B, dVar.B) && Intrinsics.areEqual(this.C, dVar.C);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public w f() {
            return this.f19990v;
        }

        public int hashCode() {
            int hashCode = ((this.f19988t.hashCode() * 31) + this.f19989u.hashCode()) * 31;
            w wVar = this.f19990v;
            int hashCode2 = (hashCode + (wVar == null ? 0 : wVar.hashCode())) * 31;
            StepStyles.DocumentStepStyle documentStepStyle = this.f19991w;
            int hashCode3 = (hashCode2 + (documentStepStyle == null ? 0 : documentStepStyle.hashCode())) * 31;
            NextStep.CancelDialog cancelDialog = this.f19992x;
            int hashCode4 = (((((((hashCode3 + (cancelDialog == null ? 0 : cancelDialog.hashCode())) * 31) + this.f19993y.hashCode()) * 31) + this.f19994z.hashCode()) * 31) + this.A.hashCode()) * 31;
            NextStep.Document.AssetConfig assetConfig = this.B;
            return ((hashCode4 + (assetConfig != null ? assetConfig.hashCode() : 0)) * 31) + this.C.hashCode();
        }

        public final d j(String inquiryId, String sessionToken, w wVar, StepStyles.DocumentStepStyle documentStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Document documentStep, String fromComponent, oo.l pages, NextStep.Document.AssetConfig assetConfig, String fromStep) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(documentStep, "documentStep");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(pages, "pages");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            return new d(inquiryId, sessionToken, wVar, documentStepStyle, cancelDialog, documentStep, fromComponent, pages, assetConfig, fromStep);
        }

        public final NextStep.Document.AssetConfig l() {
            return this.B;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String m() {
            return this.f19989u;
        }

        public final NextStep.Document o() {
            return this.f19993y;
        }

        public final String p() {
            return this.f19994z;
        }

        public final oo.l q() {
            return this.A;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l, ep.j2
        /* renamed from: r */
        public StepStyles.DocumentStepStyle getStyles() {
            return this.f19991w;
        }

        public String toString() {
            String str = this.f19988t;
            String str2 = this.f19989u;
            w wVar = this.f19990v;
            StepStyles.DocumentStepStyle documentStepStyle = this.f19991w;
            NextStep.CancelDialog cancelDialog = this.f19992x;
            NextStep.Document document = this.f19993y;
            String str3 = this.f19994z;
            oo.l lVar = this.A;
            NextStep.Document.AssetConfig assetConfig = this.B;
            String str4 = this.C;
            return "DocumentStepRunning(inquiryId=" + str + ", sessionToken=" + str2 + ", transitionStatus=" + wVar + ", styles=" + documentStepStyle + ", cancelDialog=" + cancelDialog + ", documentStep=" + document + ", fromComponent=" + str3 + ", pages=" + lVar + ", assetConfig=" + assetConfig + ", fromStep=" + str4 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19988t);
            dest.writeString(this.f19989u);
            dest.writeParcelable(this.f19990v, i10);
            dest.writeParcelable(this.f19991w, i10);
            dest.writeParcelable(this.f19992x, i10);
            dest.writeParcelable(this.f19993y, i10);
            dest.writeString(this.f19994z);
            dest.writeParcelable(this.A, i10);
            dest.writeParcelable(this.B, i10);
            dest.writeString(this.C);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String inquiryId, String sessionToken, w wVar, StepStyles.DocumentStepStyle documentStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Document documentStep, String fromComponent, oo.l pages, NextStep.Document.AssetConfig assetConfig, String fromStep) {
            super(null, null, null, null, null, null, null, 127, null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(documentStep, "documentStep");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(pages, "pages");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            this.f19988t = inquiryId;
            this.f19989u = sessionToken;
            this.f19990v = wVar;
            this.f19991w = documentStepStyle;
            this.f19992x = cancelDialog;
            this.f19993y = documentStep;
            this.f19994z = fromComponent;
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
        private final String f19995t;

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
            this.f19995t = oneTimeLinkCode;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof e) && Intrinsics.areEqual(this.f19995t, ((e) obj).f19995t);
        }

        public int hashCode() {
            return this.f19995t.hashCode();
        }

        public final String j() {
            return this.f19995t;
        }

        public String toString() {
            String str = this.f19995t;
            return "ExchangeOneTimeCode(oneTimeLinkCode=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19995t);
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
        private final uo.a Q;
        private final StyleElements.Axis R;
        private final PendingPageTextPosition S;
        private final boolean T;
        private final yo.a U;

        /* renamed from: t  reason: collision with root package name */
        private final String f19996t;

        /* renamed from: u  reason: collision with root package name */
        private final String f19997u;

        /* renamed from: v  reason: collision with root package name */
        private final w f19998v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f19999w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.CancelDialog f20000x;

        /* renamed from: y  reason: collision with root package name */
        private final String f20001y;

        /* renamed from: z  reason: collision with root package name */
        private final List f20002z;

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
                return new f(readString, readString2, wVar, governmentIdStepStyle, cancelDialog, readString3, arrayList2, readString4, readString5, z11, z10, localizations, arrayList, arrayList3, readInt4, readLong, readString6, readString7, z12, arrayList4, arrayList5, parcel.readString(), (NextStep.GovernmentId.AssetConfig) parcel.readParcelable(cls2.getClassLoader()), (uo.a) parcel.readParcelable(cls2.getClassLoader()), StyleElements.Axis.valueOf(parcel.readString()), PendingPageTextPosition.valueOf(parcel.readString()), parcel.readInt() != 0 ? 1 : i10, (yo.a) parcel.readParcelable(cls2.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final f[] newArray(int i10) {
                return new f[i10];
            }
        }

        public /* synthetic */ f(String str, String str2, w wVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.CancelDialog cancelDialog, String str3, List list, String str4, String str5, boolean z10, boolean z11, NextStep.GovernmentId.Localizations localizations, List list2, List list3, int i10, long j10, String str6, String str7, boolean z12, List list4, List list5, String str8, NextStep.GovernmentId.AssetConfig assetConfig, uo.a aVar, StyleElements.Axis axis, PendingPageTextPosition pendingPageTextPosition, boolean z13, yo.a aVar2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, str2, (i11 & 4) != 0 ? null : wVar, governmentIdStepStyle, cancelDialog, str3, list, str4, str5, z10, z11, localizations, list2, list3, i10, j10, str6, str7, z12, list4, list5, str8, assetConfig, aVar, axis, pendingPageTextPosition, z13, aVar2);
        }

        public static /* synthetic */ f k(f fVar, String str, String str2, w wVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.CancelDialog cancelDialog, String str3, List list, String str4, String str5, boolean z10, boolean z11, NextStep.GovernmentId.Localizations localizations, List list2, List list3, int i10, long j10, String str6, String str7, boolean z12, List list4, List list5, String str8, NextStep.GovernmentId.AssetConfig assetConfig, uo.a aVar, StyleElements.Axis axis, PendingPageTextPosition pendingPageTextPosition, boolean z13, yo.a aVar2, int i11, Object obj) {
            yo.a aVar3;
            boolean z14;
            String str9 = (i11 & 1) != 0 ? fVar.f19996t : str;
            String str10 = (i11 & 2) != 0 ? fVar.f19997u : str2;
            w wVar2 = (i11 & 4) != 0 ? fVar.f19998v : wVar;
            StepStyles.GovernmentIdStepStyle governmentIdStepStyle2 = (i11 & 8) != 0 ? fVar.f19999w : governmentIdStepStyle;
            NextStep.CancelDialog cancelDialog2 = (i11 & 16) != 0 ? fVar.f20000x : cancelDialog;
            String str11 = (i11 & 32) != 0 ? fVar.f20001y : str3;
            List list6 = (i11 & 64) != 0 ? fVar.f20002z : list;
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
            uo.a aVar4 = (i11 & 8388608) != 0 ? fVar.Q : aVar;
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

        public final String A() {
            return this.K;
        }

        public final String B() {
            return this.A;
        }

        public final int C() {
            return this.H;
        }

        public final List D() {
            return this.F;
        }

        public final NextStep.GovernmentId.Localizations E() {
            return this.E;
        }

        public final long F() {
            return this.I;
        }

        public final PendingPageTextPosition G() {
            return this.S;
        }

        public final StyleElements.Axis H() {
            return this.R;
        }

        public final boolean K() {
            return this.L;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l, ep.j2
        /* renamed from: L */
        public StepStyles.GovernmentIdStepStyle getStyles() {
            return this.f19999w;
        }

        public final List M() {
            return this.N;
        }

        public final String N() {
            return this.O;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f19996t;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public NextStep.CancelDialog c() {
            return this.f20000x;
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
                return Intrinsics.areEqual(this.f19996t, fVar.f19996t) && Intrinsics.areEqual(this.f19997u, fVar.f19997u) && Intrinsics.areEqual(this.f19998v, fVar.f19998v) && Intrinsics.areEqual(this.f19999w, fVar.f19999w) && Intrinsics.areEqual(this.f20000x, fVar.f20000x) && Intrinsics.areEqual(this.f20001y, fVar.f20001y) && Intrinsics.areEqual(this.f20002z, fVar.f20002z) && Intrinsics.areEqual(this.A, fVar.A) && Intrinsics.areEqual(this.B, fVar.B) && this.C == fVar.C && this.D == fVar.D && Intrinsics.areEqual(this.E, fVar.E) && Intrinsics.areEqual(this.F, fVar.F) && Intrinsics.areEqual(this.G, fVar.G) && this.H == fVar.H && this.I == fVar.I && Intrinsics.areEqual(this.J, fVar.J) && Intrinsics.areEqual(this.K, fVar.K) && this.L == fVar.L && Intrinsics.areEqual(this.M, fVar.M) && Intrinsics.areEqual(this.N, fVar.N) && Intrinsics.areEqual(this.O, fVar.O) && Intrinsics.areEqual(this.P, fVar.P) && Intrinsics.areEqual(this.Q, fVar.Q) && this.R == fVar.R && this.S == fVar.S && this.T == fVar.T && Intrinsics.areEqual(this.U, fVar.U);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public w f() {
            return this.f19998v;
        }

        public int hashCode() {
            int hashCode = ((this.f19996t.hashCode() * 31) + this.f19997u.hashCode()) * 31;
            w wVar = this.f19998v;
            int hashCode2 = (hashCode + (wVar == null ? 0 : wVar.hashCode())) * 31;
            StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f19999w;
            int hashCode3 = (hashCode2 + (governmentIdStepStyle == null ? 0 : governmentIdStepStyle.hashCode())) * 31;
            NextStep.CancelDialog cancelDialog = this.f20000x;
            int hashCode4 = (hashCode3 + (cancelDialog == null ? 0 : cancelDialog.hashCode())) * 31;
            String str = this.f20001y;
            int hashCode5 = (((((((((((((hashCode4 + (str == null ? 0 : str.hashCode())) * 31) + this.f20002z.hashCode()) * 31) + this.A.hashCode()) * 31) + this.B.hashCode()) * 31) + Boolean.hashCode(this.C)) * 31) + Boolean.hashCode(this.D)) * 31) + this.E.hashCode()) * 31;
            List list = this.F;
            int hashCode6 = (((((((((((((((((hashCode5 + (list == null ? 0 : list.hashCode())) * 31) + this.G.hashCode()) * 31) + Integer.hashCode(this.H)) * 31) + Long.hashCode(this.I)) * 31) + this.J.hashCode()) * 31) + this.K.hashCode()) * 31) + Boolean.hashCode(this.L)) * 31) + this.M.hashCode()) * 31) + this.N.hashCode()) * 31;
            String str2 = this.O;
            int hashCode7 = (hashCode6 + (str2 == null ? 0 : str2.hashCode())) * 31;
            NextStep.GovernmentId.AssetConfig assetConfig = this.P;
            int hashCode8 = (((((((((hashCode7 + (assetConfig == null ? 0 : assetConfig.hashCode())) * 31) + this.Q.hashCode()) * 31) + this.R.hashCode()) * 31) + this.S.hashCode()) * 31) + Boolean.hashCode(this.T)) * 31;
            yo.a aVar = this.U;
            return hashCode8 + (aVar != null ? aVar.hashCode() : 0);
        }

        public final f j(String inquiryId, String sessionToken, w wVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.CancelDialog cancelDialog, String str, List enabledIdClasses, String fromComponent, String fromStep, boolean z10, boolean z11, NextStep.GovernmentId.Localizations localizations, List list, List enabledCaptureOptionsNativeMobile, int i10, long j10, String fieldKeyDocument, String fieldKeyIdClass, boolean z12, List enabledCaptureFileTypes, List videoCaptureMethods, String str2, NextStep.GovernmentId.AssetConfig assetConfig, uo.a autoClassificationConfig, StyleElements.Axis reviewCaptureButtonsAxis, PendingPageTextPosition pendingPageTextVerticalPosition, boolean z13, yo.a aVar) {
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

        public final NextStep.GovernmentId.AssetConfig l() {
            return this.P;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String m() {
            return this.f19997u;
        }

        public final boolean o() {
            return this.T;
        }

        public final uo.a p() {
            return this.Q;
        }

        public final boolean q() {
            return this.C;
        }

        public final boolean r() {
            return this.D;
        }

        public final String s() {
            return this.f20001y;
        }

        public final yo.a t() {
            return this.U;
        }

        public String toString() {
            String str = this.f19996t;
            String str2 = this.f19997u;
            w wVar = this.f19998v;
            StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f19999w;
            NextStep.CancelDialog cancelDialog = this.f20000x;
            String str3 = this.f20001y;
            List list = this.f20002z;
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
            uo.a aVar = this.Q;
            StyleElements.Axis axis = this.R;
            PendingPageTextPosition pendingPageTextPosition = this.S;
            boolean z13 = this.T;
            yo.a aVar2 = this.U;
            return "GovernmentIdStepRunning(inquiryId=" + str + ", sessionToken=" + str2 + ", transitionStatus=" + wVar + ", styles=" + governmentIdStepStyle + ", cancelDialog=" + cancelDialog + ", countryCode=" + str3 + ", enabledIdClasses=" + list + ", fromComponent=" + str4 + ", fromStep=" + str5 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", localizations=" + localizations + ", localizationOverrides=" + list2 + ", enabledCaptureOptionsNativeMobile=" + list3 + ", imageCaptureCount=" + i10 + ", manualCaptureButtonDelayMs=" + j10 + ", fieldKeyDocument=" + str6 + ", fieldKeyIdClass=" + str7 + ", shouldSkipReviewScreen=" + z12 + ", enabledCaptureFileTypes=" + list4 + ", videoCaptureMethods=" + list5 + ", webRtcJwt=" + str8 + ", assetConfig=" + assetConfig + ", autoClassificationConfig=" + aVar + ", reviewCaptureButtonsAxis=" + axis + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ", audioEnabled=" + z13 + ", digitalIdConfig=" + aVar2 + ")";
        }

        public final List u() {
            return this.M;
        }

        public final List v() {
            return this.G;
        }

        public final List w() {
            return this.f20002z;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19996t);
            dest.writeString(this.f19997u);
            dest.writeParcelable(this.f19998v, i10);
            dest.writeParcelable(this.f19999w, i10);
            dest.writeParcelable(this.f20000x, i10);
            dest.writeString(this.f20001y);
            List<Parcelable> list = this.f20002z;
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

        public final String x() {
            return this.J;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String inquiryId, String sessionToken, w wVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.CancelDialog cancelDialog, String str, List enabledIdClasses, String fromComponent, String fromStep, boolean z10, boolean z11, NextStep.GovernmentId.Localizations localizations, List list, List enabledCaptureOptionsNativeMobile, int i10, long j10, String fieldKeyDocument, String fieldKeyIdClass, boolean z12, List enabledCaptureFileTypes, List videoCaptureMethods, String str2, NextStep.GovernmentId.AssetConfig assetConfig, uo.a autoClassificationConfig, StyleElements.Axis reviewCaptureButtonsAxis, PendingPageTextPosition pendingPageTextVerticalPosition, boolean z13, yo.a aVar) {
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
            this.f19996t = inquiryId;
            this.f19997u = sessionToken;
            this.f19998v = wVar;
            this.f19999w = governmentIdStepStyle;
            this.f20000x = cancelDialog;
            this.f20001y = str;
            this.f20002z = enabledIdClasses;
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
        private final String f20003t;

        /* renamed from: u  reason: collision with root package name */
        private final String f20004u;

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
            this.f20003t = fallbackInquiryId;
            this.f20004u = fallbackSessionToken;
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
                return Intrinsics.areEqual(this.f20003t, gVar.f20003t) && Intrinsics.areEqual(this.f20004u, gVar.f20004u);
            }
            return false;
        }

        public int hashCode() {
            return (this.f20003t.hashCode() * 31) + this.f20004u.hashCode();
        }

        public final String j() {
            return this.f20003t;
        }

        public final String k() {
            return this.f20004u;
        }

        public String toString() {
            String str = this.f20003t;
            String str2 = this.f20004u;
            return "ResumeFallbackInquiry(fallbackInquiryId=" + str + ", fallbackSessionToken=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f20003t);
            dest.writeString(this.f20004u);
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
        private final wp.b0 P;

        /* renamed from: t  reason: collision with root package name */
        private final String f20005t;

        /* renamed from: u  reason: collision with root package name */
        private final String f20006u;

        /* renamed from: v  reason: collision with root package name */
        private final w f20007v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.SelfieStepStyle f20008w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.CancelDialog f20009x;

        /* renamed from: y  reason: collision with root package name */
        private final NextStep.Selfie.CaptureMethod f20010y;

        /* renamed from: z  reason: collision with root package name */
        private final String f20011z;

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
                return new h(str2, readString2, wVar, selfieStepStyle, cancelDialog, valueOf, readString3, readString4, z15, z16, str, z13, z12, localizations, arrayList2, arrayList3, assetConfig, readString6, arrayList, valueOf2, z14, (s0) parcel.readParcelable(cls.getClassLoader()), wp.b0.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final h[] newArray(int i10) {
                return new h[i10];
            }
        }

        public /* synthetic */ h(String str, String str2, w wVar, StepStyles.SelfieStepStyle selfieStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Selfie.CaptureMethod captureMethod, String str3, String str4, boolean z10, boolean z11, String str5, boolean z12, boolean z13, NextStep.Selfie.Localizations localizations, List list, List list2, NextStep.Selfie.AssetConfig assetConfig, String str6, List list3, PendingPageTextPosition pendingPageTextPosition, boolean z14, s0 s0Var, wp.b0 b0Var, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, str2, (i10 & 4) != 0 ? null : wVar, selfieStepStyle, cancelDialog, captureMethod, str3, str4, z10, z11, str5, z12, z13, localizations, list, list2, assetConfig, str6, list3, pendingPageTextPosition, z14, s0Var, b0Var);
        }

        public static /* synthetic */ h k(h hVar, String str, String str2, w wVar, StepStyles.SelfieStepStyle selfieStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Selfie.CaptureMethod captureMethod, String str3, String str4, boolean z10, boolean z11, String str5, boolean z12, boolean z13, NextStep.Selfie.Localizations localizations, List list, List list2, NextStep.Selfie.AssetConfig assetConfig, String str6, List list3, PendingPageTextPosition pendingPageTextPosition, boolean z14, s0 s0Var, wp.b0 b0Var, int i10, Object obj) {
            wp.b0 b0Var2;
            s0 s0Var2;
            String str7 = (i10 & 1) != 0 ? hVar.f20005t : str;
            String str8 = (i10 & 2) != 0 ? hVar.f20006u : str2;
            w wVar2 = (i10 & 4) != 0 ? hVar.f20007v : wVar;
            StepStyles.SelfieStepStyle selfieStepStyle2 = (i10 & 8) != 0 ? hVar.f20008w : selfieStepStyle;
            NextStep.CancelDialog cancelDialog2 = (i10 & 16) != 0 ? hVar.f20009x : cancelDialog;
            NextStep.Selfie.CaptureMethod captureMethod2 = (i10 & 32) != 0 ? hVar.f20010y : captureMethod;
            String str9 = (i10 & 64) != 0 ? hVar.f20011z : str3;
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

        public final s0 A() {
            return this.O;
        }

        public final boolean B() {
            return this.E;
        }

        public final NextStep.Selfie.CaptureMethod C() {
            return this.f20010y;
        }

        public final boolean D() {
            return this.F;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l, ep.j2
        /* renamed from: E */
        public StepStyles.SelfieStepStyle getStyles() {
            return this.f20008w;
        }

        public final List F() {
            return this.I;
        }

        public final String G() {
            return this.K;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f20005t;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public NextStep.CancelDialog c() {
            return this.f20009x;
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
                return Intrinsics.areEqual(this.f20005t, hVar.f20005t) && Intrinsics.areEqual(this.f20006u, hVar.f20006u) && Intrinsics.areEqual(this.f20007v, hVar.f20007v) && Intrinsics.areEqual(this.f20008w, hVar.f20008w) && Intrinsics.areEqual(this.f20009x, hVar.f20009x) && this.f20010y == hVar.f20010y && Intrinsics.areEqual(this.f20011z, hVar.f20011z) && Intrinsics.areEqual(this.A, hVar.A) && this.B == hVar.B && this.C == hVar.C && Intrinsics.areEqual(this.D, hVar.D) && this.E == hVar.E && this.F == hVar.F && Intrinsics.areEqual(this.G, hVar.G) && Intrinsics.areEqual(this.H, hVar.H) && Intrinsics.areEqual(this.I, hVar.I) && Intrinsics.areEqual(this.J, hVar.J) && Intrinsics.areEqual(this.K, hVar.K) && Intrinsics.areEqual(this.L, hVar.L) && this.M == hVar.M && this.N == hVar.N && Intrinsics.areEqual(this.O, hVar.O) && this.P == hVar.P;
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public w f() {
            return this.f20007v;
        }

        public int hashCode() {
            int hashCode = ((this.f20005t.hashCode() * 31) + this.f20006u.hashCode()) * 31;
            w wVar = this.f20007v;
            int hashCode2 = (hashCode + (wVar == null ? 0 : wVar.hashCode())) * 31;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f20008w;
            int hashCode3 = (hashCode2 + (selfieStepStyle == null ? 0 : selfieStepStyle.hashCode())) * 31;
            NextStep.CancelDialog cancelDialog = this.f20009x;
            int hashCode4 = (((((((((((((((((((((((hashCode3 + (cancelDialog == null ? 0 : cancelDialog.hashCode())) * 31) + this.f20010y.hashCode()) * 31) + this.f20011z.hashCode()) * 31) + this.A.hashCode()) * 31) + Boolean.hashCode(this.B)) * 31) + Boolean.hashCode(this.C)) * 31) + this.D.hashCode()) * 31) + Boolean.hashCode(this.E)) * 31) + Boolean.hashCode(this.F)) * 31) + this.G.hashCode()) * 31) + this.H.hashCode()) * 31) + this.I.hashCode()) * 31;
            NextStep.Selfie.AssetConfig assetConfig = this.J;
            int hashCode5 = (hashCode4 + (assetConfig == null ? 0 : assetConfig.hashCode())) * 31;
            String str = this.K;
            int hashCode6 = (hashCode5 + (str == null ? 0 : str.hashCode())) * 31;
            List list = this.L;
            return ((((((((hashCode6 + (list != null ? list.hashCode() : 0)) * 31) + this.M.hashCode()) * 31) + Boolean.hashCode(this.N)) * 31) + this.O.hashCode()) * 31) + this.P.hashCode();
        }

        public final h j(String inquiryId, String sessionToken, w wVar, StepStyles.SelfieStepStyle selfieStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Selfie.CaptureMethod selfieType, String fromComponent, String fromStep, boolean z10, boolean z11, String fieldKeySelfie, boolean z12, boolean z13, NextStep.Selfie.Localizations localizations, List enabledCaptureFileTypes, List videoCaptureMethods, NextStep.Selfie.AssetConfig assetConfig, String str, List list, PendingPageTextPosition pendingPageTextVerticalPosition, boolean z14, s0 poseConfigs, wp.b0 designVersion) {
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

        public final NextStep.Selfie.AssetConfig l() {
            return this.J;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String m() {
            return this.f20006u;
        }

        public final boolean o() {
            return this.N;
        }

        public final boolean p() {
            return this.B;
        }

        public final boolean q() {
            return this.C;
        }

        public final wp.b0 r() {
            return this.P;
        }

        public final List s() {
            return this.H;
        }

        public final String t() {
            return this.D;
        }

        public String toString() {
            String str = this.f20005t;
            String str2 = this.f20006u;
            w wVar = this.f20007v;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f20008w;
            NextStep.CancelDialog cancelDialog = this.f20009x;
            NextStep.Selfie.CaptureMethod captureMethod = this.f20010y;
            String str3 = this.f20011z;
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
            wp.b0 b0Var = this.P;
            return "SelfieStepRunning(inquiryId=" + str + ", sessionToken=" + str2 + ", transitionStatus=" + wVar + ", styles=" + selfieStepStyle + ", cancelDialog=" + cancelDialog + ", selfieType=" + captureMethod + ", fromComponent=" + str3 + ", fromStep=" + str4 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", fieldKeySelfie=" + str5 + ", requireStrictSelfieCapture=" + z12 + ", skipPromptPage=" + z13 + ", localizations=" + localizations + ", enabledCaptureFileTypes=" + list + ", videoCaptureMethods=" + list2 + ", assetConfig=" + assetConfig + ", webRtcJwt=" + str6 + ", orderedPoses=" + list3 + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ", audioEnabled=" + z14 + ", poseConfigs=" + s0Var + ", designVersion=" + b0Var + ")";
        }

        public final String u() {
            return this.f20011z;
        }

        public final NextStep.Selfie.Localizations v() {
            return this.G;
        }

        public final List w() {
            return this.L;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f20005t);
            dest.writeString(this.f20006u);
            dest.writeParcelable(this.f20007v, i10);
            dest.writeParcelable(this.f20008w, i10);
            dest.writeParcelable(this.f20009x, i10);
            dest.writeString(this.f20010y.name());
            dest.writeString(this.f20011z);
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

        public final PendingPageTextPosition x() {
            return this.M;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String inquiryId, String sessionToken, w wVar, StepStyles.SelfieStepStyle selfieStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Selfie.CaptureMethod selfieType, String fromComponent, String fromStep, boolean z10, boolean z11, String fieldKeySelfie, boolean z12, boolean z13, NextStep.Selfie.Localizations localizations, List enabledCaptureFileTypes, List videoCaptureMethods, NextStep.Selfie.AssetConfig assetConfig, String str, List list, PendingPageTextPosition pendingPageTextVerticalPosition, boolean z14, s0 poseConfigs, wp.b0 designVersion) {
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
            this.f20005t = inquiryId;
            this.f20006u = sessionToken;
            this.f20007v = wVar;
            this.f20008w = selfieStepStyle;
            this.f20009x = cancelDialog;
            this.f20010y = selfieType;
            this.f20011z = fromComponent;
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
        private final iq.g J;
        private final boolean K;

        /* renamed from: t  reason: collision with root package name */
        private final String f20018t;

        /* renamed from: u  reason: collision with root package name */
        private final String f20019u;

        /* renamed from: v  reason: collision with root package name */
        private final w f20020v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.UiStepStyle f20021w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.CancelDialog f20022x;

        /* renamed from: y  reason: collision with root package name */
        private final NextStep.Ui.Localizations f20023y;

        /* renamed from: z  reason: collision with root package name */
        private final String f20024z;

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
                iq.g gVar = (iq.g) parcel.readParcelable(j.class.getClassLoader());
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

        public /* synthetic */ j(String str, String str2, w wVar, StepStyles.UiStepStyle uiStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Ui.Localizations localizations, String str3, String str4, List list, boolean z10, boolean z11, boolean z12, Map map, String str5, List list2, InternalErrorInfo internalErrorInfo, iq.g gVar, boolean z13, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, str2, (i10 & 4) != 0 ? null : wVar, uiStepStyle, cancelDialog, localizations, str3, str4, list, z10, z11, z12, map, str5, list2, (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? null : internalErrorInfo, (i10 & 65536) != 0 ? iq.g.f30404o.a() : gVar, z13);
        }

        public static /* synthetic */ j k(j jVar, String str, String str2, w wVar, StepStyles.UiStepStyle uiStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Ui.Localizations localizations, String str3, String str4, List list, boolean z10, boolean z11, boolean z12, Map map, String str5, List list2, InternalErrorInfo internalErrorInfo, iq.g gVar, boolean z13, int i10, Object obj) {
            boolean z14;
            iq.g gVar2;
            String str6 = (i10 & 1) != 0 ? jVar.f20018t : str;
            String str7 = (i10 & 2) != 0 ? jVar.f20019u : str2;
            w wVar2 = (i10 & 4) != 0 ? jVar.f20020v : wVar;
            StepStyles.UiStepStyle uiStepStyle2 = (i10 & 8) != 0 ? jVar.f20021w : uiStepStyle;
            NextStep.CancelDialog cancelDialog2 = (i10 & 16) != 0 ? jVar.f20022x : cancelDialog;
            NextStep.Ui.Localizations localizations2 = (i10 & 32) != 0 ? jVar.f20023y : localizations;
            String str8 = (i10 & 64) != 0 ? jVar.f20024z : str3;
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
            iq.g gVar3 = (i10 & 65536) != 0 ? jVar.J : gVar;
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
        public iq.g a() {
            return this.J;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f20018t;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public NextStep.CancelDialog c() {
            return this.f20022x;
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
                return Intrinsics.areEqual(this.f20018t, jVar.f20018t) && Intrinsics.areEqual(this.f20019u, jVar.f20019u) && Intrinsics.areEqual(this.f20020v, jVar.f20020v) && Intrinsics.areEqual(this.f20021w, jVar.f20021w) && Intrinsics.areEqual(this.f20022x, jVar.f20022x) && Intrinsics.areEqual(this.f20023y, jVar.f20023y) && Intrinsics.areEqual(this.f20024z, jVar.f20024z) && Intrinsics.areEqual(this.A, jVar.A) && Intrinsics.areEqual(this.B, jVar.B) && this.C == jVar.C && this.D == jVar.D && this.E == jVar.E && Intrinsics.areEqual(this.F, jVar.F) && Intrinsics.areEqual(this.G, jVar.G) && Intrinsics.areEqual(this.H, jVar.H) && Intrinsics.areEqual(this.I, jVar.I) && Intrinsics.areEqual(this.J, jVar.J) && this.K == jVar.K;
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public w f() {
            return this.f20020v;
        }

        public final List getComponents() {
            return this.B;
        }

        public int hashCode() {
            int hashCode = ((this.f20018t.hashCode() * 31) + this.f20019u.hashCode()) * 31;
            w wVar = this.f20020v;
            int hashCode2 = (hashCode + (wVar == null ? 0 : wVar.hashCode())) * 31;
            StepStyles.UiStepStyle uiStepStyle = this.f20021w;
            int hashCode3 = (hashCode2 + (uiStepStyle == null ? 0 : uiStepStyle.hashCode())) * 31;
            NextStep.CancelDialog cancelDialog = this.f20022x;
            int hashCode4 = (hashCode3 + (cancelDialog == null ? 0 : cancelDialog.hashCode())) * 31;
            NextStep.Ui.Localizations localizations = this.f20023y;
            int hashCode5 = (((((hashCode4 + (localizations == null ? 0 : localizations.hashCode())) * 31) + this.f20024z.hashCode()) * 31) + this.A.hashCode()) * 31;
            List list = this.B;
            int hashCode6 = (((((((((((hashCode5 + (list == null ? 0 : list.hashCode())) * 31) + Boolean.hashCode(this.C)) * 31) + Boolean.hashCode(this.D)) * 31) + Boolean.hashCode(this.E)) * 31) + this.F.hashCode()) * 31) + this.G.hashCode()) * 31;
            List list2 = this.H;
            int hashCode7 = (hashCode6 + (list2 == null ? 0 : list2.hashCode())) * 31;
            InternalErrorInfo internalErrorInfo = this.I;
            return ((((hashCode7 + (internalErrorInfo != null ? internalErrorInfo.hashCode() : 0)) * 31) + this.J.hashCode()) * 31) + Boolean.hashCode(this.K);
        }

        public final j j(String inquiryId, String sessionToken, w wVar, StepStyles.UiStepStyle uiStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Ui.Localizations localizations, String inquiryStatus, String stepName, List list, boolean z10, boolean z11, boolean z12, Map fields, String clientSideKey, List list2, InternalErrorInfo internalErrorInfo, iq.g inquirySessionConfig, boolean z13) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryStatus, "inquiryStatus");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(fields, "fields");
            Intrinsics.checkNotNullParameter(clientSideKey, "clientSideKey");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            return new j(inquiryId, sessionToken, wVar, uiStepStyle, cancelDialog, localizations, inquiryStatus, stepName, list, z10, z11, z12, fields, clientSideKey, list2, internalErrorInfo, inquirySessionConfig, z13);
        }

        public final boolean l() {
            return this.C;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String m() {
            return this.f20019u;
        }

        public final boolean o() {
            return this.D;
        }

        public final String p() {
            return this.G;
        }

        public final Map q() {
            return this.F;
        }

        public final boolean r() {
            return this.E;
        }

        public final String s() {
            return this.f20024z;
        }

        public final NextStep.Ui.Localizations t() {
            return this.f20023y;
        }

        public String toString() {
            String str = this.f20018t;
            String str2 = this.f20019u;
            w wVar = this.f20020v;
            StepStyles.UiStepStyle uiStepStyle = this.f20021w;
            NextStep.CancelDialog cancelDialog = this.f20022x;
            NextStep.Ui.Localizations localizations = this.f20023y;
            String str3 = this.f20024z;
            String str4 = this.A;
            List list = this.B;
            boolean z10 = this.C;
            boolean z11 = this.D;
            boolean z12 = this.E;
            Map map = this.F;
            String str5 = this.G;
            List list2 = this.H;
            InternalErrorInfo internalErrorInfo = this.I;
            iq.g gVar = this.J;
            boolean z13 = this.K;
            return "UiStepRunning(inquiryId=" + str + ", sessionToken=" + str2 + ", transitionStatus=" + wVar + ", styles=" + uiStepStyle + ", cancelDialog=" + cancelDialog + ", localizations=" + localizations + ", inquiryStatus=" + str3 + ", stepName=" + str4 + ", components=" + list + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", finalStep=" + z12 + ", fields=" + map + ", clientSideKey=" + str5 + ", serverComponentErrors=" + list2 + ", transitionError=" + internalErrorInfo + ", inquirySessionConfig=" + gVar + ", isRestoringState=" + z13 + ")";
        }

        public final List u() {
            return this.H;
        }

        public final String v() {
            return this.A;
        }

        public final InternalErrorInfo w() {
            return this.I;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f20018t);
            dest.writeString(this.f20019u);
            dest.writeParcelable(this.f20020v, i10);
            dest.writeParcelable(this.f20021w, i10);
            dest.writeParcelable(this.f20022x, i10);
            dest.writeParcelable(this.f20023y, i10);
            dest.writeString(this.f20024z);
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

        public final boolean x() {
            return this.K;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l, ep.j2
        public StepStyles.UiStepStyle getStyles() {
            return this.f20021w;
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(String inquiryId, String sessionToken, w wVar, StepStyles.UiStepStyle uiStepStyle, NextStep.CancelDialog cancelDialog, NextStep.Ui.Localizations localizations, String inquiryStatus, String stepName, List list, boolean z10, boolean z11, boolean z12, Map fields, String clientSideKey, List list2, InternalErrorInfo internalErrorInfo, iq.g inquirySessionConfig, boolean z13) {
            super(null, null, null, null, null, null, null, 127, null);
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryStatus, "inquiryStatus");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(fields, "fields");
            Intrinsics.checkNotNullParameter(clientSideKey, "clientSideKey");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f20018t = inquiryId;
            this.f20019u = sessionToken;
            this.f20020v = wVar;
            this.f20021w = uiStepStyle;
            this.f20022x = cancelDialog;
            this.f20023y = localizations;
            this.f20024z = inquiryStatus;
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

    public /* synthetic */ l(String str, String str2, w wVar, StepStyle stepStyle, NextStep.CancelDialog cancelDialog, String str3, iq.g gVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, wVar, stepStyle, cancelDialog, str3, gVar);
    }

    public iq.g a() {
        return this.f19973r;
    }

    public String b() {
        return this.f19968e;
    }

    public NextStep.CancelDialog c() {
        return this.f19971p;
    }

    public final boolean d() {
        return this.f19974s;
    }

    public String e() {
        return this.f19972q;
    }

    public w f() {
        return this.f19969i;
    }

    public final void g(boolean z10) {
        this.f19974s = z10;
    }

    public StepStyle getStyles() {
        return this.f19970o;
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
        throw new as.p();
    }

    public String m() {
        return this.f19967d;
    }

    private l(String str, String str2, w wVar, StepStyle stepStyle, NextStep.CancelDialog cancelDialog, String str3, iq.g gVar) {
        this.f19967d = str;
        this.f19968e = str2;
        this.f19969i = wVar;
        this.f19970o = stepStyle;
        this.f19971p = cancelDialog;
        this.f19972q = str3;
        this.f19973r = gVar;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends l {
        @NotNull
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: t  reason: collision with root package name */
        private final String f20012t;

        /* renamed from: u  reason: collision with root package name */
        private final w f20013u;

        /* renamed from: v  reason: collision with root package name */
        private final String f20014v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyle f20015w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f20016x;

        /* renamed from: y  reason: collision with root package name */
        private final iq.g f20017y;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final i createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new i(parcel.readString(), (w) parcel.readParcelable(i.class.getClassLoader()), parcel.readString(), (StepStyle) parcel.readParcelable(i.class.getClassLoader()), parcel.readInt() != 0, (iq.g) parcel.readParcelable(i.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final i[] newArray(int i10) {
                return new i[i10];
            }
        }

        public /* synthetic */ i(String str, w wVar, String str2, StepStyle stepStyle, boolean z10, iq.g gVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? new w.a(null, 1, null) : wVar, str2, stepStyle, z10, (i10 & 32) != 0 ? iq.g.f30404o.a() : gVar);
        }

        public static /* synthetic */ i k(i iVar, String str, w wVar, String str2, StepStyle stepStyle, boolean z10, iq.g gVar, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = iVar.f20012t;
            }
            if ((i10 & 2) != 0) {
                wVar = iVar.f20013u;
            }
            if ((i10 & 4) != 0) {
                str2 = iVar.f20014v;
            }
            if ((i10 & 8) != 0) {
                stepStyle = iVar.f20015w;
            }
            if ((i10 & 16) != 0) {
                z10 = iVar.f20016x;
            }
            if ((i10 & 32) != 0) {
                gVar = iVar.f20017y;
            }
            boolean z11 = z10;
            iq.g gVar2 = gVar;
            return iVar.j(str, wVar, str2, stepStyle, z11, gVar2);
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public iq.g a() {
            return this.f20017y;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String b() {
            return this.f20014v;
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
                return Intrinsics.areEqual(this.f20012t, iVar.f20012t) && Intrinsics.areEqual(this.f20013u, iVar.f20013u) && Intrinsics.areEqual(this.f20014v, iVar.f20014v) && Intrinsics.areEqual(this.f20015w, iVar.f20015w) && this.f20016x == iVar.f20016x && Intrinsics.areEqual(this.f20017y, iVar.f20017y);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public w f() {
            return this.f20013u;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l, ep.j2
        public StepStyle getStyles() {
            return this.f20015w;
        }

        public int hashCode() {
            int hashCode = this.f20012t.hashCode() * 31;
            w wVar = this.f20013u;
            int hashCode2 = (((hashCode + (wVar == null ? 0 : wVar.hashCode())) * 31) + this.f20014v.hashCode()) * 31;
            StepStyle stepStyle = this.f20015w;
            return ((((hashCode2 + (stepStyle != null ? stepStyle.hashCode() : 0)) * 31) + Boolean.hashCode(this.f20016x)) * 31) + this.f20017y.hashCode();
        }

        public final i j(String sessionToken, w wVar, String inquiryId, StepStyle stepStyle, boolean z10, iq.g inquirySessionConfig) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            return new i(sessionToken, wVar, inquiryId, stepStyle, z10, inquirySessionConfig);
        }

        public final boolean l() {
            return this.f20016x;
        }

        @Override // com.withpersona.sdk2.inquiry.internal.l
        public String m() {
            return this.f20012t;
        }

        public String toString() {
            String str = this.f20012t;
            w wVar = this.f20013u;
            String str2 = this.f20014v;
            StepStyle stepStyle = this.f20015w;
            boolean z10 = this.f20016x;
            iq.g gVar = this.f20017y;
            return "ShowLoadingSpinner(sessionToken=" + str + ", transitionStatus=" + wVar + ", inquiryId=" + str2 + ", styles=" + stepStyle + ", useBasicSpinner=" + z10 + ", inquirySessionConfig=" + gVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f20012t);
            dest.writeParcelable(this.f20013u, i10);
            dest.writeString(this.f20014v);
            dest.writeParcelable(this.f20015w, i10);
            dest.writeInt(this.f20016x ? 1 : 0);
            dest.writeParcelable(this.f20017y, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(String sessionToken, w wVar, String inquiryId, StepStyle stepStyle, boolean z10, iq.g inquirySessionConfig) {
            super(null, null, null, null, null, null, null, 127, null);
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f20012t = sessionToken;
            this.f20013u = wVar;
            this.f20014v = inquiryId;
            this.f20015w = stepStyle;
            this.f20016x = z10;
            this.f20017y = inquirySessionConfig;
        }
    }

    public /* synthetic */ l(String str, String str2, w wVar, StepStyle stepStyle, NextStep.CancelDialog cancelDialog, String str3, iq.g gVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : wVar, (i10 & 8) != 0 ? null : stepStyle, (i10 & 16) != 0 ? null : cancelDialog, (i10 & 32) != 0 ? null : str3, (i10 & 64) != 0 ? iq.g.f30404o.a() : gVar, null);
    }
}
