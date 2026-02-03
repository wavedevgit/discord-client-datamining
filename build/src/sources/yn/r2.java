package yn;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import ao.a;
import aq.k5;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.document.network.a;
import com.withpersona.sdk2.inquiry.document.network.b;
import com.withpersona.sdk2.inquiry.document.network.c;
import com.withpersona.sdk2.inquiry.document.network.d;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import cp.c1;
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
import okio.ByteString;
import org.jetbrains.annotations.NotNull;
import qp.b;
import qp.i;
import wm.k;
import wm.r;
import yn.c;
import yn.d;
import yn.r2;
import yn.v2;
import yp.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r2 extends wm.k {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f54885a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f54886b;

    /* renamed from: c  reason: collision with root package name */
    private final cp.c1 f54887c;

    /* renamed from: d  reason: collision with root package name */
    private final yn.c f54888d;

    /* renamed from: e  reason: collision with root package name */
    private final v2.b f54889e;

    /* renamed from: f  reason: collision with root package name */
    private final a.C0212a f54890f;

    /* renamed from: g  reason: collision with root package name */
    private final c.a f54891g;

    /* renamed from: h  reason: collision with root package name */
    private final b.a f54892h;

    /* renamed from: i  reason: collision with root package name */
    private final a.C0083a f54893i;

    /* renamed from: j  reason: collision with root package name */
    private final d.a f54894j;

    /* renamed from: k  reason: collision with root package name */
    private final up.b f54895k;

    /* renamed from: l  reason: collision with root package name */
    private final qp.c f54896l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: yn.r2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0759a extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final C0759a f54897a = new C0759a();

            private C0759a() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0759a)) {
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
            public static final b f54898a = new b();

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
            public static final c f54899a = new c();

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
            public static final d f54900a = new d();

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
            public static final e f54901a = new e();

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
            private final String f54902a;

            /* renamed from: b  reason: collision with root package name */
            private final d.b f54903b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String documentId, d.b document) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(document, "document");
                this.f54902a = documentId;
                this.f54903b = document;
            }

            public final d.b a() {
                return this.f54903b;
            }

            public final String b() {
                return this.f54902a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof f)) {
                    return false;
                }
                f fVar = (f) obj;
                if (Intrinsics.areEqual(this.f54902a, fVar.f54902a) && Intrinsics.areEqual(this.f54903b, fVar.f54903b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f54902a.hashCode() * 31) + this.f54903b.hashCode();
            }

            public String toString() {
                String str = this.f54902a;
                d.b bVar = this.f54903b;
                return "RemoveDocument(documentId=" + str + ", document=" + bVar + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class g extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final g f54904a = new g();

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
            public static final h f54905a = new h();

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
            private final String f54906a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public i(String documentId) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                this.f54906a = documentId;
            }

            public final String a() {
                return this.f54906a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof i) && Intrinsics.areEqual(this.f54906a, ((i) obj).f54906a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f54906a.hashCode();
            }

            public String toString() {
                String str = this.f54906a;
                return "Submit(documentId=" + str + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class j extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final j f54907a = new j();

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
        private final String f54908a;

        /* renamed from: b  reason: collision with root package name */
        private final String f54909b;

        /* renamed from: c  reason: collision with root package name */
        private final String f54910c;

        /* renamed from: d  reason: collision with root package name */
        private final String f54911d;

        /* renamed from: e  reason: collision with root package name */
        private final String f54912e;

        /* renamed from: f  reason: collision with root package name */
        private final String f54913f;

        /* renamed from: g  reason: collision with root package name */
        private final String f54914g;

        /* renamed from: h  reason: collision with root package name */
        private final String f54915h;

        /* renamed from: i  reason: collision with root package name */
        private final String f54916i;

        /* renamed from: j  reason: collision with root package name */
        private final String f54917j;

        /* renamed from: k  reason: collision with root package name */
        private final String f54918k;

        /* renamed from: l  reason: collision with root package name */
        private final String f54919l;

        /* renamed from: m  reason: collision with root package name */
        private final String f54920m;

        /* renamed from: n  reason: collision with root package name */
        private final e f54921n;

        /* renamed from: o  reason: collision with root package name */
        private final l f54922o;

        /* renamed from: p  reason: collision with root package name */
        private final int f54923p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f54924q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f54925r;

        /* renamed from: s  reason: collision with root package name */
        private final String f54926s;

        /* renamed from: t  reason: collision with root package name */
        private final String f54927t;

        /* renamed from: u  reason: collision with root package name */
        private final String f54928u;

        /* renamed from: v  reason: collision with root package name */
        private final String f54929v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.DocumentStepStyle f54930w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.Document.AssetConfig f54931x;

        /* renamed from: y  reason: collision with root package name */
        private final PendingPageTextPosition f54932y;

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
            this.f54908a = sessionToken;
            this.f54909b = inquiryId;
            this.f54910c = fromStep;
            this.f54911d = fromComponent;
            this.f54912e = str;
            this.f54913f = str2;
            this.f54914g = str3;
            this.f54915h = str4;
            this.f54916i = str5;
            this.f54917j = str6;
            this.f54918k = fieldKeyDocument;
            this.f54919l = kind;
            this.f54920m = str7;
            this.f54921n = startPage;
            this.f54922o = pages;
            this.f54923p = i10;
            this.f54924q = z10;
            this.f54925r = z11;
            this.f54926s = str8;
            this.f54927t = str9;
            this.f54928u = str10;
            this.f54929v = str11;
            this.f54930w = documentStepStyle;
            this.f54931x = assetConfig;
            this.f54932y = pendingPageTextVerticalPosition;
        }

        public final NextStep.Document.AssetConfig a() {
            return this.f54931x;
        }

        public final boolean b() {
            return this.f54924q;
        }

        public final boolean c() {
            return this.f54925r;
        }

        public final String d() {
            return this.f54914g;
        }

        public final int e() {
            return this.f54923p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f54908a, bVar.f54908a) && Intrinsics.areEqual(this.f54909b, bVar.f54909b) && Intrinsics.areEqual(this.f54910c, bVar.f54910c) && Intrinsics.areEqual(this.f54911d, bVar.f54911d) && Intrinsics.areEqual(this.f54912e, bVar.f54912e) && Intrinsics.areEqual(this.f54913f, bVar.f54913f) && Intrinsics.areEqual(this.f54914g, bVar.f54914g) && Intrinsics.areEqual(this.f54915h, bVar.f54915h) && Intrinsics.areEqual(this.f54916i, bVar.f54916i) && Intrinsics.areEqual(this.f54917j, bVar.f54917j) && Intrinsics.areEqual(this.f54918k, bVar.f54918k) && Intrinsics.areEqual(this.f54919l, bVar.f54919l) && Intrinsics.areEqual(this.f54920m, bVar.f54920m) && Intrinsics.areEqual(this.f54921n, bVar.f54921n) && Intrinsics.areEqual(this.f54922o, bVar.f54922o) && this.f54923p == bVar.f54923p && this.f54924q == bVar.f54924q && this.f54925r == bVar.f54925r && Intrinsics.areEqual(this.f54926s, bVar.f54926s) && Intrinsics.areEqual(this.f54927t, bVar.f54927t) && Intrinsics.areEqual(this.f54928u, bVar.f54928u) && Intrinsics.areEqual(this.f54929v, bVar.f54929v) && Intrinsics.areEqual(this.f54930w, bVar.f54930w) && Intrinsics.areEqual(this.f54931x, bVar.f54931x) && this.f54932y == bVar.f54932y) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f54920m;
        }

        public final String g() {
            return this.f54918k;
        }

        public final String h() {
            return this.f54911d;
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
            int hashCode12 = ((((((this.f54908a.hashCode() * 31) + this.f54909b.hashCode()) * 31) + this.f54910c.hashCode()) * 31) + this.f54911d.hashCode()) * 31;
            String str = this.f54912e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode12 + hashCode) * 31;
            String str2 = this.f54913f;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f54914g;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f54915h;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f54916i;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f54917j;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int hashCode13 = (((((i15 + hashCode6) * 31) + this.f54918k.hashCode()) * 31) + this.f54919l.hashCode()) * 31;
            String str7 = this.f54920m;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int hashCode14 = (((((((((((hashCode13 + hashCode7) * 31) + this.f54921n.hashCode()) * 31) + this.f54922o.hashCode()) * 31) + Integer.hashCode(this.f54923p)) * 31) + Boolean.hashCode(this.f54924q)) * 31) + Boolean.hashCode(this.f54925r)) * 31;
            String str8 = this.f54926s;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i16 = (hashCode14 + hashCode8) * 31;
            String str9 = this.f54927t;
            if (str9 == null) {
                hashCode9 = 0;
            } else {
                hashCode9 = str9.hashCode();
            }
            int i17 = (i16 + hashCode9) * 31;
            String str10 = this.f54928u;
            if (str10 == null) {
                hashCode10 = 0;
            } else {
                hashCode10 = str10.hashCode();
            }
            int i18 = (i17 + hashCode10) * 31;
            String str11 = this.f54929v;
            if (str11 == null) {
                hashCode11 = 0;
            } else {
                hashCode11 = str11.hashCode();
            }
            int i19 = (i18 + hashCode11) * 31;
            StepStyles.DocumentStepStyle documentStepStyle = this.f54930w;
            if (documentStepStyle != null) {
                i10 = documentStepStyle.hashCode();
            }
            return ((((i19 + i10) * 31) + this.f54931x.hashCode()) * 31) + this.f54932y.hashCode();
        }

        public final String i() {
            return this.f54910c;
        }

        public final String j() {
            return this.f54909b;
        }

        public final String k() {
            return this.f54919l;
        }

        public final l l() {
            return this.f54922o;
        }

        public final String m() {
            return this.f54917j;
        }

        public final PendingPageTextPosition n() {
            return this.f54932y;
        }

        public final String o() {
            return this.f54916i;
        }

        public final String p() {
            return this.f54929v;
        }

        public final String q() {
            return this.f54928u;
        }

        public final String r() {
            return this.f54927t;
        }

        public final String s() {
            return this.f54926s;
        }

        public final String t() {
            return this.f54913f;
        }

        public String toString() {
            String str = this.f54908a;
            String str2 = this.f54909b;
            String str3 = this.f54910c;
            String str4 = this.f54911d;
            String str5 = this.f54912e;
            String str6 = this.f54913f;
            String str7 = this.f54914g;
            String str8 = this.f54915h;
            String str9 = this.f54916i;
            String str10 = this.f54917j;
            String str11 = this.f54918k;
            String str12 = this.f54919l;
            String str13 = this.f54920m;
            e eVar = this.f54921n;
            l lVar = this.f54922o;
            int i10 = this.f54923p;
            boolean z10 = this.f54924q;
            boolean z11 = this.f54925r;
            String str14 = this.f54926s;
            String str15 = this.f54927t;
            String str16 = this.f54928u;
            String str17 = this.f54929v;
            StepStyles.DocumentStepStyle documentStepStyle = this.f54930w;
            NextStep.Document.AssetConfig assetConfig = this.f54931x;
            PendingPageTextPosition pendingPageTextPosition = this.f54932y;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromStep=" + str3 + ", fromComponent=" + str4 + ", promptTitle=" + str5 + ", promptDescription=" + str6 + ", disclaimer=" + str7 + ", submitButtonText=" + str8 + ", pendingTitle=" + str9 + ", pendingDescription=" + str10 + ", fieldKeyDocument=" + str11 + ", kind=" + str12 + ", documentId=" + str13 + ", startPage=" + eVar + ", pages=" + lVar + ", documentFileLimit=" + i10 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", permissionsTitle=" + str14 + ", permissionsRationale=" + str15 + ", permissionsModalPositiveButton=" + str16 + ", permissionsModalNegativeButton=" + str17 + ", styles=" + documentStepStyle + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
        }

        public final String u() {
            return this.f54912e;
        }

        public final String v() {
            return this.f54908a;
        }

        public final e w() {
            return this.f54921n;
        }

        public final StepStyles.DocumentStepStyle x() {
            return this.f54930w;
        }

        public final String y() {
            return this.f54915h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f54933a = new a();

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
            public static final b f54934a = new b();

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

        /* renamed from: yn.r2$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0760c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f54935a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0760c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f54935a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f54935a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0760c) && Intrinsics.areEqual(this.f54935a, ((C0760c) obj).f54935a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f54935a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f54935a;
                return "Errored(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f54936a = new d();

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
            private final String f54937a;

            /* renamed from: b  reason: collision with root package name */
            private final String f54938b;

            /* renamed from: c  reason: collision with root package name */
            private final up.a f54939c;

            /* renamed from: d  reason: collision with root package name */
            private final Function0 f54940d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f54941e;

            /* renamed from: f  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f54942f;

            /* renamed from: g  reason: collision with root package name */
            private final NextStep.Document.AssetConfig.PendingPage f54943g;

            /* renamed from: h  reason: collision with root package name */
            private final PendingPageTextPosition f54944h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, up.a navigationState, Function0 onBack, Function0 onCancel, StepStyles.DocumentStepStyle documentStepStyle, NextStep.Document.AssetConfig.PendingPage pendingPage, PendingPageTextPosition pendingPageTextVerticalPosition) {
                super(null);
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                this.f54937a = str;
                this.f54938b = str2;
                this.f54939c = navigationState;
                this.f54940d = onBack;
                this.f54941e = onCancel;
                this.f54942f = documentStepStyle;
                this.f54943g = pendingPage;
                this.f54944h = pendingPageTextVerticalPosition;
            }

            public final NextStep.Document.AssetConfig.PendingPage a() {
                return this.f54943g;
            }

            public final up.a b() {
                return this.f54939c;
            }

            public final Function0 c() {
                return this.f54940d;
            }

            public final Function0 d() {
                return this.f54941e;
            }

            public final PendingPageTextPosition e() {
                return this.f54944h;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f54937a, aVar.f54937a) && Intrinsics.areEqual(this.f54938b, aVar.f54938b) && Intrinsics.areEqual(this.f54939c, aVar.f54939c) && Intrinsics.areEqual(this.f54940d, aVar.f54940d) && Intrinsics.areEqual(this.f54941e, aVar.f54941e) && Intrinsics.areEqual(this.f54942f, aVar.f54942f) && Intrinsics.areEqual(this.f54943g, aVar.f54943g) && this.f54944h == aVar.f54944h) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f54938b;
            }

            public final StepStyles.DocumentStepStyle g() {
                return this.f54942f;
            }

            public final String h() {
                return this.f54937a;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                String str = this.f54937a;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = hashCode * 31;
                String str2 = this.f54938b;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int hashCode4 = (((((((i11 + hashCode2) * 31) + this.f54939c.hashCode()) * 31) + this.f54940d.hashCode()) * 31) + this.f54941e.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f54942f;
                if (documentStepStyle == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = documentStepStyle.hashCode();
                }
                int i12 = (hashCode4 + hashCode3) * 31;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f54943g;
                if (pendingPage != null) {
                    i10 = pendingPage.hashCode();
                }
                return ((i12 + i10) * 31) + this.f54944h.hashCode();
            }

            public String toString() {
                String str = this.f54937a;
                String str2 = this.f54938b;
                up.a aVar = this.f54939c;
                Function0 function0 = this.f54940d;
                Function0 function02 = this.f54941e;
                StepStyles.DocumentStepStyle documentStepStyle = this.f54942f;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f54943g;
                PendingPageTextPosition pendingPageTextPosition = this.f54944h;
                return "LoadingAnimation(title=" + str + ", prompt=" + str2 + ", navigationState=" + aVar + ", onBack=" + function0 + ", onCancel=" + function02 + ", styles=" + documentStepStyle + ", assetConfig=" + pendingPage + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final v4.h f54945a;

            /* renamed from: b  reason: collision with root package name */
            private final String f54946b;

            /* renamed from: c  reason: collision with root package name */
            private final String f54947c;

            /* renamed from: d  reason: collision with root package name */
            private final String f54948d;

            /* renamed from: e  reason: collision with root package name */
            private final String f54949e;

            /* renamed from: f  reason: collision with root package name */
            private final List f54950f;

            /* renamed from: g  reason: collision with root package name */
            private final up.a f54951g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f54952h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f54953i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f54954j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f54955k;

            /* renamed from: l  reason: collision with root package name */
            private final Function1 f54956l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f54957m;

            /* renamed from: n  reason: collision with root package name */
            private final Function0 f54958n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f54959o;

            /* renamed from: p  reason: collision with root package name */
            private final boolean f54960p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f54961q;

            /* renamed from: r  reason: collision with root package name */
            private final boolean f54962r;

            /* renamed from: s  reason: collision with root package name */
            private final String f54963s;

            /* renamed from: t  reason: collision with root package name */
            private final Function0 f54964t;

            /* renamed from: u  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f54965u;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(v4.h imageLoader, String str, String str2, String str3, String str4, List documents, up.a navigationState, Function0 openSelectFile, Function0 selectFromPhotoLibrary, Function0 openCamera, Function0 openUploadOptions, Function1 onRemove, Function0 onSubmit, Function0 onCancel, Function0 onBack, boolean z10, boolean z11, boolean z12, String str5, Function0 onErrorDismissed, StepStyles.DocumentStepStyle documentStepStyle) {
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
                this.f54945a = imageLoader;
                this.f54946b = str;
                this.f54947c = str2;
                this.f54948d = str3;
                this.f54949e = str4;
                this.f54950f = documents;
                this.f54951g = navigationState;
                this.f54952h = openSelectFile;
                this.f54953i = selectFromPhotoLibrary;
                this.f54954j = openCamera;
                this.f54955k = openUploadOptions;
                this.f54956l = onRemove;
                this.f54957m = onSubmit;
                this.f54958n = onCancel;
                this.f54959o = onBack;
                this.f54960p = z10;
                this.f54961q = z11;
                this.f54962r = z12;
                this.f54963s = str5;
                this.f54964t = onErrorDismissed;
                this.f54965u = documentStepStyle;
            }

            public final boolean a() {
                return this.f54961q;
            }

            public final boolean b() {
                return this.f54960p;
            }

            public final String c() {
                return this.f54948d;
            }

            public final List d() {
                return this.f54950f;
            }

            public final String e() {
                return this.f54963s;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f54945a, bVar.f54945a) && Intrinsics.areEqual(this.f54946b, bVar.f54946b) && Intrinsics.areEqual(this.f54947c, bVar.f54947c) && Intrinsics.areEqual(this.f54948d, bVar.f54948d) && Intrinsics.areEqual(this.f54949e, bVar.f54949e) && Intrinsics.areEqual(this.f54950f, bVar.f54950f) && Intrinsics.areEqual(this.f54951g, bVar.f54951g) && Intrinsics.areEqual(this.f54952h, bVar.f54952h) && Intrinsics.areEqual(this.f54953i, bVar.f54953i) && Intrinsics.areEqual(this.f54954j, bVar.f54954j) && Intrinsics.areEqual(this.f54955k, bVar.f54955k) && Intrinsics.areEqual(this.f54956l, bVar.f54956l) && Intrinsics.areEqual(this.f54957m, bVar.f54957m) && Intrinsics.areEqual(this.f54958n, bVar.f54958n) && Intrinsics.areEqual(this.f54959o, bVar.f54959o) && this.f54960p == bVar.f54960p && this.f54961q == bVar.f54961q && this.f54962r == bVar.f54962r && Intrinsics.areEqual(this.f54963s, bVar.f54963s) && Intrinsics.areEqual(this.f54964t, bVar.f54964t) && Intrinsics.areEqual(this.f54965u, bVar.f54965u)) {
                    return true;
                }
                return false;
            }

            public final v4.h f() {
                return this.f54945a;
            }

            public final up.a g() {
                return this.f54951g;
            }

            public final Function0 h() {
                return this.f54959o;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                int hashCode4;
                int hashCode5;
                int hashCode6 = this.f54945a.hashCode() * 31;
                String str = this.f54946b;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode6 + hashCode) * 31;
                String str2 = this.f54947c;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f54948d;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f54949e;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int hashCode7 = (((((((((((((((((((((((((((i13 + hashCode4) * 31) + this.f54950f.hashCode()) * 31) + this.f54951g.hashCode()) * 31) + this.f54952h.hashCode()) * 31) + this.f54953i.hashCode()) * 31) + this.f54954j.hashCode()) * 31) + this.f54955k.hashCode()) * 31) + this.f54956l.hashCode()) * 31) + this.f54957m.hashCode()) * 31) + this.f54958n.hashCode()) * 31) + this.f54959o.hashCode()) * 31) + Boolean.hashCode(this.f54960p)) * 31) + Boolean.hashCode(this.f54961q)) * 31) + Boolean.hashCode(this.f54962r)) * 31;
                String str5 = this.f54963s;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int hashCode8 = (((hashCode7 + hashCode5) * 31) + this.f54964t.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f54965u;
                if (documentStepStyle != null) {
                    i10 = documentStepStyle.hashCode();
                }
                return hashCode8 + i10;
            }

            public final Function0 i() {
                return this.f54958n;
            }

            public final Function0 j() {
                return this.f54964t;
            }

            public final Function1 k() {
                return this.f54956l;
            }

            public final Function0 l() {
                return this.f54957m;
            }

            public final Function0 m() {
                return this.f54955k;
            }

            public final String n() {
                return this.f54947c;
            }

            public final StepStyles.DocumentStepStyle o() {
                return this.f54965u;
            }

            public final boolean p() {
                return this.f54962r;
            }

            public final String q() {
                return this.f54949e;
            }

            public final String r() {
                return this.f54946b;
            }

            public String toString() {
                v4.h hVar = this.f54945a;
                String str = this.f54946b;
                String str2 = this.f54947c;
                String str3 = this.f54948d;
                String str4 = this.f54949e;
                List list = this.f54950f;
                up.a aVar = this.f54951g;
                Function0 function0 = this.f54952h;
                Function0 function02 = this.f54953i;
                Function0 function03 = this.f54954j;
                Function0 function04 = this.f54955k;
                Function1 function1 = this.f54956l;
                Function0 function05 = this.f54957m;
                Function0 function06 = this.f54958n;
                Function0 function07 = this.f54959o;
                boolean z10 = this.f54960p;
                boolean z11 = this.f54961q;
                boolean z12 = this.f54962r;
                String str5 = this.f54963s;
                Function0 function08 = this.f54964t;
                StepStyles.DocumentStepStyle documentStepStyle = this.f54965u;
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
            public static final a f54966d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0761a();

            /* renamed from: yn.r2$e$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0761a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f54966d;
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
            private final String f54967d;

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
                this.f54967d = documentId;
            }

            public final String a() {
                return this.f54967d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof b) && Intrinsics.areEqual(this.f54967d, ((b) obj).f54967d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f54967d.hashCode();
            }

            public String toString() {
                String str = this.f54967d;
                return "Review(documentId=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f54967d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        private final a f54968d;

        /* renamed from: e  reason: collision with root package name */
        private final InterfaceC0762f f54969e;

        /* renamed from: i  reason: collision with root package name */
        private final String f54970i;

        /* renamed from: o  reason: collision with root package name */
        private final List f54971o;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f54972d = new a("None", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f54973e = new a("CheckCameraPermissions", 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f54974i = new a("CameraRunning", 2);

            /* renamed from: o  reason: collision with root package name */
            public static final a f54975o = new a("SelectFileFromDocuments", 3);

            /* renamed from: p  reason: collision with root package name */
            public static final a f54976p = new a("SelectImageFromPhotoLibrary", 4);

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ a[] f54977q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f54978r;

            static {
                a[] a10 = a();
                f54977q = a10;
                f54978r = sr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f54972d, f54973e, f54974i, f54975o, f54976p};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f54977q.clone();
            }
        }

        /* renamed from: yn.r2$f$f  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public interface InterfaceC0762f extends Parcelable {

            /* renamed from: yn.r2$f$f$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements InterfaceC0762f {

                /* renamed from: d  reason: collision with root package name */
                public static final a f55003d = new a();
                @NotNull
                public static final Parcelable.Creator<a> CREATOR = new C0763a();

                /* renamed from: yn.r2$f$f$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0763a implements Parcelable.Creator {
                    @Override // android.os.Parcelable.Creator
                    /* renamed from: a */
                    public final a createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        parcel.readInt();
                        return a.f55003d;
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

            /* renamed from: yn.r2$f$f$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b implements InterfaceC0762f {
                @NotNull
                public static final Parcelable.Creator<b> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f55004d;

                /* renamed from: yn.r2$f$f$b$a */
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
                    this.f55004d = documentId;
                }

                public final String a() {
                    return this.f55004d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof b) && Intrinsics.areEqual(this.f55004d, ((b) obj).f55004d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f55004d.hashCode();
                }

                public String toString() {
                    String str = this.f55004d;
                    return "DeleteFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f55004d);
                }
            }

            /* renamed from: yn.r2$f$f$c */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class c implements InterfaceC0762f {
                @NotNull
                public static final Parcelable.Creator<c> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f55005d;

                /* renamed from: yn.r2$f$f$c$a */
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
                    this.f55005d = documentId;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof c) && Intrinsics.areEqual(this.f55005d, ((c) obj).f55005d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f55005d.hashCode();
                }

                public String toString() {
                    String str = this.f55005d;
                    return "ReadyToSubmit(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f55005d);
                }
            }

            /* renamed from: yn.r2$f$f$d */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class d implements InterfaceC0762f {
                @NotNull
                public static final Parcelable.Creator<d> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f55006d;

                /* renamed from: yn.r2$f$f$d$a */
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
                    this.f55006d = documentId;
                }

                public final String a() {
                    return this.f55006d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof d) && Intrinsics.areEqual(this.f55006d, ((d) obj).f55006d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f55006d.hashCode();
                }

                public String toString() {
                    String str = this.f55006d;
                    return "UploadFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f55006d);
                }
            }
        }

        public /* synthetic */ f(a aVar, InterfaceC0762f interfaceC0762f, String str, List list, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, interfaceC0762f, str, list);
        }

        public static /* synthetic */ f d(f fVar, InterfaceC0762f interfaceC0762f, String str, List list, yn.d dVar, int i10, Object obj) {
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
                return fVar.c(interfaceC0762f, str, list, dVar);
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
            throw new lr.p();
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
            throw new lr.p();
        }

        public final f c(InterfaceC0762f uploadState, String str, List list, yn.d dVar) {
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
                throw new lr.p();
            }
        }

        public a e() {
            return this.f54968d;
        }

        public abstract String f();

        public List g() {
            return this.f54971o;
        }

        public abstract InterfaceC0762f i();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends f {
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f54999p;

            /* renamed from: q  reason: collision with root package name */
            private final String f55000q;

            /* renamed from: r  reason: collision with root package name */
            private final InterfaceC0762f f55001r;

            /* renamed from: s  reason: collision with root package name */
            private final String f55002s;

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
                    return new e(arrayList, parcel.readString(), (InterfaceC0762f) parcel.readParcelable(e.class.getClassLoader()), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final e[] newArray(int i10) {
                    return new e[i10];
                }
            }

            public /* synthetic */ e(List list, String str, InterfaceC0762f interfaceC0762f, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? InterfaceC0762f.a.f55003d : interfaceC0762f, (i10 & 8) != 0 ? null : str2);
            }

            public static /* synthetic */ e k(e eVar, List list, String str, InterfaceC0762f interfaceC0762f, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = eVar.f54999p;
                }
                if ((i10 & 2) != 0) {
                    str = eVar.f55000q;
                }
                if ((i10 & 4) != 0) {
                    interfaceC0762f = eVar.f55001r;
                }
                if ((i10 & 8) != 0) {
                    str2 = eVar.f55002s;
                }
                return eVar.j(list, str, interfaceC0762f, str2);
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
                if (Intrinsics.areEqual(this.f54999p, eVar.f54999p) && Intrinsics.areEqual(this.f55000q, eVar.f55000q) && Intrinsics.areEqual(this.f55001r, eVar.f55001r) && Intrinsics.areEqual(this.f55002s, eVar.f55002s)) {
                    return true;
                }
                return false;
            }

            @Override // yn.r2.f
            public String f() {
                return this.f55000q;
            }

            @Override // yn.r2.f
            public List g() {
                return this.f54999p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((this.f54999p.hashCode() * 31) + this.f55000q.hashCode()) * 31) + this.f55001r.hashCode()) * 31;
                String str = this.f55002s;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            @Override // yn.r2.f
            public InterfaceC0762f i() {
                return this.f55001r;
            }

            public final e j(List documents, String documentId, InterfaceC0762f uploadState, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new e(documents, documentId, uploadState, str);
            }

            public String toString() {
                List list = this.f54999p;
                String str = this.f55000q;
                InterfaceC0762f interfaceC0762f = this.f55001r;
                String str2 = this.f55002s;
                return "UploadDocument(documents=" + list + ", documentId=" + str + ", uploadState=" + interfaceC0762f + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f54999p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f55000q);
                dest.writeParcelable(this.f55001r, i10);
                dest.writeString(this.f55002s);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(List documents, String documentId, InterfaceC0762f uploadState, String str) {
                super(a.f54972d, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f54999p = documents;
                this.f55000q = documentId;
                this.f55001r = uploadState;
                this.f55002s = str;
            }
        }

        private f(a aVar, InterfaceC0762f interfaceC0762f, String str, List list) {
            this.f54968d = aVar;
            this.f54969e = interfaceC0762f;
            this.f54970i = str;
            this.f54971o = list;
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends f {
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f54979p;

            /* renamed from: q  reason: collision with root package name */
            private final String f54980q;

            /* renamed from: r  reason: collision with root package name */
            private final a f54981r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0762f f54982s;

            /* renamed from: t  reason: collision with root package name */
            private final yn.d f54983t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f54984u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f54985v;

            /* renamed from: w  reason: collision with root package name */
            private final String f54986w;

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
                    InterfaceC0762f interfaceC0762f = (InterfaceC0762f) parcel.readParcelable(b.class.getClassLoader());
                    yn.d dVar = (yn.d) parcel.readParcelable(b.class.getClassLoader());
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
                    return new b(arrayList, readString, valueOf, interfaceC0762f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final b[] newArray(int i10) {
                    return new b[i10];
                }
            }

            public /* synthetic */ b(List list, String str, a aVar, InterfaceC0762f interfaceC0762f, yn.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f54972d : aVar, (i10 & 8) != 0 ? InterfaceC0762f.a.f55003d : interfaceC0762f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ b k(b bVar, List list, String str, a aVar, InterfaceC0762f interfaceC0762f, yn.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = bVar.f54979p;
                }
                if ((i10 & 2) != 0) {
                    str = bVar.f54980q;
                }
                if ((i10 & 4) != 0) {
                    aVar = bVar.f54981r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0762f = bVar.f54982s;
                }
                if ((i10 & 16) != 0) {
                    dVar = bVar.f54983t;
                }
                if ((i10 & 32) != 0) {
                    z10 = bVar.f54984u;
                }
                if ((i10 & 64) != 0) {
                    z11 = bVar.f54985v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = bVar.f54986w;
                }
                boolean z12 = z11;
                String str3 = str2;
                yn.d dVar2 = dVar;
                boolean z13 = z10;
                return bVar.j(list, str, aVar, interfaceC0762f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // yn.r2.f
            public a e() {
                return this.f54981r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f54979p, bVar.f54979p) && Intrinsics.areEqual(this.f54980q, bVar.f54980q) && this.f54981r == bVar.f54981r && Intrinsics.areEqual(this.f54982s, bVar.f54982s) && Intrinsics.areEqual(this.f54983t, bVar.f54983t) && this.f54984u == bVar.f54984u && this.f54985v == bVar.f54985v && Intrinsics.areEqual(this.f54986w, bVar.f54986w)) {
                    return true;
                }
                return false;
            }

            @Override // yn.r2.f
            public String f() {
                return this.f54980q;
            }

            @Override // yn.r2.f
            public List g() {
                return this.f54979p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((((this.f54979p.hashCode() * 31) + this.f54980q.hashCode()) * 31) + this.f54981r.hashCode()) * 31) + this.f54982s.hashCode()) * 31;
                yn.d dVar = this.f54983t;
                int i10 = 0;
                if (dVar == null) {
                    hashCode = 0;
                } else {
                    hashCode = dVar.hashCode();
                }
                int hashCode3 = (((((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f54984u)) * 31) + Boolean.hashCode(this.f54985v)) * 31;
                String str = this.f54986w;
                if (str != null) {
                    i10 = str.hashCode();
                }
                return hashCode3 + i10;
            }

            @Override // yn.r2.f
            public InterfaceC0762f i() {
                return this.f54982s;
            }

            public final b j(List documents, String documentId, a captureState, InterfaceC0762f uploadState, yn.d dVar, boolean z10, boolean z11, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new b(documents, documentId, captureState, uploadState, dVar, z10, z11, str);
            }

            public final yn.d m() {
                return this.f54983t;
            }

            public final String n() {
                return this.f54986w;
            }

            public final boolean o() {
                return this.f54984u;
            }

            public final boolean p() {
                return this.f54985v;
            }

            public String toString() {
                List list = this.f54979p;
                String str = this.f54980q;
                a aVar = this.f54981r;
                InterfaceC0762f interfaceC0762f = this.f54982s;
                yn.d dVar = this.f54983t;
                boolean z10 = this.f54984u;
                boolean z11 = this.f54985v;
                String str2 = this.f54986w;
                return "ReviewCaptures(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0762f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f54979p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f54980q);
                dest.writeString(this.f54981r.name());
                dest.writeParcelable(this.f54982s, i10);
                dest.writeParcelable(this.f54983t, i10);
                dest.writeInt(this.f54984u ? 1 : 0);
                dest.writeInt(this.f54985v ? 1 : 0);
                dest.writeString(this.f54986w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(List documents, String documentId, a captureState, InterfaceC0762f uploadState, yn.d dVar, boolean z10, boolean z11, String str) {
                super(captureState, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f54979p = documents;
                this.f54980q = documentId;
                this.f54981r = captureState;
                this.f54982s = uploadState;
                this.f54983t = dVar;
                this.f54984u = z10;
                this.f54985v = z11;
                this.f54986w = str;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends f {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f54987p;

            /* renamed from: q  reason: collision with root package name */
            private final String f54988q;

            /* renamed from: r  reason: collision with root package name */
            private final a f54989r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0762f f54990s;

            /* renamed from: t  reason: collision with root package name */
            private final yn.d f54991t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f54992u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f54993v;

            /* renamed from: w  reason: collision with root package name */
            private final String f54994w;

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
                    InterfaceC0762f interfaceC0762f = (InterfaceC0762f) parcel.readParcelable(c.class.getClassLoader());
                    yn.d dVar = (yn.d) parcel.readParcelable(c.class.getClassLoader());
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
                    return new c(arrayList, readString, valueOf, interfaceC0762f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public /* synthetic */ c(List list, String str, a aVar, InterfaceC0762f interfaceC0762f, yn.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f54972d : aVar, (i10 & 8) != 0 ? InterfaceC0762f.a.f55003d : interfaceC0762f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ c k(c cVar, List list, String str, a aVar, InterfaceC0762f interfaceC0762f, yn.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = cVar.f54987p;
                }
                if ((i10 & 2) != 0) {
                    str = cVar.f54988q;
                }
                if ((i10 & 4) != 0) {
                    aVar = cVar.f54989r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0762f = cVar.f54990s;
                }
                if ((i10 & 16) != 0) {
                    dVar = cVar.f54991t;
                }
                if ((i10 & 32) != 0) {
                    z10 = cVar.f54992u;
                }
                if ((i10 & 64) != 0) {
                    z11 = cVar.f54993v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = cVar.f54994w;
                }
                boolean z12 = z11;
                String str3 = str2;
                yn.d dVar2 = dVar;
                boolean z13 = z10;
                return cVar.j(list, str, aVar, interfaceC0762f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // yn.r2.f
            public a e() {
                return this.f54989r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof c)) {
                    return false;
                }
                c cVar = (c) obj;
                if (Intrinsics.areEqual(this.f54987p, cVar.f54987p) && Intrinsics.areEqual(this.f54988q, cVar.f54988q) && this.f54989r == cVar.f54989r && Intrinsics.areEqual(this.f54990s, cVar.f54990s) && Intrinsics.areEqual(this.f54991t, cVar.f54991t) && this.f54992u == cVar.f54992u && this.f54993v == cVar.f54993v && Intrinsics.areEqual(this.f54994w, cVar.f54994w)) {
                    return true;
                }
                return false;
            }

            @Override // yn.r2.f
            public String f() {
                return this.f54988q;
            }

            @Override // yn.r2.f
            public List g() {
                return this.f54987p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3 = this.f54987p.hashCode() * 31;
                String str = this.f54988q;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f54989r.hashCode()) * 31) + this.f54990s.hashCode()) * 31;
                yn.d dVar = this.f54991t;
                if (dVar == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = dVar.hashCode();
                }
                int hashCode5 = (((((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f54992u)) * 31) + Boolean.hashCode(this.f54993v)) * 31;
                String str2 = this.f54994w;
                if (str2 != null) {
                    i10 = str2.hashCode();
                }
                return hashCode5 + i10;
            }

            @Override // yn.r2.f
            public InterfaceC0762f i() {
                return this.f54990s;
            }

            public final c j(List documents, String str, a captureState, InterfaceC0762f uploadState, yn.d dVar, boolean z10, boolean z11, String str2) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new c(documents, str, captureState, uploadState, dVar, z10, z11, str2);
            }

            public final String m() {
                return this.f54994w;
            }

            public final boolean n() {
                return this.f54992u;
            }

            public final boolean o() {
                return this.f54993v;
            }

            public String toString() {
                List list = this.f54987p;
                String str = this.f54988q;
                a aVar = this.f54989r;
                InterfaceC0762f interfaceC0762f = this.f54990s;
                yn.d dVar = this.f54991t;
                boolean z10 = this.f54992u;
                boolean z11 = this.f54993v;
                String str2 = this.f54994w;
                return "ReviewCapturesWithoutDocumentId(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0762f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f54987p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f54988q);
                dest.writeString(this.f54989r.name());
                dest.writeParcelable(this.f54990s, i10);
                dest.writeParcelable(this.f54991t, i10);
                dest.writeInt(this.f54992u ? 1 : 0);
                dest.writeInt(this.f54993v ? 1 : 0);
                dest.writeString(this.f54994w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(List documents, String str, a captureState, InterfaceC0762f uploadState, yn.d dVar, boolean z10, boolean z11, String str2) {
                super(captureState, uploadState, str, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f54987p = documents;
                this.f54988q = str;
                this.f54989r = captureState;
                this.f54990s = uploadState;
                this.f54991t = dVar;
                this.f54992u = z10;
                this.f54993v = z11;
                this.f54994w = str2;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends f {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final a f54995p;

            /* renamed from: q  reason: collision with root package name */
            private final InterfaceC0762f f54996q;

            /* renamed from: r  reason: collision with root package name */
            private final String f54997r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f54998s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    boolean z10;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    a valueOf = a.valueOf(parcel.readString());
                    InterfaceC0762f interfaceC0762f = (InterfaceC0762f) parcel.readParcelable(d.class.getClassLoader());
                    String readString = parcel.readString();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    return new d(valueOf, interfaceC0762f, readString, z10);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final d[] newArray(int i10) {
                    return new d[i10];
                }
            }

            public /* synthetic */ d(a aVar, InterfaceC0762f interfaceC0762f, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this((i10 & 1) != 0 ? a.f54972d : aVar, (i10 & 2) != 0 ? InterfaceC0762f.a.f55003d : interfaceC0762f, str, (i10 & 8) != 0 ? false : z10);
            }

            public static /* synthetic */ d k(d dVar, a aVar, InterfaceC0762f interfaceC0762f, String str, boolean z10, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    aVar = dVar.f54995p;
                }
                if ((i10 & 2) != 0) {
                    interfaceC0762f = dVar.f54996q;
                }
                if ((i10 & 4) != 0) {
                    str = dVar.f54997r;
                }
                if ((i10 & 8) != 0) {
                    z10 = dVar.f54998s;
                }
                return dVar.j(aVar, interfaceC0762f, str, z10);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // yn.r2.f
            public a e() {
                return this.f54995p;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof d)) {
                    return false;
                }
                d dVar = (d) obj;
                if (this.f54995p == dVar.f54995p && Intrinsics.areEqual(this.f54996q, dVar.f54996q) && Intrinsics.areEqual(this.f54997r, dVar.f54997r) && this.f54998s == dVar.f54998s) {
                    return true;
                }
                return false;
            }

            @Override // yn.r2.f
            public String f() {
                return this.f54997r;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f54995p.hashCode() * 31) + this.f54996q.hashCode()) * 31;
                String str = this.f54997r;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f54998s);
            }

            @Override // yn.r2.f
            public InterfaceC0762f i() {
                return this.f54996q;
            }

            public final d j(a captureState, InterfaceC0762f uploadState, String str, boolean z10) {
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new d(captureState, uploadState, str, z10);
            }

            public final boolean m() {
                return this.f54998s;
            }

            public String toString() {
                a aVar = this.f54995p;
                InterfaceC0762f interfaceC0762f = this.f54996q;
                String str = this.f54997r;
                boolean z10 = this.f54998s;
                return "Start(captureState=" + aVar + ", uploadState=" + interfaceC0762f + ", documentId=" + str + ", shouldShowUploadOptionsDialog=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f54995p.name());
                dest.writeParcelable(this.f54996q, i10);
                dest.writeString(this.f54997r);
                dest.writeInt(this.f54998s ? 1 : 0);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(a captureState, InterfaceC0762f uploadState, String str, boolean z10) {
                super(captureState, uploadState, str, CollectionsKt.l(), null);
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f54995p = captureState;
                this.f54996q = uploadState;
                this.f54997r = str;
                this.f54998s = z10;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f55007a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f55008b;

        static {
            int[] iArr = new int[cp.g1.values().length];
            try {
                iArr[cp.g1.f19670d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[cp.g1.f19671e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[cp.g1.f19672i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f55007a = iArr;
            int[] iArr2 = new int[f.a.values().length];
            try {
                iArr2[f.a.f54972d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[f.a.f54973e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[f.a.f54974i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[f.a.f54975o.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[f.a.f54976p.ordinal()] = 5;
            } catch (NoSuchFieldError unused8) {
            }
            f55008b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55009d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f55010e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f55011i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f55012o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, r2 r2Var, String str, Continuation continuation) {
            super(2, continuation);
            this.f55010e = aVar;
            this.f55011i = r2Var;
            this.f55012o = str;
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
                return Unit.f32464a;
            }
            cVar.e(new f.b(cVar2.g(), str, null, new f.InterfaceC0762f.d(str), null, false, false, cVar2.m(), 116, null));
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f55010e, this.f55011i, this.f55012o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r d10;
            rr.b.f();
            if (this.f55009d == 0) {
                kotlin.c.b(obj);
                wm.h c10 = this.f55010e.c();
                r2 r2Var = this.f55011i;
                final String str = this.f55012o;
                d10 = wm.z.d(r2Var, null, new Function1() { // from class: yn.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.h.k(str, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55013d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f55014e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f55015i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f.InterfaceC0762f f55016o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, r2 r2Var, f.InterfaceC0762f interfaceC0762f, Continuation continuation) {
            super(2, continuation);
            this.f55014e = aVar;
            this.f55015i = r2Var;
            this.f55016o = interfaceC0762f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(f.InterfaceC0762f interfaceC0762f, r.c cVar) {
            cVar.e(f.d((f) cVar.c(), new f.InterfaceC0762f.c(((f.InterfaceC0762f.d) interfaceC0762f).a()), null, null, null, 14, null));
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f55014e, this.f55015i, this.f55016o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r d10;
            rr.b.f();
            if (this.f55013d == 0) {
                kotlin.c.b(obj);
                wm.h c10 = this.f55014e.c();
                r2 r2Var = this.f55015i;
                final f.InterfaceC0762f interfaceC0762f = this.f55016o;
                d10 = wm.z.d(r2Var, null, new Function1() { // from class: yn.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.i.k(r2.f.InterfaceC0762f.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public r2(v4.h imageLoader, Context applicationContext, cp.c1 permissionRequestWorkflow, yn.c documentCameraWorker, v2.b documentsSelectWorkerFactory, a.C0212a documentCreateWorker, c.a documentLoadWorker, b.a documentFileUploadWorker, a.C0083a documentFileDeleteWorker, d.a documentSubmitWorker, up.b navigationStateManager, qp.c externalEventLogger) {
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
        this.f54885a = imageLoader;
        this.f54886b = applicationContext;
        this.f54887c = permissionRequestWorkflow;
        this.f54888d = documentCameraWorker;
        this.f54889e = documentsSelectWorkerFactory;
        this.f54890f = documentCreateWorker;
        this.f54891g = documentLoadWorker;
        this.f54892h = documentFileUploadWorker;
        this.f54893i = documentFileDeleteWorker;
        this.f54894j = documentSubmitWorker;
        this.f54895k = navigationStateManager;
        this.f54896l = externalEventLogger;
    }

    private final List A0(u uVar, final k.a aVar) {
        return new b.a().a(uVar.b(), new Function1() { // from class: yn.v0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit C0;
                C0 = r2.C0(r2.this, aVar, (k5) obj);
                return C0;
            }
        }).a(uVar.c(), new Function1() { // from class: yn.w0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit D0;
                D0 = r2.D0(r2.this, aVar, (k5) obj);
                return D0;
            }
        }).a(uVar.d(), new Function1() { // from class: yn.x0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E0;
                E0 = r2.E0(r2.this, aVar, (k5) obj);
                return E0;
            }
        }).a(uVar.a(), new Function1() { // from class: yn.y0
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
        r2Var.L0(aVar, a.b.f54898a);
        return Unit.f32464a;
    }

    private final List B0(b3 b3Var, final k.a aVar) {
        return new b.a().a(b3Var.b(), new Function1() { // from class: yn.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit G0;
                G0 = r2.G0(r2.this, aVar, (k5) obj);
                return G0;
            }
        }).a(b3Var.c(), new Function1() { // from class: yn.b1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit H0;
                H0 = r2.H0(r2.this, aVar, (k5) obj);
                return H0;
            }
        }).a(b3Var.d(), new Function1() { // from class: yn.c1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit I0;
                I0 = r2.I0(r2.this, aVar, (k5) obj);
                return I0;
            }
        }).b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r B1(final r2 r2Var, final f fVar, final c1.a it) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = wm.z.d(r2Var, null, new Function1() { // from class: yn.z0
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
        r2Var.L0(aVar, a.g.f54904a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f55007a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new lr.p();
            }
            action.e(fVar.a(f.a.f54972d));
        } else {
            yn.c cVar = r2Var.f54888d;
            String string = r2Var.f54886b.getString(ep.e.f22484a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f54974i);
            } else {
                a10 = fVar.a(f.a.f54972d);
            }
            action.e(a10);
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f54905a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r D1(r2 r2Var, final f fVar, final c.b it) {
        wm.r d10;
        wm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0221b) {
            d11 = wm.z.d(r2Var, null, new Function1() { // from class: yn.d1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit E1;
                    E1 = r2.E1(r2.f.this, it, (r.c) obj);
                    return E1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = wm.z.d(r2Var, null, new Function1() { // from class: yn.e1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit F1;
                    F1 = r2.F1(c.b.this, (r.c) obj);
                    return F1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f54907a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(f fVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.b bVar2 = (f.b) fVar;
        action.e(f.b.k(bVar2, ((c.b.C0221b) bVar).a(), null, null, new f.InterfaceC0762f.c(bVar2.f()), null, false, false, null, 214, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.e.f54901a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F1(c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0760c(((c.b.a) bVar).a()));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.g.f54904a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f54904a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f54905a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f54905a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f54907a);
        return Unit.f32464a;
    }

    private final void I1(f.a aVar, final b bVar, final f fVar, k.a aVar2) {
        v2 e10;
        int i10 = g.f55008b[aVar.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4 && i10 != 5) {
                    throw new lr.p();
                }
                if (fVar.e() == f.a.f54975o) {
                    e10 = this.f54889e.c();
                } else {
                    e10 = this.f54889e.e();
                }
                wm.w.l(aVar2, e10, Reflection.typeOf(v2.class), "", new Function1() { // from class: yn.h1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        wm.r N1;
                        N1 = r2.N1(r2.this, bVar, fVar, (v2.c) obj);
                        return N1;
                    }
                });
                return;
            }
            wm.w.l(aVar2, this.f54888d, Reflection.typeOf(yn.c.class), "", new Function1() { // from class: yn.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r K1;
                    K1 = r2.K1(r2.this, bVar, (c.b) obj);
                    return K1;
                }
            });
        }
    }

    private final void J1(final f.InterfaceC0762f interfaceC0762f, b bVar, f fVar, k.a aVar) {
        if (Intrinsics.areEqual(interfaceC0762f, f.InterfaceC0762f.a.f55003d)) {
            if (fVar.f() == null) {
                wm.w.l(aVar, this.f54890f.a(bVar.v(), bVar.k(), bVar.g(), bVar.e()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.a.class), "", new Function1() { // from class: yn.j1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        wm.r R1;
                        R1 = r2.R1(r2.this, (a.b) obj);
                        return R1;
                    }
                });
                return;
            }
            return;
        }
        final d.b bVar2 = null;
        if (interfaceC0762f instanceof f.InterfaceC0762f.d) {
            ArrayList arrayList = new ArrayList();
            for (Object obj : fVar.g()) {
                if (obj instanceof d.a) {
                    arrayList.add(obj);
                }
            }
            if (arrayList.isEmpty()) {
                aVar.a("upload_complete", new i(aVar, this, interfaceC0762f, null));
                return;
            }
            for (final d.a aVar2 : CollectionsKt.a1(arrayList, 3)) {
                wm.w.l(aVar, this.f54892h.a(bVar.v(), ((f.InterfaceC0762f.d) interfaceC0762f).a(), aVar2), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.b.class), aVar2.c(), new Function1() { // from class: yn.k1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        wm.r U1;
                        U1 = r2.U1(r2.this, interfaceC0762f, aVar2, (b.AbstractC0215b) obj2);
                        return U1;
                    }
                });
            }
        } else if (interfaceC0762f instanceof f.InterfaceC0762f.b) {
            if (fVar instanceof f.b) {
                f.b bVar3 = (f.b) fVar;
                yn.d m10 = bVar3.m();
                if (m10 instanceof d.b) {
                    bVar2 = (d.b) m10;
                }
                if (bVar2 == null) {
                    return;
                }
                wm.w.l(aVar, this.f54893i.a(bVar.v(), bVar3.f(), bVar2), Reflection.typeOf(ao.a.class), "", new Function1() { // from class: yn.l1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        wm.r Z1;
                        Z1 = r2.Z1(r2.this, bVar2, interfaceC0762f, (a.b) obj2);
                        return Z1;
                    }
                });
            }
        } else if (!(interfaceC0762f instanceof f.InterfaceC0762f.c)) {
            throw new lr.p();
        }
    }

    private final void K0(b bVar, f fVar) {
        qp.b bVar2;
        if (fVar.e() == f.a.f54974i) {
            bVar2 = b.d.f48024a;
        } else if (fVar instanceof f.d) {
            bVar2 = b.C0581b.f48022a;
        } else if (fVar instanceof f.b) {
            bVar2 = b.c.f48023a;
        } else if (fVar instanceof f.c) {
            bVar2 = b.c.f48023a;
        } else if (fVar instanceof f.e) {
            bVar2 = b.a.f48021a;
        } else {
            throw new lr.p();
        }
        this.f54896l.c(new i.b(bVar.i(), bVar2));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r K1(r2 r2Var, final b bVar, final c.b it) {
        wm.r d10;
        wm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0754b) {
            d11 = wm.z.d(r2Var, null, new Function1() { // from class: yn.d2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit L1;
                    L1 = r2.L1(c.b.this, bVar, (r.c) obj);
                    return L1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, c.b.a.f54745a)) {
            d10 = wm.z.d(r2Var, null, new Function1() { // from class: yn.e2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M1;
                    M1 = r2.M1((r.c) obj);
                    return M1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    private final void L0(k.a aVar, final a aVar2) {
        wm.r d10;
        if (Intrinsics.areEqual(aVar2, a.b.f54898a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M0;
                    M0 = r2.M0((r.c) obj);
                    return M0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.C0759a.f54897a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = r2.N0((r.c) obj);
                    return N0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.g.f54904a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.s1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = r2.O0((r.c) obj);
                    return O0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.h.f54905a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.t1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P0;
                    P0 = r2.P0((r.c) obj);
                    return P0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.j.f54907a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.u1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q0;
                    Q0 = r2.Q0((r.c) obj);
                    return Q0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.e.f54901a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.v1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R0;
                    R0 = r2.R0((r.c) obj);
                    return R0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.c.f54899a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.w1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S0;
                    S0 = r2.S0((r.c) obj);
                    return S0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.f) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.x1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = r2.T0(r2.a.this, (r.c) obj);
                    return T0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.d.f54900a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.y1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = r2.U0((r.c) obj);
                    return U0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.i) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.z1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V0;
                    V0 = r2.V0(r2.a.this, (r.c) obj);
                    return V0;
                }
            }, 1, null);
        } else {
            throw new lr.p();
        }
        aVar.c().d(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(c.b bVar, b bVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.M0(((f) action.c()).g(), new d.a(((c.b.C0754b) bVar).a(), yn.a.f54718i, 0, 4, null)), bVar2.e()), ((f) action.c()).f(), null, ((f) action.c()).i(), null, false, false, null, 244, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.b.f54934a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f54972d));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.a.f54933a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r N1(final r2 r2Var, final b bVar, final f fVar, final v2.c it) {
        wm.r d10;
        wm.r d11;
        wm.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof v2.c.C0765c) {
            d12 = wm.z.d(r2Var, null, new Function1() { // from class: yn.f2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O1;
                    O1 = r2.O1(v2.c.this, bVar, (r.c) obj);
                    return O1;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof v2.c.b) {
            d11 = wm.z.d(r2Var, null, new Function1() { // from class: yn.g2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P1;
                    P1 = r2.P1(v2.c.this, bVar, r2Var, (r.c) obj);
                    return P1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, v2.c.a.f55055a)) {
            d10 = wm.z.d(r2Var, null, new Function1() { // from class: yn.h2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q1;
                    Q1 = r2.Q1(r2.f.this, (r.c) obj);
                    return Q1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f54975o).b(false));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(v2.c cVar, b bVar, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0762f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.C0765c) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, null, 244, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f54976p).b(false));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P1(v2.c cVar, b bVar, r2 r2Var, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0762f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.b) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, r2Var.f54886b.getString(ep.e.f22493j), 116, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f54973e).b(false));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(fVar.a(f.a.f54972d));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(true));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r R1(r2 r2Var, final a.b it) {
        wm.r d10;
        wm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a.b.C0214b) {
            d11 = wm.z.d(r2Var, null, new Function1() { // from class: yn.a2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S1;
                    S1 = r2.S1(a.b.this, (r.c) obj);
                    return S1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof a.b.C0213a) {
            d10 = wm.z.d(r2Var, null, new Function1() { // from class: yn.c2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T1;
                    T1 = r2.T1(a.b.this, (r.c) obj);
                    return T1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(false));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0214b c0214b = (a.b.C0214b) bVar;
        action.e(f.d((f) action.c(), new f.InterfaceC0762f.c(c0214b.a()), c0214b.a(), null, null, 12, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (action.c() instanceof f.b) {
            a.f fVar = (a.f) aVar;
            action.e(f.d((f) action.c(), new f.InterfaceC0762f.b(fVar.b()), null, null, fVar.a(), 6, null));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0213a c0213a = (a.b.C0213a) bVar;
        if (!c0213a.a().isRecoverable()) {
            action.d(new c.C0760c(c0213a.a()));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f fVar = (f) action.c();
        if (fVar instanceof f.b) {
            action.e(f.b.k((f.b) fVar, null, null, null, null, null, false, false, null, 127, null));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r U1(final r2 r2Var, final f.InterfaceC0762f interfaceC0762f, final d.a aVar, final b.AbstractC0215b response) {
        wm.r d10;
        wm.r d11;
        wm.r d12;
        wm.r d13;
        Intrinsics.checkNotNullParameter(response, "response");
        if (response instanceof b.AbstractC0215b.d) {
            d13 = wm.z.d(r2Var, null, new Function1() { // from class: yn.i2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V1;
                    V1 = r2.V1(r2.f.InterfaceC0762f.this, response, (r.c) obj);
                    return V1;
                }
            }, 1, null);
            return d13;
        } else if (response instanceof b.AbstractC0215b.c) {
            d12 = wm.z.d(r2Var, null, new Function1() { // from class: yn.j2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit W1;
                    W1 = r2.W1(d.a.this, response, (r.c) obj);
                    return W1;
                }
            }, 1, null);
            return d12;
        } else if (response instanceof b.AbstractC0215b.a) {
            d11 = wm.z.d(r2Var, null, new Function1() { // from class: yn.k2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit X1;
                    X1 = r2.X1(d.a.this, interfaceC0762f, response, r2Var, (r.c) obj);
                    return X1;
                }
            }, 1, null);
            return d11;
        } else if (response instanceof b.AbstractC0215b.C0216b) {
            d10 = wm.z.d(r2Var, null, new Function1() { // from class: yn.l2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y1;
                    Y1 = r2.Y1(b.AbstractC0215b.this, (r.c) obj);
                    return Y1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.i iVar = (a.i) aVar;
        action.e(new f.e(((f) action.c()).g(), iVar.a(), new f.InterfaceC0762f.c(iVar.a()), null, 8, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(f.InterfaceC0762f interfaceC0762f, b.AbstractC0215b abstractC0215b, r.c action) {
        f.InterfaceC0762f cVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> g10 = ((f) action.c()).g();
        ArrayList<yn.d> arrayList = new ArrayList(CollectionsKt.w(g10, 10));
        for (Parcelable parcelable : g10) {
            b.AbstractC0215b.d dVar = (b.AbstractC0215b.d) abstractC0215b;
            if (Intrinsics.areEqual(parcelable, dVar.b())) {
                parcelable = dVar.a();
            }
            arrayList.add(parcelable);
        }
        if (!arrayList.isEmpty()) {
            for (yn.d dVar2 : arrayList) {
                if (dVar2 instanceof d.a) {
                    cVar = new f.InterfaceC0762f.d(((f.InterfaceC0762f.d) interfaceC0762f).a());
                    break;
                }
            }
        }
        cVar = new f.InterfaceC0762f.c(((f.InterfaceC0762f.d) interfaceC0762f).a());
        action.e(f.d((f) action.c(), cVar, null, arrayList, null, 10, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(d.a aVar, b.AbstractC0215b abstractC0215b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> g10 = ((f) action.c()).g();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(g10, 10));
        for (Parcelable parcelable : g10) {
            if ((parcelable instanceof d.a) && Intrinsics.areEqual(parcelable, aVar)) {
                parcelable = d.a.b((d.a) parcelable, null, null, ((b.AbstractC0215b.c) abstractC0215b).a(), 3, null);
            }
            arrayList.add(parcelable);
        }
        action.e(f.d((f) action.c(), ((f) action.c()).i(), null, arrayList, null, 10, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0759a.f54897a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(d.a aVar, f.InterfaceC0762f interfaceC0762f, b.AbstractC0215b abstractC0215b, r2 r2Var, r.c action) {
        f.InterfaceC0762f dVar;
        String d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List I0 = CollectionsKt.I0(((f) action.c()).g(), aVar);
        List<yn.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (yn.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0762f.d(((f.InterfaceC0762f.d) interfaceC0762f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0762f.c(((f.InterfaceC0762f.d) interfaceC0762f).a());
        f.InterfaceC0762f interfaceC0762f2 = dVar;
        String a10 = ((f.InterfaceC0762f.d) interfaceC0762f).a();
        f.a aVar2 = f.a.f54972d;
        d10 = u2.d(((b.AbstractC0215b.a) abstractC0215b).a(), r2Var.f54886b);
        action.e(new f.b(I0, a10, aVar2, interfaceC0762f2, null, false, false, d10, 80, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f54898a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(b.AbstractC0215b abstractC0215b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0760c(((b.AbstractC0215b.C0216b) abstractC0215b).a()));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f54907a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r Z1(r2 r2Var, final d.b bVar, final f.InterfaceC0762f interfaceC0762f, final a.b response) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(response, "response");
        d10 = wm.z.d(r2Var, null, new Function1() { // from class: yn.n2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit a22;
                a22 = r2.a2(d.b.this, interfaceC0762f, response, (r.c) obj);
                return a22;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f54901a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(d.b bVar, f.InterfaceC0762f interfaceC0762f, a.b bVar2, r.c action) {
        f.b bVar3;
        f.InterfaceC0762f dVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof f.b) {
            bVar3 = (f.b) c10;
        } else {
            bVar3 = null;
        }
        f.b bVar4 = bVar3;
        if (bVar4 == null) {
            return Unit.f32464a;
        }
        List I0 = CollectionsKt.I0(bVar4.g(), bVar);
        List<yn.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (yn.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0762f.d(((f.InterfaceC0762f.b) interfaceC0762f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0762f.c(((f.InterfaceC0762f.b) interfaceC0762f).a());
        f.InterfaceC0762f interfaceC0762f2 = dVar;
        if (bVar2 instanceof a.b.C0085b) {
            action.e(f.b.k(bVar4, I0, null, null, interfaceC0762f2, null, false, false, null, 230, null));
        } else if (bVar2 instanceof a.b.C0084a) {
            action.d(new c.C0760c(((a.b.C0084a) bVar2).a()));
        } else {
            throw new lr.p();
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b1(r2 r2Var, k.a aVar, f fVar, d.b document) {
        Intrinsics.checkNotNullParameter(document, "document");
        r2Var.L0(aVar, new a.f(((f.b) fVar).f(), document));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c1(r2 r2Var, k.a aVar, f fVar) {
        r2Var.L0(aVar, new a.i(((f.b) fVar).f()));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f54898a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0759a.f54897a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f54900a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r g1(final r2 r2Var, final f fVar, final c1.a it) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = wm.z.d(r2Var, null, new Function1() { // from class: yn.i1
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
        int i10 = g.f55007a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new lr.p();
            }
            action.e(fVar.a(f.a.f54972d));
        } else {
            yn.c cVar = r2Var.f54888d;
            String string = r2Var.f54886b.getString(ep.e.f22484a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f54974i);
            } else {
                a10 = fVar.a(f.a.f54972d);
            }
            action.e(a10);
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f54899a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f54899a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f54904a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f54905a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f54907a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f54901a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(d.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1() {
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f54898a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0759a.f54897a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f54900a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r t1(final r2 r2Var, final f fVar, final c1.a it) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = wm.z.d(r2Var, null, new Function1() { // from class: yn.o1
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
        int i10 = g.f55007a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new lr.p();
            }
            action.e(fVar.a(f.a.f54972d));
        } else {
            yn.c cVar = r2Var.f54888d;
            String string = r2Var.f54886b.getString(ep.e.f22484a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f54974i);
            } else {
                a10 = fVar.a(f.a.f54972d);
            }
            action.e(a10);
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f54899a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r w1(r2 r2Var, final d.b it) {
        wm.r d10;
        wm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, d.b.C0223b.f18205a)) {
            d11 = wm.z.d(r2Var, null, new Function1() { // from class: yn.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit x12;
                    x12 = r2.x1((r.c) obj);
                    return x12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof d.b.a) {
            d10 = wm.z.d(r2Var, null, new Function1() { // from class: yn.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = r2.y1(d.b.this, (r.c) obj);
                    return y12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.d.f54936a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(d.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0760c(((d.b.a) bVar).a()));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f54898a);
        return Unit.f32464a;
    }

    @Override // wm.k
    /* renamed from: J0 */
    public f d(b props, wm.i iVar) {
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
                Object readParcelable = obtain.readParcelable(wm.i.class.getClassLoader());
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
        if (Intrinsics.areEqual(w10, e.a.f54966d)) {
            return new f.d(null, null, props.f(), false, 11, null);
        }
        if (w10 instanceof e.b) {
            return new f.b(CollectionsKt.l(), ((e.b) props.w()).a(), null, null, null, true, false, null, 220, null);
        }
        throw new lr.p();
    }

    @Override // wm.k
    /* renamed from: W0 */
    public Object f(b renderProps, final f renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        this.f54895k.c(renderProps.b(), renderProps.c(), !(renderState instanceof f.e));
        I1(renderState.e(), renderProps, renderState, context);
        J1(renderState.i(), renderProps, renderState, context);
        K0(renderProps, renderState);
        if (renderState instanceof f.d) {
            Object iVar = new yn.i(yp.c.a(renderProps.l().a()), A0(renderProps.l().a(), context), this.f54895k.b(), new Function0() { // from class: yn.y
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit X0;
                    X0 = r2.X0(r2.this, context);
                    return X0;
                }
            }, new Function0() { // from class: yn.a0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Y0;
                    Y0 = r2.Y0(r2.this, context);
                    return Y0;
                }
            });
            f.d dVar = (f.d) renderState;
            if (dVar.m()) {
                iVar = zo.d.a(yp.m.f55272a.j(yp.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: yn.m0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit j12;
                        j12 = r2.j1(r2.this, context);
                        return j12;
                    }
                }, renderProps.l().b().a()), iVar, "document_upload_options_dialog");
            }
            boolean z10 = dVar.e() == f.a.f54973e;
            cp.d0 d0Var = cp.d0.f19644d;
            String s10 = renderProps.s();
            String str = s10 != null ? s10 : "";
            String r10 = renderProps.r();
            if (r10 == null) {
                r10 = this.f54886b.getString(ep.e.f22486c);
                Intrinsics.checkNotNullExpressionValue(r10, "getString(...)");
            }
            Context context2 = this.f54886b;
            String string = context2.getString(ep.e.f22485b, mp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return cp.l1.e(iVar, context, z10, d0Var, false, str, r10, string, renderProps.q(), renderProps.p(), null, null, null, this.f54887c, renderProps.x(), null, new Function1() { // from class: yn.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r B1;
                    B1 = r2.B1(r2.this, renderState, (c1.a) obj);
                    return B1;
                }
            }, 19976, null);
        } else if (renderState instanceof f.b) {
            f.b bVar = (f.b) renderState;
            if (bVar.o()) {
                wm.w.l(context, this.f54891g.a(renderProps.v(), bVar.f()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.c.class), "", new Function1() { // from class: yn.o0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        wm.r D1;
                        D1 = r2.D1(r2.this, renderState, (c.b) obj);
                        return D1;
                    }
                });
            }
            d.b bVar2 = new d.b(this.f54885a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), bVar.g(), this.f54895k.b(), new Function0() { // from class: yn.p0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit G1;
                    G1 = r2.G1(r2.this, context);
                    return G1;
                }
            }, new Function0() { // from class: yn.q0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit H1;
                    H1 = r2.H1(r2.this, context);
                    return H1;
                }
            }, new Function0() { // from class: yn.r0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Z0;
                    Z0 = r2.Z0(r2.this, context);
                    return Z0;
                }
            }, new Function0() { // from class: yn.s0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit a12;
                    a12 = r2.a1(r2.this, context);
                    return a12;
                }
            }, new Function1() { // from class: yn.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit b12;
                    b12 = r2.b1(r2.this, context, renderState, (d.b) obj);
                    return b12;
                }
            }, new Function0() { // from class: yn.j0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit c12;
                    c12 = r2.c1(r2.this, context, renderState);
                    return c12;
                }
            }, new Function0() { // from class: yn.u0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit d12;
                    d12 = r2.d1(r2.this, context);
                    return d12;
                }
            }, new Function0() { // from class: yn.f1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit e12;
                    e12 = r2.e1(r2.this, context);
                    return e12;
                }
            }, bVar.o(), bVar.g().size() < renderProps.e(), !bVar.g().isEmpty() && Intrinsics.areEqual(bVar.i(), new f.InterfaceC0762f.c(bVar.f())), bVar.n(), new Function0() { // from class: yn.q1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f12;
                    f12 = r2.f1(r2.this, context);
                    return f12;
                }
            }, renderProps.x());
            boolean z11 = bVar.e() == f.a.f54973e;
            cp.d0 d0Var2 = cp.d0.f19644d;
            String s11 = renderProps.s();
            if (s11 == null) {
                s11 = "";
            }
            String r11 = renderProps.r();
            if (r11 == null) {
                r11 = this.f54886b.getString(ep.e.f22486c);
                Intrinsics.checkNotNullExpressionValue(r11, "getString(...)");
            }
            Context context3 = this.f54886b;
            String string2 = context3.getString(ep.e.f22485b, mp.f.b(context3));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            zo.c e10 = cp.l1.e(bVar2, context, z11, d0Var2, false, s11, r11, string2, renderProps.q(), renderProps.p(), null, null, null, this.f54887c, renderProps.x(), null, new Function1() { // from class: yn.b2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r g12;
                    g12 = r2.g1(r2.this, renderState, (c1.a) obj);
                    return g12;
                }
            }, 19976, null);
            if (bVar.p()) {
                return zo.d.a(yp.m.f55272a.j(yp.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: yn.m2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i12;
                        i12 = r2.i1(r2.this, context);
                        return i12;
                    }
                }, renderProps.l().b().a()), e10, "document_upload_screen");
            }
            return new zo.c(e10, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.c) {
            f.c cVar = (f.c) renderState;
            String f10 = cVar.f();
            if (f10 != null) {
                context.a(f10, new h(context, this, f10, null));
            }
            d.b bVar3 = new d.b(this.f54885a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), cVar.g(), this.f54895k.b(), new Function0() { // from class: yn.o2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit k12;
                    k12 = r2.k1(r2.this, context);
                    return k12;
                }
            }, new Function0() { // from class: yn.p2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit l12;
                    l12 = r2.l1(r2.this, context);
                    return l12;
                }
            }, new Function0() { // from class: yn.q2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m12;
                    m12 = r2.m1(r2.this, context);
                    return m12;
                }
            }, new Function0() { // from class: yn.z
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit n12;
                    n12 = r2.n1(r2.this, context);
                    return n12;
                }
            }, new Function1() { // from class: yn.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o12;
                    o12 = r2.o1((d.b) obj);
                    return o12;
                }
            }, new Function0() { // from class: yn.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit p12;
                    p12 = r2.p1();
                    return p12;
                }
            }, new Function0() { // from class: yn.d0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit q12;
                    q12 = r2.q1(r2.this, context);
                    return q12;
                }
            }, new Function0() { // from class: yn.e0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit r12;
                    r12 = r2.r1(r2.this, context);
                    return r12;
                }
            }, cVar.n(), cVar.g().size() < renderProps.e(), false, cVar.m(), new Function0() { // from class: yn.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit s12;
                    s12 = r2.s1(r2.this, context);
                    return s12;
                }
            }, renderProps.x());
            boolean z12 = cVar.e() == f.a.f54973e;
            cp.d0 d0Var3 = cp.d0.f19644d;
            String s12 = renderProps.s();
            if (s12 == null) {
                s12 = "";
            }
            String r12 = renderProps.r();
            if (r12 == null) {
                r12 = this.f54886b.getString(ep.e.f22486c);
                Intrinsics.checkNotNullExpressionValue(r12, "getString(...)");
            }
            Context context4 = this.f54886b;
            String string3 = context4.getString(ep.e.f22485b, mp.f.b(context4));
            Intrinsics.checkNotNullExpressionValue(string3, "getString(...)");
            zo.c e11 = cp.l1.e(bVar3, context, z12, d0Var3, false, s12, r12, string3, renderProps.q(), renderProps.p(), null, null, null, this.f54887c, renderProps.x(), null, new Function1() { // from class: yn.g0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r t12;
                    t12 = r2.t1(r2.this, renderState, (c1.a) obj);
                    return t12;
                }
            }, 19976, null);
            if (cVar.o()) {
                return zo.d.a(yp.m.f55272a.j(yp.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: yn.h0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v12;
                        v12 = r2.v1(r2.this, context);
                        return v12;
                    }
                }, renderProps.l().b().a()), e11, "document_upload_screen");
            }
            return new zo.c(e11, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.e) {
            wm.w.l(context, this.f54894j.a(renderProps.v(), renderProps.j(), renderProps.i(), renderProps.h(), ((f.e) renderState).g()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.d.class), "", new Function1() { // from class: yn.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r w12;
                    w12 = r2.w1(r2.this, (d.b) obj);
                    return w12;
                }
            });
            up.b.d(this.f54895k, false, false, false, 4, null);
            return new d.a(renderProps.o(), renderProps.m(), this.f54895k.b(), new Function0() { // from class: yn.k0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit z13;
                    z13 = r2.z1(r2.this, context);
                    return z13;
                }
            }, new Function0() { // from class: yn.l0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit A1;
                    A1 = r2.A1(r2.this, context);
                    return A1;
                }
            }, renderProps.x(), renderProps.a().getPendingPage(), renderProps.n());
        } else {
            throw new lr.p();
        }
    }

    @Override // wm.k
    /* renamed from: b2 */
    public wm.i g(f state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return ym.s.a(state);
    }
}
