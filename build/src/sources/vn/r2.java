package vn;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.document.network.a;
import com.withpersona.sdk2.inquiry.document.network.b;
import com.withpersona.sdk2.inquiry.document.network.c;
import com.withpersona.sdk2.inquiry.document.network.d;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.coroutines.CoroutineScope;
import np.b;
import np.i;
import okio.ByteString;
import org.jetbrains.annotations.NotNull;
import tm.k;
import tm.r;
import vn.c;
import vn.d;
import vn.r2;
import vn.v2;
import vp.b;
import xn.a;
import xp.k5;
import zo.c1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r2 extends tm.k {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f51520a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f51521b;

    /* renamed from: c  reason: collision with root package name */
    private final zo.c1 f51522c;

    /* renamed from: d  reason: collision with root package name */
    private final vn.c f51523d;

    /* renamed from: e  reason: collision with root package name */
    private final v2.b f51524e;

    /* renamed from: f  reason: collision with root package name */
    private final a.C0226a f51525f;

    /* renamed from: g  reason: collision with root package name */
    private final c.a f51526g;

    /* renamed from: h  reason: collision with root package name */
    private final b.a f51527h;

    /* renamed from: i  reason: collision with root package name */
    private final a.C0741a f51528i;

    /* renamed from: j  reason: collision with root package name */
    private final d.a f51529j;

    /* renamed from: k  reason: collision with root package name */
    private final rp.b f51530k;

    /* renamed from: l  reason: collision with root package name */
    private final np.c f51531l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: vn.r2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0694a extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final C0694a f51532a = new C0694a();

            private C0694a() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0694a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1245705540;
            }

            public String toString() {
                return "Back";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final b f51533a = new b();

            private b() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1143899241;
            }

            public String toString() {
                return "Cancel";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final c f51534a = new c();

            private c() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof c)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1422406686;
            }

            public String toString() {
                return "CloseUploadOptions";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final d f51535a = new d();

            private d() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -967280389;
            }

            public String toString() {
                return "DismissError";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final e f51536a = new e();

            private e() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof e)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1532240394;
            }

            public String toString() {
                return "OpenUploadOptions";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class f extends a {

            /* renamed from: a  reason: collision with root package name */
            private final String f51537a;

            /* renamed from: b  reason: collision with root package name */
            private final d.b f51538b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String documentId, d.b document) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(document, "document");
                this.f51537a = documentId;
                this.f51538b = document;
            }

            public final d.b a() {
                return this.f51538b;
            }

            public final String b() {
                return this.f51537a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof f)) {
                    return false;
                }
                f fVar = (f) obj;
                if (Intrinsics.areEqual(this.f51537a, fVar.f51537a) && Intrinsics.areEqual(this.f51538b, fVar.f51538b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f51537a.hashCode() * 31) + this.f51538b.hashCode();
            }

            public String toString() {
                String str = this.f51537a;
                d.b bVar = this.f51538b;
                return "RemoveDocument(documentId=" + str + ", document=" + bVar + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class g extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final g f51539a = new g();

            private g() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof g)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1818587564;
            }

            public String toString() {
                return "SelectDocument";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class h extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final h f51540a = new h();

            private h() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof h)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1457257560;
            }

            public String toString() {
                return "SelectPhotoFromLibrary";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class i extends a {

            /* renamed from: a  reason: collision with root package name */
            private final String f51541a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public i(String documentId) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                this.f51541a = documentId;
            }

            public final String a() {
                return this.f51541a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof i) && Intrinsics.areEqual(this.f51541a, ((i) obj).f51541a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f51541a.hashCode();
            }

            public String toString() {
                String str = this.f51541a;
                return "Submit(documentId=" + str + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class j extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final j f51542a = new j();

            private j() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof j)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -623405138;
            }

            public String toString() {
                return "TakePhoto";
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f51543a;

        /* renamed from: b  reason: collision with root package name */
        private final String f51544b;

        /* renamed from: c  reason: collision with root package name */
        private final String f51545c;

        /* renamed from: d  reason: collision with root package name */
        private final String f51546d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51547e;

        /* renamed from: f  reason: collision with root package name */
        private final String f51548f;

        /* renamed from: g  reason: collision with root package name */
        private final String f51549g;

        /* renamed from: h  reason: collision with root package name */
        private final String f51550h;

        /* renamed from: i  reason: collision with root package name */
        private final String f51551i;

        /* renamed from: j  reason: collision with root package name */
        private final String f51552j;

        /* renamed from: k  reason: collision with root package name */
        private final String f51553k;

        /* renamed from: l  reason: collision with root package name */
        private final String f51554l;

        /* renamed from: m  reason: collision with root package name */
        private final String f51555m;

        /* renamed from: n  reason: collision with root package name */
        private final e f51556n;

        /* renamed from: o  reason: collision with root package name */
        private final l f51557o;

        /* renamed from: p  reason: collision with root package name */
        private final int f51558p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f51559q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f51560r;

        /* renamed from: s  reason: collision with root package name */
        private final String f51561s;

        /* renamed from: t  reason: collision with root package name */
        private final String f51562t;

        /* renamed from: u  reason: collision with root package name */
        private final String f51563u;

        /* renamed from: v  reason: collision with root package name */
        private final String f51564v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.DocumentStepStyle f51565w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.Document.AssetConfig f51566x;

        /* renamed from: y  reason: collision with root package name */
        private final PendingPageTextPosition f51567y;

        public b(String sessionToken, String inquiryId, String fromStep, String fromComponent, String str, String str2, String str3, String str4, String str5, String str6, String fieldKeyDocument, String kind, String str7, e startPage, l pages, int i10, boolean z10, boolean z11, String str8, String str9, String str10, String str11, StepStyles.DocumentStepStyle documentStepStyle, NextStep.Document.AssetConfig assetConfig, PendingPageTextPosition pendingPageTextVerticalPosition) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(fieldKeyDocument, "fieldKeyDocument");
            Intrinsics.checkNotNullParameter(kind, "kind");
            Intrinsics.checkNotNullParameter(startPage, "startPage");
            Intrinsics.checkNotNullParameter(pages, "pages");
            Intrinsics.checkNotNullParameter(assetConfig, "assetConfig");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            this.f51543a = sessionToken;
            this.f51544b = inquiryId;
            this.f51545c = fromStep;
            this.f51546d = fromComponent;
            this.f51547e = str;
            this.f51548f = str2;
            this.f51549g = str3;
            this.f51550h = str4;
            this.f51551i = str5;
            this.f51552j = str6;
            this.f51553k = fieldKeyDocument;
            this.f51554l = kind;
            this.f51555m = str7;
            this.f51556n = startPage;
            this.f51557o = pages;
            this.f51558p = i10;
            this.f51559q = z10;
            this.f51560r = z11;
            this.f51561s = str8;
            this.f51562t = str9;
            this.f51563u = str10;
            this.f51564v = str11;
            this.f51565w = documentStepStyle;
            this.f51566x = assetConfig;
            this.f51567y = pendingPageTextVerticalPosition;
        }

        public final NextStep.Document.AssetConfig a() {
            return this.f51566x;
        }

        public final boolean b() {
            return this.f51559q;
        }

        public final boolean c() {
            return this.f51560r;
        }

        public final String d() {
            return this.f51549g;
        }

        public final int e() {
            return this.f51558p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f51543a, bVar.f51543a) && Intrinsics.areEqual(this.f51544b, bVar.f51544b) && Intrinsics.areEqual(this.f51545c, bVar.f51545c) && Intrinsics.areEqual(this.f51546d, bVar.f51546d) && Intrinsics.areEqual(this.f51547e, bVar.f51547e) && Intrinsics.areEqual(this.f51548f, bVar.f51548f) && Intrinsics.areEqual(this.f51549g, bVar.f51549g) && Intrinsics.areEqual(this.f51550h, bVar.f51550h) && Intrinsics.areEqual(this.f51551i, bVar.f51551i) && Intrinsics.areEqual(this.f51552j, bVar.f51552j) && Intrinsics.areEqual(this.f51553k, bVar.f51553k) && Intrinsics.areEqual(this.f51554l, bVar.f51554l) && Intrinsics.areEqual(this.f51555m, bVar.f51555m) && Intrinsics.areEqual(this.f51556n, bVar.f51556n) && Intrinsics.areEqual(this.f51557o, bVar.f51557o) && this.f51558p == bVar.f51558p && this.f51559q == bVar.f51559q && this.f51560r == bVar.f51560r && Intrinsics.areEqual(this.f51561s, bVar.f51561s) && Intrinsics.areEqual(this.f51562t, bVar.f51562t) && Intrinsics.areEqual(this.f51563u, bVar.f51563u) && Intrinsics.areEqual(this.f51564v, bVar.f51564v) && Intrinsics.areEqual(this.f51565w, bVar.f51565w) && Intrinsics.areEqual(this.f51566x, bVar.f51566x) && this.f51567y == bVar.f51567y) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f51555m;
        }

        public final String g() {
            return this.f51553k;
        }

        public final String h() {
            return this.f51546d;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6;
            int hashCode7;
            int hashCode8;
            int hashCode9;
            int hashCode10;
            int hashCode11;
            int hashCode12 = ((((((this.f51543a.hashCode() * 31) + this.f51544b.hashCode()) * 31) + this.f51545c.hashCode()) * 31) + this.f51546d.hashCode()) * 31;
            String str = this.f51547e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode12 + hashCode) * 31;
            String str2 = this.f51548f;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f51549g;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f51550h;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f51551i;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f51552j;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int hashCode13 = (((((i15 + hashCode6) * 31) + this.f51553k.hashCode()) * 31) + this.f51554l.hashCode()) * 31;
            String str7 = this.f51555m;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int hashCode14 = (((((((((((hashCode13 + hashCode7) * 31) + this.f51556n.hashCode()) * 31) + this.f51557o.hashCode()) * 31) + Integer.hashCode(this.f51558p)) * 31) + Boolean.hashCode(this.f51559q)) * 31) + Boolean.hashCode(this.f51560r)) * 31;
            String str8 = this.f51561s;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i16 = (hashCode14 + hashCode8) * 31;
            String str9 = this.f51562t;
            if (str9 == null) {
                hashCode9 = 0;
            } else {
                hashCode9 = str9.hashCode();
            }
            int i17 = (i16 + hashCode9) * 31;
            String str10 = this.f51563u;
            if (str10 == null) {
                hashCode10 = 0;
            } else {
                hashCode10 = str10.hashCode();
            }
            int i18 = (i17 + hashCode10) * 31;
            String str11 = this.f51564v;
            if (str11 == null) {
                hashCode11 = 0;
            } else {
                hashCode11 = str11.hashCode();
            }
            int i19 = (i18 + hashCode11) * 31;
            StepStyles.DocumentStepStyle documentStepStyle = this.f51565w;
            if (documentStepStyle != null) {
                i10 = documentStepStyle.hashCode();
            }
            return ((((i19 + i10) * 31) + this.f51566x.hashCode()) * 31) + this.f51567y.hashCode();
        }

        public final String i() {
            return this.f51545c;
        }

        public final String j() {
            return this.f51544b;
        }

        public final String k() {
            return this.f51554l;
        }

        public final l l() {
            return this.f51557o;
        }

        public final String m() {
            return this.f51552j;
        }

        public final PendingPageTextPosition n() {
            return this.f51567y;
        }

        public final String o() {
            return this.f51551i;
        }

        public final String p() {
            return this.f51564v;
        }

        public final String q() {
            return this.f51563u;
        }

        public final String r() {
            return this.f51562t;
        }

        public final String s() {
            return this.f51561s;
        }

        public final String t() {
            return this.f51548f;
        }

        public String toString() {
            String str = this.f51543a;
            String str2 = this.f51544b;
            String str3 = this.f51545c;
            String str4 = this.f51546d;
            String str5 = this.f51547e;
            String str6 = this.f51548f;
            String str7 = this.f51549g;
            String str8 = this.f51550h;
            String str9 = this.f51551i;
            String str10 = this.f51552j;
            String str11 = this.f51553k;
            String str12 = this.f51554l;
            String str13 = this.f51555m;
            e eVar = this.f51556n;
            l lVar = this.f51557o;
            int i10 = this.f51558p;
            boolean z10 = this.f51559q;
            boolean z11 = this.f51560r;
            String str14 = this.f51561s;
            String str15 = this.f51562t;
            String str16 = this.f51563u;
            String str17 = this.f51564v;
            StepStyles.DocumentStepStyle documentStepStyle = this.f51565w;
            NextStep.Document.AssetConfig assetConfig = this.f51566x;
            PendingPageTextPosition pendingPageTextPosition = this.f51567y;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromStep=" + str3 + ", fromComponent=" + str4 + ", promptTitle=" + str5 + ", promptDescription=" + str6 + ", disclaimer=" + str7 + ", submitButtonText=" + str8 + ", pendingTitle=" + str9 + ", pendingDescription=" + str10 + ", fieldKeyDocument=" + str11 + ", kind=" + str12 + ", documentId=" + str13 + ", startPage=" + eVar + ", pages=" + lVar + ", documentFileLimit=" + i10 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", permissionsTitle=" + str14 + ", permissionsRationale=" + str15 + ", permissionsModalPositiveButton=" + str16 + ", permissionsModalNegativeButton=" + str17 + ", styles=" + documentStepStyle + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
        }

        public final String u() {
            return this.f51547e;
        }

        public final String v() {
            return this.f51543a;
        }

        public final e w() {
            return this.f51556n;
        }

        public final StepStyles.DocumentStepStyle x() {
            return this.f51565w;
        }

        public final String y() {
            return this.f51550h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f51568a = new a();

            private a() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 89823627;
            }

            public String toString() {
                return "Back";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final b f51569a = new b();

            private b() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1234032835;
            }

            public String toString() {
                return "Canceled";
            }
        }

        /* renamed from: vn.r2$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0695c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f51570a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0695c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f51570a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f51570a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0695c) && Intrinsics.areEqual(this.f51570a, ((C0695c) obj).f51570a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f51570a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f51570a;
                return "Errored(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f51571a = new d();

            private d() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1784519914;
            }

            public String toString() {
                return "Finished";
            }
        }

        public /* synthetic */ c(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private c() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f51572a;

            /* renamed from: b  reason: collision with root package name */
            private final String f51573b;

            /* renamed from: c  reason: collision with root package name */
            private final rp.a f51574c;

            /* renamed from: d  reason: collision with root package name */
            private final Function0 f51575d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f51576e;

            /* renamed from: f  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f51577f;

            /* renamed from: g  reason: collision with root package name */
            private final NextStep.Document.AssetConfig.PendingPage f51578g;

            /* renamed from: h  reason: collision with root package name */
            private final PendingPageTextPosition f51579h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, rp.a navigationState, Function0 onBack, Function0 onCancel, StepStyles.DocumentStepStyle documentStepStyle, NextStep.Document.AssetConfig.PendingPage pendingPage, PendingPageTextPosition pendingPageTextVerticalPosition) {
                super(null);
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                this.f51572a = str;
                this.f51573b = str2;
                this.f51574c = navigationState;
                this.f51575d = onBack;
                this.f51576e = onCancel;
                this.f51577f = documentStepStyle;
                this.f51578g = pendingPage;
                this.f51579h = pendingPageTextVerticalPosition;
            }

            public final NextStep.Document.AssetConfig.PendingPage a() {
                return this.f51578g;
            }

            public final rp.a b() {
                return this.f51574c;
            }

            public final Function0 c() {
                return this.f51575d;
            }

            public final Function0 d() {
                return this.f51576e;
            }

            public final PendingPageTextPosition e() {
                return this.f51579h;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f51572a, aVar.f51572a) && Intrinsics.areEqual(this.f51573b, aVar.f51573b) && Intrinsics.areEqual(this.f51574c, aVar.f51574c) && Intrinsics.areEqual(this.f51575d, aVar.f51575d) && Intrinsics.areEqual(this.f51576e, aVar.f51576e) && Intrinsics.areEqual(this.f51577f, aVar.f51577f) && Intrinsics.areEqual(this.f51578g, aVar.f51578g) && this.f51579h == aVar.f51579h) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f51573b;
            }

            public final StepStyles.DocumentStepStyle g() {
                return this.f51577f;
            }

            public final String h() {
                return this.f51572a;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                String str = this.f51572a;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = hashCode * 31;
                String str2 = this.f51573b;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int hashCode4 = (((((((i11 + hashCode2) * 31) + this.f51574c.hashCode()) * 31) + this.f51575d.hashCode()) * 31) + this.f51576e.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f51577f;
                if (documentStepStyle == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = documentStepStyle.hashCode();
                }
                int i12 = (hashCode4 + hashCode3) * 31;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f51578g;
                if (pendingPage != null) {
                    i10 = pendingPage.hashCode();
                }
                return ((i12 + i10) * 31) + this.f51579h.hashCode();
            }

            public String toString() {
                String str = this.f51572a;
                String str2 = this.f51573b;
                rp.a aVar = this.f51574c;
                Function0 function0 = this.f51575d;
                Function0 function02 = this.f51576e;
                StepStyles.DocumentStepStyle documentStepStyle = this.f51577f;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f51578g;
                PendingPageTextPosition pendingPageTextPosition = this.f51579h;
                return "LoadingAnimation(title=" + str + ", prompt=" + str2 + ", navigationState=" + aVar + ", onBack=" + function0 + ", onCancel=" + function02 + ", styles=" + documentStepStyle + ", assetConfig=" + pendingPage + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final v4.h f51580a;

            /* renamed from: b  reason: collision with root package name */
            private final String f51581b;

            /* renamed from: c  reason: collision with root package name */
            private final String f51582c;

            /* renamed from: d  reason: collision with root package name */
            private final String f51583d;

            /* renamed from: e  reason: collision with root package name */
            private final String f51584e;

            /* renamed from: f  reason: collision with root package name */
            private final List f51585f;

            /* renamed from: g  reason: collision with root package name */
            private final rp.a f51586g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f51587h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f51588i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f51589j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f51590k;

            /* renamed from: l  reason: collision with root package name */
            private final Function1 f51591l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f51592m;

            /* renamed from: n  reason: collision with root package name */
            private final Function0 f51593n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f51594o;

            /* renamed from: p  reason: collision with root package name */
            private final boolean f51595p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f51596q;

            /* renamed from: r  reason: collision with root package name */
            private final boolean f51597r;

            /* renamed from: s  reason: collision with root package name */
            private final String f51598s;

            /* renamed from: t  reason: collision with root package name */
            private final Function0 f51599t;

            /* renamed from: u  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f51600u;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(v4.h imageLoader, String str, String str2, String str3, String str4, List documents, rp.a navigationState, Function0 openSelectFile, Function0 selectFromPhotoLibrary, Function0 openCamera, Function0 openUploadOptions, Function1 onRemove, Function0 onSubmit, Function0 onCancel, Function0 onBack, boolean z10, boolean z11, boolean z12, String str5, Function0 onErrorDismissed, StepStyles.DocumentStepStyle documentStepStyle) {
                super(null);
                Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(openSelectFile, "openSelectFile");
                Intrinsics.checkNotNullParameter(selectFromPhotoLibrary, "selectFromPhotoLibrary");
                Intrinsics.checkNotNullParameter(openCamera, "openCamera");
                Intrinsics.checkNotNullParameter(openUploadOptions, "openUploadOptions");
                Intrinsics.checkNotNullParameter(onRemove, "onRemove");
                Intrinsics.checkNotNullParameter(onSubmit, "onSubmit");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onErrorDismissed, "onErrorDismissed");
                this.f51580a = imageLoader;
                this.f51581b = str;
                this.f51582c = str2;
                this.f51583d = str3;
                this.f51584e = str4;
                this.f51585f = documents;
                this.f51586g = navigationState;
                this.f51587h = openSelectFile;
                this.f51588i = selectFromPhotoLibrary;
                this.f51589j = openCamera;
                this.f51590k = openUploadOptions;
                this.f51591l = onRemove;
                this.f51592m = onSubmit;
                this.f51593n = onCancel;
                this.f51594o = onBack;
                this.f51595p = z10;
                this.f51596q = z11;
                this.f51597r = z12;
                this.f51598s = str5;
                this.f51599t = onErrorDismissed;
                this.f51600u = documentStepStyle;
            }

            public final boolean a() {
                return this.f51596q;
            }

            public final boolean b() {
                return this.f51595p;
            }

            public final String c() {
                return this.f51583d;
            }

            public final List d() {
                return this.f51585f;
            }

            public final String e() {
                return this.f51598s;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f51580a, bVar.f51580a) && Intrinsics.areEqual(this.f51581b, bVar.f51581b) && Intrinsics.areEqual(this.f51582c, bVar.f51582c) && Intrinsics.areEqual(this.f51583d, bVar.f51583d) && Intrinsics.areEqual(this.f51584e, bVar.f51584e) && Intrinsics.areEqual(this.f51585f, bVar.f51585f) && Intrinsics.areEqual(this.f51586g, bVar.f51586g) && Intrinsics.areEqual(this.f51587h, bVar.f51587h) && Intrinsics.areEqual(this.f51588i, bVar.f51588i) && Intrinsics.areEqual(this.f51589j, bVar.f51589j) && Intrinsics.areEqual(this.f51590k, bVar.f51590k) && Intrinsics.areEqual(this.f51591l, bVar.f51591l) && Intrinsics.areEqual(this.f51592m, bVar.f51592m) && Intrinsics.areEqual(this.f51593n, bVar.f51593n) && Intrinsics.areEqual(this.f51594o, bVar.f51594o) && this.f51595p == bVar.f51595p && this.f51596q == bVar.f51596q && this.f51597r == bVar.f51597r && Intrinsics.areEqual(this.f51598s, bVar.f51598s) && Intrinsics.areEqual(this.f51599t, bVar.f51599t) && Intrinsics.areEqual(this.f51600u, bVar.f51600u)) {
                    return true;
                }
                return false;
            }

            public final v4.h f() {
                return this.f51580a;
            }

            public final rp.a g() {
                return this.f51586g;
            }

            public final Function0 h() {
                return this.f51594o;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                int hashCode4;
                int hashCode5;
                int hashCode6 = this.f51580a.hashCode() * 31;
                String str = this.f51581b;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode6 + hashCode) * 31;
                String str2 = this.f51582c;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f51583d;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f51584e;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int hashCode7 = (((((((((((((((((((((((((((i13 + hashCode4) * 31) + this.f51585f.hashCode()) * 31) + this.f51586g.hashCode()) * 31) + this.f51587h.hashCode()) * 31) + this.f51588i.hashCode()) * 31) + this.f51589j.hashCode()) * 31) + this.f51590k.hashCode()) * 31) + this.f51591l.hashCode()) * 31) + this.f51592m.hashCode()) * 31) + this.f51593n.hashCode()) * 31) + this.f51594o.hashCode()) * 31) + Boolean.hashCode(this.f51595p)) * 31) + Boolean.hashCode(this.f51596q)) * 31) + Boolean.hashCode(this.f51597r)) * 31;
                String str5 = this.f51598s;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int hashCode8 = (((hashCode7 + hashCode5) * 31) + this.f51599t.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f51600u;
                if (documentStepStyle != null) {
                    i10 = documentStepStyle.hashCode();
                }
                return hashCode8 + i10;
            }

            public final Function0 i() {
                return this.f51593n;
            }

            public final Function0 j() {
                return this.f51599t;
            }

            public final Function1 k() {
                return this.f51591l;
            }

            public final Function0 l() {
                return this.f51592m;
            }

            public final Function0 m() {
                return this.f51590k;
            }

            public final String n() {
                return this.f51582c;
            }

            public final StepStyles.DocumentStepStyle o() {
                return this.f51600u;
            }

            public final boolean p() {
                return this.f51597r;
            }

            public final String q() {
                return this.f51584e;
            }

            public final String r() {
                return this.f51581b;
            }

            public String toString() {
                v4.h hVar = this.f51580a;
                String str = this.f51581b;
                String str2 = this.f51582c;
                String str3 = this.f51583d;
                String str4 = this.f51584e;
                List list = this.f51585f;
                rp.a aVar = this.f51586g;
                Function0 function0 = this.f51587h;
                Function0 function02 = this.f51588i;
                Function0 function03 = this.f51589j;
                Function0 function04 = this.f51590k;
                Function1 function1 = this.f51591l;
                Function0 function05 = this.f51592m;
                Function0 function06 = this.f51593n;
                Function0 function07 = this.f51594o;
                boolean z10 = this.f51595p;
                boolean z11 = this.f51596q;
                boolean z12 = this.f51597r;
                String str5 = this.f51598s;
                Function0 function08 = this.f51599t;
                StepStyles.DocumentStepStyle documentStepStyle = this.f51600u;
                return "ReviewCaptures(imageLoader=" + hVar + ", title=" + str + ", prompt=" + str2 + ", disclaimer=" + str3 + ", submitButtonText=" + str4 + ", documents=" + list + ", navigationState=" + aVar + ", openSelectFile=" + function0 + ", selectFromPhotoLibrary=" + function02 + ", openCamera=" + function03 + ", openUploadOptions=" + function04 + ", onRemove=" + function1 + ", onSubmit=" + function05 + ", onCancel=" + function06 + ", onBack=" + function07 + ", disabled=" + z10 + ", addButtonEnabled=" + z11 + ", submitButtonEnabled=" + z12 + ", error=" + str5 + ", onErrorDismissed=" + function08 + ", styles=" + documentStepStyle + ")";
            }
        }

        public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private d() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface e extends Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements e {

            /* renamed from: d  reason: collision with root package name */
            public static final a f51601d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0696a();

            /* renamed from: vn.r2$e$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0696a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f51601d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final a[] newArray(int i10) {
                    return new a[i10];
                }
            }

            private a() {
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 813153962;
            }

            public String toString() {
                return "Prompt";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements e {
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f51602d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new b(parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final b[] newArray(int i10) {
                    return new b[i10];
                }
            }

            public b(String documentId) {
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                this.f51602d = documentId;
            }

            public final String a() {
                return this.f51602d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof b) && Intrinsics.areEqual(this.f51602d, ((b) obj).f51602d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f51602d.hashCode();
            }

            public String toString() {
                String str = this.f51602d;
                return "Review(documentId=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f51602d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        private final a f51603d;

        /* renamed from: e  reason: collision with root package name */
        private final InterfaceC0697f f51604e;

        /* renamed from: i  reason: collision with root package name */
        private final String f51605i;

        /* renamed from: o  reason: collision with root package name */
        private final List f51606o;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f51607d = new a("None", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f51608e = new a("CheckCameraPermissions", 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f51609i = new a("CameraRunning", 2);

            /* renamed from: o  reason: collision with root package name */
            public static final a f51610o = new a("SelectFileFromDocuments", 3);

            /* renamed from: p  reason: collision with root package name */
            public static final a f51611p = new a("SelectImageFromPhotoLibrary", 4);

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ a[] f51612q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f51613r;

            static {
                a[] a10 = a();
                f51612q = a10;
                f51613r = pr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f51607d, f51608e, f51609i, f51610o, f51611p};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f51612q.clone();
            }
        }

        /* renamed from: vn.r2$f$f  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public interface InterfaceC0697f extends Parcelable {

            /* renamed from: vn.r2$f$f$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements InterfaceC0697f {

                /* renamed from: d  reason: collision with root package name */
                public static final a f51638d = new a();
                @NotNull
                public static final Parcelable.Creator<a> CREATOR = new C0698a();

                /* renamed from: vn.r2$f$f$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0698a implements Parcelable.Creator {
                    @Override // android.os.Parcelable.Creator
                    /* renamed from: a */
                    public final a createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        parcel.readInt();
                        return a.f51638d;
                    }

                    @Override // android.os.Parcelable.Creator
                    /* renamed from: b */
                    public final a[] newArray(int i10) {
                        return new a[i10];
                    }
                }

                private a() {
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj || (obj instanceof a)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return 1079141691;
                }

                public String toString() {
                    return "CreateDocument";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeInt(1);
                }
            }

            /* renamed from: vn.r2$f$f$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b implements InterfaceC0697f {
                @NotNull
                public static final Parcelable.Creator<b> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f51639d;

                /* renamed from: vn.r2$f$f$b$a */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class a implements Parcelable.Creator {
                    @Override // android.os.Parcelable.Creator
                    /* renamed from: a */
                    public final b createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new b(parcel.readString());
                    }

                    @Override // android.os.Parcelable.Creator
                    /* renamed from: b */
                    public final b[] newArray(int i10) {
                        return new b[i10];
                    }
                }

                public b(String documentId) {
                    Intrinsics.checkNotNullParameter(documentId, "documentId");
                    this.f51639d = documentId;
                }

                public final String a() {
                    return this.f51639d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof b) && Intrinsics.areEqual(this.f51639d, ((b) obj).f51639d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f51639d.hashCode();
                }

                public String toString() {
                    String str = this.f51639d;
                    return "DeleteFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f51639d);
                }
            }

            /* renamed from: vn.r2$f$f$c */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class c implements InterfaceC0697f {
                @NotNull
                public static final Parcelable.Creator<c> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f51640d;

                /* renamed from: vn.r2$f$f$c$a */
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

                public c(String documentId) {
                    Intrinsics.checkNotNullParameter(documentId, "documentId");
                    this.f51640d = documentId;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof c) && Intrinsics.areEqual(this.f51640d, ((c) obj).f51640d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f51640d.hashCode();
                }

                public String toString() {
                    String str = this.f51640d;
                    return "ReadyToSubmit(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f51640d);
                }
            }

            /* renamed from: vn.r2$f$f$d */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class d implements InterfaceC0697f {
                @NotNull
                public static final Parcelable.Creator<d> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f51641d;

                /* renamed from: vn.r2$f$f$d$a */
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

                public d(String documentId) {
                    Intrinsics.checkNotNullParameter(documentId, "documentId");
                    this.f51641d = documentId;
                }

                public final String a() {
                    return this.f51641d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof d) && Intrinsics.areEqual(this.f51641d, ((d) obj).f51641d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f51641d.hashCode();
                }

                public String toString() {
                    String str = this.f51641d;
                    return "UploadFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f51641d);
                }
            }
        }

        public /* synthetic */ f(a aVar, InterfaceC0697f interfaceC0697f, String str, List list, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, interfaceC0697f, str, list);
        }

        public static /* synthetic */ f d(f fVar, InterfaceC0697f interfaceC0697f, String str, List list, vn.d dVar, int i10, Object obj) {
            if (obj == null) {
                if ((i10 & 2) != 0) {
                    str = null;
                }
                if ((i10 & 4) != 0) {
                    list = null;
                }
                if ((i10 & 8) != 0) {
                    dVar = null;
                }
                return fVar.c(interfaceC0697f, str, list, dVar);
            }
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: copyWithUploadState");
        }

        public final f a(a captureState) {
            Intrinsics.checkNotNullParameter(captureState, "captureState");
            if (this instanceof d) {
                return d.k((d) this, captureState, null, null, false, 14, null);
            }
            if (this instanceof b) {
                return b.k((b) this, null, null, captureState, null, null, false, false, null, 251, null);
            }
            if (this instanceof c) {
                return c.k((c) this, null, null, captureState, null, null, false, false, null, 251, null);
            }
            if (this instanceof e) {
                return this;
            }
            throw new ir.p();
        }

        public final f b(boolean z10) {
            if (this instanceof d) {
                return d.k((d) this, null, null, null, z10, 7, null);
            }
            if (this instanceof b) {
                return b.k((b) this, null, null, null, null, null, false, z10, null, 191, null);
            }
            if (this instanceof c) {
                return c.k((c) this, null, null, null, null, null, false, z10, null, 191, null);
            }
            if (this instanceof e) {
                return this;
            }
            throw new ir.p();
        }

        public final f c(InterfaceC0697f uploadState, String str, List list, vn.d dVar) {
            Intrinsics.checkNotNullParameter(uploadState, "uploadState");
            if (this instanceof d) {
                d dVar2 = (d) this;
                if (str == null) {
                    str = dVar2.f();
                }
                return d.k(dVar2, null, uploadState, str, false, 9, null);
            } else if (this instanceof b) {
                b bVar = (b) this;
                if (list == null) {
                    list = bVar.g();
                }
                return b.k(bVar, list, null, null, uploadState, dVar, false, false, null, 230, null);
            } else if (this instanceof c) {
                c cVar = (c) this;
                if (str == null) {
                    str = cVar.f();
                }
                String str2 = str;
                if (list == null) {
                    list = cVar.g();
                }
                return c.k(cVar, list, str2, null, uploadState, dVar, false, false, null, 228, null);
            } else if (this instanceof e) {
                return e.k((e) this, null, null, uploadState, null, 11, null);
            } else {
                throw new ir.p();
            }
        }

        public a e() {
            return this.f51603d;
        }

        public abstract String f();

        public List g() {
            return this.f51606o;
        }

        public abstract InterfaceC0697f i();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends f {
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f51634p;

            /* renamed from: q  reason: collision with root package name */
            private final String f51635q;

            /* renamed from: r  reason: collision with root package name */
            private final InterfaceC0697f f51636r;

            /* renamed from: s  reason: collision with root package name */
            private final String f51637s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    int readInt = parcel.readInt();
                    ArrayList arrayList = new ArrayList(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        arrayList.add(parcel.readParcelable(e.class.getClassLoader()));
                    }
                    return new e(arrayList, parcel.readString(), (InterfaceC0697f) parcel.readParcelable(e.class.getClassLoader()), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final e[] newArray(int i10) {
                    return new e[i10];
                }
            }

            public /* synthetic */ e(List list, String str, InterfaceC0697f interfaceC0697f, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? InterfaceC0697f.a.f51638d : interfaceC0697f, (i10 & 8) != 0 ? null : str2);
            }

            public static /* synthetic */ e k(e eVar, List list, String str, InterfaceC0697f interfaceC0697f, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = eVar.f51634p;
                }
                if ((i10 & 2) != 0) {
                    str = eVar.f51635q;
                }
                if ((i10 & 4) != 0) {
                    interfaceC0697f = eVar.f51636r;
                }
                if ((i10 & 8) != 0) {
                    str2 = eVar.f51637s;
                }
                return eVar.j(list, str, interfaceC0697f, str2);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof e)) {
                    return false;
                }
                e eVar = (e) obj;
                if (Intrinsics.areEqual(this.f51634p, eVar.f51634p) && Intrinsics.areEqual(this.f51635q, eVar.f51635q) && Intrinsics.areEqual(this.f51636r, eVar.f51636r) && Intrinsics.areEqual(this.f51637s, eVar.f51637s)) {
                    return true;
                }
                return false;
            }

            @Override // vn.r2.f
            public String f() {
                return this.f51635q;
            }

            @Override // vn.r2.f
            public List g() {
                return this.f51634p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((this.f51634p.hashCode() * 31) + this.f51635q.hashCode()) * 31) + this.f51636r.hashCode()) * 31;
                String str = this.f51637s;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            @Override // vn.r2.f
            public InterfaceC0697f i() {
                return this.f51636r;
            }

            public final e j(List documents, String documentId, InterfaceC0697f uploadState, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new e(documents, documentId, uploadState, str);
            }

            public String toString() {
                List list = this.f51634p;
                String str = this.f51635q;
                InterfaceC0697f interfaceC0697f = this.f51636r;
                String str2 = this.f51637s;
                return "UploadDocument(documents=" + list + ", documentId=" + str + ", uploadState=" + interfaceC0697f + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f51634p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f51635q);
                dest.writeParcelable(this.f51636r, i10);
                dest.writeString(this.f51637s);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(List documents, String documentId, InterfaceC0697f uploadState, String str) {
                super(a.f51607d, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f51634p = documents;
                this.f51635q = documentId;
                this.f51636r = uploadState;
                this.f51637s = str;
            }
        }

        private f(a aVar, InterfaceC0697f interfaceC0697f, String str, List list) {
            this.f51603d = aVar;
            this.f51604e = interfaceC0697f;
            this.f51605i = str;
            this.f51606o = list;
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends f {
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f51614p;

            /* renamed from: q  reason: collision with root package name */
            private final String f51615q;

            /* renamed from: r  reason: collision with root package name */
            private final a f51616r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0697f f51617s;

            /* renamed from: t  reason: collision with root package name */
            private final vn.d f51618t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f51619u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f51620v;

            /* renamed from: w  reason: collision with root package name */
            private final String f51621w;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    boolean z10;
                    boolean z11;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    int readInt = parcel.readInt();
                    ArrayList arrayList = new ArrayList(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        arrayList.add(parcel.readParcelable(b.class.getClassLoader()));
                    }
                    String readString = parcel.readString();
                    a valueOf = a.valueOf(parcel.readString());
                    InterfaceC0697f interfaceC0697f = (InterfaceC0697f) parcel.readParcelable(b.class.getClassLoader());
                    vn.d dVar = (vn.d) parcel.readParcelable(b.class.getClassLoader());
                    boolean z12 = true;
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    } else {
                        z10 = true;
                        z12 = false;
                    }
                    if (parcel.readInt() != 0) {
                        z11 = z10;
                    } else {
                        z11 = false;
                    }
                    return new b(arrayList, readString, valueOf, interfaceC0697f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final b[] newArray(int i10) {
                    return new b[i10];
                }
            }

            public /* synthetic */ b(List list, String str, a aVar, InterfaceC0697f interfaceC0697f, vn.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f51607d : aVar, (i10 & 8) != 0 ? InterfaceC0697f.a.f51638d : interfaceC0697f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ b k(b bVar, List list, String str, a aVar, InterfaceC0697f interfaceC0697f, vn.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = bVar.f51614p;
                }
                if ((i10 & 2) != 0) {
                    str = bVar.f51615q;
                }
                if ((i10 & 4) != 0) {
                    aVar = bVar.f51616r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0697f = bVar.f51617s;
                }
                if ((i10 & 16) != 0) {
                    dVar = bVar.f51618t;
                }
                if ((i10 & 32) != 0) {
                    z10 = bVar.f51619u;
                }
                if ((i10 & 64) != 0) {
                    z11 = bVar.f51620v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = bVar.f51621w;
                }
                boolean z12 = z11;
                String str3 = str2;
                vn.d dVar2 = dVar;
                boolean z13 = z10;
                return bVar.j(list, str, aVar, interfaceC0697f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // vn.r2.f
            public a e() {
                return this.f51616r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f51614p, bVar.f51614p) && Intrinsics.areEqual(this.f51615q, bVar.f51615q) && this.f51616r == bVar.f51616r && Intrinsics.areEqual(this.f51617s, bVar.f51617s) && Intrinsics.areEqual(this.f51618t, bVar.f51618t) && this.f51619u == bVar.f51619u && this.f51620v == bVar.f51620v && Intrinsics.areEqual(this.f51621w, bVar.f51621w)) {
                    return true;
                }
                return false;
            }

            @Override // vn.r2.f
            public String f() {
                return this.f51615q;
            }

            @Override // vn.r2.f
            public List g() {
                return this.f51614p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((((this.f51614p.hashCode() * 31) + this.f51615q.hashCode()) * 31) + this.f51616r.hashCode()) * 31) + this.f51617s.hashCode()) * 31;
                vn.d dVar = this.f51618t;
                int i10 = 0;
                if (dVar == null) {
                    hashCode = 0;
                } else {
                    hashCode = dVar.hashCode();
                }
                int hashCode3 = (((((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f51619u)) * 31) + Boolean.hashCode(this.f51620v)) * 31;
                String str = this.f51621w;
                if (str != null) {
                    i10 = str.hashCode();
                }
                return hashCode3 + i10;
            }

            @Override // vn.r2.f
            public InterfaceC0697f i() {
                return this.f51617s;
            }

            public final b j(List documents, String documentId, a captureState, InterfaceC0697f uploadState, vn.d dVar, boolean z10, boolean z11, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new b(documents, documentId, captureState, uploadState, dVar, z10, z11, str);
            }

            public final vn.d m() {
                return this.f51618t;
            }

            public final String n() {
                return this.f51621w;
            }

            public final boolean o() {
                return this.f51619u;
            }

            public final boolean p() {
                return this.f51620v;
            }

            public String toString() {
                List list = this.f51614p;
                String str = this.f51615q;
                a aVar = this.f51616r;
                InterfaceC0697f interfaceC0697f = this.f51617s;
                vn.d dVar = this.f51618t;
                boolean z10 = this.f51619u;
                boolean z11 = this.f51620v;
                String str2 = this.f51621w;
                return "ReviewCaptures(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0697f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f51614p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f51615q);
                dest.writeString(this.f51616r.name());
                dest.writeParcelable(this.f51617s, i10);
                dest.writeParcelable(this.f51618t, i10);
                dest.writeInt(this.f51619u ? 1 : 0);
                dest.writeInt(this.f51620v ? 1 : 0);
                dest.writeString(this.f51621w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(List documents, String documentId, a captureState, InterfaceC0697f uploadState, vn.d dVar, boolean z10, boolean z11, String str) {
                super(captureState, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f51614p = documents;
                this.f51615q = documentId;
                this.f51616r = captureState;
                this.f51617s = uploadState;
                this.f51618t = dVar;
                this.f51619u = z10;
                this.f51620v = z11;
                this.f51621w = str;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends f {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f51622p;

            /* renamed from: q  reason: collision with root package name */
            private final String f51623q;

            /* renamed from: r  reason: collision with root package name */
            private final a f51624r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0697f f51625s;

            /* renamed from: t  reason: collision with root package name */
            private final vn.d f51626t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f51627u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f51628v;

            /* renamed from: w  reason: collision with root package name */
            private final String f51629w;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    boolean z10;
                    boolean z11;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    int readInt = parcel.readInt();
                    ArrayList arrayList = new ArrayList(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        arrayList.add(parcel.readParcelable(c.class.getClassLoader()));
                    }
                    String readString = parcel.readString();
                    a valueOf = a.valueOf(parcel.readString());
                    InterfaceC0697f interfaceC0697f = (InterfaceC0697f) parcel.readParcelable(c.class.getClassLoader());
                    vn.d dVar = (vn.d) parcel.readParcelable(c.class.getClassLoader());
                    boolean z12 = true;
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    } else {
                        z10 = true;
                        z12 = false;
                    }
                    if (parcel.readInt() != 0) {
                        z11 = z10;
                    } else {
                        z11 = false;
                    }
                    return new c(arrayList, readString, valueOf, interfaceC0697f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public /* synthetic */ c(List list, String str, a aVar, InterfaceC0697f interfaceC0697f, vn.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f51607d : aVar, (i10 & 8) != 0 ? InterfaceC0697f.a.f51638d : interfaceC0697f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ c k(c cVar, List list, String str, a aVar, InterfaceC0697f interfaceC0697f, vn.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = cVar.f51622p;
                }
                if ((i10 & 2) != 0) {
                    str = cVar.f51623q;
                }
                if ((i10 & 4) != 0) {
                    aVar = cVar.f51624r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0697f = cVar.f51625s;
                }
                if ((i10 & 16) != 0) {
                    dVar = cVar.f51626t;
                }
                if ((i10 & 32) != 0) {
                    z10 = cVar.f51627u;
                }
                if ((i10 & 64) != 0) {
                    z11 = cVar.f51628v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = cVar.f51629w;
                }
                boolean z12 = z11;
                String str3 = str2;
                vn.d dVar2 = dVar;
                boolean z13 = z10;
                return cVar.j(list, str, aVar, interfaceC0697f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // vn.r2.f
            public a e() {
                return this.f51624r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof c)) {
                    return false;
                }
                c cVar = (c) obj;
                if (Intrinsics.areEqual(this.f51622p, cVar.f51622p) && Intrinsics.areEqual(this.f51623q, cVar.f51623q) && this.f51624r == cVar.f51624r && Intrinsics.areEqual(this.f51625s, cVar.f51625s) && Intrinsics.areEqual(this.f51626t, cVar.f51626t) && this.f51627u == cVar.f51627u && this.f51628v == cVar.f51628v && Intrinsics.areEqual(this.f51629w, cVar.f51629w)) {
                    return true;
                }
                return false;
            }

            @Override // vn.r2.f
            public String f() {
                return this.f51623q;
            }

            @Override // vn.r2.f
            public List g() {
                return this.f51622p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3 = this.f51622p.hashCode() * 31;
                String str = this.f51623q;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f51624r.hashCode()) * 31) + this.f51625s.hashCode()) * 31;
                vn.d dVar = this.f51626t;
                if (dVar == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = dVar.hashCode();
                }
                int hashCode5 = (((((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f51627u)) * 31) + Boolean.hashCode(this.f51628v)) * 31;
                String str2 = this.f51629w;
                if (str2 != null) {
                    i10 = str2.hashCode();
                }
                return hashCode5 + i10;
            }

            @Override // vn.r2.f
            public InterfaceC0697f i() {
                return this.f51625s;
            }

            public final c j(List documents, String str, a captureState, InterfaceC0697f uploadState, vn.d dVar, boolean z10, boolean z11, String str2) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new c(documents, str, captureState, uploadState, dVar, z10, z11, str2);
            }

            public final String m() {
                return this.f51629w;
            }

            public final boolean n() {
                return this.f51627u;
            }

            public final boolean o() {
                return this.f51628v;
            }

            public String toString() {
                List list = this.f51622p;
                String str = this.f51623q;
                a aVar = this.f51624r;
                InterfaceC0697f interfaceC0697f = this.f51625s;
                vn.d dVar = this.f51626t;
                boolean z10 = this.f51627u;
                boolean z11 = this.f51628v;
                String str2 = this.f51629w;
                return "ReviewCapturesWithoutDocumentId(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0697f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f51622p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f51623q);
                dest.writeString(this.f51624r.name());
                dest.writeParcelable(this.f51625s, i10);
                dest.writeParcelable(this.f51626t, i10);
                dest.writeInt(this.f51627u ? 1 : 0);
                dest.writeInt(this.f51628v ? 1 : 0);
                dest.writeString(this.f51629w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(List documents, String str, a captureState, InterfaceC0697f uploadState, vn.d dVar, boolean z10, boolean z11, String str2) {
                super(captureState, uploadState, str, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f51622p = documents;
                this.f51623q = str;
                this.f51624r = captureState;
                this.f51625s = uploadState;
                this.f51626t = dVar;
                this.f51627u = z10;
                this.f51628v = z11;
                this.f51629w = str2;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends f {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final a f51630p;

            /* renamed from: q  reason: collision with root package name */
            private final InterfaceC0697f f51631q;

            /* renamed from: r  reason: collision with root package name */
            private final String f51632r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f51633s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    boolean z10;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    a valueOf = a.valueOf(parcel.readString());
                    InterfaceC0697f interfaceC0697f = (InterfaceC0697f) parcel.readParcelable(d.class.getClassLoader());
                    String readString = parcel.readString();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    return new d(valueOf, interfaceC0697f, readString, z10);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final d[] newArray(int i10) {
                    return new d[i10];
                }
            }

            public /* synthetic */ d(a aVar, InterfaceC0697f interfaceC0697f, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this((i10 & 1) != 0 ? a.f51607d : aVar, (i10 & 2) != 0 ? InterfaceC0697f.a.f51638d : interfaceC0697f, str, (i10 & 8) != 0 ? false : z10);
            }

            public static /* synthetic */ d k(d dVar, a aVar, InterfaceC0697f interfaceC0697f, String str, boolean z10, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    aVar = dVar.f51630p;
                }
                if ((i10 & 2) != 0) {
                    interfaceC0697f = dVar.f51631q;
                }
                if ((i10 & 4) != 0) {
                    str = dVar.f51632r;
                }
                if ((i10 & 8) != 0) {
                    z10 = dVar.f51633s;
                }
                return dVar.j(aVar, interfaceC0697f, str, z10);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // vn.r2.f
            public a e() {
                return this.f51630p;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof d)) {
                    return false;
                }
                d dVar = (d) obj;
                if (this.f51630p == dVar.f51630p && Intrinsics.areEqual(this.f51631q, dVar.f51631q) && Intrinsics.areEqual(this.f51632r, dVar.f51632r) && this.f51633s == dVar.f51633s) {
                    return true;
                }
                return false;
            }

            @Override // vn.r2.f
            public String f() {
                return this.f51632r;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f51630p.hashCode() * 31) + this.f51631q.hashCode()) * 31;
                String str = this.f51632r;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f51633s);
            }

            @Override // vn.r2.f
            public InterfaceC0697f i() {
                return this.f51631q;
            }

            public final d j(a captureState, InterfaceC0697f uploadState, String str, boolean z10) {
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new d(captureState, uploadState, str, z10);
            }

            public final boolean m() {
                return this.f51633s;
            }

            public String toString() {
                a aVar = this.f51630p;
                InterfaceC0697f interfaceC0697f = this.f51631q;
                String str = this.f51632r;
                boolean z10 = this.f51633s;
                return "Start(captureState=" + aVar + ", uploadState=" + interfaceC0697f + ", documentId=" + str + ", shouldShowUploadOptionsDialog=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f51630p.name());
                dest.writeParcelable(this.f51631q, i10);
                dest.writeString(this.f51632r);
                dest.writeInt(this.f51633s ? 1 : 0);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(a captureState, InterfaceC0697f uploadState, String str, boolean z10) {
                super(captureState, uploadState, str, CollectionsKt.l(), null);
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f51630p = captureState;
                this.f51631q = uploadState;
                this.f51632r = str;
                this.f51633s = z10;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f51642a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f51643b;

        static {
            int[] iArr = new int[zo.g1.values().length];
            try {
                iArr[zo.g1.f55935d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[zo.g1.f55936e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[zo.g1.f55937i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f51642a = iArr;
            int[] iArr2 = new int[f.a.values().length];
            try {
                iArr2[f.a.f51607d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[f.a.f51608e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[f.a.f51609i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[f.a.f51610o.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[f.a.f51611p.ordinal()] = 5;
            } catch (NoSuchFieldError unused8) {
            }
            f51643b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51644d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f51645e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f51646i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f51647o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, r2 r2Var, String str, Continuation continuation) {
            super(2, continuation);
            this.f51645e = aVar;
            this.f51646i = r2Var;
            this.f51647o = str;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(String str, r.c cVar) {
            f.c cVar2;
            Object c10 = cVar.c();
            if (c10 instanceof f.c) {
                cVar2 = (f.c) c10;
            } else {
                cVar2 = null;
            }
            if (cVar2 == null) {
                return Unit.f33298a;
            }
            cVar.e(new f.b(cVar2.g(), str, null, new f.InterfaceC0697f.d(str), null, false, false, cVar2.m(), 116, null));
            return Unit.f33298a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f51645e, this.f51646i, this.f51647o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            tm.r d10;
            or.b.f();
            if (this.f51644d == 0) {
                kotlin.c.b(obj);
                tm.h c10 = this.f51645e.c();
                r2 r2Var = this.f51646i;
                final String str = this.f51647o;
                d10 = tm.z.d(r2Var, null, new Function1() { // from class: vn.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.h.k(str, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f33298a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51648d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f51649e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f51650i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f.InterfaceC0697f f51651o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, r2 r2Var, f.InterfaceC0697f interfaceC0697f, Continuation continuation) {
            super(2, continuation);
            this.f51649e = aVar;
            this.f51650i = r2Var;
            this.f51651o = interfaceC0697f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(f.InterfaceC0697f interfaceC0697f, r.c cVar) {
            cVar.e(f.d((f) cVar.c(), new f.InterfaceC0697f.c(((f.InterfaceC0697f.d) interfaceC0697f).a()), null, null, null, 14, null));
            return Unit.f33298a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f51649e, this.f51650i, this.f51651o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            tm.r d10;
            or.b.f();
            if (this.f51648d == 0) {
                kotlin.c.b(obj);
                tm.h c10 = this.f51649e.c();
                r2 r2Var = this.f51650i;
                final f.InterfaceC0697f interfaceC0697f = this.f51651o;
                d10 = tm.z.d(r2Var, null, new Function1() { // from class: vn.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.i.k(r2.f.InterfaceC0697f.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f33298a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public r2(v4.h imageLoader, Context applicationContext, zo.c1 permissionRequestWorkflow, vn.c documentCameraWorker, v2.b documentsSelectWorkerFactory, a.C0226a documentCreateWorker, c.a documentLoadWorker, b.a documentFileUploadWorker, a.C0741a documentFileDeleteWorker, d.a documentSubmitWorker, rp.b navigationStateManager, np.c externalEventLogger) {
        Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        Intrinsics.checkNotNullParameter(documentCameraWorker, "documentCameraWorker");
        Intrinsics.checkNotNullParameter(documentsSelectWorkerFactory, "documentsSelectWorkerFactory");
        Intrinsics.checkNotNullParameter(documentCreateWorker, "documentCreateWorker");
        Intrinsics.checkNotNullParameter(documentLoadWorker, "documentLoadWorker");
        Intrinsics.checkNotNullParameter(documentFileUploadWorker, "documentFileUploadWorker");
        Intrinsics.checkNotNullParameter(documentFileDeleteWorker, "documentFileDeleteWorker");
        Intrinsics.checkNotNullParameter(documentSubmitWorker, "documentSubmitWorker");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        Intrinsics.checkNotNullParameter(externalEventLogger, "externalEventLogger");
        this.f51520a = imageLoader;
        this.f51521b = applicationContext;
        this.f51522c = permissionRequestWorkflow;
        this.f51523d = documentCameraWorker;
        this.f51524e = documentsSelectWorkerFactory;
        this.f51525f = documentCreateWorker;
        this.f51526g = documentLoadWorker;
        this.f51527h = documentFileUploadWorker;
        this.f51528i = documentFileDeleteWorker;
        this.f51529j = documentSubmitWorker;
        this.f51530k = navigationStateManager;
        this.f51531l = externalEventLogger;
    }

    private final List A0(u uVar, final k.a aVar) {
        return new b.a().a(uVar.b(), new Function1() { // from class: vn.v0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit C0;
                C0 = r2.C0(r2.this, aVar, (k5) obj);
                return C0;
            }
        }).a(uVar.c(), new Function1() { // from class: vn.w0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit D0;
                D0 = r2.D0(r2.this, aVar, (k5) obj);
                return D0;
            }
        }).a(uVar.d(), new Function1() { // from class: vn.x0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E0;
                E0 = r2.E0(r2.this, aVar, (k5) obj);
                return E0;
            }
        }).a(uVar.a(), new Function1() { // from class: vn.y0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit F0;
                F0 = r2.F0(r2.this, aVar, (k5) obj);
                return F0;
            }
        }).b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f51533a);
        return Unit.f33298a;
    }

    private final List B0(b3 b3Var, final k.a aVar) {
        return new b.a().a(b3Var.b(), new Function1() { // from class: vn.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit G0;
                G0 = r2.G0(r2.this, aVar, (k5) obj);
                return G0;
            }
        }).a(b3Var.c(), new Function1() { // from class: vn.b1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit H0;
                H0 = r2.H0(r2.this, aVar, (k5) obj);
                return H0;
            }
        }).a(b3Var.d(), new Function1() { // from class: vn.c1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit I0;
                I0 = r2.I0(r2.this, aVar, (k5) obj);
                return I0;
            }
        }).b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r B1(final r2 r2Var, final f fVar, final c1.a it) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = tm.z.d(r2Var, null, new Function1() { // from class: vn.z0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit C1;
                C1 = r2.C1(c1.a.this, r2Var, fVar, (r.c) obj);
                return C1;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.g.f51539a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f51642a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new ir.p();
            }
            action.e(fVar.a(f.a.f51607d));
        } else {
            vn.c cVar = r2Var.f51523d;
            String string = r2Var.f51521b.getString(bp.e.f7640a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f51609i);
            } else {
                a10 = fVar.a(f.a.f51607d);
            }
            action.e(a10);
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f51540a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r D1(r2 r2Var, final f fVar, final c.b it) {
        tm.r d10;
        tm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0235b) {
            d11 = tm.z.d(r2Var, null, new Function1() { // from class: vn.d1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit E1;
                    E1 = r2.E1(r2.f.this, it, (r.c) obj);
                    return E1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = tm.z.d(r2Var, null, new Function1() { // from class: vn.e1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit F1;
                    F1 = r2.F1(c.b.this, (r.c) obj);
                    return F1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f51542a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(f fVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.b bVar2 = (f.b) fVar;
        action.e(f.b.k(bVar2, ((c.b.C0235b) bVar).a(), null, null, new f.InterfaceC0697f.c(bVar2.f()), null, false, false, null, 214, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.e.f51536a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F1(c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0695c(((c.b.a) bVar).a()));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.g.f51539a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f51539a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f51540a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f51540a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f51542a);
        return Unit.f33298a;
    }

    private final void I1(f.a aVar, final b bVar, final f fVar, k.a aVar2) {
        v2 e10;
        int i10 = g.f51643b[aVar.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4 && i10 != 5) {
                    throw new ir.p();
                }
                if (fVar.e() == f.a.f51610o) {
                    e10 = this.f51524e.c();
                } else {
                    e10 = this.f51524e.e();
                }
                tm.w.l(aVar2, e10, Reflection.typeOf(v2.class), "", new Function1() { // from class: vn.h1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        tm.r N1;
                        N1 = r2.N1(r2.this, bVar, fVar, (v2.c) obj);
                        return N1;
                    }
                });
                return;
            }
            tm.w.l(aVar2, this.f51523d, Reflection.typeOf(vn.c.class), "", new Function1() { // from class: vn.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    tm.r K1;
                    K1 = r2.K1(r2.this, bVar, (c.b) obj);
                    return K1;
                }
            });
        }
    }

    private final void J1(final f.InterfaceC0697f interfaceC0697f, b bVar, f fVar, k.a aVar) {
        if (Intrinsics.areEqual(interfaceC0697f, f.InterfaceC0697f.a.f51638d)) {
            if (fVar.f() == null) {
                tm.w.l(aVar, this.f51525f.a(bVar.v(), bVar.k(), bVar.g(), bVar.e()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.a.class), "", new Function1() { // from class: vn.j1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        tm.r R1;
                        R1 = r2.R1(r2.this, (a.b) obj);
                        return R1;
                    }
                });
                return;
            }
            return;
        }
        final d.b bVar2 = null;
        if (interfaceC0697f instanceof f.InterfaceC0697f.d) {
            ArrayList arrayList = new ArrayList();
            for (Object obj : fVar.g()) {
                if (obj instanceof d.a) {
                    arrayList.add(obj);
                }
            }
            if (arrayList.isEmpty()) {
                aVar.a("upload_complete", new i(aVar, this, interfaceC0697f, null));
                return;
            }
            for (final d.a aVar2 : CollectionsKt.a1(arrayList, 3)) {
                tm.w.l(aVar, this.f51527h.a(bVar.v(), ((f.InterfaceC0697f.d) interfaceC0697f).a(), aVar2), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.b.class), aVar2.c(), new Function1() { // from class: vn.k1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        tm.r U1;
                        U1 = r2.U1(r2.this, interfaceC0697f, aVar2, (b.AbstractC0229b) obj2);
                        return U1;
                    }
                });
            }
        } else if (interfaceC0697f instanceof f.InterfaceC0697f.b) {
            if (fVar instanceof f.b) {
                f.b bVar3 = (f.b) fVar;
                vn.d m10 = bVar3.m();
                if (m10 instanceof d.b) {
                    bVar2 = (d.b) m10;
                }
                if (bVar2 == null) {
                    return;
                }
                tm.w.l(aVar, this.f51528i.a(bVar.v(), bVar3.f(), bVar2), Reflection.typeOf(xn.a.class), "", new Function1() { // from class: vn.l1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        tm.r Z1;
                        Z1 = r2.Z1(r2.this, bVar2, interfaceC0697f, (a.b) obj2);
                        return Z1;
                    }
                });
            }
        } else if (!(interfaceC0697f instanceof f.InterfaceC0697f.c)) {
            throw new ir.p();
        }
    }

    private final void K0(b bVar, f fVar) {
        np.b bVar2;
        if (fVar.e() == f.a.f51609i) {
            bVar2 = b.d.f42043a;
        } else if (fVar instanceof f.d) {
            bVar2 = b.C0523b.f42041a;
        } else if (fVar instanceof f.b) {
            bVar2 = b.c.f42042a;
        } else if (fVar instanceof f.c) {
            bVar2 = b.c.f42042a;
        } else if (fVar instanceof f.e) {
            bVar2 = b.a.f42040a;
        } else {
            throw new ir.p();
        }
        this.f51531l.c(new i.b(bVar.i(), bVar2));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r K1(r2 r2Var, final b bVar, final c.b it) {
        tm.r d10;
        tm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0689b) {
            d11 = tm.z.d(r2Var, null, new Function1() { // from class: vn.d2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit L1;
                    L1 = r2.L1(c.b.this, bVar, (r.c) obj);
                    return L1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, c.b.a.f51380a)) {
            d10 = tm.z.d(r2Var, null, new Function1() { // from class: vn.e2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M1;
                    M1 = r2.M1((r.c) obj);
                    return M1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    private final void L0(k.a aVar, final a aVar2) {
        tm.r d10;
        if (Intrinsics.areEqual(aVar2, a.b.f51533a)) {
            d10 = tm.z.d(this, null, new Function1() { // from class: vn.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M0;
                    M0 = r2.M0((r.c) obj);
                    return M0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.C0694a.f51532a)) {
            d10 = tm.z.d(this, null, new Function1() { // from class: vn.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = r2.N0((r.c) obj);
                    return N0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.g.f51539a)) {
            d10 = tm.z.d(this, null, new Function1() { // from class: vn.s1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = r2.O0((r.c) obj);
                    return O0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.h.f51540a)) {
            d10 = tm.z.d(this, null, new Function1() { // from class: vn.t1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P0;
                    P0 = r2.P0((r.c) obj);
                    return P0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.j.f51542a)) {
            d10 = tm.z.d(this, null, new Function1() { // from class: vn.u1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q0;
                    Q0 = r2.Q0((r.c) obj);
                    return Q0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.e.f51536a)) {
            d10 = tm.z.d(this, null, new Function1() { // from class: vn.v1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R0;
                    R0 = r2.R0((r.c) obj);
                    return R0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.c.f51534a)) {
            d10 = tm.z.d(this, null, new Function1() { // from class: vn.w1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S0;
                    S0 = r2.S0((r.c) obj);
                    return S0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.f) {
            d10 = tm.z.d(this, null, new Function1() { // from class: vn.x1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = r2.T0(r2.a.this, (r.c) obj);
                    return T0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.d.f51535a)) {
            d10 = tm.z.d(this, null, new Function1() { // from class: vn.y1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = r2.U0((r.c) obj);
                    return U0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.i) {
            d10 = tm.z.d(this, null, new Function1() { // from class: vn.z1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V0;
                    V0 = r2.V0(r2.a.this, (r.c) obj);
                    return V0;
                }
            }, 1, null);
        } else {
            throw new ir.p();
        }
        aVar.c().d(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(c.b bVar, b bVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.M0(((f) action.c()).g(), new d.a(((c.b.C0689b) bVar).a(), vn.a.f51353i, 0, 4, null)), bVar2.e()), ((f) action.c()).f(), null, ((f) action.c()).i(), null, false, false, null, 244, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.b.f51569a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f51607d));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.a.f51568a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r N1(final r2 r2Var, final b bVar, final f fVar, final v2.c it) {
        tm.r d10;
        tm.r d11;
        tm.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof v2.c.C0700c) {
            d12 = tm.z.d(r2Var, null, new Function1() { // from class: vn.f2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O1;
                    O1 = r2.O1(v2.c.this, bVar, (r.c) obj);
                    return O1;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof v2.c.b) {
            d11 = tm.z.d(r2Var, null, new Function1() { // from class: vn.g2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P1;
                    P1 = r2.P1(v2.c.this, bVar, r2Var, (r.c) obj);
                    return P1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, v2.c.a.f51690a)) {
            d10 = tm.z.d(r2Var, null, new Function1() { // from class: vn.h2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q1;
                    Q1 = r2.Q1(r2.f.this, (r.c) obj);
                    return Q1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f51610o).b(false));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(v2.c cVar, b bVar, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0697f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.C0700c) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, null, 244, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f51611p).b(false));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P1(v2.c cVar, b bVar, r2 r2Var, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0697f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.b) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, r2Var.f51521b.getString(bp.e.f7649j), 116, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f51608e).b(false));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(fVar.a(f.a.f51607d));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(true));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r R1(r2 r2Var, final a.b it) {
        tm.r d10;
        tm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a.b.C0228b) {
            d11 = tm.z.d(r2Var, null, new Function1() { // from class: vn.a2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S1;
                    S1 = r2.S1(a.b.this, (r.c) obj);
                    return S1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof a.b.C0227a) {
            d10 = tm.z.d(r2Var, null, new Function1() { // from class: vn.c2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T1;
                    T1 = r2.T1(a.b.this, (r.c) obj);
                    return T1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(false));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0228b c0228b = (a.b.C0228b) bVar;
        action.e(f.d((f) action.c(), new f.InterfaceC0697f.c(c0228b.a()), c0228b.a(), null, null, 12, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (action.c() instanceof f.b) {
            a.f fVar = (a.f) aVar;
            action.e(f.d((f) action.c(), new f.InterfaceC0697f.b(fVar.b()), null, null, fVar.a(), 6, null));
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0227a c0227a = (a.b.C0227a) bVar;
        if (!c0227a.a().isRecoverable()) {
            action.d(new c.C0695c(c0227a.a()));
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f fVar = (f) action.c();
        if (fVar instanceof f.b) {
            action.e(f.b.k((f.b) fVar, null, null, null, null, null, false, false, null, 127, null));
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r U1(final r2 r2Var, final f.InterfaceC0697f interfaceC0697f, final d.a aVar, final b.AbstractC0229b response) {
        tm.r d10;
        tm.r d11;
        tm.r d12;
        tm.r d13;
        Intrinsics.checkNotNullParameter(response, "response");
        if (response instanceof b.AbstractC0229b.d) {
            d13 = tm.z.d(r2Var, null, new Function1() { // from class: vn.i2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V1;
                    V1 = r2.V1(r2.f.InterfaceC0697f.this, response, (r.c) obj);
                    return V1;
                }
            }, 1, null);
            return d13;
        } else if (response instanceof b.AbstractC0229b.c) {
            d12 = tm.z.d(r2Var, null, new Function1() { // from class: vn.j2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit W1;
                    W1 = r2.W1(d.a.this, response, (r.c) obj);
                    return W1;
                }
            }, 1, null);
            return d12;
        } else if (response instanceof b.AbstractC0229b.a) {
            d11 = tm.z.d(r2Var, null, new Function1() { // from class: vn.k2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit X1;
                    X1 = r2.X1(d.a.this, interfaceC0697f, response, r2Var, (r.c) obj);
                    return X1;
                }
            }, 1, null);
            return d11;
        } else if (response instanceof b.AbstractC0229b.C0230b) {
            d10 = tm.z.d(r2Var, null, new Function1() { // from class: vn.l2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y1;
                    Y1 = r2.Y1(b.AbstractC0229b.this, (r.c) obj);
                    return Y1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.i iVar = (a.i) aVar;
        action.e(new f.e(((f) action.c()).g(), iVar.a(), new f.InterfaceC0697f.c(iVar.a()), null, 8, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(f.InterfaceC0697f interfaceC0697f, b.AbstractC0229b abstractC0229b, r.c action) {
        f.InterfaceC0697f cVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> g10 = ((f) action.c()).g();
        ArrayList<vn.d> arrayList = new ArrayList(CollectionsKt.w(g10, 10));
        for (Parcelable parcelable : g10) {
            b.AbstractC0229b.d dVar = (b.AbstractC0229b.d) abstractC0229b;
            if (Intrinsics.areEqual(parcelable, dVar.b())) {
                parcelable = dVar.a();
            }
            arrayList.add(parcelable);
        }
        if (!arrayList.isEmpty()) {
            for (vn.d dVar2 : arrayList) {
                if (dVar2 instanceof d.a) {
                    cVar = new f.InterfaceC0697f.d(((f.InterfaceC0697f.d) interfaceC0697f).a());
                    break;
                }
            }
        }
        cVar = new f.InterfaceC0697f.c(((f.InterfaceC0697f.d) interfaceC0697f).a());
        action.e(f.d((f) action.c(), cVar, null, arrayList, null, 10, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(d.a aVar, b.AbstractC0229b abstractC0229b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> g10 = ((f) action.c()).g();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(g10, 10));
        for (Parcelable parcelable : g10) {
            if ((parcelable instanceof d.a) && Intrinsics.areEqual(parcelable, aVar)) {
                parcelable = d.a.b((d.a) parcelable, null, null, ((b.AbstractC0229b.c) abstractC0229b).a(), 3, null);
            }
            arrayList.add(parcelable);
        }
        action.e(f.d((f) action.c(), ((f) action.c()).i(), null, arrayList, null, 10, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0694a.f51532a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(d.a aVar, f.InterfaceC0697f interfaceC0697f, b.AbstractC0229b abstractC0229b, r2 r2Var, r.c action) {
        f.InterfaceC0697f dVar;
        String d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List I0 = CollectionsKt.I0(((f) action.c()).g(), aVar);
        List<vn.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (vn.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0697f.d(((f.InterfaceC0697f.d) interfaceC0697f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0697f.c(((f.InterfaceC0697f.d) interfaceC0697f).a());
        f.InterfaceC0697f interfaceC0697f2 = dVar;
        String a10 = ((f.InterfaceC0697f.d) interfaceC0697f).a();
        f.a aVar2 = f.a.f51607d;
        d10 = u2.d(((b.AbstractC0229b.a) abstractC0229b).a(), r2Var.f51521b);
        action.e(new f.b(I0, a10, aVar2, interfaceC0697f2, null, false, false, d10, 80, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f51533a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(b.AbstractC0229b abstractC0229b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0695c(((b.AbstractC0229b.C0230b) abstractC0229b).a()));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f51542a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r Z1(r2 r2Var, final d.b bVar, final f.InterfaceC0697f interfaceC0697f, final a.b response) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(response, "response");
        d10 = tm.z.d(r2Var, null, new Function1() { // from class: vn.n2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit a22;
                a22 = r2.a2(d.b.this, interfaceC0697f, response, (r.c) obj);
                return a22;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f51536a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(d.b bVar, f.InterfaceC0697f interfaceC0697f, a.b bVar2, r.c action) {
        f.b bVar3;
        f.InterfaceC0697f dVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof f.b) {
            bVar3 = (f.b) c10;
        } else {
            bVar3 = null;
        }
        f.b bVar4 = bVar3;
        if (bVar4 == null) {
            return Unit.f33298a;
        }
        List I0 = CollectionsKt.I0(bVar4.g(), bVar);
        List<vn.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (vn.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0697f.d(((f.InterfaceC0697f.b) interfaceC0697f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0697f.c(((f.InterfaceC0697f.b) interfaceC0697f).a());
        f.InterfaceC0697f interfaceC0697f2 = dVar;
        if (bVar2 instanceof a.b.C0743b) {
            action.e(f.b.k(bVar4, I0, null, null, interfaceC0697f2, null, false, false, null, 230, null));
        } else if (bVar2 instanceof a.b.C0742a) {
            action.d(new c.C0695c(((a.b.C0742a) bVar2).a()));
        } else {
            throw new ir.p();
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b1(r2 r2Var, k.a aVar, f fVar, d.b document) {
        Intrinsics.checkNotNullParameter(document, "document");
        r2Var.L0(aVar, new a.f(((f.b) fVar).f(), document));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c1(r2 r2Var, k.a aVar, f fVar) {
        r2Var.L0(aVar, new a.i(((f.b) fVar).f()));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f51533a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0694a.f51532a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f51535a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r g1(final r2 r2Var, final f fVar, final c1.a it) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = tm.z.d(r2Var, null, new Function1() { // from class: vn.i1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h12;
                h12 = r2.h1(c1.a.this, r2Var, fVar, (r.c) obj);
                return h12;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f51642a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new ir.p();
            }
            action.e(fVar.a(f.a.f51607d));
        } else {
            vn.c cVar = r2Var.f51523d;
            String string = r2Var.f51521b.getString(bp.e.f7640a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f51609i);
            } else {
                a10 = fVar.a(f.a.f51607d);
            }
            action.e(a10);
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f51534a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f51534a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f51539a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f51540a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f51542a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f51536a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(d.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1() {
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f51533a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0694a.f51532a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f51535a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r t1(final r2 r2Var, final f fVar, final c1.a it) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = tm.z.d(r2Var, null, new Function1() { // from class: vn.o1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit u12;
                u12 = r2.u1(c1.a.this, r2Var, fVar, (r.c) obj);
                return u12;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f51642a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new ir.p();
            }
            action.e(fVar.a(f.a.f51607d));
        } else {
            vn.c cVar = r2Var.f51523d;
            String string = r2Var.f51521b.getString(bp.e.f7640a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f51609i);
            } else {
                a10 = fVar.a(f.a.f51607d);
            }
            action.e(a10);
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f51534a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r w1(r2 r2Var, final d.b it) {
        tm.r d10;
        tm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, d.b.C0237b.f19590a)) {
            d11 = tm.z.d(r2Var, null, new Function1() { // from class: vn.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit x12;
                    x12 = r2.x1((r.c) obj);
                    return x12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof d.b.a) {
            d10 = tm.z.d(r2Var, null, new Function1() { // from class: vn.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = r2.y1(d.b.this, (r.c) obj);
                    return y12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.d.f51571a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(d.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0695c(((d.b.a) bVar).a()));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f51533a);
        return Unit.f33298a;
    }

    @Override // tm.k
    /* renamed from: J0 */
    public f d(b props, tm.i iVar) {
        f b10;
        Intrinsics.checkNotNullParameter(props, "props");
        if (iVar != null) {
            ByteString b11 = iVar.b();
            Object obj = null;
            if (b11.G() <= 0) {
                b11 = null;
            }
            if (b11 != null) {
                Parcel obtain = Parcel.obtain();
                Intrinsics.checkNotNullExpressionValue(obtain, "obtain()");
                byte[] L = b11.L();
                obtain.unmarshall(L, 0, L.length);
                obtain.setDataPosition(0);
                Object readParcelable = obtain.readParcelable(tm.i.class.getClassLoader());
                Intrinsics.checkNotNull(readParcelable);
                Intrinsics.checkNotNullExpressionValue(readParcelable, "parcel.readParcelable<T>…class.java.classLoader)!!");
                obtain.recycle();
                obj = readParcelable;
            }
            f fVar = (f) obj;
            if (fVar != null && (b10 = fVar.b(false)) != null) {
                return b10;
            }
        }
        e w10 = props.w();
        if (Intrinsics.areEqual(w10, e.a.f51601d)) {
            return new f.d(null, null, props.f(), false, 11, null);
        }
        if (w10 instanceof e.b) {
            return new f.b(CollectionsKt.l(), ((e.b) props.w()).a(), null, null, null, true, false, null, 220, null);
        }
        throw new ir.p();
    }

    @Override // tm.k
    /* renamed from: W0 */
    public Object f(b renderProps, final f renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        this.f51530k.c(renderProps.b(), renderProps.c(), !(renderState instanceof f.e));
        I1(renderState.e(), renderProps, renderState, context);
        J1(renderState.i(), renderProps, renderState, context);
        K0(renderProps, renderState);
        if (renderState instanceof f.d) {
            Object iVar = new vn.i(vp.c.a(renderProps.l().a()), A0(renderProps.l().a(), context), this.f51530k.b(), new Function0() { // from class: vn.y
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit X0;
                    X0 = r2.X0(r2.this, context);
                    return X0;
                }
            }, new Function0() { // from class: vn.a0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Y0;
                    Y0 = r2.Y0(r2.this, context);
                    return Y0;
                }
            });
            f.d dVar = (f.d) renderState;
            if (dVar.m()) {
                iVar = wo.d.a(vp.m.f51907a.j(vp.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: vn.m0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit j12;
                        j12 = r2.j1(r2.this, context);
                        return j12;
                    }
                }, renderProps.l().b().a()), iVar, "document_upload_options_dialog");
            }
            boolean z10 = dVar.e() == f.a.f51608e;
            zo.d0 d0Var = zo.d0.f55909d;
            String s10 = renderProps.s();
            String str = s10 != null ? s10 : "";
            String r10 = renderProps.r();
            if (r10 == null) {
                r10 = this.f51521b.getString(bp.e.f7642c);
                Intrinsics.checkNotNullExpressionValue(r10, "getString(...)");
            }
            Context context2 = this.f51521b;
            String string = context2.getString(bp.e.f7641b, jp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return zo.l1.e(iVar, context, z10, d0Var, false, str, r10, string, renderProps.q(), renderProps.p(), null, null, null, this.f51522c, renderProps.x(), null, new Function1() { // from class: vn.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    tm.r B1;
                    B1 = r2.B1(r2.this, renderState, (c1.a) obj);
                    return B1;
                }
            }, 19976, null);
        } else if (renderState instanceof f.b) {
            f.b bVar = (f.b) renderState;
            if (bVar.o()) {
                tm.w.l(context, this.f51526g.a(renderProps.v(), bVar.f()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.c.class), "", new Function1() { // from class: vn.o0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        tm.r D1;
                        D1 = r2.D1(r2.this, renderState, (c.b) obj);
                        return D1;
                    }
                });
            }
            d.b bVar2 = new d.b(this.f51520a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), bVar.g(), this.f51530k.b(), new Function0() { // from class: vn.p0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit G1;
                    G1 = r2.G1(r2.this, context);
                    return G1;
                }
            }, new Function0() { // from class: vn.q0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit H1;
                    H1 = r2.H1(r2.this, context);
                    return H1;
                }
            }, new Function0() { // from class: vn.r0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Z0;
                    Z0 = r2.Z0(r2.this, context);
                    return Z0;
                }
            }, new Function0() { // from class: vn.s0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit a12;
                    a12 = r2.a1(r2.this, context);
                    return a12;
                }
            }, new Function1() { // from class: vn.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit b12;
                    b12 = r2.b1(r2.this, context, renderState, (d.b) obj);
                    return b12;
                }
            }, new Function0() { // from class: vn.j0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit c12;
                    c12 = r2.c1(r2.this, context, renderState);
                    return c12;
                }
            }, new Function0() { // from class: vn.u0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit d12;
                    d12 = r2.d1(r2.this, context);
                    return d12;
                }
            }, new Function0() { // from class: vn.f1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit e12;
                    e12 = r2.e1(r2.this, context);
                    return e12;
                }
            }, bVar.o(), bVar.g().size() < renderProps.e(), !bVar.g().isEmpty() && Intrinsics.areEqual(bVar.i(), new f.InterfaceC0697f.c(bVar.f())), bVar.n(), new Function0() { // from class: vn.q1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f12;
                    f12 = r2.f1(r2.this, context);
                    return f12;
                }
            }, renderProps.x());
            boolean z11 = bVar.e() == f.a.f51608e;
            zo.d0 d0Var2 = zo.d0.f55909d;
            String s11 = renderProps.s();
            if (s11 == null) {
                s11 = "";
            }
            String r11 = renderProps.r();
            if (r11 == null) {
                r11 = this.f51521b.getString(bp.e.f7642c);
                Intrinsics.checkNotNullExpressionValue(r11, "getString(...)");
            }
            Context context3 = this.f51521b;
            String string2 = context3.getString(bp.e.f7641b, jp.f.b(context3));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            wo.c e10 = zo.l1.e(bVar2, context, z11, d0Var2, false, s11, r11, string2, renderProps.q(), renderProps.p(), null, null, null, this.f51522c, renderProps.x(), null, new Function1() { // from class: vn.b2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    tm.r g12;
                    g12 = r2.g1(r2.this, renderState, (c1.a) obj);
                    return g12;
                }
            }, 19976, null);
            if (bVar.p()) {
                return wo.d.a(vp.m.f51907a.j(vp.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: vn.m2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i12;
                        i12 = r2.i1(r2.this, context);
                        return i12;
                    }
                }, renderProps.l().b().a()), e10, "document_upload_screen");
            }
            return new wo.c(e10, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.c) {
            f.c cVar = (f.c) renderState;
            String f10 = cVar.f();
            if (f10 != null) {
                context.a(f10, new h(context, this, f10, null));
            }
            d.b bVar3 = new d.b(this.f51520a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), cVar.g(), this.f51530k.b(), new Function0() { // from class: vn.o2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit k12;
                    k12 = r2.k1(r2.this, context);
                    return k12;
                }
            }, new Function0() { // from class: vn.p2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit l12;
                    l12 = r2.l1(r2.this, context);
                    return l12;
                }
            }, new Function0() { // from class: vn.q2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m12;
                    m12 = r2.m1(r2.this, context);
                    return m12;
                }
            }, new Function0() { // from class: vn.z
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit n12;
                    n12 = r2.n1(r2.this, context);
                    return n12;
                }
            }, new Function1() { // from class: vn.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o12;
                    o12 = r2.o1((d.b) obj);
                    return o12;
                }
            }, new Function0() { // from class: vn.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit p12;
                    p12 = r2.p1();
                    return p12;
                }
            }, new Function0() { // from class: vn.d0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit q12;
                    q12 = r2.q1(r2.this, context);
                    return q12;
                }
            }, new Function0() { // from class: vn.e0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit r12;
                    r12 = r2.r1(r2.this, context);
                    return r12;
                }
            }, cVar.n(), cVar.g().size() < renderProps.e(), false, cVar.m(), new Function0() { // from class: vn.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit s12;
                    s12 = r2.s1(r2.this, context);
                    return s12;
                }
            }, renderProps.x());
            boolean z12 = cVar.e() == f.a.f51608e;
            zo.d0 d0Var3 = zo.d0.f55909d;
            String s12 = renderProps.s();
            if (s12 == null) {
                s12 = "";
            }
            String r12 = renderProps.r();
            if (r12 == null) {
                r12 = this.f51521b.getString(bp.e.f7642c);
                Intrinsics.checkNotNullExpressionValue(r12, "getString(...)");
            }
            Context context4 = this.f51521b;
            String string3 = context4.getString(bp.e.f7641b, jp.f.b(context4));
            Intrinsics.checkNotNullExpressionValue(string3, "getString(...)");
            wo.c e11 = zo.l1.e(bVar3, context, z12, d0Var3, false, s12, r12, string3, renderProps.q(), renderProps.p(), null, null, null, this.f51522c, renderProps.x(), null, new Function1() { // from class: vn.g0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    tm.r t12;
                    t12 = r2.t1(r2.this, renderState, (c1.a) obj);
                    return t12;
                }
            }, 19976, null);
            if (cVar.o()) {
                return wo.d.a(vp.m.f51907a.j(vp.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: vn.h0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v12;
                        v12 = r2.v1(r2.this, context);
                        return v12;
                    }
                }, renderProps.l().b().a()), e11, "document_upload_screen");
            }
            return new wo.c(e11, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.e) {
            tm.w.l(context, this.f51529j.a(renderProps.v(), renderProps.j(), renderProps.i(), renderProps.h(), ((f.e) renderState).g()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.d.class), "", new Function1() { // from class: vn.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    tm.r w12;
                    w12 = r2.w1(r2.this, (d.b) obj);
                    return w12;
                }
            });
            rp.b.d(this.f51530k, false, false, false, 4, null);
            return new d.a(renderProps.o(), renderProps.m(), this.f51530k.b(), new Function0() { // from class: vn.k0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit z13;
                    z13 = r2.z1(r2.this, context);
                    return z13;
                }
            }, new Function0() { // from class: vn.l0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit A1;
                    A1 = r2.A1(r2.this, context);
                    return A1;
                }
            }, renderProps.x(), renderProps.a().getPendingPage(), renderProps.n());
        } else {
            throw new ir.p();
        }
    }

    @Override // tm.k
    /* renamed from: b2 */
    public tm.i g(f state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return vm.s.a(state);
    }
}
