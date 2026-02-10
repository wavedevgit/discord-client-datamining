package fo;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import cn.k;
import cn.r;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.document.network.a;
import com.withpersona.sdk2.inquiry.document.network.b;
import com.withpersona.sdk2.inquiry.document.network.c;
import com.withpersona.sdk2.inquiry.document.network.d;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import eq.b;
import fo.c;
import fo.d;
import fo.r2;
import fo.v2;
import gq.k5;
import ho.a;
import ip.c1;
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
import wp.b;
import wp.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r2 extends cn.k {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f22929a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f22930b;

    /* renamed from: c  reason: collision with root package name */
    private final ip.c1 f22931c;

    /* renamed from: d  reason: collision with root package name */
    private final fo.c f22932d;

    /* renamed from: e  reason: collision with root package name */
    private final v2.b f22933e;

    /* renamed from: f  reason: collision with root package name */
    private final a.C0249a f22934f;

    /* renamed from: g  reason: collision with root package name */
    private final c.a f22935g;

    /* renamed from: h  reason: collision with root package name */
    private final b.a f22936h;

    /* renamed from: i  reason: collision with root package name */
    private final a.C0387a f22937i;

    /* renamed from: j  reason: collision with root package name */
    private final d.a f22938j;

    /* renamed from: k  reason: collision with root package name */
    private final aq.b f22939k;

    /* renamed from: l  reason: collision with root package name */
    private final wp.c f22940l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: fo.r2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0342a extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final C0342a f22941a = new C0342a();

            private C0342a() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0342a)) {
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
            public static final b f22942a = new b();

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
            public static final c f22943a = new c();

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
            public static final d f22944a = new d();

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
            public static final e f22945a = new e();

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
            private final String f22946a;

            /* renamed from: b  reason: collision with root package name */
            private final d.b f22947b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String documentId, d.b document) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(document, "document");
                this.f22946a = documentId;
                this.f22947b = document;
            }

            public final d.b a() {
                return this.f22947b;
            }

            public final String b() {
                return this.f22946a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof f)) {
                    return false;
                }
                f fVar = (f) obj;
                if (Intrinsics.areEqual(this.f22946a, fVar.f22946a) && Intrinsics.areEqual(this.f22947b, fVar.f22947b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f22946a.hashCode() * 31) + this.f22947b.hashCode();
            }

            public String toString() {
                String str = this.f22946a;
                d.b bVar = this.f22947b;
                return "RemoveDocument(documentId=" + str + ", document=" + bVar + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class g extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final g f22948a = new g();

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
            public static final h f22949a = new h();

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
            private final String f22950a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public i(String documentId) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                this.f22950a = documentId;
            }

            public final String a() {
                return this.f22950a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof i) && Intrinsics.areEqual(this.f22950a, ((i) obj).f22950a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f22950a.hashCode();
            }

            public String toString() {
                String str = this.f22950a;
                return "Submit(documentId=" + str + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class j extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final j f22951a = new j();

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
        private final String f22952a;

        /* renamed from: b  reason: collision with root package name */
        private final String f22953b;

        /* renamed from: c  reason: collision with root package name */
        private final String f22954c;

        /* renamed from: d  reason: collision with root package name */
        private final String f22955d;

        /* renamed from: e  reason: collision with root package name */
        private final String f22956e;

        /* renamed from: f  reason: collision with root package name */
        private final String f22957f;

        /* renamed from: g  reason: collision with root package name */
        private final String f22958g;

        /* renamed from: h  reason: collision with root package name */
        private final String f22959h;

        /* renamed from: i  reason: collision with root package name */
        private final String f22960i;

        /* renamed from: j  reason: collision with root package name */
        private final String f22961j;

        /* renamed from: k  reason: collision with root package name */
        private final String f22962k;

        /* renamed from: l  reason: collision with root package name */
        private final String f22963l;

        /* renamed from: m  reason: collision with root package name */
        private final String f22964m;

        /* renamed from: n  reason: collision with root package name */
        private final e f22965n;

        /* renamed from: o  reason: collision with root package name */
        private final l f22966o;

        /* renamed from: p  reason: collision with root package name */
        private final int f22967p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f22968q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f22969r;

        /* renamed from: s  reason: collision with root package name */
        private final String f22970s;

        /* renamed from: t  reason: collision with root package name */
        private final String f22971t;

        /* renamed from: u  reason: collision with root package name */
        private final String f22972u;

        /* renamed from: v  reason: collision with root package name */
        private final String f22973v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.DocumentStepStyle f22974w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.Document.AssetConfig f22975x;

        /* renamed from: y  reason: collision with root package name */
        private final PendingPageTextPosition f22976y;

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
            this.f22952a = sessionToken;
            this.f22953b = inquiryId;
            this.f22954c = fromStep;
            this.f22955d = fromComponent;
            this.f22956e = str;
            this.f22957f = str2;
            this.f22958g = str3;
            this.f22959h = str4;
            this.f22960i = str5;
            this.f22961j = str6;
            this.f22962k = fieldKeyDocument;
            this.f22963l = kind;
            this.f22964m = str7;
            this.f22965n = startPage;
            this.f22966o = pages;
            this.f22967p = i10;
            this.f22968q = z10;
            this.f22969r = z11;
            this.f22970s = str8;
            this.f22971t = str9;
            this.f22972u = str10;
            this.f22973v = str11;
            this.f22974w = documentStepStyle;
            this.f22975x = assetConfig;
            this.f22976y = pendingPageTextVerticalPosition;
        }

        public final NextStep.Document.AssetConfig a() {
            return this.f22975x;
        }

        public final boolean b() {
            return this.f22968q;
        }

        public final boolean c() {
            return this.f22969r;
        }

        public final String d() {
            return this.f22958g;
        }

        public final int e() {
            return this.f22967p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f22952a, bVar.f22952a) && Intrinsics.areEqual(this.f22953b, bVar.f22953b) && Intrinsics.areEqual(this.f22954c, bVar.f22954c) && Intrinsics.areEqual(this.f22955d, bVar.f22955d) && Intrinsics.areEqual(this.f22956e, bVar.f22956e) && Intrinsics.areEqual(this.f22957f, bVar.f22957f) && Intrinsics.areEqual(this.f22958g, bVar.f22958g) && Intrinsics.areEqual(this.f22959h, bVar.f22959h) && Intrinsics.areEqual(this.f22960i, bVar.f22960i) && Intrinsics.areEqual(this.f22961j, bVar.f22961j) && Intrinsics.areEqual(this.f22962k, bVar.f22962k) && Intrinsics.areEqual(this.f22963l, bVar.f22963l) && Intrinsics.areEqual(this.f22964m, bVar.f22964m) && Intrinsics.areEqual(this.f22965n, bVar.f22965n) && Intrinsics.areEqual(this.f22966o, bVar.f22966o) && this.f22967p == bVar.f22967p && this.f22968q == bVar.f22968q && this.f22969r == bVar.f22969r && Intrinsics.areEqual(this.f22970s, bVar.f22970s) && Intrinsics.areEqual(this.f22971t, bVar.f22971t) && Intrinsics.areEqual(this.f22972u, bVar.f22972u) && Intrinsics.areEqual(this.f22973v, bVar.f22973v) && Intrinsics.areEqual(this.f22974w, bVar.f22974w) && Intrinsics.areEqual(this.f22975x, bVar.f22975x) && this.f22976y == bVar.f22976y) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f22964m;
        }

        public final String g() {
            return this.f22962k;
        }

        public final String h() {
            return this.f22955d;
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
            int hashCode12 = ((((((this.f22952a.hashCode() * 31) + this.f22953b.hashCode()) * 31) + this.f22954c.hashCode()) * 31) + this.f22955d.hashCode()) * 31;
            String str = this.f22956e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode12 + hashCode) * 31;
            String str2 = this.f22957f;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f22958g;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f22959h;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f22960i;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f22961j;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int hashCode13 = (((((i15 + hashCode6) * 31) + this.f22962k.hashCode()) * 31) + this.f22963l.hashCode()) * 31;
            String str7 = this.f22964m;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int hashCode14 = (((((((((((hashCode13 + hashCode7) * 31) + this.f22965n.hashCode()) * 31) + this.f22966o.hashCode()) * 31) + Integer.hashCode(this.f22967p)) * 31) + Boolean.hashCode(this.f22968q)) * 31) + Boolean.hashCode(this.f22969r)) * 31;
            String str8 = this.f22970s;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i16 = (hashCode14 + hashCode8) * 31;
            String str9 = this.f22971t;
            if (str9 == null) {
                hashCode9 = 0;
            } else {
                hashCode9 = str9.hashCode();
            }
            int i17 = (i16 + hashCode9) * 31;
            String str10 = this.f22972u;
            if (str10 == null) {
                hashCode10 = 0;
            } else {
                hashCode10 = str10.hashCode();
            }
            int i18 = (i17 + hashCode10) * 31;
            String str11 = this.f22973v;
            if (str11 == null) {
                hashCode11 = 0;
            } else {
                hashCode11 = str11.hashCode();
            }
            int i19 = (i18 + hashCode11) * 31;
            StepStyles.DocumentStepStyle documentStepStyle = this.f22974w;
            if (documentStepStyle != null) {
                i10 = documentStepStyle.hashCode();
            }
            return ((((i19 + i10) * 31) + this.f22975x.hashCode()) * 31) + this.f22976y.hashCode();
        }

        public final String i() {
            return this.f22954c;
        }

        public final String j() {
            return this.f22953b;
        }

        public final String k() {
            return this.f22963l;
        }

        public final l l() {
            return this.f22966o;
        }

        public final String m() {
            return this.f22961j;
        }

        public final PendingPageTextPosition n() {
            return this.f22976y;
        }

        public final String o() {
            return this.f22960i;
        }

        public final String p() {
            return this.f22973v;
        }

        public final String q() {
            return this.f22972u;
        }

        public final String r() {
            return this.f22971t;
        }

        public final String s() {
            return this.f22970s;
        }

        public final String t() {
            return this.f22957f;
        }

        public String toString() {
            String str = this.f22952a;
            String str2 = this.f22953b;
            String str3 = this.f22954c;
            String str4 = this.f22955d;
            String str5 = this.f22956e;
            String str6 = this.f22957f;
            String str7 = this.f22958g;
            String str8 = this.f22959h;
            String str9 = this.f22960i;
            String str10 = this.f22961j;
            String str11 = this.f22962k;
            String str12 = this.f22963l;
            String str13 = this.f22964m;
            e eVar = this.f22965n;
            l lVar = this.f22966o;
            int i10 = this.f22967p;
            boolean z10 = this.f22968q;
            boolean z11 = this.f22969r;
            String str14 = this.f22970s;
            String str15 = this.f22971t;
            String str16 = this.f22972u;
            String str17 = this.f22973v;
            StepStyles.DocumentStepStyle documentStepStyle = this.f22974w;
            NextStep.Document.AssetConfig assetConfig = this.f22975x;
            PendingPageTextPosition pendingPageTextPosition = this.f22976y;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromStep=" + str3 + ", fromComponent=" + str4 + ", promptTitle=" + str5 + ", promptDescription=" + str6 + ", disclaimer=" + str7 + ", submitButtonText=" + str8 + ", pendingTitle=" + str9 + ", pendingDescription=" + str10 + ", fieldKeyDocument=" + str11 + ", kind=" + str12 + ", documentId=" + str13 + ", startPage=" + eVar + ", pages=" + lVar + ", documentFileLimit=" + i10 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", permissionsTitle=" + str14 + ", permissionsRationale=" + str15 + ", permissionsModalPositiveButton=" + str16 + ", permissionsModalNegativeButton=" + str17 + ", styles=" + documentStepStyle + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
        }

        public final String u() {
            return this.f22956e;
        }

        public final String v() {
            return this.f22952a;
        }

        public final e w() {
            return this.f22965n;
        }

        public final StepStyles.DocumentStepStyle x() {
            return this.f22974w;
        }

        public final String y() {
            return this.f22959h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f22977a = new a();

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
            public static final b f22978a = new b();

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

        /* renamed from: fo.r2$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0343c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f22979a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0343c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f22979a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f22979a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0343c) && Intrinsics.areEqual(this.f22979a, ((C0343c) obj).f22979a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f22979a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f22979a;
                return "Errored(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f22980a = new d();

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
            private final String f22981a;

            /* renamed from: b  reason: collision with root package name */
            private final String f22982b;

            /* renamed from: c  reason: collision with root package name */
            private final aq.a f22983c;

            /* renamed from: d  reason: collision with root package name */
            private final Function0 f22984d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f22985e;

            /* renamed from: f  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f22986f;

            /* renamed from: g  reason: collision with root package name */
            private final NextStep.Document.AssetConfig.PendingPage f22987g;

            /* renamed from: h  reason: collision with root package name */
            private final PendingPageTextPosition f22988h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, aq.a navigationState, Function0 onBack, Function0 onCancel, StepStyles.DocumentStepStyle documentStepStyle, NextStep.Document.AssetConfig.PendingPage pendingPage, PendingPageTextPosition pendingPageTextVerticalPosition) {
                super(null);
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                this.f22981a = str;
                this.f22982b = str2;
                this.f22983c = navigationState;
                this.f22984d = onBack;
                this.f22985e = onCancel;
                this.f22986f = documentStepStyle;
                this.f22987g = pendingPage;
                this.f22988h = pendingPageTextVerticalPosition;
            }

            public final NextStep.Document.AssetConfig.PendingPage a() {
                return this.f22987g;
            }

            public final aq.a b() {
                return this.f22983c;
            }

            public final Function0 c() {
                return this.f22984d;
            }

            public final Function0 d() {
                return this.f22985e;
            }

            public final PendingPageTextPosition e() {
                return this.f22988h;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f22981a, aVar.f22981a) && Intrinsics.areEqual(this.f22982b, aVar.f22982b) && Intrinsics.areEqual(this.f22983c, aVar.f22983c) && Intrinsics.areEqual(this.f22984d, aVar.f22984d) && Intrinsics.areEqual(this.f22985e, aVar.f22985e) && Intrinsics.areEqual(this.f22986f, aVar.f22986f) && Intrinsics.areEqual(this.f22987g, aVar.f22987g) && this.f22988h == aVar.f22988h) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f22982b;
            }

            public final StepStyles.DocumentStepStyle g() {
                return this.f22986f;
            }

            public final String h() {
                return this.f22981a;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                String str = this.f22981a;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = hashCode * 31;
                String str2 = this.f22982b;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int hashCode4 = (((((((i11 + hashCode2) * 31) + this.f22983c.hashCode()) * 31) + this.f22984d.hashCode()) * 31) + this.f22985e.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f22986f;
                if (documentStepStyle == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = documentStepStyle.hashCode();
                }
                int i12 = (hashCode4 + hashCode3) * 31;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f22987g;
                if (pendingPage != null) {
                    i10 = pendingPage.hashCode();
                }
                return ((i12 + i10) * 31) + this.f22988h.hashCode();
            }

            public String toString() {
                String str = this.f22981a;
                String str2 = this.f22982b;
                aq.a aVar = this.f22983c;
                Function0 function0 = this.f22984d;
                Function0 function02 = this.f22985e;
                StepStyles.DocumentStepStyle documentStepStyle = this.f22986f;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f22987g;
                PendingPageTextPosition pendingPageTextPosition = this.f22988h;
                return "LoadingAnimation(title=" + str + ", prompt=" + str2 + ", navigationState=" + aVar + ", onBack=" + function0 + ", onCancel=" + function02 + ", styles=" + documentStepStyle + ", assetConfig=" + pendingPage + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final v4.h f22989a;

            /* renamed from: b  reason: collision with root package name */
            private final String f22990b;

            /* renamed from: c  reason: collision with root package name */
            private final String f22991c;

            /* renamed from: d  reason: collision with root package name */
            private final String f22992d;

            /* renamed from: e  reason: collision with root package name */
            private final String f22993e;

            /* renamed from: f  reason: collision with root package name */
            private final List f22994f;

            /* renamed from: g  reason: collision with root package name */
            private final aq.a f22995g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f22996h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f22997i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f22998j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f22999k;

            /* renamed from: l  reason: collision with root package name */
            private final Function1 f23000l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f23001m;

            /* renamed from: n  reason: collision with root package name */
            private final Function0 f23002n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f23003o;

            /* renamed from: p  reason: collision with root package name */
            private final boolean f23004p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f23005q;

            /* renamed from: r  reason: collision with root package name */
            private final boolean f23006r;

            /* renamed from: s  reason: collision with root package name */
            private final String f23007s;

            /* renamed from: t  reason: collision with root package name */
            private final Function0 f23008t;

            /* renamed from: u  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f23009u;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(v4.h imageLoader, String str, String str2, String str3, String str4, List documents, aq.a navigationState, Function0 openSelectFile, Function0 selectFromPhotoLibrary, Function0 openCamera, Function0 openUploadOptions, Function1 onRemove, Function0 onSubmit, Function0 onCancel, Function0 onBack, boolean z10, boolean z11, boolean z12, String str5, Function0 onErrorDismissed, StepStyles.DocumentStepStyle documentStepStyle) {
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
                this.f22989a = imageLoader;
                this.f22990b = str;
                this.f22991c = str2;
                this.f22992d = str3;
                this.f22993e = str4;
                this.f22994f = documents;
                this.f22995g = navigationState;
                this.f22996h = openSelectFile;
                this.f22997i = selectFromPhotoLibrary;
                this.f22998j = openCamera;
                this.f22999k = openUploadOptions;
                this.f23000l = onRemove;
                this.f23001m = onSubmit;
                this.f23002n = onCancel;
                this.f23003o = onBack;
                this.f23004p = z10;
                this.f23005q = z11;
                this.f23006r = z12;
                this.f23007s = str5;
                this.f23008t = onErrorDismissed;
                this.f23009u = documentStepStyle;
            }

            public final boolean a() {
                return this.f23005q;
            }

            public final boolean b() {
                return this.f23004p;
            }

            public final String c() {
                return this.f22992d;
            }

            public final List d() {
                return this.f22994f;
            }

            public final String e() {
                return this.f23007s;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f22989a, bVar.f22989a) && Intrinsics.areEqual(this.f22990b, bVar.f22990b) && Intrinsics.areEqual(this.f22991c, bVar.f22991c) && Intrinsics.areEqual(this.f22992d, bVar.f22992d) && Intrinsics.areEqual(this.f22993e, bVar.f22993e) && Intrinsics.areEqual(this.f22994f, bVar.f22994f) && Intrinsics.areEqual(this.f22995g, bVar.f22995g) && Intrinsics.areEqual(this.f22996h, bVar.f22996h) && Intrinsics.areEqual(this.f22997i, bVar.f22997i) && Intrinsics.areEqual(this.f22998j, bVar.f22998j) && Intrinsics.areEqual(this.f22999k, bVar.f22999k) && Intrinsics.areEqual(this.f23000l, bVar.f23000l) && Intrinsics.areEqual(this.f23001m, bVar.f23001m) && Intrinsics.areEqual(this.f23002n, bVar.f23002n) && Intrinsics.areEqual(this.f23003o, bVar.f23003o) && this.f23004p == bVar.f23004p && this.f23005q == bVar.f23005q && this.f23006r == bVar.f23006r && Intrinsics.areEqual(this.f23007s, bVar.f23007s) && Intrinsics.areEqual(this.f23008t, bVar.f23008t) && Intrinsics.areEqual(this.f23009u, bVar.f23009u)) {
                    return true;
                }
                return false;
            }

            public final v4.h f() {
                return this.f22989a;
            }

            public final aq.a g() {
                return this.f22995g;
            }

            public final Function0 h() {
                return this.f23003o;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                int hashCode4;
                int hashCode5;
                int hashCode6 = this.f22989a.hashCode() * 31;
                String str = this.f22990b;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode6 + hashCode) * 31;
                String str2 = this.f22991c;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f22992d;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f22993e;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int hashCode7 = (((((((((((((((((((((((((((i13 + hashCode4) * 31) + this.f22994f.hashCode()) * 31) + this.f22995g.hashCode()) * 31) + this.f22996h.hashCode()) * 31) + this.f22997i.hashCode()) * 31) + this.f22998j.hashCode()) * 31) + this.f22999k.hashCode()) * 31) + this.f23000l.hashCode()) * 31) + this.f23001m.hashCode()) * 31) + this.f23002n.hashCode()) * 31) + this.f23003o.hashCode()) * 31) + Boolean.hashCode(this.f23004p)) * 31) + Boolean.hashCode(this.f23005q)) * 31) + Boolean.hashCode(this.f23006r)) * 31;
                String str5 = this.f23007s;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int hashCode8 = (((hashCode7 + hashCode5) * 31) + this.f23008t.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f23009u;
                if (documentStepStyle != null) {
                    i10 = documentStepStyle.hashCode();
                }
                return hashCode8 + i10;
            }

            public final Function0 i() {
                return this.f23002n;
            }

            public final Function0 j() {
                return this.f23008t;
            }

            public final Function1 k() {
                return this.f23000l;
            }

            public final Function0 l() {
                return this.f23001m;
            }

            public final Function0 m() {
                return this.f22999k;
            }

            public final String n() {
                return this.f22991c;
            }

            public final StepStyles.DocumentStepStyle o() {
                return this.f23009u;
            }

            public final boolean p() {
                return this.f23006r;
            }

            public final String q() {
                return this.f22993e;
            }

            public final String r() {
                return this.f22990b;
            }

            public String toString() {
                v4.h hVar = this.f22989a;
                String str = this.f22990b;
                String str2 = this.f22991c;
                String str3 = this.f22992d;
                String str4 = this.f22993e;
                List list = this.f22994f;
                aq.a aVar = this.f22995g;
                Function0 function0 = this.f22996h;
                Function0 function02 = this.f22997i;
                Function0 function03 = this.f22998j;
                Function0 function04 = this.f22999k;
                Function1 function1 = this.f23000l;
                Function0 function05 = this.f23001m;
                Function0 function06 = this.f23002n;
                Function0 function07 = this.f23003o;
                boolean z10 = this.f23004p;
                boolean z11 = this.f23005q;
                boolean z12 = this.f23006r;
                String str5 = this.f23007s;
                Function0 function08 = this.f23008t;
                StepStyles.DocumentStepStyle documentStepStyle = this.f23009u;
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
            public static final a f23010d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0344a();

            /* renamed from: fo.r2$e$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0344a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f23010d;
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
            private final String f23011d;

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
                this.f23011d = documentId;
            }

            public final String a() {
                return this.f23011d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof b) && Intrinsics.areEqual(this.f23011d, ((b) obj).f23011d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f23011d.hashCode();
            }

            public String toString() {
                String str = this.f23011d;
                return "Review(documentId=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f23011d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        private final a f23012d;

        /* renamed from: e  reason: collision with root package name */
        private final InterfaceC0345f f23013e;

        /* renamed from: i  reason: collision with root package name */
        private final String f23014i;

        /* renamed from: o  reason: collision with root package name */
        private final List f23015o;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f23016d = new a("None", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f23017e = new a("CheckCameraPermissions", 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f23018i = new a("CameraRunning", 2);

            /* renamed from: o  reason: collision with root package name */
            public static final a f23019o = new a("SelectFileFromDocuments", 3);

            /* renamed from: p  reason: collision with root package name */
            public static final a f23020p = new a("SelectImageFromPhotoLibrary", 4);

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ a[] f23021q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f23022r;

            static {
                a[] a10 = a();
                f23021q = a10;
                f23022r = yr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f23016d, f23017e, f23018i, f23019o, f23020p};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f23021q.clone();
            }
        }

        /* renamed from: fo.r2$f$f  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public interface InterfaceC0345f extends Parcelable {

            /* renamed from: fo.r2$f$f$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements InterfaceC0345f {

                /* renamed from: d  reason: collision with root package name */
                public static final a f23047d = new a();
                @NotNull
                public static final Parcelable.Creator<a> CREATOR = new C0346a();

                /* renamed from: fo.r2$f$f$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0346a implements Parcelable.Creator {
                    @Override // android.os.Parcelable.Creator
                    /* renamed from: a */
                    public final a createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        parcel.readInt();
                        return a.f23047d;
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

            /* renamed from: fo.r2$f$f$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b implements InterfaceC0345f {
                @NotNull
                public static final Parcelable.Creator<b> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f23048d;

                /* renamed from: fo.r2$f$f$b$a */
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
                    this.f23048d = documentId;
                }

                public final String a() {
                    return this.f23048d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof b) && Intrinsics.areEqual(this.f23048d, ((b) obj).f23048d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f23048d.hashCode();
                }

                public String toString() {
                    String str = this.f23048d;
                    return "DeleteFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f23048d);
                }
            }

            /* renamed from: fo.r2$f$f$c */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class c implements InterfaceC0345f {
                @NotNull
                public static final Parcelable.Creator<c> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f23049d;

                /* renamed from: fo.r2$f$f$c$a */
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
                    this.f23049d = documentId;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof c) && Intrinsics.areEqual(this.f23049d, ((c) obj).f23049d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f23049d.hashCode();
                }

                public String toString() {
                    String str = this.f23049d;
                    return "ReadyToSubmit(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f23049d);
                }
            }

            /* renamed from: fo.r2$f$f$d */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class d implements InterfaceC0345f {
                @NotNull
                public static final Parcelable.Creator<d> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f23050d;

                /* renamed from: fo.r2$f$f$d$a */
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
                    this.f23050d = documentId;
                }

                public final String a() {
                    return this.f23050d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof d) && Intrinsics.areEqual(this.f23050d, ((d) obj).f23050d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f23050d.hashCode();
                }

                public String toString() {
                    String str = this.f23050d;
                    return "UploadFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f23050d);
                }
            }
        }

        public /* synthetic */ f(a aVar, InterfaceC0345f interfaceC0345f, String str, List list, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, interfaceC0345f, str, list);
        }

        public static /* synthetic */ f d(f fVar, InterfaceC0345f interfaceC0345f, String str, List list, fo.d dVar, int i10, Object obj) {
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
                return fVar.c(interfaceC0345f, str, list, dVar);
            }
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: copyWithUploadState");
        }

        public final f a(a captureState) {
            Intrinsics.checkNotNullParameter(captureState, "captureState");
            if (this instanceof d) {
                return d.l((d) this, captureState, null, null, false, 14, null);
            }
            if (this instanceof b) {
                return b.l((b) this, null, null, captureState, null, null, false, false, null, 251, null);
            }
            if (this instanceof c) {
                return c.l((c) this, null, null, captureState, null, null, false, false, null, 251, null);
            }
            if (this instanceof e) {
                return this;
            }
            throw new rr.p();
        }

        public final f b(boolean z10) {
            if (this instanceof d) {
                return d.l((d) this, null, null, null, z10, 7, null);
            }
            if (this instanceof b) {
                return b.l((b) this, null, null, null, null, null, false, z10, null, 191, null);
            }
            if (this instanceof c) {
                return c.l((c) this, null, null, null, null, null, false, z10, null, 191, null);
            }
            if (this instanceof e) {
                return this;
            }
            throw new rr.p();
        }

        public final f c(InterfaceC0345f uploadState, String str, List list, fo.d dVar) {
            Intrinsics.checkNotNullParameter(uploadState, "uploadState");
            if (this instanceof d) {
                d dVar2 = (d) this;
                if (str == null) {
                    str = dVar2.f();
                }
                return d.l(dVar2, null, uploadState, str, false, 9, null);
            } else if (this instanceof b) {
                b bVar = (b) this;
                if (list == null) {
                    list = bVar.h();
                }
                return b.l(bVar, list, null, null, uploadState, dVar, false, false, null, 230, null);
            } else if (this instanceof c) {
                c cVar = (c) this;
                if (str == null) {
                    str = cVar.f();
                }
                String str2 = str;
                if (list == null) {
                    list = cVar.h();
                }
                return c.l(cVar, list, str2, null, uploadState, dVar, false, false, null, 228, null);
            } else if (this instanceof e) {
                return e.l((e) this, null, null, uploadState, null, 11, null);
            } else {
                throw new rr.p();
            }
        }

        public a e() {
            return this.f23012d;
        }

        public abstract String f();

        public List h() {
            return this.f23015o;
        }

        public abstract InterfaceC0345f i();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends f {
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f23043p;

            /* renamed from: q  reason: collision with root package name */
            private final String f23044q;

            /* renamed from: r  reason: collision with root package name */
            private final InterfaceC0345f f23045r;

            /* renamed from: s  reason: collision with root package name */
            private final String f23046s;

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
                    return new e(arrayList, parcel.readString(), (InterfaceC0345f) parcel.readParcelable(e.class.getClassLoader()), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final e[] newArray(int i10) {
                    return new e[i10];
                }
            }

            public /* synthetic */ e(List list, String str, InterfaceC0345f interfaceC0345f, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? InterfaceC0345f.a.f23047d : interfaceC0345f, (i10 & 8) != 0 ? null : str2);
            }

            public static /* synthetic */ e l(e eVar, List list, String str, InterfaceC0345f interfaceC0345f, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = eVar.f23043p;
                }
                if ((i10 & 2) != 0) {
                    str = eVar.f23044q;
                }
                if ((i10 & 4) != 0) {
                    interfaceC0345f = eVar.f23045r;
                }
                if ((i10 & 8) != 0) {
                    str2 = eVar.f23046s;
                }
                return eVar.j(list, str, interfaceC0345f, str2);
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
                if (Intrinsics.areEqual(this.f23043p, eVar.f23043p) && Intrinsics.areEqual(this.f23044q, eVar.f23044q) && Intrinsics.areEqual(this.f23045r, eVar.f23045r) && Intrinsics.areEqual(this.f23046s, eVar.f23046s)) {
                    return true;
                }
                return false;
            }

            @Override // fo.r2.f
            public String f() {
                return this.f23044q;
            }

            @Override // fo.r2.f
            public List h() {
                return this.f23043p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((this.f23043p.hashCode() * 31) + this.f23044q.hashCode()) * 31) + this.f23045r.hashCode()) * 31;
                String str = this.f23046s;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            @Override // fo.r2.f
            public InterfaceC0345f i() {
                return this.f23045r;
            }

            public final e j(List documents, String documentId, InterfaceC0345f uploadState, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new e(documents, documentId, uploadState, str);
            }

            public String toString() {
                List list = this.f23043p;
                String str = this.f23044q;
                InterfaceC0345f interfaceC0345f = this.f23045r;
                String str2 = this.f23046s;
                return "UploadDocument(documents=" + list + ", documentId=" + str + ", uploadState=" + interfaceC0345f + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f23043p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f23044q);
                dest.writeParcelable(this.f23045r, i10);
                dest.writeString(this.f23046s);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(List documents, String documentId, InterfaceC0345f uploadState, String str) {
                super(a.f23016d, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f23043p = documents;
                this.f23044q = documentId;
                this.f23045r = uploadState;
                this.f23046s = str;
            }
        }

        private f(a aVar, InterfaceC0345f interfaceC0345f, String str, List list) {
            this.f23012d = aVar;
            this.f23013e = interfaceC0345f;
            this.f23014i = str;
            this.f23015o = list;
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends f {
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f23023p;

            /* renamed from: q  reason: collision with root package name */
            private final String f23024q;

            /* renamed from: r  reason: collision with root package name */
            private final a f23025r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0345f f23026s;

            /* renamed from: t  reason: collision with root package name */
            private final fo.d f23027t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f23028u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f23029v;

            /* renamed from: w  reason: collision with root package name */
            private final String f23030w;

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
                    InterfaceC0345f interfaceC0345f = (InterfaceC0345f) parcel.readParcelable(b.class.getClassLoader());
                    fo.d dVar = (fo.d) parcel.readParcelable(b.class.getClassLoader());
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
                    return new b(arrayList, readString, valueOf, interfaceC0345f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final b[] newArray(int i10) {
                    return new b[i10];
                }
            }

            public /* synthetic */ b(List list, String str, a aVar, InterfaceC0345f interfaceC0345f, fo.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f23016d : aVar, (i10 & 8) != 0 ? InterfaceC0345f.a.f23047d : interfaceC0345f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ b l(b bVar, List list, String str, a aVar, InterfaceC0345f interfaceC0345f, fo.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = bVar.f23023p;
                }
                if ((i10 & 2) != 0) {
                    str = bVar.f23024q;
                }
                if ((i10 & 4) != 0) {
                    aVar = bVar.f23025r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0345f = bVar.f23026s;
                }
                if ((i10 & 16) != 0) {
                    dVar = bVar.f23027t;
                }
                if ((i10 & 32) != 0) {
                    z10 = bVar.f23028u;
                }
                if ((i10 & 64) != 0) {
                    z11 = bVar.f23029v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = bVar.f23030w;
                }
                boolean z12 = z11;
                String str3 = str2;
                fo.d dVar2 = dVar;
                boolean z13 = z10;
                return bVar.j(list, str, aVar, interfaceC0345f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // fo.r2.f
            public a e() {
                return this.f23025r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f23023p, bVar.f23023p) && Intrinsics.areEqual(this.f23024q, bVar.f23024q) && this.f23025r == bVar.f23025r && Intrinsics.areEqual(this.f23026s, bVar.f23026s) && Intrinsics.areEqual(this.f23027t, bVar.f23027t) && this.f23028u == bVar.f23028u && this.f23029v == bVar.f23029v && Intrinsics.areEqual(this.f23030w, bVar.f23030w)) {
                    return true;
                }
                return false;
            }

            @Override // fo.r2.f
            public String f() {
                return this.f23024q;
            }

            @Override // fo.r2.f
            public List h() {
                return this.f23023p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((((this.f23023p.hashCode() * 31) + this.f23024q.hashCode()) * 31) + this.f23025r.hashCode()) * 31) + this.f23026s.hashCode()) * 31;
                fo.d dVar = this.f23027t;
                int i10 = 0;
                if (dVar == null) {
                    hashCode = 0;
                } else {
                    hashCode = dVar.hashCode();
                }
                int hashCode3 = (((((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f23028u)) * 31) + Boolean.hashCode(this.f23029v)) * 31;
                String str = this.f23030w;
                if (str != null) {
                    i10 = str.hashCode();
                }
                return hashCode3 + i10;
            }

            @Override // fo.r2.f
            public InterfaceC0345f i() {
                return this.f23026s;
            }

            public final b j(List documents, String documentId, a captureState, InterfaceC0345f uploadState, fo.d dVar, boolean z10, boolean z11, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new b(documents, documentId, captureState, uploadState, dVar, z10, z11, str);
            }

            public final fo.d o() {
                return this.f23027t;
            }

            public final String p() {
                return this.f23030w;
            }

            public final boolean q() {
                return this.f23028u;
            }

            public final boolean r() {
                return this.f23029v;
            }

            public String toString() {
                List list = this.f23023p;
                String str = this.f23024q;
                a aVar = this.f23025r;
                InterfaceC0345f interfaceC0345f = this.f23026s;
                fo.d dVar = this.f23027t;
                boolean z10 = this.f23028u;
                boolean z11 = this.f23029v;
                String str2 = this.f23030w;
                return "ReviewCaptures(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0345f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f23023p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f23024q);
                dest.writeString(this.f23025r.name());
                dest.writeParcelable(this.f23026s, i10);
                dest.writeParcelable(this.f23027t, i10);
                dest.writeInt(this.f23028u ? 1 : 0);
                dest.writeInt(this.f23029v ? 1 : 0);
                dest.writeString(this.f23030w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(List documents, String documentId, a captureState, InterfaceC0345f uploadState, fo.d dVar, boolean z10, boolean z11, String str) {
                super(captureState, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f23023p = documents;
                this.f23024q = documentId;
                this.f23025r = captureState;
                this.f23026s = uploadState;
                this.f23027t = dVar;
                this.f23028u = z10;
                this.f23029v = z11;
                this.f23030w = str;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends f {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f23031p;

            /* renamed from: q  reason: collision with root package name */
            private final String f23032q;

            /* renamed from: r  reason: collision with root package name */
            private final a f23033r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0345f f23034s;

            /* renamed from: t  reason: collision with root package name */
            private final fo.d f23035t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f23036u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f23037v;

            /* renamed from: w  reason: collision with root package name */
            private final String f23038w;

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
                    InterfaceC0345f interfaceC0345f = (InterfaceC0345f) parcel.readParcelable(c.class.getClassLoader());
                    fo.d dVar = (fo.d) parcel.readParcelable(c.class.getClassLoader());
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
                    return new c(arrayList, readString, valueOf, interfaceC0345f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public /* synthetic */ c(List list, String str, a aVar, InterfaceC0345f interfaceC0345f, fo.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f23016d : aVar, (i10 & 8) != 0 ? InterfaceC0345f.a.f23047d : interfaceC0345f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ c l(c cVar, List list, String str, a aVar, InterfaceC0345f interfaceC0345f, fo.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = cVar.f23031p;
                }
                if ((i10 & 2) != 0) {
                    str = cVar.f23032q;
                }
                if ((i10 & 4) != 0) {
                    aVar = cVar.f23033r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0345f = cVar.f23034s;
                }
                if ((i10 & 16) != 0) {
                    dVar = cVar.f23035t;
                }
                if ((i10 & 32) != 0) {
                    z10 = cVar.f23036u;
                }
                if ((i10 & 64) != 0) {
                    z11 = cVar.f23037v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = cVar.f23038w;
                }
                boolean z12 = z11;
                String str3 = str2;
                fo.d dVar2 = dVar;
                boolean z13 = z10;
                return cVar.j(list, str, aVar, interfaceC0345f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // fo.r2.f
            public a e() {
                return this.f23033r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof c)) {
                    return false;
                }
                c cVar = (c) obj;
                if (Intrinsics.areEqual(this.f23031p, cVar.f23031p) && Intrinsics.areEqual(this.f23032q, cVar.f23032q) && this.f23033r == cVar.f23033r && Intrinsics.areEqual(this.f23034s, cVar.f23034s) && Intrinsics.areEqual(this.f23035t, cVar.f23035t) && this.f23036u == cVar.f23036u && this.f23037v == cVar.f23037v && Intrinsics.areEqual(this.f23038w, cVar.f23038w)) {
                    return true;
                }
                return false;
            }

            @Override // fo.r2.f
            public String f() {
                return this.f23032q;
            }

            @Override // fo.r2.f
            public List h() {
                return this.f23031p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3 = this.f23031p.hashCode() * 31;
                String str = this.f23032q;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f23033r.hashCode()) * 31) + this.f23034s.hashCode()) * 31;
                fo.d dVar = this.f23035t;
                if (dVar == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = dVar.hashCode();
                }
                int hashCode5 = (((((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f23036u)) * 31) + Boolean.hashCode(this.f23037v)) * 31;
                String str2 = this.f23038w;
                if (str2 != null) {
                    i10 = str2.hashCode();
                }
                return hashCode5 + i10;
            }

            @Override // fo.r2.f
            public InterfaceC0345f i() {
                return this.f23034s;
            }

            public final c j(List documents, String str, a captureState, InterfaceC0345f uploadState, fo.d dVar, boolean z10, boolean z11, String str2) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new c(documents, str, captureState, uploadState, dVar, z10, z11, str2);
            }

            public final String o() {
                return this.f23038w;
            }

            public final boolean p() {
                return this.f23036u;
            }

            public final boolean q() {
                return this.f23037v;
            }

            public String toString() {
                List list = this.f23031p;
                String str = this.f23032q;
                a aVar = this.f23033r;
                InterfaceC0345f interfaceC0345f = this.f23034s;
                fo.d dVar = this.f23035t;
                boolean z10 = this.f23036u;
                boolean z11 = this.f23037v;
                String str2 = this.f23038w;
                return "ReviewCapturesWithoutDocumentId(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0345f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f23031p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f23032q);
                dest.writeString(this.f23033r.name());
                dest.writeParcelable(this.f23034s, i10);
                dest.writeParcelable(this.f23035t, i10);
                dest.writeInt(this.f23036u ? 1 : 0);
                dest.writeInt(this.f23037v ? 1 : 0);
                dest.writeString(this.f23038w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(List documents, String str, a captureState, InterfaceC0345f uploadState, fo.d dVar, boolean z10, boolean z11, String str2) {
                super(captureState, uploadState, str, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f23031p = documents;
                this.f23032q = str;
                this.f23033r = captureState;
                this.f23034s = uploadState;
                this.f23035t = dVar;
                this.f23036u = z10;
                this.f23037v = z11;
                this.f23038w = str2;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends f {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final a f23039p;

            /* renamed from: q  reason: collision with root package name */
            private final InterfaceC0345f f23040q;

            /* renamed from: r  reason: collision with root package name */
            private final String f23041r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f23042s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    boolean z10;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    a valueOf = a.valueOf(parcel.readString());
                    InterfaceC0345f interfaceC0345f = (InterfaceC0345f) parcel.readParcelable(d.class.getClassLoader());
                    String readString = parcel.readString();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    return new d(valueOf, interfaceC0345f, readString, z10);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final d[] newArray(int i10) {
                    return new d[i10];
                }
            }

            public /* synthetic */ d(a aVar, InterfaceC0345f interfaceC0345f, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this((i10 & 1) != 0 ? a.f23016d : aVar, (i10 & 2) != 0 ? InterfaceC0345f.a.f23047d : interfaceC0345f, str, (i10 & 8) != 0 ? false : z10);
            }

            public static /* synthetic */ d l(d dVar, a aVar, InterfaceC0345f interfaceC0345f, String str, boolean z10, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    aVar = dVar.f23039p;
                }
                if ((i10 & 2) != 0) {
                    interfaceC0345f = dVar.f23040q;
                }
                if ((i10 & 4) != 0) {
                    str = dVar.f23041r;
                }
                if ((i10 & 8) != 0) {
                    z10 = dVar.f23042s;
                }
                return dVar.j(aVar, interfaceC0345f, str, z10);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // fo.r2.f
            public a e() {
                return this.f23039p;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof d)) {
                    return false;
                }
                d dVar = (d) obj;
                if (this.f23039p == dVar.f23039p && Intrinsics.areEqual(this.f23040q, dVar.f23040q) && Intrinsics.areEqual(this.f23041r, dVar.f23041r) && this.f23042s == dVar.f23042s) {
                    return true;
                }
                return false;
            }

            @Override // fo.r2.f
            public String f() {
                return this.f23041r;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f23039p.hashCode() * 31) + this.f23040q.hashCode()) * 31;
                String str = this.f23041r;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f23042s);
            }

            @Override // fo.r2.f
            public InterfaceC0345f i() {
                return this.f23040q;
            }

            public final d j(a captureState, InterfaceC0345f uploadState, String str, boolean z10) {
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new d(captureState, uploadState, str, z10);
            }

            public final boolean o() {
                return this.f23042s;
            }

            public String toString() {
                a aVar = this.f23039p;
                InterfaceC0345f interfaceC0345f = this.f23040q;
                String str = this.f23041r;
                boolean z10 = this.f23042s;
                return "Start(captureState=" + aVar + ", uploadState=" + interfaceC0345f + ", documentId=" + str + ", shouldShowUploadOptionsDialog=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f23039p.name());
                dest.writeParcelable(this.f23040q, i10);
                dest.writeString(this.f23041r);
                dest.writeInt(this.f23042s ? 1 : 0);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(a captureState, InterfaceC0345f uploadState, String str, boolean z10) {
                super(captureState, uploadState, str, CollectionsKt.l(), null);
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f23039p = captureState;
                this.f23040q = uploadState;
                this.f23041r = str;
                this.f23042s = z10;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f23051a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f23052b;

        static {
            int[] iArr = new int[ip.g1.values().length];
            try {
                iArr[ip.g1.f29494d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ip.g1.f29495e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[ip.g1.f29496i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f23051a = iArr;
            int[] iArr2 = new int[f.a.values().length];
            try {
                iArr2[f.a.f23016d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[f.a.f23017e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[f.a.f23018i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[f.a.f23019o.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[f.a.f23020p.ordinal()] = 5;
            } catch (NoSuchFieldError unused8) {
            }
            f23052b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23053d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f23054e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f23055i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f23056o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, r2 r2Var, String str, Continuation continuation) {
            super(2, continuation);
            this.f23054e = aVar;
            this.f23055i = r2Var;
            this.f23056o = str;
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
                return Unit.f31765a;
            }
            cVar.e(new f.b(cVar2.h(), str, null, new f.InterfaceC0345f.d(str), null, false, false, cVar2.o(), 116, null));
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f23054e, this.f23055i, this.f23056o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r d10;
            xr.b.f();
            if (this.f23053d == 0) {
                kotlin.c.b(obj);
                cn.h c10 = this.f23054e.c();
                r2 r2Var = this.f23055i;
                final String str = this.f23056o;
                d10 = cn.z.d(r2Var, null, new Function1() { // from class: fo.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.h.k(str, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f31765a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23057d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f23058e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f23059i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f.InterfaceC0345f f23060o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, r2 r2Var, f.InterfaceC0345f interfaceC0345f, Continuation continuation) {
            super(2, continuation);
            this.f23058e = aVar;
            this.f23059i = r2Var;
            this.f23060o = interfaceC0345f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(f.InterfaceC0345f interfaceC0345f, r.c cVar) {
            cVar.e(f.d((f) cVar.c(), new f.InterfaceC0345f.c(((f.InterfaceC0345f.d) interfaceC0345f).a()), null, null, null, 14, null));
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f23058e, this.f23059i, this.f23060o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r d10;
            xr.b.f();
            if (this.f23057d == 0) {
                kotlin.c.b(obj);
                cn.h c10 = this.f23058e.c();
                r2 r2Var = this.f23059i;
                final f.InterfaceC0345f interfaceC0345f = this.f23060o;
                d10 = cn.z.d(r2Var, null, new Function1() { // from class: fo.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.i.k(r2.f.InterfaceC0345f.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f31765a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public r2(v4.h imageLoader, Context applicationContext, ip.c1 permissionRequestWorkflow, fo.c documentCameraWorker, v2.b documentsSelectWorkerFactory, a.C0249a documentCreateWorker, c.a documentLoadWorker, b.a documentFileUploadWorker, a.C0387a documentFileDeleteWorker, d.a documentSubmitWorker, aq.b navigationStateManager, wp.c externalEventLogger) {
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
        this.f22929a = imageLoader;
        this.f22930b = applicationContext;
        this.f22931c = permissionRequestWorkflow;
        this.f22932d = documentCameraWorker;
        this.f22933e = documentsSelectWorkerFactory;
        this.f22934f = documentCreateWorker;
        this.f22935g = documentLoadWorker;
        this.f22936h = documentFileUploadWorker;
        this.f22937i = documentFileDeleteWorker;
        this.f22938j = documentSubmitWorker;
        this.f22939k = navigationStateManager;
        this.f22940l = externalEventLogger;
    }

    private final List A0(u uVar, final k.a aVar) {
        return new b.a().a(uVar.b(), new Function1() { // from class: fo.v0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit C0;
                C0 = r2.C0(r2.this, aVar, (k5) obj);
                return C0;
            }
        }).a(uVar.c(), new Function1() { // from class: fo.w0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit D0;
                D0 = r2.D0(r2.this, aVar, (k5) obj);
                return D0;
            }
        }).a(uVar.d(), new Function1() { // from class: fo.x0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E0;
                E0 = r2.E0(r2.this, aVar, (k5) obj);
                return E0;
            }
        }).a(uVar.a(), new Function1() { // from class: fo.y0
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
        r2Var.L0(aVar, a.b.f22942a);
        return Unit.f31765a;
    }

    private final List B0(b3 b3Var, final k.a aVar) {
        return new b.a().a(b3Var.b(), new Function1() { // from class: fo.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit G0;
                G0 = r2.G0(r2.this, aVar, (k5) obj);
                return G0;
            }
        }).a(b3Var.c(), new Function1() { // from class: fo.b1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit H0;
                H0 = r2.H0(r2.this, aVar, (k5) obj);
                return H0;
            }
        }).a(b3Var.d(), new Function1() { // from class: fo.c1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit I0;
                I0 = r2.I0(r2.this, aVar, (k5) obj);
                return I0;
            }
        }).b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r B1(final r2 r2Var, final f fVar, final c1.a it) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = cn.z.d(r2Var, null, new Function1() { // from class: fo.z0
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
        r2Var.L0(aVar, a.g.f22948a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f23051a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new rr.p();
            }
            action.e(fVar.a(f.a.f23016d));
        } else {
            fo.c cVar = r2Var.f22932d;
            String string = r2Var.f22930b.getString(kp.e.f34932a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f23018i);
            } else {
                a10 = fVar.a(f.a.f23016d);
            }
            action.e(a10);
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f22949a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r D1(r2 r2Var, final f fVar, final c.b it) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0258b) {
            d11 = cn.z.d(r2Var, null, new Function1() { // from class: fo.d1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit E1;
                    E1 = r2.E1(r2.f.this, it, (r.c) obj);
                    return E1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = cn.z.d(r2Var, null, new Function1() { // from class: fo.e1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit F1;
                    F1 = r2.F1(c.b.this, (r.c) obj);
                    return F1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f22951a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(f fVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.b bVar2 = (f.b) fVar;
        action.e(f.b.l(bVar2, ((c.b.C0258b) bVar).a(), null, null, new f.InterfaceC0345f.c(bVar2.f()), null, false, false, null, 214, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.e.f22945a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F1(c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0343c(((c.b.a) bVar).a()));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.g.f22948a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f22948a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f22949a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f22949a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f22951a);
        return Unit.f31765a;
    }

    private final void I1(f.a aVar, final b bVar, final f fVar, k.a aVar2) {
        v2 e10;
        int i10 = g.f23052b[aVar.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4 && i10 != 5) {
                    throw new rr.p();
                }
                if (fVar.e() == f.a.f23019o) {
                    e10 = this.f22933e.c();
                } else {
                    e10 = this.f22933e.e();
                }
                cn.w.l(aVar2, e10, Reflection.typeOf(v2.class), "", new Function1() { // from class: fo.h1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        cn.r N1;
                        N1 = r2.N1(r2.this, bVar, fVar, (v2.c) obj);
                        return N1;
                    }
                });
                return;
            }
            cn.w.l(aVar2, this.f22932d, Reflection.typeOf(fo.c.class), "", new Function1() { // from class: fo.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r K1;
                    K1 = r2.K1(r2.this, bVar, (c.b) obj);
                    return K1;
                }
            });
        }
    }

    private final void J1(final f.InterfaceC0345f interfaceC0345f, b bVar, f fVar, k.a aVar) {
        if (Intrinsics.areEqual(interfaceC0345f, f.InterfaceC0345f.a.f23047d)) {
            if (fVar.f() == null) {
                cn.w.l(aVar, this.f22934f.a(bVar.v(), bVar.k(), bVar.g(), bVar.e()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.a.class), "", new Function1() { // from class: fo.j1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        cn.r R1;
                        R1 = r2.R1(r2.this, (a.b) obj);
                        return R1;
                    }
                });
                return;
            }
            return;
        }
        final d.b bVar2 = null;
        if (interfaceC0345f instanceof f.InterfaceC0345f.d) {
            ArrayList arrayList = new ArrayList();
            for (Object obj : fVar.h()) {
                if (obj instanceof d.a) {
                    arrayList.add(obj);
                }
            }
            if (arrayList.isEmpty()) {
                aVar.a("upload_complete", new i(aVar, this, interfaceC0345f, null));
                return;
            }
            for (final d.a aVar2 : CollectionsKt.a1(arrayList, 3)) {
                cn.w.l(aVar, this.f22936h.a(bVar.v(), ((f.InterfaceC0345f.d) interfaceC0345f).a(), aVar2), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.b.class), aVar2.c(), new Function1() { // from class: fo.k1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        cn.r U1;
                        U1 = r2.U1(r2.this, interfaceC0345f, aVar2, (b.AbstractC0252b) obj2);
                        return U1;
                    }
                });
            }
        } else if (interfaceC0345f instanceof f.InterfaceC0345f.b) {
            if (fVar instanceof f.b) {
                f.b bVar3 = (f.b) fVar;
                fo.d o10 = bVar3.o();
                if (o10 instanceof d.b) {
                    bVar2 = (d.b) o10;
                }
                if (bVar2 == null) {
                    return;
                }
                cn.w.l(aVar, this.f22937i.a(bVar.v(), bVar3.f(), bVar2), Reflection.typeOf(ho.a.class), "", new Function1() { // from class: fo.l1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        cn.r Z1;
                        Z1 = r2.Z1(r2.this, bVar2, interfaceC0345f, (a.b) obj2);
                        return Z1;
                    }
                });
            }
        } else if (!(interfaceC0345f instanceof f.InterfaceC0345f.c)) {
            throw new rr.p();
        }
    }

    private final void K0(b bVar, f fVar) {
        wp.b bVar2;
        if (fVar.e() == f.a.f23018i) {
            bVar2 = b.d.f53891a;
        } else if (fVar instanceof f.d) {
            bVar2 = b.C0753b.f53889a;
        } else if (fVar instanceof f.b) {
            bVar2 = b.c.f53890a;
        } else if (fVar instanceof f.c) {
            bVar2 = b.c.f53890a;
        } else if (fVar instanceof f.e) {
            bVar2 = b.a.f53888a;
        } else {
            throw new rr.p();
        }
        this.f22940l.c(new i.b(bVar.i(), bVar2));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r K1(r2 r2Var, final b bVar, final c.b it) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0337b) {
            d11 = cn.z.d(r2Var, null, new Function1() { // from class: fo.d2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit L1;
                    L1 = r2.L1(c.b.this, bVar, (r.c) obj);
                    return L1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, c.b.a.f22789a)) {
            d10 = cn.z.d(r2Var, null, new Function1() { // from class: fo.e2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M1;
                    M1 = r2.M1((r.c) obj);
                    return M1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    private final void L0(k.a aVar, final a aVar2) {
        cn.r d10;
        if (Intrinsics.areEqual(aVar2, a.b.f22942a)) {
            d10 = cn.z.d(this, null, new Function1() { // from class: fo.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M0;
                    M0 = r2.M0((r.c) obj);
                    return M0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.C0342a.f22941a)) {
            d10 = cn.z.d(this, null, new Function1() { // from class: fo.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = r2.N0((r.c) obj);
                    return N0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.g.f22948a)) {
            d10 = cn.z.d(this, null, new Function1() { // from class: fo.s1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = r2.O0((r.c) obj);
                    return O0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.h.f22949a)) {
            d10 = cn.z.d(this, null, new Function1() { // from class: fo.t1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P0;
                    P0 = r2.P0((r.c) obj);
                    return P0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.j.f22951a)) {
            d10 = cn.z.d(this, null, new Function1() { // from class: fo.u1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q0;
                    Q0 = r2.Q0((r.c) obj);
                    return Q0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.e.f22945a)) {
            d10 = cn.z.d(this, null, new Function1() { // from class: fo.v1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R0;
                    R0 = r2.R0((r.c) obj);
                    return R0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.c.f22943a)) {
            d10 = cn.z.d(this, null, new Function1() { // from class: fo.w1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S0;
                    S0 = r2.S0((r.c) obj);
                    return S0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.f) {
            d10 = cn.z.d(this, null, new Function1() { // from class: fo.x1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = r2.T0(r2.a.this, (r.c) obj);
                    return T0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.d.f22944a)) {
            d10 = cn.z.d(this, null, new Function1() { // from class: fo.y1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = r2.U0((r.c) obj);
                    return U0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.i) {
            d10 = cn.z.d(this, null, new Function1() { // from class: fo.z1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V0;
                    V0 = r2.V0(r2.a.this, (r.c) obj);
                    return V0;
                }
            }, 1, null);
        } else {
            throw new rr.p();
        }
        aVar.c().d(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(c.b bVar, b bVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.M0(((f) action.c()).h(), new d.a(((c.b.C0337b) bVar).a(), fo.a.f22762i, 0, 4, null)), bVar2.e()), ((f) action.c()).f(), null, ((f) action.c()).i(), null, false, false, null, 244, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.b.f22978a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f23016d));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.a.f22977a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r N1(final r2 r2Var, final b bVar, final f fVar, final v2.c it) {
        cn.r d10;
        cn.r d11;
        cn.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof v2.c.C0348c) {
            d12 = cn.z.d(r2Var, null, new Function1() { // from class: fo.f2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O1;
                    O1 = r2.O1(v2.c.this, bVar, (r.c) obj);
                    return O1;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof v2.c.b) {
            d11 = cn.z.d(r2Var, null, new Function1() { // from class: fo.g2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P1;
                    P1 = r2.P1(v2.c.this, bVar, r2Var, (r.c) obj);
                    return P1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, v2.c.a.f23099a)) {
            d10 = cn.z.d(r2Var, null, new Function1() { // from class: fo.h2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q1;
                    Q1 = r2.Q1(r2.f.this, (r.c) obj);
                    return Q1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f23019o).b(false));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(v2.c cVar, b bVar, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0345f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.C0348c) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).h(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, null, 244, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f23020p).b(false));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P1(v2.c cVar, b bVar, r2 r2Var, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0345f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.b) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).h(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, r2Var.f22930b.getString(kp.e.f34941j), 116, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f23017e).b(false));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(fVar.a(f.a.f23016d));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(true));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r R1(r2 r2Var, final a.b it) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a.b.C0251b) {
            d11 = cn.z.d(r2Var, null, new Function1() { // from class: fo.a2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S1;
                    S1 = r2.S1(a.b.this, (r.c) obj);
                    return S1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof a.b.C0250a) {
            d10 = cn.z.d(r2Var, null, new Function1() { // from class: fo.c2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T1;
                    T1 = r2.T1(a.b.this, (r.c) obj);
                    return T1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(false));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0251b c0251b = (a.b.C0251b) bVar;
        action.e(f.d((f) action.c(), new f.InterfaceC0345f.c(c0251b.a()), c0251b.a(), null, null, 12, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (action.c() instanceof f.b) {
            a.f fVar = (a.f) aVar;
            action.e(f.d((f) action.c(), new f.InterfaceC0345f.b(fVar.b()), null, null, fVar.a(), 6, null));
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0250a c0250a = (a.b.C0250a) bVar;
        if (!c0250a.a().isRecoverable()) {
            action.d(new c.C0343c(c0250a.a()));
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f fVar = (f) action.c();
        if (fVar instanceof f.b) {
            action.e(f.b.l((f.b) fVar, null, null, null, null, null, false, false, null, 127, null));
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r U1(final r2 r2Var, final f.InterfaceC0345f interfaceC0345f, final d.a aVar, final b.AbstractC0252b response) {
        cn.r d10;
        cn.r d11;
        cn.r d12;
        cn.r d13;
        Intrinsics.checkNotNullParameter(response, "response");
        if (response instanceof b.AbstractC0252b.d) {
            d13 = cn.z.d(r2Var, null, new Function1() { // from class: fo.i2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V1;
                    V1 = r2.V1(r2.f.InterfaceC0345f.this, response, (r.c) obj);
                    return V1;
                }
            }, 1, null);
            return d13;
        } else if (response instanceof b.AbstractC0252b.c) {
            d12 = cn.z.d(r2Var, null, new Function1() { // from class: fo.j2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit W1;
                    W1 = r2.W1(d.a.this, response, (r.c) obj);
                    return W1;
                }
            }, 1, null);
            return d12;
        } else if (response instanceof b.AbstractC0252b.a) {
            d11 = cn.z.d(r2Var, null, new Function1() { // from class: fo.k2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit X1;
                    X1 = r2.X1(d.a.this, interfaceC0345f, response, r2Var, (r.c) obj);
                    return X1;
                }
            }, 1, null);
            return d11;
        } else if (response instanceof b.AbstractC0252b.C0253b) {
            d10 = cn.z.d(r2Var, null, new Function1() { // from class: fo.l2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y1;
                    Y1 = r2.Y1(b.AbstractC0252b.this, (r.c) obj);
                    return Y1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.i iVar = (a.i) aVar;
        action.e(new f.e(((f) action.c()).h(), iVar.a(), new f.InterfaceC0345f.c(iVar.a()), null, 8, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(f.InterfaceC0345f interfaceC0345f, b.AbstractC0252b abstractC0252b, r.c action) {
        f.InterfaceC0345f cVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> h10 = ((f) action.c()).h();
        ArrayList<fo.d> arrayList = new ArrayList(CollectionsKt.w(h10, 10));
        for (Parcelable parcelable : h10) {
            b.AbstractC0252b.d dVar = (b.AbstractC0252b.d) abstractC0252b;
            if (Intrinsics.areEqual(parcelable, dVar.b())) {
                parcelable = dVar.a();
            }
            arrayList.add(parcelable);
        }
        if (!arrayList.isEmpty()) {
            for (fo.d dVar2 : arrayList) {
                if (dVar2 instanceof d.a) {
                    cVar = new f.InterfaceC0345f.d(((f.InterfaceC0345f.d) interfaceC0345f).a());
                    break;
                }
            }
        }
        cVar = new f.InterfaceC0345f.c(((f.InterfaceC0345f.d) interfaceC0345f).a());
        action.e(f.d((f) action.c(), cVar, null, arrayList, null, 10, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(d.a aVar, b.AbstractC0252b abstractC0252b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> h10 = ((f) action.c()).h();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(h10, 10));
        for (Parcelable parcelable : h10) {
            if ((parcelable instanceof d.a) && Intrinsics.areEqual(parcelable, aVar)) {
                parcelable = d.a.b((d.a) parcelable, null, null, ((b.AbstractC0252b.c) abstractC0252b).a(), 3, null);
            }
            arrayList.add(parcelable);
        }
        action.e(f.d((f) action.c(), ((f) action.c()).i(), null, arrayList, null, 10, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0342a.f22941a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(d.a aVar, f.InterfaceC0345f interfaceC0345f, b.AbstractC0252b abstractC0252b, r2 r2Var, r.c action) {
        f.InterfaceC0345f dVar;
        String d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List I0 = CollectionsKt.I0(((f) action.c()).h(), aVar);
        List<fo.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (fo.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0345f.d(((f.InterfaceC0345f.d) interfaceC0345f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0345f.c(((f.InterfaceC0345f.d) interfaceC0345f).a());
        f.InterfaceC0345f interfaceC0345f2 = dVar;
        String a10 = ((f.InterfaceC0345f.d) interfaceC0345f).a();
        f.a aVar2 = f.a.f23016d;
        d10 = u2.d(((b.AbstractC0252b.a) abstractC0252b).a(), r2Var.f22930b);
        action.e(new f.b(I0, a10, aVar2, interfaceC0345f2, null, false, false, d10, 80, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f22942a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(b.AbstractC0252b abstractC0252b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0343c(((b.AbstractC0252b.C0253b) abstractC0252b).a()));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f22951a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r Z1(r2 r2Var, final d.b bVar, final f.InterfaceC0345f interfaceC0345f, final a.b response) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(response, "response");
        d10 = cn.z.d(r2Var, null, new Function1() { // from class: fo.n2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit a22;
                a22 = r2.a2(d.b.this, interfaceC0345f, response, (r.c) obj);
                return a22;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f22945a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(d.b bVar, f.InterfaceC0345f interfaceC0345f, a.b bVar2, r.c action) {
        f.b bVar3;
        f.InterfaceC0345f dVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof f.b) {
            bVar3 = (f.b) c10;
        } else {
            bVar3 = null;
        }
        f.b bVar4 = bVar3;
        if (bVar4 == null) {
            return Unit.f31765a;
        }
        List I0 = CollectionsKt.I0(bVar4.h(), bVar);
        List<fo.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (fo.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0345f.d(((f.InterfaceC0345f.b) interfaceC0345f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0345f.c(((f.InterfaceC0345f.b) interfaceC0345f).a());
        f.InterfaceC0345f interfaceC0345f2 = dVar;
        if (bVar2 instanceof a.b.C0389b) {
            action.e(f.b.l(bVar4, I0, null, null, interfaceC0345f2, null, false, false, null, 230, null));
        } else if (bVar2 instanceof a.b.C0388a) {
            action.d(new c.C0343c(((a.b.C0388a) bVar2).a()));
        } else {
            throw new rr.p();
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b1(r2 r2Var, k.a aVar, f fVar, d.b document) {
        Intrinsics.checkNotNullParameter(document, "document");
        r2Var.L0(aVar, new a.f(((f.b) fVar).f(), document));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c1(r2 r2Var, k.a aVar, f fVar) {
        r2Var.L0(aVar, new a.i(((f.b) fVar).f()));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f22942a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0342a.f22941a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f22944a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r g1(final r2 r2Var, final f fVar, final c1.a it) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = cn.z.d(r2Var, null, new Function1() { // from class: fo.i1
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
        int i10 = g.f23051a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new rr.p();
            }
            action.e(fVar.a(f.a.f23016d));
        } else {
            fo.c cVar = r2Var.f22932d;
            String string = r2Var.f22930b.getString(kp.e.f34932a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f23018i);
            } else {
                a10 = fVar.a(f.a.f23016d);
            }
            action.e(a10);
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f22943a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f22943a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f22948a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f22949a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f22951a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f22945a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(d.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1() {
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f22942a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0342a.f22941a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f22944a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r t1(final r2 r2Var, final f fVar, final c1.a it) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = cn.z.d(r2Var, null, new Function1() { // from class: fo.o1
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
        int i10 = g.f23051a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new rr.p();
            }
            action.e(fVar.a(f.a.f23016d));
        } else {
            fo.c cVar = r2Var.f22932d;
            String string = r2Var.f22930b.getString(kp.e.f34932a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f23018i);
            } else {
                a10 = fVar.a(f.a.f23016d);
            }
            action.e(a10);
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f22943a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r w1(r2 r2Var, final d.b it) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, d.b.C0260b.f18731a)) {
            d11 = cn.z.d(r2Var, null, new Function1() { // from class: fo.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit x12;
                    x12 = r2.x1((r.c) obj);
                    return x12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof d.b.a) {
            d10 = cn.z.d(r2Var, null, new Function1() { // from class: fo.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = r2.y1(d.b.this, (r.c) obj);
                    return y12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.d.f22980a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(d.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0343c(((d.b.a) bVar).a()));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f22942a);
        return Unit.f31765a;
    }

    @Override // cn.k
    /* renamed from: J0 */
    public f d(b props, cn.i iVar) {
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
                Object readParcelable = obtain.readParcelable(cn.i.class.getClassLoader());
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
        if (Intrinsics.areEqual(w10, e.a.f23010d)) {
            return new f.d(null, null, props.f(), false, 11, null);
        }
        if (w10 instanceof e.b) {
            return new f.b(CollectionsKt.l(), ((e.b) props.w()).a(), null, null, null, true, false, null, 220, null);
        }
        throw new rr.p();
    }

    @Override // cn.k
    /* renamed from: W0 */
    public Object f(b renderProps, final f renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        this.f22939k.c(renderProps.b(), renderProps.c(), !(renderState instanceof f.e));
        I1(renderState.e(), renderProps, renderState, context);
        J1(renderState.i(), renderProps, renderState, context);
        K0(renderProps, renderState);
        if (renderState instanceof f.d) {
            Object iVar = new fo.i(eq.c.a(renderProps.l().a()), A0(renderProps.l().a(), context), this.f22939k.b(), new Function0() { // from class: fo.y
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit X0;
                    X0 = r2.X0(r2.this, context);
                    return X0;
                }
            }, new Function0() { // from class: fo.a0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Y0;
                    Y0 = r2.Y0(r2.this, context);
                    return Y0;
                }
            });
            f.d dVar = (f.d) renderState;
            if (dVar.o()) {
                iVar = fp.d.a(eq.m.f22078a.j(eq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: fo.m0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit j12;
                        j12 = r2.j1(r2.this, context);
                        return j12;
                    }
                }, renderProps.l().b().a()), iVar, "document_upload_options_dialog");
            }
            boolean z10 = dVar.e() == f.a.f23017e;
            ip.d0 d0Var = ip.d0.f29468d;
            String s10 = renderProps.s();
            String str = s10 != null ? s10 : "";
            String r10 = renderProps.r();
            if (r10 == null) {
                r10 = this.f22930b.getString(kp.e.f34934c);
                Intrinsics.checkNotNullExpressionValue(r10, "getString(...)");
            }
            Context context2 = this.f22930b;
            String string = context2.getString(kp.e.f34933b, sp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return ip.l1.e(iVar, context, z10, d0Var, false, str, r10, string, renderProps.q(), renderProps.p(), null, null, null, this.f22931c, renderProps.x(), null, new Function1() { // from class: fo.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r B1;
                    B1 = r2.B1(r2.this, renderState, (c1.a) obj);
                    return B1;
                }
            }, 19976, null);
        } else if (renderState instanceof f.b) {
            f.b bVar = (f.b) renderState;
            if (bVar.q()) {
                cn.w.l(context, this.f22935g.a(renderProps.v(), bVar.f()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.c.class), "", new Function1() { // from class: fo.o0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        cn.r D1;
                        D1 = r2.D1(r2.this, renderState, (c.b) obj);
                        return D1;
                    }
                });
            }
            d.b bVar2 = new d.b(this.f22929a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), bVar.h(), this.f22939k.b(), new Function0() { // from class: fo.p0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit G1;
                    G1 = r2.G1(r2.this, context);
                    return G1;
                }
            }, new Function0() { // from class: fo.q0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit H1;
                    H1 = r2.H1(r2.this, context);
                    return H1;
                }
            }, new Function0() { // from class: fo.r0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Z0;
                    Z0 = r2.Z0(r2.this, context);
                    return Z0;
                }
            }, new Function0() { // from class: fo.s0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit a12;
                    a12 = r2.a1(r2.this, context);
                    return a12;
                }
            }, new Function1() { // from class: fo.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit b12;
                    b12 = r2.b1(r2.this, context, renderState, (d.b) obj);
                    return b12;
                }
            }, new Function0() { // from class: fo.j0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit c12;
                    c12 = r2.c1(r2.this, context, renderState);
                    return c12;
                }
            }, new Function0() { // from class: fo.u0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit d12;
                    d12 = r2.d1(r2.this, context);
                    return d12;
                }
            }, new Function0() { // from class: fo.f1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit e12;
                    e12 = r2.e1(r2.this, context);
                    return e12;
                }
            }, bVar.q(), bVar.h().size() < renderProps.e(), !bVar.h().isEmpty() && Intrinsics.areEqual(bVar.i(), new f.InterfaceC0345f.c(bVar.f())), bVar.p(), new Function0() { // from class: fo.q1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f12;
                    f12 = r2.f1(r2.this, context);
                    return f12;
                }
            }, renderProps.x());
            boolean z11 = bVar.e() == f.a.f23017e;
            ip.d0 d0Var2 = ip.d0.f29468d;
            String s11 = renderProps.s();
            if (s11 == null) {
                s11 = "";
            }
            String r11 = renderProps.r();
            if (r11 == null) {
                r11 = this.f22930b.getString(kp.e.f34934c);
                Intrinsics.checkNotNullExpressionValue(r11, "getString(...)");
            }
            Context context3 = this.f22930b;
            String string2 = context3.getString(kp.e.f34933b, sp.f.b(context3));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            fp.c e10 = ip.l1.e(bVar2, context, z11, d0Var2, false, s11, r11, string2, renderProps.q(), renderProps.p(), null, null, null, this.f22931c, renderProps.x(), null, new Function1() { // from class: fo.b2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r g12;
                    g12 = r2.g1(r2.this, renderState, (c1.a) obj);
                    return g12;
                }
            }, 19976, null);
            if (bVar.r()) {
                return fp.d.a(eq.m.f22078a.j(eq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: fo.m2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i12;
                        i12 = r2.i1(r2.this, context);
                        return i12;
                    }
                }, renderProps.l().b().a()), e10, "document_upload_screen");
            }
            return new fp.c(e10, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.c) {
            f.c cVar = (f.c) renderState;
            String f10 = cVar.f();
            if (f10 != null) {
                context.a(f10, new h(context, this, f10, null));
            }
            d.b bVar3 = new d.b(this.f22929a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), cVar.h(), this.f22939k.b(), new Function0() { // from class: fo.o2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit k12;
                    k12 = r2.k1(r2.this, context);
                    return k12;
                }
            }, new Function0() { // from class: fo.p2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit l12;
                    l12 = r2.l1(r2.this, context);
                    return l12;
                }
            }, new Function0() { // from class: fo.q2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m12;
                    m12 = r2.m1(r2.this, context);
                    return m12;
                }
            }, new Function0() { // from class: fo.z
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit n12;
                    n12 = r2.n1(r2.this, context);
                    return n12;
                }
            }, new Function1() { // from class: fo.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o12;
                    o12 = r2.o1((d.b) obj);
                    return o12;
                }
            }, new Function0() { // from class: fo.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit p12;
                    p12 = r2.p1();
                    return p12;
                }
            }, new Function0() { // from class: fo.d0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit q12;
                    q12 = r2.q1(r2.this, context);
                    return q12;
                }
            }, new Function0() { // from class: fo.e0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit r12;
                    r12 = r2.r1(r2.this, context);
                    return r12;
                }
            }, cVar.p(), cVar.h().size() < renderProps.e(), false, cVar.o(), new Function0() { // from class: fo.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit s12;
                    s12 = r2.s1(r2.this, context);
                    return s12;
                }
            }, renderProps.x());
            boolean z12 = cVar.e() == f.a.f23017e;
            ip.d0 d0Var3 = ip.d0.f29468d;
            String s12 = renderProps.s();
            if (s12 == null) {
                s12 = "";
            }
            String r12 = renderProps.r();
            if (r12 == null) {
                r12 = this.f22930b.getString(kp.e.f34934c);
                Intrinsics.checkNotNullExpressionValue(r12, "getString(...)");
            }
            Context context4 = this.f22930b;
            String string3 = context4.getString(kp.e.f34933b, sp.f.b(context4));
            Intrinsics.checkNotNullExpressionValue(string3, "getString(...)");
            fp.c e11 = ip.l1.e(bVar3, context, z12, d0Var3, false, s12, r12, string3, renderProps.q(), renderProps.p(), null, null, null, this.f22931c, renderProps.x(), null, new Function1() { // from class: fo.g0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r t12;
                    t12 = r2.t1(r2.this, renderState, (c1.a) obj);
                    return t12;
                }
            }, 19976, null);
            if (cVar.q()) {
                return fp.d.a(eq.m.f22078a.j(eq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: fo.h0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v12;
                        v12 = r2.v1(r2.this, context);
                        return v12;
                    }
                }, renderProps.l().b().a()), e11, "document_upload_screen");
            }
            return new fp.c(e11, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.e) {
            cn.w.l(context, this.f22938j.a(renderProps.v(), renderProps.j(), renderProps.i(), renderProps.h(), ((f.e) renderState).h()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.d.class), "", new Function1() { // from class: fo.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r w12;
                    w12 = r2.w1(r2.this, (d.b) obj);
                    return w12;
                }
            });
            aq.b.d(this.f22939k, false, false, false, 4, null);
            return new d.a(renderProps.o(), renderProps.m(), this.f22939k.b(), new Function0() { // from class: fo.k0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit z13;
                    z13 = r2.z1(r2.this, context);
                    return z13;
                }
            }, new Function0() { // from class: fo.l0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit A1;
                    A1 = r2.A1(r2.this, context);
                    return A1;
                }
            }, renderProps.x(), renderProps.a().getPendingPage(), renderProps.n());
        } else {
            throw new rr.p();
        }
    }

    @Override // cn.k
    /* renamed from: b2 */
    public cn.i g(f state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return en.s.a(state);
    }
}
