package eo;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import bn.k;
import bn.r;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.document.network.a;
import com.withpersona.sdk2.inquiry.document.network.b;
import com.withpersona.sdk2.inquiry.document.network.c;
import com.withpersona.sdk2.inquiry.document.network.d;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import dq.b;
import eo.c;
import eo.d;
import eo.r2;
import eo.v2;
import fq.k5;
import go.a;
import hp.c1;
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
import vp.b;
import vp.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r2 extends bn.k {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f21853a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f21854b;

    /* renamed from: c  reason: collision with root package name */
    private final hp.c1 f21855c;

    /* renamed from: d  reason: collision with root package name */
    private final eo.c f21856d;

    /* renamed from: e  reason: collision with root package name */
    private final v2.b f21857e;

    /* renamed from: f  reason: collision with root package name */
    private final a.C0222a f21858f;

    /* renamed from: g  reason: collision with root package name */
    private final c.a f21859g;

    /* renamed from: h  reason: collision with root package name */
    private final b.a f21860h;

    /* renamed from: i  reason: collision with root package name */
    private final a.C0342a f21861i;

    /* renamed from: j  reason: collision with root package name */
    private final d.a f21862j;

    /* renamed from: k  reason: collision with root package name */
    private final zp.b f21863k;

    /* renamed from: l  reason: collision with root package name */
    private final vp.c f21864l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: eo.r2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0297a extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final C0297a f21865a = new C0297a();

            private C0297a() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0297a)) {
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
            public static final b f21866a = new b();

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
            public static final c f21867a = new c();

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
            public static final d f21868a = new d();

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
            public static final e f21869a = new e();

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
            private final String f21870a;

            /* renamed from: b  reason: collision with root package name */
            private final d.b f21871b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String documentId, d.b document) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(document, "document");
                this.f21870a = documentId;
                this.f21871b = document;
            }

            public final d.b a() {
                return this.f21871b;
            }

            public final String b() {
                return this.f21870a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof f)) {
                    return false;
                }
                f fVar = (f) obj;
                if (Intrinsics.areEqual(this.f21870a, fVar.f21870a) && Intrinsics.areEqual(this.f21871b, fVar.f21871b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f21870a.hashCode() * 31) + this.f21871b.hashCode();
            }

            public String toString() {
                String str = this.f21870a;
                d.b bVar = this.f21871b;
                return "RemoveDocument(documentId=" + str + ", document=" + bVar + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class g extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final g f21872a = new g();

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
            public static final h f21873a = new h();

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
            private final String f21874a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public i(String documentId) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                this.f21874a = documentId;
            }

            public final String a() {
                return this.f21874a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof i) && Intrinsics.areEqual(this.f21874a, ((i) obj).f21874a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f21874a.hashCode();
            }

            public String toString() {
                String str = this.f21874a;
                return "Submit(documentId=" + str + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class j extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final j f21875a = new j();

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
        private final String f21876a;

        /* renamed from: b  reason: collision with root package name */
        private final String f21877b;

        /* renamed from: c  reason: collision with root package name */
        private final String f21878c;

        /* renamed from: d  reason: collision with root package name */
        private final String f21879d;

        /* renamed from: e  reason: collision with root package name */
        private final String f21880e;

        /* renamed from: f  reason: collision with root package name */
        private final String f21881f;

        /* renamed from: g  reason: collision with root package name */
        private final String f21882g;

        /* renamed from: h  reason: collision with root package name */
        private final String f21883h;

        /* renamed from: i  reason: collision with root package name */
        private final String f21884i;

        /* renamed from: j  reason: collision with root package name */
        private final String f21885j;

        /* renamed from: k  reason: collision with root package name */
        private final String f21886k;

        /* renamed from: l  reason: collision with root package name */
        private final String f21887l;

        /* renamed from: m  reason: collision with root package name */
        private final String f21888m;

        /* renamed from: n  reason: collision with root package name */
        private final e f21889n;

        /* renamed from: o  reason: collision with root package name */
        private final l f21890o;

        /* renamed from: p  reason: collision with root package name */
        private final int f21891p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f21892q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f21893r;

        /* renamed from: s  reason: collision with root package name */
        private final String f21894s;

        /* renamed from: t  reason: collision with root package name */
        private final String f21895t;

        /* renamed from: u  reason: collision with root package name */
        private final String f21896u;

        /* renamed from: v  reason: collision with root package name */
        private final String f21897v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.DocumentStepStyle f21898w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.Document.AssetConfig f21899x;

        /* renamed from: y  reason: collision with root package name */
        private final PendingPageTextPosition f21900y;

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
            this.f21876a = sessionToken;
            this.f21877b = inquiryId;
            this.f21878c = fromStep;
            this.f21879d = fromComponent;
            this.f21880e = str;
            this.f21881f = str2;
            this.f21882g = str3;
            this.f21883h = str4;
            this.f21884i = str5;
            this.f21885j = str6;
            this.f21886k = fieldKeyDocument;
            this.f21887l = kind;
            this.f21888m = str7;
            this.f21889n = startPage;
            this.f21890o = pages;
            this.f21891p = i10;
            this.f21892q = z10;
            this.f21893r = z11;
            this.f21894s = str8;
            this.f21895t = str9;
            this.f21896u = str10;
            this.f21897v = str11;
            this.f21898w = documentStepStyle;
            this.f21899x = assetConfig;
            this.f21900y = pendingPageTextVerticalPosition;
        }

        public final NextStep.Document.AssetConfig a() {
            return this.f21899x;
        }

        public final boolean b() {
            return this.f21892q;
        }

        public final boolean c() {
            return this.f21893r;
        }

        public final String d() {
            return this.f21882g;
        }

        public final int e() {
            return this.f21891p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f21876a, bVar.f21876a) && Intrinsics.areEqual(this.f21877b, bVar.f21877b) && Intrinsics.areEqual(this.f21878c, bVar.f21878c) && Intrinsics.areEqual(this.f21879d, bVar.f21879d) && Intrinsics.areEqual(this.f21880e, bVar.f21880e) && Intrinsics.areEqual(this.f21881f, bVar.f21881f) && Intrinsics.areEqual(this.f21882g, bVar.f21882g) && Intrinsics.areEqual(this.f21883h, bVar.f21883h) && Intrinsics.areEqual(this.f21884i, bVar.f21884i) && Intrinsics.areEqual(this.f21885j, bVar.f21885j) && Intrinsics.areEqual(this.f21886k, bVar.f21886k) && Intrinsics.areEqual(this.f21887l, bVar.f21887l) && Intrinsics.areEqual(this.f21888m, bVar.f21888m) && Intrinsics.areEqual(this.f21889n, bVar.f21889n) && Intrinsics.areEqual(this.f21890o, bVar.f21890o) && this.f21891p == bVar.f21891p && this.f21892q == bVar.f21892q && this.f21893r == bVar.f21893r && Intrinsics.areEqual(this.f21894s, bVar.f21894s) && Intrinsics.areEqual(this.f21895t, bVar.f21895t) && Intrinsics.areEqual(this.f21896u, bVar.f21896u) && Intrinsics.areEqual(this.f21897v, bVar.f21897v) && Intrinsics.areEqual(this.f21898w, bVar.f21898w) && Intrinsics.areEqual(this.f21899x, bVar.f21899x) && this.f21900y == bVar.f21900y) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f21888m;
        }

        public final String g() {
            return this.f21886k;
        }

        public final String h() {
            return this.f21879d;
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
            int hashCode12 = ((((((this.f21876a.hashCode() * 31) + this.f21877b.hashCode()) * 31) + this.f21878c.hashCode()) * 31) + this.f21879d.hashCode()) * 31;
            String str = this.f21880e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode12 + hashCode) * 31;
            String str2 = this.f21881f;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f21882g;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f21883h;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f21884i;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f21885j;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int hashCode13 = (((((i15 + hashCode6) * 31) + this.f21886k.hashCode()) * 31) + this.f21887l.hashCode()) * 31;
            String str7 = this.f21888m;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int hashCode14 = (((((((((((hashCode13 + hashCode7) * 31) + this.f21889n.hashCode()) * 31) + this.f21890o.hashCode()) * 31) + Integer.hashCode(this.f21891p)) * 31) + Boolean.hashCode(this.f21892q)) * 31) + Boolean.hashCode(this.f21893r)) * 31;
            String str8 = this.f21894s;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i16 = (hashCode14 + hashCode8) * 31;
            String str9 = this.f21895t;
            if (str9 == null) {
                hashCode9 = 0;
            } else {
                hashCode9 = str9.hashCode();
            }
            int i17 = (i16 + hashCode9) * 31;
            String str10 = this.f21896u;
            if (str10 == null) {
                hashCode10 = 0;
            } else {
                hashCode10 = str10.hashCode();
            }
            int i18 = (i17 + hashCode10) * 31;
            String str11 = this.f21897v;
            if (str11 == null) {
                hashCode11 = 0;
            } else {
                hashCode11 = str11.hashCode();
            }
            int i19 = (i18 + hashCode11) * 31;
            StepStyles.DocumentStepStyle documentStepStyle = this.f21898w;
            if (documentStepStyle != null) {
                i10 = documentStepStyle.hashCode();
            }
            return ((((i19 + i10) * 31) + this.f21899x.hashCode()) * 31) + this.f21900y.hashCode();
        }

        public final String i() {
            return this.f21878c;
        }

        public final String j() {
            return this.f21877b;
        }

        public final String k() {
            return this.f21887l;
        }

        public final l l() {
            return this.f21890o;
        }

        public final String m() {
            return this.f21885j;
        }

        public final PendingPageTextPosition n() {
            return this.f21900y;
        }

        public final String o() {
            return this.f21884i;
        }

        public final String p() {
            return this.f21897v;
        }

        public final String q() {
            return this.f21896u;
        }

        public final String r() {
            return this.f21895t;
        }

        public final String s() {
            return this.f21894s;
        }

        public final String t() {
            return this.f21881f;
        }

        public String toString() {
            String str = this.f21876a;
            String str2 = this.f21877b;
            String str3 = this.f21878c;
            String str4 = this.f21879d;
            String str5 = this.f21880e;
            String str6 = this.f21881f;
            String str7 = this.f21882g;
            String str8 = this.f21883h;
            String str9 = this.f21884i;
            String str10 = this.f21885j;
            String str11 = this.f21886k;
            String str12 = this.f21887l;
            String str13 = this.f21888m;
            e eVar = this.f21889n;
            l lVar = this.f21890o;
            int i10 = this.f21891p;
            boolean z10 = this.f21892q;
            boolean z11 = this.f21893r;
            String str14 = this.f21894s;
            String str15 = this.f21895t;
            String str16 = this.f21896u;
            String str17 = this.f21897v;
            StepStyles.DocumentStepStyle documentStepStyle = this.f21898w;
            NextStep.Document.AssetConfig assetConfig = this.f21899x;
            PendingPageTextPosition pendingPageTextPosition = this.f21900y;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromStep=" + str3 + ", fromComponent=" + str4 + ", promptTitle=" + str5 + ", promptDescription=" + str6 + ", disclaimer=" + str7 + ", submitButtonText=" + str8 + ", pendingTitle=" + str9 + ", pendingDescription=" + str10 + ", fieldKeyDocument=" + str11 + ", kind=" + str12 + ", documentId=" + str13 + ", startPage=" + eVar + ", pages=" + lVar + ", documentFileLimit=" + i10 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", permissionsTitle=" + str14 + ", permissionsRationale=" + str15 + ", permissionsModalPositiveButton=" + str16 + ", permissionsModalNegativeButton=" + str17 + ", styles=" + documentStepStyle + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
        }

        public final String u() {
            return this.f21880e;
        }

        public final String v() {
            return this.f21876a;
        }

        public final e w() {
            return this.f21889n;
        }

        public final StepStyles.DocumentStepStyle x() {
            return this.f21898w;
        }

        public final String y() {
            return this.f21883h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f21901a = new a();

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
            public static final b f21902a = new b();

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

        /* renamed from: eo.r2$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0298c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f21903a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0298c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f21903a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f21903a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0298c) && Intrinsics.areEqual(this.f21903a, ((C0298c) obj).f21903a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f21903a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f21903a;
                return "Errored(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f21904a = new d();

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
            private final String f21905a;

            /* renamed from: b  reason: collision with root package name */
            private final String f21906b;

            /* renamed from: c  reason: collision with root package name */
            private final zp.a f21907c;

            /* renamed from: d  reason: collision with root package name */
            private final Function0 f21908d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f21909e;

            /* renamed from: f  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f21910f;

            /* renamed from: g  reason: collision with root package name */
            private final NextStep.Document.AssetConfig.PendingPage f21911g;

            /* renamed from: h  reason: collision with root package name */
            private final PendingPageTextPosition f21912h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, zp.a navigationState, Function0 onBack, Function0 onCancel, StepStyles.DocumentStepStyle documentStepStyle, NextStep.Document.AssetConfig.PendingPage pendingPage, PendingPageTextPosition pendingPageTextVerticalPosition) {
                super(null);
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                this.f21905a = str;
                this.f21906b = str2;
                this.f21907c = navigationState;
                this.f21908d = onBack;
                this.f21909e = onCancel;
                this.f21910f = documentStepStyle;
                this.f21911g = pendingPage;
                this.f21912h = pendingPageTextVerticalPosition;
            }

            public final NextStep.Document.AssetConfig.PendingPage a() {
                return this.f21911g;
            }

            public final zp.a b() {
                return this.f21907c;
            }

            public final Function0 c() {
                return this.f21908d;
            }

            public final Function0 d() {
                return this.f21909e;
            }

            public final PendingPageTextPosition e() {
                return this.f21912h;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f21905a, aVar.f21905a) && Intrinsics.areEqual(this.f21906b, aVar.f21906b) && Intrinsics.areEqual(this.f21907c, aVar.f21907c) && Intrinsics.areEqual(this.f21908d, aVar.f21908d) && Intrinsics.areEqual(this.f21909e, aVar.f21909e) && Intrinsics.areEqual(this.f21910f, aVar.f21910f) && Intrinsics.areEqual(this.f21911g, aVar.f21911g) && this.f21912h == aVar.f21912h) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f21906b;
            }

            public final StepStyles.DocumentStepStyle g() {
                return this.f21910f;
            }

            public final String h() {
                return this.f21905a;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                String str = this.f21905a;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = hashCode * 31;
                String str2 = this.f21906b;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int hashCode4 = (((((((i11 + hashCode2) * 31) + this.f21907c.hashCode()) * 31) + this.f21908d.hashCode()) * 31) + this.f21909e.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f21910f;
                if (documentStepStyle == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = documentStepStyle.hashCode();
                }
                int i12 = (hashCode4 + hashCode3) * 31;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f21911g;
                if (pendingPage != null) {
                    i10 = pendingPage.hashCode();
                }
                return ((i12 + i10) * 31) + this.f21912h.hashCode();
            }

            public String toString() {
                String str = this.f21905a;
                String str2 = this.f21906b;
                zp.a aVar = this.f21907c;
                Function0 function0 = this.f21908d;
                Function0 function02 = this.f21909e;
                StepStyles.DocumentStepStyle documentStepStyle = this.f21910f;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f21911g;
                PendingPageTextPosition pendingPageTextPosition = this.f21912h;
                return "LoadingAnimation(title=" + str + ", prompt=" + str2 + ", navigationState=" + aVar + ", onBack=" + function0 + ", onCancel=" + function02 + ", styles=" + documentStepStyle + ", assetConfig=" + pendingPage + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final v4.h f21913a;

            /* renamed from: b  reason: collision with root package name */
            private final String f21914b;

            /* renamed from: c  reason: collision with root package name */
            private final String f21915c;

            /* renamed from: d  reason: collision with root package name */
            private final String f21916d;

            /* renamed from: e  reason: collision with root package name */
            private final String f21917e;

            /* renamed from: f  reason: collision with root package name */
            private final List f21918f;

            /* renamed from: g  reason: collision with root package name */
            private final zp.a f21919g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f21920h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f21921i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f21922j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f21923k;

            /* renamed from: l  reason: collision with root package name */
            private final Function1 f21924l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f21925m;

            /* renamed from: n  reason: collision with root package name */
            private final Function0 f21926n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f21927o;

            /* renamed from: p  reason: collision with root package name */
            private final boolean f21928p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f21929q;

            /* renamed from: r  reason: collision with root package name */
            private final boolean f21930r;

            /* renamed from: s  reason: collision with root package name */
            private final String f21931s;

            /* renamed from: t  reason: collision with root package name */
            private final Function0 f21932t;

            /* renamed from: u  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f21933u;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(v4.h imageLoader, String str, String str2, String str3, String str4, List documents, zp.a navigationState, Function0 openSelectFile, Function0 selectFromPhotoLibrary, Function0 openCamera, Function0 openUploadOptions, Function1 onRemove, Function0 onSubmit, Function0 onCancel, Function0 onBack, boolean z10, boolean z11, boolean z12, String str5, Function0 onErrorDismissed, StepStyles.DocumentStepStyle documentStepStyle) {
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
                this.f21913a = imageLoader;
                this.f21914b = str;
                this.f21915c = str2;
                this.f21916d = str3;
                this.f21917e = str4;
                this.f21918f = documents;
                this.f21919g = navigationState;
                this.f21920h = openSelectFile;
                this.f21921i = selectFromPhotoLibrary;
                this.f21922j = openCamera;
                this.f21923k = openUploadOptions;
                this.f21924l = onRemove;
                this.f21925m = onSubmit;
                this.f21926n = onCancel;
                this.f21927o = onBack;
                this.f21928p = z10;
                this.f21929q = z11;
                this.f21930r = z12;
                this.f21931s = str5;
                this.f21932t = onErrorDismissed;
                this.f21933u = documentStepStyle;
            }

            public final boolean a() {
                return this.f21929q;
            }

            public final boolean b() {
                return this.f21928p;
            }

            public final String c() {
                return this.f21916d;
            }

            public final List d() {
                return this.f21918f;
            }

            public final String e() {
                return this.f21931s;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f21913a, bVar.f21913a) && Intrinsics.areEqual(this.f21914b, bVar.f21914b) && Intrinsics.areEqual(this.f21915c, bVar.f21915c) && Intrinsics.areEqual(this.f21916d, bVar.f21916d) && Intrinsics.areEqual(this.f21917e, bVar.f21917e) && Intrinsics.areEqual(this.f21918f, bVar.f21918f) && Intrinsics.areEqual(this.f21919g, bVar.f21919g) && Intrinsics.areEqual(this.f21920h, bVar.f21920h) && Intrinsics.areEqual(this.f21921i, bVar.f21921i) && Intrinsics.areEqual(this.f21922j, bVar.f21922j) && Intrinsics.areEqual(this.f21923k, bVar.f21923k) && Intrinsics.areEqual(this.f21924l, bVar.f21924l) && Intrinsics.areEqual(this.f21925m, bVar.f21925m) && Intrinsics.areEqual(this.f21926n, bVar.f21926n) && Intrinsics.areEqual(this.f21927o, bVar.f21927o) && this.f21928p == bVar.f21928p && this.f21929q == bVar.f21929q && this.f21930r == bVar.f21930r && Intrinsics.areEqual(this.f21931s, bVar.f21931s) && Intrinsics.areEqual(this.f21932t, bVar.f21932t) && Intrinsics.areEqual(this.f21933u, bVar.f21933u)) {
                    return true;
                }
                return false;
            }

            public final v4.h f() {
                return this.f21913a;
            }

            public final zp.a g() {
                return this.f21919g;
            }

            public final Function0 h() {
                return this.f21927o;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                int hashCode4;
                int hashCode5;
                int hashCode6 = this.f21913a.hashCode() * 31;
                String str = this.f21914b;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode6 + hashCode) * 31;
                String str2 = this.f21915c;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f21916d;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f21917e;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int hashCode7 = (((((((((((((((((((((((((((i13 + hashCode4) * 31) + this.f21918f.hashCode()) * 31) + this.f21919g.hashCode()) * 31) + this.f21920h.hashCode()) * 31) + this.f21921i.hashCode()) * 31) + this.f21922j.hashCode()) * 31) + this.f21923k.hashCode()) * 31) + this.f21924l.hashCode()) * 31) + this.f21925m.hashCode()) * 31) + this.f21926n.hashCode()) * 31) + this.f21927o.hashCode()) * 31) + Boolean.hashCode(this.f21928p)) * 31) + Boolean.hashCode(this.f21929q)) * 31) + Boolean.hashCode(this.f21930r)) * 31;
                String str5 = this.f21931s;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int hashCode8 = (((hashCode7 + hashCode5) * 31) + this.f21932t.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f21933u;
                if (documentStepStyle != null) {
                    i10 = documentStepStyle.hashCode();
                }
                return hashCode8 + i10;
            }

            public final Function0 i() {
                return this.f21926n;
            }

            public final Function0 j() {
                return this.f21932t;
            }

            public final Function1 k() {
                return this.f21924l;
            }

            public final Function0 l() {
                return this.f21925m;
            }

            public final Function0 m() {
                return this.f21923k;
            }

            public final String n() {
                return this.f21915c;
            }

            public final StepStyles.DocumentStepStyle o() {
                return this.f21933u;
            }

            public final boolean p() {
                return this.f21930r;
            }

            public final String q() {
                return this.f21917e;
            }

            public final String r() {
                return this.f21914b;
            }

            public String toString() {
                v4.h hVar = this.f21913a;
                String str = this.f21914b;
                String str2 = this.f21915c;
                String str3 = this.f21916d;
                String str4 = this.f21917e;
                List list = this.f21918f;
                zp.a aVar = this.f21919g;
                Function0 function0 = this.f21920h;
                Function0 function02 = this.f21921i;
                Function0 function03 = this.f21922j;
                Function0 function04 = this.f21923k;
                Function1 function1 = this.f21924l;
                Function0 function05 = this.f21925m;
                Function0 function06 = this.f21926n;
                Function0 function07 = this.f21927o;
                boolean z10 = this.f21928p;
                boolean z11 = this.f21929q;
                boolean z12 = this.f21930r;
                String str5 = this.f21931s;
                Function0 function08 = this.f21932t;
                StepStyles.DocumentStepStyle documentStepStyle = this.f21933u;
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
            public static final a f21934d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0299a();

            /* renamed from: eo.r2$e$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0299a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f21934d;
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
            private final String f21935d;

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
                this.f21935d = documentId;
            }

            public final String a() {
                return this.f21935d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof b) && Intrinsics.areEqual(this.f21935d, ((b) obj).f21935d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f21935d.hashCode();
            }

            public String toString() {
                String str = this.f21935d;
                return "Review(documentId=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f21935d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        private final a f21936d;

        /* renamed from: e  reason: collision with root package name */
        private final InterfaceC0300f f21937e;

        /* renamed from: i  reason: collision with root package name */
        private final String f21938i;

        /* renamed from: o  reason: collision with root package name */
        private final List f21939o;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f21940d = new a("None", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f21941e = new a("CheckCameraPermissions", 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f21942i = new a("CameraRunning", 2);

            /* renamed from: o  reason: collision with root package name */
            public static final a f21943o = new a("SelectFileFromDocuments", 3);

            /* renamed from: p  reason: collision with root package name */
            public static final a f21944p = new a("SelectImageFromPhotoLibrary", 4);

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ a[] f21945q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f21946r;

            static {
                a[] a10 = a();
                f21945q = a10;
                f21946r = xr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f21940d, f21941e, f21942i, f21943o, f21944p};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f21945q.clone();
            }
        }

        /* renamed from: eo.r2$f$f  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public interface InterfaceC0300f extends Parcelable {

            /* renamed from: eo.r2$f$f$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements InterfaceC0300f {

                /* renamed from: d  reason: collision with root package name */
                public static final a f21971d = new a();
                @NotNull
                public static final Parcelable.Creator<a> CREATOR = new C0301a();

                /* renamed from: eo.r2$f$f$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0301a implements Parcelable.Creator {
                    @Override // android.os.Parcelable.Creator
                    /* renamed from: a */
                    public final a createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        parcel.readInt();
                        return a.f21971d;
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

            /* renamed from: eo.r2$f$f$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b implements InterfaceC0300f {
                @NotNull
                public static final Parcelable.Creator<b> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f21972d;

                /* renamed from: eo.r2$f$f$b$a */
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
                    this.f21972d = documentId;
                }

                public final String a() {
                    return this.f21972d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof b) && Intrinsics.areEqual(this.f21972d, ((b) obj).f21972d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f21972d.hashCode();
                }

                public String toString() {
                    String str = this.f21972d;
                    return "DeleteFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f21972d);
                }
            }

            /* renamed from: eo.r2$f$f$c */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class c implements InterfaceC0300f {
                @NotNull
                public static final Parcelable.Creator<c> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f21973d;

                /* renamed from: eo.r2$f$f$c$a */
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
                    this.f21973d = documentId;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof c) && Intrinsics.areEqual(this.f21973d, ((c) obj).f21973d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f21973d.hashCode();
                }

                public String toString() {
                    String str = this.f21973d;
                    return "ReadyToSubmit(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f21973d);
                }
            }

            /* renamed from: eo.r2$f$f$d */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class d implements InterfaceC0300f {
                @NotNull
                public static final Parcelable.Creator<d> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f21974d;

                /* renamed from: eo.r2$f$f$d$a */
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
                    this.f21974d = documentId;
                }

                public final String a() {
                    return this.f21974d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof d) && Intrinsics.areEqual(this.f21974d, ((d) obj).f21974d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f21974d.hashCode();
                }

                public String toString() {
                    String str = this.f21974d;
                    return "UploadFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f21974d);
                }
            }
        }

        public /* synthetic */ f(a aVar, InterfaceC0300f interfaceC0300f, String str, List list, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, interfaceC0300f, str, list);
        }

        public static /* synthetic */ f d(f fVar, InterfaceC0300f interfaceC0300f, String str, List list, eo.d dVar, int i10, Object obj) {
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
                return fVar.c(interfaceC0300f, str, list, dVar);
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
            throw new qr.p();
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
            throw new qr.p();
        }

        public final f c(InterfaceC0300f uploadState, String str, List list, eo.d dVar) {
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
                throw new qr.p();
            }
        }

        public a e() {
            return this.f21936d;
        }

        public abstract String f();

        public List h() {
            return this.f21939o;
        }

        public abstract InterfaceC0300f i();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends f {
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f21967p;

            /* renamed from: q  reason: collision with root package name */
            private final String f21968q;

            /* renamed from: r  reason: collision with root package name */
            private final InterfaceC0300f f21969r;

            /* renamed from: s  reason: collision with root package name */
            private final String f21970s;

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
                    return new e(arrayList, parcel.readString(), (InterfaceC0300f) parcel.readParcelable(e.class.getClassLoader()), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final e[] newArray(int i10) {
                    return new e[i10];
                }
            }

            public /* synthetic */ e(List list, String str, InterfaceC0300f interfaceC0300f, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? InterfaceC0300f.a.f21971d : interfaceC0300f, (i10 & 8) != 0 ? null : str2);
            }

            public static /* synthetic */ e l(e eVar, List list, String str, InterfaceC0300f interfaceC0300f, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = eVar.f21967p;
                }
                if ((i10 & 2) != 0) {
                    str = eVar.f21968q;
                }
                if ((i10 & 4) != 0) {
                    interfaceC0300f = eVar.f21969r;
                }
                if ((i10 & 8) != 0) {
                    str2 = eVar.f21970s;
                }
                return eVar.j(list, str, interfaceC0300f, str2);
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
                if (Intrinsics.areEqual(this.f21967p, eVar.f21967p) && Intrinsics.areEqual(this.f21968q, eVar.f21968q) && Intrinsics.areEqual(this.f21969r, eVar.f21969r) && Intrinsics.areEqual(this.f21970s, eVar.f21970s)) {
                    return true;
                }
                return false;
            }

            @Override // eo.r2.f
            public String f() {
                return this.f21968q;
            }

            @Override // eo.r2.f
            public List h() {
                return this.f21967p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((this.f21967p.hashCode() * 31) + this.f21968q.hashCode()) * 31) + this.f21969r.hashCode()) * 31;
                String str = this.f21970s;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            @Override // eo.r2.f
            public InterfaceC0300f i() {
                return this.f21969r;
            }

            public final e j(List documents, String documentId, InterfaceC0300f uploadState, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new e(documents, documentId, uploadState, str);
            }

            public String toString() {
                List list = this.f21967p;
                String str = this.f21968q;
                InterfaceC0300f interfaceC0300f = this.f21969r;
                String str2 = this.f21970s;
                return "UploadDocument(documents=" + list + ", documentId=" + str + ", uploadState=" + interfaceC0300f + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f21967p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f21968q);
                dest.writeParcelable(this.f21969r, i10);
                dest.writeString(this.f21970s);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(List documents, String documentId, InterfaceC0300f uploadState, String str) {
                super(a.f21940d, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f21967p = documents;
                this.f21968q = documentId;
                this.f21969r = uploadState;
                this.f21970s = str;
            }
        }

        private f(a aVar, InterfaceC0300f interfaceC0300f, String str, List list) {
            this.f21936d = aVar;
            this.f21937e = interfaceC0300f;
            this.f21938i = str;
            this.f21939o = list;
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends f {
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f21947p;

            /* renamed from: q  reason: collision with root package name */
            private final String f21948q;

            /* renamed from: r  reason: collision with root package name */
            private final a f21949r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0300f f21950s;

            /* renamed from: t  reason: collision with root package name */
            private final eo.d f21951t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f21952u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f21953v;

            /* renamed from: w  reason: collision with root package name */
            private final String f21954w;

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
                    InterfaceC0300f interfaceC0300f = (InterfaceC0300f) parcel.readParcelable(b.class.getClassLoader());
                    eo.d dVar = (eo.d) parcel.readParcelable(b.class.getClassLoader());
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
                    return new b(arrayList, readString, valueOf, interfaceC0300f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final b[] newArray(int i10) {
                    return new b[i10];
                }
            }

            public /* synthetic */ b(List list, String str, a aVar, InterfaceC0300f interfaceC0300f, eo.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f21940d : aVar, (i10 & 8) != 0 ? InterfaceC0300f.a.f21971d : interfaceC0300f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ b l(b bVar, List list, String str, a aVar, InterfaceC0300f interfaceC0300f, eo.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = bVar.f21947p;
                }
                if ((i10 & 2) != 0) {
                    str = bVar.f21948q;
                }
                if ((i10 & 4) != 0) {
                    aVar = bVar.f21949r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0300f = bVar.f21950s;
                }
                if ((i10 & 16) != 0) {
                    dVar = bVar.f21951t;
                }
                if ((i10 & 32) != 0) {
                    z10 = bVar.f21952u;
                }
                if ((i10 & 64) != 0) {
                    z11 = bVar.f21953v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = bVar.f21954w;
                }
                boolean z12 = z11;
                String str3 = str2;
                eo.d dVar2 = dVar;
                boolean z13 = z10;
                return bVar.j(list, str, aVar, interfaceC0300f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // eo.r2.f
            public a e() {
                return this.f21949r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f21947p, bVar.f21947p) && Intrinsics.areEqual(this.f21948q, bVar.f21948q) && this.f21949r == bVar.f21949r && Intrinsics.areEqual(this.f21950s, bVar.f21950s) && Intrinsics.areEqual(this.f21951t, bVar.f21951t) && this.f21952u == bVar.f21952u && this.f21953v == bVar.f21953v && Intrinsics.areEqual(this.f21954w, bVar.f21954w)) {
                    return true;
                }
                return false;
            }

            @Override // eo.r2.f
            public String f() {
                return this.f21948q;
            }

            @Override // eo.r2.f
            public List h() {
                return this.f21947p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((((this.f21947p.hashCode() * 31) + this.f21948q.hashCode()) * 31) + this.f21949r.hashCode()) * 31) + this.f21950s.hashCode()) * 31;
                eo.d dVar = this.f21951t;
                int i10 = 0;
                if (dVar == null) {
                    hashCode = 0;
                } else {
                    hashCode = dVar.hashCode();
                }
                int hashCode3 = (((((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f21952u)) * 31) + Boolean.hashCode(this.f21953v)) * 31;
                String str = this.f21954w;
                if (str != null) {
                    i10 = str.hashCode();
                }
                return hashCode3 + i10;
            }

            @Override // eo.r2.f
            public InterfaceC0300f i() {
                return this.f21950s;
            }

            public final b j(List documents, String documentId, a captureState, InterfaceC0300f uploadState, eo.d dVar, boolean z10, boolean z11, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new b(documents, documentId, captureState, uploadState, dVar, z10, z11, str);
            }

            public final eo.d o() {
                return this.f21951t;
            }

            public final String p() {
                return this.f21954w;
            }

            public final boolean q() {
                return this.f21952u;
            }

            public final boolean r() {
                return this.f21953v;
            }

            public String toString() {
                List list = this.f21947p;
                String str = this.f21948q;
                a aVar = this.f21949r;
                InterfaceC0300f interfaceC0300f = this.f21950s;
                eo.d dVar = this.f21951t;
                boolean z10 = this.f21952u;
                boolean z11 = this.f21953v;
                String str2 = this.f21954w;
                return "ReviewCaptures(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0300f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f21947p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f21948q);
                dest.writeString(this.f21949r.name());
                dest.writeParcelable(this.f21950s, i10);
                dest.writeParcelable(this.f21951t, i10);
                dest.writeInt(this.f21952u ? 1 : 0);
                dest.writeInt(this.f21953v ? 1 : 0);
                dest.writeString(this.f21954w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(List documents, String documentId, a captureState, InterfaceC0300f uploadState, eo.d dVar, boolean z10, boolean z11, String str) {
                super(captureState, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f21947p = documents;
                this.f21948q = documentId;
                this.f21949r = captureState;
                this.f21950s = uploadState;
                this.f21951t = dVar;
                this.f21952u = z10;
                this.f21953v = z11;
                this.f21954w = str;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends f {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f21955p;

            /* renamed from: q  reason: collision with root package name */
            private final String f21956q;

            /* renamed from: r  reason: collision with root package name */
            private final a f21957r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0300f f21958s;

            /* renamed from: t  reason: collision with root package name */
            private final eo.d f21959t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f21960u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f21961v;

            /* renamed from: w  reason: collision with root package name */
            private final String f21962w;

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
                    InterfaceC0300f interfaceC0300f = (InterfaceC0300f) parcel.readParcelable(c.class.getClassLoader());
                    eo.d dVar = (eo.d) parcel.readParcelable(c.class.getClassLoader());
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
                    return new c(arrayList, readString, valueOf, interfaceC0300f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public /* synthetic */ c(List list, String str, a aVar, InterfaceC0300f interfaceC0300f, eo.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f21940d : aVar, (i10 & 8) != 0 ? InterfaceC0300f.a.f21971d : interfaceC0300f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ c l(c cVar, List list, String str, a aVar, InterfaceC0300f interfaceC0300f, eo.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = cVar.f21955p;
                }
                if ((i10 & 2) != 0) {
                    str = cVar.f21956q;
                }
                if ((i10 & 4) != 0) {
                    aVar = cVar.f21957r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0300f = cVar.f21958s;
                }
                if ((i10 & 16) != 0) {
                    dVar = cVar.f21959t;
                }
                if ((i10 & 32) != 0) {
                    z10 = cVar.f21960u;
                }
                if ((i10 & 64) != 0) {
                    z11 = cVar.f21961v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = cVar.f21962w;
                }
                boolean z12 = z11;
                String str3 = str2;
                eo.d dVar2 = dVar;
                boolean z13 = z10;
                return cVar.j(list, str, aVar, interfaceC0300f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // eo.r2.f
            public a e() {
                return this.f21957r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof c)) {
                    return false;
                }
                c cVar = (c) obj;
                if (Intrinsics.areEqual(this.f21955p, cVar.f21955p) && Intrinsics.areEqual(this.f21956q, cVar.f21956q) && this.f21957r == cVar.f21957r && Intrinsics.areEqual(this.f21958s, cVar.f21958s) && Intrinsics.areEqual(this.f21959t, cVar.f21959t) && this.f21960u == cVar.f21960u && this.f21961v == cVar.f21961v && Intrinsics.areEqual(this.f21962w, cVar.f21962w)) {
                    return true;
                }
                return false;
            }

            @Override // eo.r2.f
            public String f() {
                return this.f21956q;
            }

            @Override // eo.r2.f
            public List h() {
                return this.f21955p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3 = this.f21955p.hashCode() * 31;
                String str = this.f21956q;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f21957r.hashCode()) * 31) + this.f21958s.hashCode()) * 31;
                eo.d dVar = this.f21959t;
                if (dVar == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = dVar.hashCode();
                }
                int hashCode5 = (((((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f21960u)) * 31) + Boolean.hashCode(this.f21961v)) * 31;
                String str2 = this.f21962w;
                if (str2 != null) {
                    i10 = str2.hashCode();
                }
                return hashCode5 + i10;
            }

            @Override // eo.r2.f
            public InterfaceC0300f i() {
                return this.f21958s;
            }

            public final c j(List documents, String str, a captureState, InterfaceC0300f uploadState, eo.d dVar, boolean z10, boolean z11, String str2) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new c(documents, str, captureState, uploadState, dVar, z10, z11, str2);
            }

            public final String o() {
                return this.f21962w;
            }

            public final boolean p() {
                return this.f21960u;
            }

            public final boolean q() {
                return this.f21961v;
            }

            public String toString() {
                List list = this.f21955p;
                String str = this.f21956q;
                a aVar = this.f21957r;
                InterfaceC0300f interfaceC0300f = this.f21958s;
                eo.d dVar = this.f21959t;
                boolean z10 = this.f21960u;
                boolean z11 = this.f21961v;
                String str2 = this.f21962w;
                return "ReviewCapturesWithoutDocumentId(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0300f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f21955p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f21956q);
                dest.writeString(this.f21957r.name());
                dest.writeParcelable(this.f21958s, i10);
                dest.writeParcelable(this.f21959t, i10);
                dest.writeInt(this.f21960u ? 1 : 0);
                dest.writeInt(this.f21961v ? 1 : 0);
                dest.writeString(this.f21962w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(List documents, String str, a captureState, InterfaceC0300f uploadState, eo.d dVar, boolean z10, boolean z11, String str2) {
                super(captureState, uploadState, str, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f21955p = documents;
                this.f21956q = str;
                this.f21957r = captureState;
                this.f21958s = uploadState;
                this.f21959t = dVar;
                this.f21960u = z10;
                this.f21961v = z11;
                this.f21962w = str2;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends f {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final a f21963p;

            /* renamed from: q  reason: collision with root package name */
            private final InterfaceC0300f f21964q;

            /* renamed from: r  reason: collision with root package name */
            private final String f21965r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f21966s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    boolean z10;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    a valueOf = a.valueOf(parcel.readString());
                    InterfaceC0300f interfaceC0300f = (InterfaceC0300f) parcel.readParcelable(d.class.getClassLoader());
                    String readString = parcel.readString();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    return new d(valueOf, interfaceC0300f, readString, z10);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final d[] newArray(int i10) {
                    return new d[i10];
                }
            }

            public /* synthetic */ d(a aVar, InterfaceC0300f interfaceC0300f, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this((i10 & 1) != 0 ? a.f21940d : aVar, (i10 & 2) != 0 ? InterfaceC0300f.a.f21971d : interfaceC0300f, str, (i10 & 8) != 0 ? false : z10);
            }

            public static /* synthetic */ d l(d dVar, a aVar, InterfaceC0300f interfaceC0300f, String str, boolean z10, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    aVar = dVar.f21963p;
                }
                if ((i10 & 2) != 0) {
                    interfaceC0300f = dVar.f21964q;
                }
                if ((i10 & 4) != 0) {
                    str = dVar.f21965r;
                }
                if ((i10 & 8) != 0) {
                    z10 = dVar.f21966s;
                }
                return dVar.j(aVar, interfaceC0300f, str, z10);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // eo.r2.f
            public a e() {
                return this.f21963p;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof d)) {
                    return false;
                }
                d dVar = (d) obj;
                if (this.f21963p == dVar.f21963p && Intrinsics.areEqual(this.f21964q, dVar.f21964q) && Intrinsics.areEqual(this.f21965r, dVar.f21965r) && this.f21966s == dVar.f21966s) {
                    return true;
                }
                return false;
            }

            @Override // eo.r2.f
            public String f() {
                return this.f21965r;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f21963p.hashCode() * 31) + this.f21964q.hashCode()) * 31;
                String str = this.f21965r;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f21966s);
            }

            @Override // eo.r2.f
            public InterfaceC0300f i() {
                return this.f21964q;
            }

            public final d j(a captureState, InterfaceC0300f uploadState, String str, boolean z10) {
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new d(captureState, uploadState, str, z10);
            }

            public final boolean o() {
                return this.f21966s;
            }

            public String toString() {
                a aVar = this.f21963p;
                InterfaceC0300f interfaceC0300f = this.f21964q;
                String str = this.f21965r;
                boolean z10 = this.f21966s;
                return "Start(captureState=" + aVar + ", uploadState=" + interfaceC0300f + ", documentId=" + str + ", shouldShowUploadOptionsDialog=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f21963p.name());
                dest.writeParcelable(this.f21964q, i10);
                dest.writeString(this.f21965r);
                dest.writeInt(this.f21966s ? 1 : 0);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(a captureState, InterfaceC0300f uploadState, String str, boolean z10) {
                super(captureState, uploadState, str, CollectionsKt.l(), null);
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f21963p = captureState;
                this.f21964q = uploadState;
                this.f21965r = str;
                this.f21966s = z10;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f21975a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f21976b;

        static {
            int[] iArr = new int[hp.g1.values().length];
            try {
                iArr[hp.g1.f26306d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[hp.g1.f26307e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[hp.g1.f26308i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f21975a = iArr;
            int[] iArr2 = new int[f.a.values().length];
            try {
                iArr2[f.a.f21940d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[f.a.f21941e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[f.a.f21942i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[f.a.f21943o.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[f.a.f21944p.ordinal()] = 5;
            } catch (NoSuchFieldError unused8) {
            }
            f21976b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21977d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f21978e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f21979i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f21980o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, r2 r2Var, String str, Continuation continuation) {
            super(2, continuation);
            this.f21978e = aVar;
            this.f21979i = r2Var;
            this.f21980o = str;
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
                return Unit.f32008a;
            }
            cVar.e(new f.b(cVar2.h(), str, null, new f.InterfaceC0300f.d(str), null, false, false, cVar2.o(), 116, null));
            return Unit.f32008a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f21978e, this.f21979i, this.f21980o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            bn.r d10;
            wr.b.f();
            if (this.f21977d == 0) {
                kotlin.c.b(obj);
                bn.h c10 = this.f21978e.c();
                r2 r2Var = this.f21979i;
                final String str = this.f21980o;
                d10 = bn.z.d(r2Var, null, new Function1() { // from class: eo.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.h.k(str, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f32008a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21981d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f21982e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f21983i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f.InterfaceC0300f f21984o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, r2 r2Var, f.InterfaceC0300f interfaceC0300f, Continuation continuation) {
            super(2, continuation);
            this.f21982e = aVar;
            this.f21983i = r2Var;
            this.f21984o = interfaceC0300f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(f.InterfaceC0300f interfaceC0300f, r.c cVar) {
            cVar.e(f.d((f) cVar.c(), new f.InterfaceC0300f.c(((f.InterfaceC0300f.d) interfaceC0300f).a()), null, null, null, 14, null));
            return Unit.f32008a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f21982e, this.f21983i, this.f21984o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            bn.r d10;
            wr.b.f();
            if (this.f21981d == 0) {
                kotlin.c.b(obj);
                bn.h c10 = this.f21982e.c();
                r2 r2Var = this.f21983i;
                final f.InterfaceC0300f interfaceC0300f = this.f21984o;
                d10 = bn.z.d(r2Var, null, new Function1() { // from class: eo.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.i.k(r2.f.InterfaceC0300f.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f32008a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    public r2(v4.h imageLoader, Context applicationContext, hp.c1 permissionRequestWorkflow, eo.c documentCameraWorker, v2.b documentsSelectWorkerFactory, a.C0222a documentCreateWorker, c.a documentLoadWorker, b.a documentFileUploadWorker, a.C0342a documentFileDeleteWorker, d.a documentSubmitWorker, zp.b navigationStateManager, vp.c externalEventLogger) {
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
        this.f21853a = imageLoader;
        this.f21854b = applicationContext;
        this.f21855c = permissionRequestWorkflow;
        this.f21856d = documentCameraWorker;
        this.f21857e = documentsSelectWorkerFactory;
        this.f21858f = documentCreateWorker;
        this.f21859g = documentLoadWorker;
        this.f21860h = documentFileUploadWorker;
        this.f21861i = documentFileDeleteWorker;
        this.f21862j = documentSubmitWorker;
        this.f21863k = navigationStateManager;
        this.f21864l = externalEventLogger;
    }

    private final List A0(u uVar, final k.a aVar) {
        return new b.a().a(uVar.b(), new Function1() { // from class: eo.v0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit C0;
                C0 = r2.C0(r2.this, aVar, (k5) obj);
                return C0;
            }
        }).a(uVar.c(), new Function1() { // from class: eo.w0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit D0;
                D0 = r2.D0(r2.this, aVar, (k5) obj);
                return D0;
            }
        }).a(uVar.d(), new Function1() { // from class: eo.x0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E0;
                E0 = r2.E0(r2.this, aVar, (k5) obj);
                return E0;
            }
        }).a(uVar.a(), new Function1() { // from class: eo.y0
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
        r2Var.L0(aVar, a.b.f21866a);
        return Unit.f32008a;
    }

    private final List B0(b3 b3Var, final k.a aVar) {
        return new b.a().a(b3Var.b(), new Function1() { // from class: eo.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit G0;
                G0 = r2.G0(r2.this, aVar, (k5) obj);
                return G0;
            }
        }).a(b3Var.c(), new Function1() { // from class: eo.b1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit H0;
                H0 = r2.H0(r2.this, aVar, (k5) obj);
                return H0;
            }
        }).a(b3Var.d(), new Function1() { // from class: eo.c1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit I0;
                I0 = r2.I0(r2.this, aVar, (k5) obj);
                return I0;
            }
        }).b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r B1(final r2 r2Var, final f fVar, final c1.a it) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = bn.z.d(r2Var, null, new Function1() { // from class: eo.z0
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
        r2Var.L0(aVar, a.g.f21872a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f21975a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new qr.p();
            }
            action.e(fVar.a(f.a.f21940d));
        } else {
            eo.c cVar = r2Var.f21856d;
            String string = r2Var.f21854b.getString(jp.e.f30792a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f21942i);
            } else {
                a10 = fVar.a(f.a.f21940d);
            }
            action.e(a10);
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f21873a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r D1(r2 r2Var, final f fVar, final c.b it) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0231b) {
            d11 = bn.z.d(r2Var, null, new Function1() { // from class: eo.d1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit E1;
                    E1 = r2.E1(r2.f.this, it, (r.c) obj);
                    return E1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = bn.z.d(r2Var, null, new Function1() { // from class: eo.e1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit F1;
                    F1 = r2.F1(c.b.this, (r.c) obj);
                    return F1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f21875a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(f fVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.b bVar2 = (f.b) fVar;
        action.e(f.b.l(bVar2, ((c.b.C0231b) bVar).a(), null, null, new f.InterfaceC0300f.c(bVar2.f()), null, false, false, null, 214, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.e.f21869a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F1(c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0298c(((c.b.a) bVar).a()));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.g.f21872a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f21872a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f21873a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f21873a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f21875a);
        return Unit.f32008a;
    }

    private final void I1(f.a aVar, final b bVar, final f fVar, k.a aVar2) {
        v2 e10;
        int i10 = g.f21976b[aVar.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4 && i10 != 5) {
                    throw new qr.p();
                }
                if (fVar.e() == f.a.f21943o) {
                    e10 = this.f21857e.c();
                } else {
                    e10 = this.f21857e.e();
                }
                bn.w.l(aVar2, e10, Reflection.typeOf(v2.class), "", new Function1() { // from class: eo.h1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        bn.r N1;
                        N1 = r2.N1(r2.this, bVar, fVar, (v2.c) obj);
                        return N1;
                    }
                });
                return;
            }
            bn.w.l(aVar2, this.f21856d, Reflection.typeOf(eo.c.class), "", new Function1() { // from class: eo.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    bn.r K1;
                    K1 = r2.K1(r2.this, bVar, (c.b) obj);
                    return K1;
                }
            });
        }
    }

    private final void J1(final f.InterfaceC0300f interfaceC0300f, b bVar, f fVar, k.a aVar) {
        if (Intrinsics.areEqual(interfaceC0300f, f.InterfaceC0300f.a.f21971d)) {
            if (fVar.f() == null) {
                bn.w.l(aVar, this.f21858f.a(bVar.v(), bVar.k(), bVar.g(), bVar.e()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.a.class), "", new Function1() { // from class: eo.j1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        bn.r R1;
                        R1 = r2.R1(r2.this, (a.b) obj);
                        return R1;
                    }
                });
                return;
            }
            return;
        }
        final d.b bVar2 = null;
        if (interfaceC0300f instanceof f.InterfaceC0300f.d) {
            ArrayList arrayList = new ArrayList();
            for (Object obj : fVar.h()) {
                if (obj instanceof d.a) {
                    arrayList.add(obj);
                }
            }
            if (arrayList.isEmpty()) {
                aVar.a("upload_complete", new i(aVar, this, interfaceC0300f, null));
                return;
            }
            for (final d.a aVar2 : CollectionsKt.a1(arrayList, 3)) {
                bn.w.l(aVar, this.f21860h.a(bVar.v(), ((f.InterfaceC0300f.d) interfaceC0300f).a(), aVar2), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.b.class), aVar2.c(), new Function1() { // from class: eo.k1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        bn.r U1;
                        U1 = r2.U1(r2.this, interfaceC0300f, aVar2, (b.AbstractC0225b) obj2);
                        return U1;
                    }
                });
            }
        } else if (interfaceC0300f instanceof f.InterfaceC0300f.b) {
            if (fVar instanceof f.b) {
                f.b bVar3 = (f.b) fVar;
                eo.d o10 = bVar3.o();
                if (o10 instanceof d.b) {
                    bVar2 = (d.b) o10;
                }
                if (bVar2 == null) {
                    return;
                }
                bn.w.l(aVar, this.f21861i.a(bVar.v(), bVar3.f(), bVar2), Reflection.typeOf(go.a.class), "", new Function1() { // from class: eo.l1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        bn.r Z1;
                        Z1 = r2.Z1(r2.this, bVar2, interfaceC0300f, (a.b) obj2);
                        return Z1;
                    }
                });
            }
        } else if (!(interfaceC0300f instanceof f.InterfaceC0300f.c)) {
            throw new qr.p();
        }
    }

    private final void K0(b bVar, f fVar) {
        vp.b bVar2;
        if (fVar.e() == f.a.f21942i) {
            bVar2 = b.d.f52816a;
        } else if (fVar instanceof f.d) {
            bVar2 = b.C0700b.f52814a;
        } else if (fVar instanceof f.b) {
            bVar2 = b.c.f52815a;
        } else if (fVar instanceof f.c) {
            bVar2 = b.c.f52815a;
        } else if (fVar instanceof f.e) {
            bVar2 = b.a.f52813a;
        } else {
            throw new qr.p();
        }
        this.f21864l.c(new i.b(bVar.i(), bVar2));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r K1(r2 r2Var, final b bVar, final c.b it) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0292b) {
            d11 = bn.z.d(r2Var, null, new Function1() { // from class: eo.d2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit L1;
                    L1 = r2.L1(c.b.this, bVar, (r.c) obj);
                    return L1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, c.b.a.f21713a)) {
            d10 = bn.z.d(r2Var, null, new Function1() { // from class: eo.e2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M1;
                    M1 = r2.M1((r.c) obj);
                    return M1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    private final void L0(k.a aVar, final a aVar2) {
        bn.r d10;
        if (Intrinsics.areEqual(aVar2, a.b.f21866a)) {
            d10 = bn.z.d(this, null, new Function1() { // from class: eo.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M0;
                    M0 = r2.M0((r.c) obj);
                    return M0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.C0297a.f21865a)) {
            d10 = bn.z.d(this, null, new Function1() { // from class: eo.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = r2.N0((r.c) obj);
                    return N0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.g.f21872a)) {
            d10 = bn.z.d(this, null, new Function1() { // from class: eo.s1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = r2.O0((r.c) obj);
                    return O0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.h.f21873a)) {
            d10 = bn.z.d(this, null, new Function1() { // from class: eo.t1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P0;
                    P0 = r2.P0((r.c) obj);
                    return P0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.j.f21875a)) {
            d10 = bn.z.d(this, null, new Function1() { // from class: eo.u1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q0;
                    Q0 = r2.Q0((r.c) obj);
                    return Q0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.e.f21869a)) {
            d10 = bn.z.d(this, null, new Function1() { // from class: eo.v1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R0;
                    R0 = r2.R0((r.c) obj);
                    return R0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.c.f21867a)) {
            d10 = bn.z.d(this, null, new Function1() { // from class: eo.w1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S0;
                    S0 = r2.S0((r.c) obj);
                    return S0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.f) {
            d10 = bn.z.d(this, null, new Function1() { // from class: eo.x1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = r2.T0(r2.a.this, (r.c) obj);
                    return T0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.d.f21868a)) {
            d10 = bn.z.d(this, null, new Function1() { // from class: eo.y1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = r2.U0((r.c) obj);
                    return U0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.i) {
            d10 = bn.z.d(this, null, new Function1() { // from class: eo.z1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V0;
                    V0 = r2.V0(r2.a.this, (r.c) obj);
                    return V0;
                }
            }, 1, null);
        } else {
            throw new qr.p();
        }
        aVar.c().d(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(c.b bVar, b bVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.M0(((f) action.c()).h(), new d.a(((c.b.C0292b) bVar).a(), eo.a.f21686i, 0, 4, null)), bVar2.e()), ((f) action.c()).f(), null, ((f) action.c()).i(), null, false, false, null, 244, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.b.f21902a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f21940d));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.a.f21901a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r N1(final r2 r2Var, final b bVar, final f fVar, final v2.c it) {
        bn.r d10;
        bn.r d11;
        bn.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof v2.c.C0303c) {
            d12 = bn.z.d(r2Var, null, new Function1() { // from class: eo.f2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O1;
                    O1 = r2.O1(v2.c.this, bVar, (r.c) obj);
                    return O1;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof v2.c.b) {
            d11 = bn.z.d(r2Var, null, new Function1() { // from class: eo.g2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P1;
                    P1 = r2.P1(v2.c.this, bVar, r2Var, (r.c) obj);
                    return P1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, v2.c.a.f22023a)) {
            d10 = bn.z.d(r2Var, null, new Function1() { // from class: eo.h2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q1;
                    Q1 = r2.Q1(r2.f.this, (r.c) obj);
                    return Q1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f21943o).b(false));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(v2.c cVar, b bVar, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0300f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.C0303c) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).h(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, null, 244, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f21944p).b(false));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P1(v2.c cVar, b bVar, r2 r2Var, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0300f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.b) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).h(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, r2Var.f21854b.getString(jp.e.f30801j), 116, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f21941e).b(false));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(fVar.a(f.a.f21940d));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(true));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r R1(r2 r2Var, final a.b it) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a.b.C0224b) {
            d11 = bn.z.d(r2Var, null, new Function1() { // from class: eo.a2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S1;
                    S1 = r2.S1(a.b.this, (r.c) obj);
                    return S1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof a.b.C0223a) {
            d10 = bn.z.d(r2Var, null, new Function1() { // from class: eo.c2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T1;
                    T1 = r2.T1(a.b.this, (r.c) obj);
                    return T1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(false));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0224b c0224b = (a.b.C0224b) bVar;
        action.e(f.d((f) action.c(), new f.InterfaceC0300f.c(c0224b.a()), c0224b.a(), null, null, 12, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (action.c() instanceof f.b) {
            a.f fVar = (a.f) aVar;
            action.e(f.d((f) action.c(), new f.InterfaceC0300f.b(fVar.b()), null, null, fVar.a(), 6, null));
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0223a c0223a = (a.b.C0223a) bVar;
        if (!c0223a.a().isRecoverable()) {
            action.d(new c.C0298c(c0223a.a()));
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f fVar = (f) action.c();
        if (fVar instanceof f.b) {
            action.e(f.b.l((f.b) fVar, null, null, null, null, null, false, false, null, 127, null));
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r U1(final r2 r2Var, final f.InterfaceC0300f interfaceC0300f, final d.a aVar, final b.AbstractC0225b response) {
        bn.r d10;
        bn.r d11;
        bn.r d12;
        bn.r d13;
        Intrinsics.checkNotNullParameter(response, "response");
        if (response instanceof b.AbstractC0225b.d) {
            d13 = bn.z.d(r2Var, null, new Function1() { // from class: eo.i2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V1;
                    V1 = r2.V1(r2.f.InterfaceC0300f.this, response, (r.c) obj);
                    return V1;
                }
            }, 1, null);
            return d13;
        } else if (response instanceof b.AbstractC0225b.c) {
            d12 = bn.z.d(r2Var, null, new Function1() { // from class: eo.j2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit W1;
                    W1 = r2.W1(d.a.this, response, (r.c) obj);
                    return W1;
                }
            }, 1, null);
            return d12;
        } else if (response instanceof b.AbstractC0225b.a) {
            d11 = bn.z.d(r2Var, null, new Function1() { // from class: eo.k2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit X1;
                    X1 = r2.X1(d.a.this, interfaceC0300f, response, r2Var, (r.c) obj);
                    return X1;
                }
            }, 1, null);
            return d11;
        } else if (response instanceof b.AbstractC0225b.C0226b) {
            d10 = bn.z.d(r2Var, null, new Function1() { // from class: eo.l2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y1;
                    Y1 = r2.Y1(b.AbstractC0225b.this, (r.c) obj);
                    return Y1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.i iVar = (a.i) aVar;
        action.e(new f.e(((f) action.c()).h(), iVar.a(), new f.InterfaceC0300f.c(iVar.a()), null, 8, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(f.InterfaceC0300f interfaceC0300f, b.AbstractC0225b abstractC0225b, r.c action) {
        f.InterfaceC0300f cVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> h10 = ((f) action.c()).h();
        ArrayList<eo.d> arrayList = new ArrayList(CollectionsKt.w(h10, 10));
        for (Parcelable parcelable : h10) {
            b.AbstractC0225b.d dVar = (b.AbstractC0225b.d) abstractC0225b;
            if (Intrinsics.areEqual(parcelable, dVar.b())) {
                parcelable = dVar.a();
            }
            arrayList.add(parcelable);
        }
        if (!arrayList.isEmpty()) {
            for (eo.d dVar2 : arrayList) {
                if (dVar2 instanceof d.a) {
                    cVar = new f.InterfaceC0300f.d(((f.InterfaceC0300f.d) interfaceC0300f).a());
                    break;
                }
            }
        }
        cVar = new f.InterfaceC0300f.c(((f.InterfaceC0300f.d) interfaceC0300f).a());
        action.e(f.d((f) action.c(), cVar, null, arrayList, null, 10, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(d.a aVar, b.AbstractC0225b abstractC0225b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> h10 = ((f) action.c()).h();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(h10, 10));
        for (Parcelable parcelable : h10) {
            if ((parcelable instanceof d.a) && Intrinsics.areEqual(parcelable, aVar)) {
                parcelable = d.a.b((d.a) parcelable, null, null, ((b.AbstractC0225b.c) abstractC0225b).a(), 3, null);
            }
            arrayList.add(parcelable);
        }
        action.e(f.d((f) action.c(), ((f) action.c()).i(), null, arrayList, null, 10, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0297a.f21865a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(d.a aVar, f.InterfaceC0300f interfaceC0300f, b.AbstractC0225b abstractC0225b, r2 r2Var, r.c action) {
        f.InterfaceC0300f dVar;
        String d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List I0 = CollectionsKt.I0(((f) action.c()).h(), aVar);
        List<eo.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (eo.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0300f.d(((f.InterfaceC0300f.d) interfaceC0300f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0300f.c(((f.InterfaceC0300f.d) interfaceC0300f).a());
        f.InterfaceC0300f interfaceC0300f2 = dVar;
        String a10 = ((f.InterfaceC0300f.d) interfaceC0300f).a();
        f.a aVar2 = f.a.f21940d;
        d10 = u2.d(((b.AbstractC0225b.a) abstractC0225b).a(), r2Var.f21854b);
        action.e(new f.b(I0, a10, aVar2, interfaceC0300f2, null, false, false, d10, 80, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f21866a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(b.AbstractC0225b abstractC0225b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0298c(((b.AbstractC0225b.C0226b) abstractC0225b).a()));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f21875a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r Z1(r2 r2Var, final d.b bVar, final f.InterfaceC0300f interfaceC0300f, final a.b response) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(response, "response");
        d10 = bn.z.d(r2Var, null, new Function1() { // from class: eo.n2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit a22;
                a22 = r2.a2(d.b.this, interfaceC0300f, response, (r.c) obj);
                return a22;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f21869a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(d.b bVar, f.InterfaceC0300f interfaceC0300f, a.b bVar2, r.c action) {
        f.b bVar3;
        f.InterfaceC0300f dVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof f.b) {
            bVar3 = (f.b) c10;
        } else {
            bVar3 = null;
        }
        f.b bVar4 = bVar3;
        if (bVar4 == null) {
            return Unit.f32008a;
        }
        List I0 = CollectionsKt.I0(bVar4.h(), bVar);
        List<eo.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (eo.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0300f.d(((f.InterfaceC0300f.b) interfaceC0300f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0300f.c(((f.InterfaceC0300f.b) interfaceC0300f).a());
        f.InterfaceC0300f interfaceC0300f2 = dVar;
        if (bVar2 instanceof a.b.C0344b) {
            action.e(f.b.l(bVar4, I0, null, null, interfaceC0300f2, null, false, false, null, 230, null));
        } else if (bVar2 instanceof a.b.C0343a) {
            action.d(new c.C0298c(((a.b.C0343a) bVar2).a()));
        } else {
            throw new qr.p();
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b1(r2 r2Var, k.a aVar, f fVar, d.b document) {
        Intrinsics.checkNotNullParameter(document, "document");
        r2Var.L0(aVar, new a.f(((f.b) fVar).f(), document));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c1(r2 r2Var, k.a aVar, f fVar) {
        r2Var.L0(aVar, new a.i(((f.b) fVar).f()));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f21866a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0297a.f21865a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f21868a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r g1(final r2 r2Var, final f fVar, final c1.a it) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = bn.z.d(r2Var, null, new Function1() { // from class: eo.i1
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
        int i10 = g.f21975a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new qr.p();
            }
            action.e(fVar.a(f.a.f21940d));
        } else {
            eo.c cVar = r2Var.f21856d;
            String string = r2Var.f21854b.getString(jp.e.f30792a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f21942i);
            } else {
                a10 = fVar.a(f.a.f21940d);
            }
            action.e(a10);
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f21867a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f21867a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f21872a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f21873a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f21875a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f21869a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(d.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1() {
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f21866a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0297a.f21865a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f21868a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r t1(final r2 r2Var, final f fVar, final c1.a it) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = bn.z.d(r2Var, null, new Function1() { // from class: eo.o1
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
        int i10 = g.f21975a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new qr.p();
            }
            action.e(fVar.a(f.a.f21940d));
        } else {
            eo.c cVar = r2Var.f21856d;
            String string = r2Var.f21854b.getString(jp.e.f30792a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f21942i);
            } else {
                a10 = fVar.a(f.a.f21940d);
            }
            action.e(a10);
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f21867a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r w1(r2 r2Var, final d.b it) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, d.b.C0233b.f18591a)) {
            d11 = bn.z.d(r2Var, null, new Function1() { // from class: eo.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit x12;
                    x12 = r2.x1((r.c) obj);
                    return x12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof d.b.a) {
            d10 = bn.z.d(r2Var, null, new Function1() { // from class: eo.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = r2.y1(d.b.this, (r.c) obj);
                    return y12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.d.f21904a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(d.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0298c(((d.b.a) bVar).a()));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f21866a);
        return Unit.f32008a;
    }

    @Override // bn.k
    /* renamed from: J0 */
    public f d(b props, bn.i iVar) {
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
                Object readParcelable = obtain.readParcelable(bn.i.class.getClassLoader());
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
        if (Intrinsics.areEqual(w10, e.a.f21934d)) {
            return new f.d(null, null, props.f(), false, 11, null);
        }
        if (w10 instanceof e.b) {
            return new f.b(CollectionsKt.l(), ((e.b) props.w()).a(), null, null, null, true, false, null, 220, null);
        }
        throw new qr.p();
    }

    @Override // bn.k
    /* renamed from: W0 */
    public Object f(b renderProps, final f renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        this.f21863k.c(renderProps.b(), renderProps.c(), !(renderState instanceof f.e));
        I1(renderState.e(), renderProps, renderState, context);
        J1(renderState.i(), renderProps, renderState, context);
        K0(renderProps, renderState);
        if (renderState instanceof f.d) {
            Object iVar = new eo.i(dq.c.a(renderProps.l().a()), A0(renderProps.l().a(), context), this.f21863k.b(), new Function0() { // from class: eo.y
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit X0;
                    X0 = r2.X0(r2.this, context);
                    return X0;
                }
            }, new Function0() { // from class: eo.a0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Y0;
                    Y0 = r2.Y0(r2.this, context);
                    return Y0;
                }
            });
            f.d dVar = (f.d) renderState;
            if (dVar.o()) {
                iVar = ep.d.a(dq.m.f21130a.j(dq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: eo.m0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit j12;
                        j12 = r2.j1(r2.this, context);
                        return j12;
                    }
                }, renderProps.l().b().a()), iVar, "document_upload_options_dialog");
            }
            boolean z10 = dVar.e() == f.a.f21941e;
            hp.d0 d0Var = hp.d0.f26280d;
            String s10 = renderProps.s();
            String str = s10 != null ? s10 : "";
            String r10 = renderProps.r();
            if (r10 == null) {
                r10 = this.f21854b.getString(jp.e.f30794c);
                Intrinsics.checkNotNullExpressionValue(r10, "getString(...)");
            }
            Context context2 = this.f21854b;
            String string = context2.getString(jp.e.f30793b, rp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return hp.l1.e(iVar, context, z10, d0Var, false, str, r10, string, renderProps.q(), renderProps.p(), null, null, null, this.f21855c, renderProps.x(), null, new Function1() { // from class: eo.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    bn.r B1;
                    B1 = r2.B1(r2.this, renderState, (c1.a) obj);
                    return B1;
                }
            }, 19976, null);
        } else if (renderState instanceof f.b) {
            f.b bVar = (f.b) renderState;
            if (bVar.q()) {
                bn.w.l(context, this.f21859g.a(renderProps.v(), bVar.f()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.c.class), "", new Function1() { // from class: eo.o0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        bn.r D1;
                        D1 = r2.D1(r2.this, renderState, (c.b) obj);
                        return D1;
                    }
                });
            }
            d.b bVar2 = new d.b(this.f21853a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), bVar.h(), this.f21863k.b(), new Function0() { // from class: eo.p0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit G1;
                    G1 = r2.G1(r2.this, context);
                    return G1;
                }
            }, new Function0() { // from class: eo.q0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit H1;
                    H1 = r2.H1(r2.this, context);
                    return H1;
                }
            }, new Function0() { // from class: eo.r0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Z0;
                    Z0 = r2.Z0(r2.this, context);
                    return Z0;
                }
            }, new Function0() { // from class: eo.s0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit a12;
                    a12 = r2.a1(r2.this, context);
                    return a12;
                }
            }, new Function1() { // from class: eo.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit b12;
                    b12 = r2.b1(r2.this, context, renderState, (d.b) obj);
                    return b12;
                }
            }, new Function0() { // from class: eo.j0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit c12;
                    c12 = r2.c1(r2.this, context, renderState);
                    return c12;
                }
            }, new Function0() { // from class: eo.u0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit d12;
                    d12 = r2.d1(r2.this, context);
                    return d12;
                }
            }, new Function0() { // from class: eo.f1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit e12;
                    e12 = r2.e1(r2.this, context);
                    return e12;
                }
            }, bVar.q(), bVar.h().size() < renderProps.e(), !bVar.h().isEmpty() && Intrinsics.areEqual(bVar.i(), new f.InterfaceC0300f.c(bVar.f())), bVar.p(), new Function0() { // from class: eo.q1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f12;
                    f12 = r2.f1(r2.this, context);
                    return f12;
                }
            }, renderProps.x());
            boolean z11 = bVar.e() == f.a.f21941e;
            hp.d0 d0Var2 = hp.d0.f26280d;
            String s11 = renderProps.s();
            if (s11 == null) {
                s11 = "";
            }
            String r11 = renderProps.r();
            if (r11 == null) {
                r11 = this.f21854b.getString(jp.e.f30794c);
                Intrinsics.checkNotNullExpressionValue(r11, "getString(...)");
            }
            Context context3 = this.f21854b;
            String string2 = context3.getString(jp.e.f30793b, rp.f.b(context3));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            ep.c e10 = hp.l1.e(bVar2, context, z11, d0Var2, false, s11, r11, string2, renderProps.q(), renderProps.p(), null, null, null, this.f21855c, renderProps.x(), null, new Function1() { // from class: eo.b2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    bn.r g12;
                    g12 = r2.g1(r2.this, renderState, (c1.a) obj);
                    return g12;
                }
            }, 19976, null);
            if (bVar.r()) {
                return ep.d.a(dq.m.f21130a.j(dq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: eo.m2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i12;
                        i12 = r2.i1(r2.this, context);
                        return i12;
                    }
                }, renderProps.l().b().a()), e10, "document_upload_screen");
            }
            return new ep.c(e10, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.c) {
            f.c cVar = (f.c) renderState;
            String f10 = cVar.f();
            if (f10 != null) {
                context.a(f10, new h(context, this, f10, null));
            }
            d.b bVar3 = new d.b(this.f21853a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), cVar.h(), this.f21863k.b(), new Function0() { // from class: eo.o2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit k12;
                    k12 = r2.k1(r2.this, context);
                    return k12;
                }
            }, new Function0() { // from class: eo.p2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit l12;
                    l12 = r2.l1(r2.this, context);
                    return l12;
                }
            }, new Function0() { // from class: eo.q2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m12;
                    m12 = r2.m1(r2.this, context);
                    return m12;
                }
            }, new Function0() { // from class: eo.z
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit n12;
                    n12 = r2.n1(r2.this, context);
                    return n12;
                }
            }, new Function1() { // from class: eo.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o12;
                    o12 = r2.o1((d.b) obj);
                    return o12;
                }
            }, new Function0() { // from class: eo.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit p12;
                    p12 = r2.p1();
                    return p12;
                }
            }, new Function0() { // from class: eo.d0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit q12;
                    q12 = r2.q1(r2.this, context);
                    return q12;
                }
            }, new Function0() { // from class: eo.e0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit r12;
                    r12 = r2.r1(r2.this, context);
                    return r12;
                }
            }, cVar.p(), cVar.h().size() < renderProps.e(), false, cVar.o(), new Function0() { // from class: eo.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit s12;
                    s12 = r2.s1(r2.this, context);
                    return s12;
                }
            }, renderProps.x());
            boolean z12 = cVar.e() == f.a.f21941e;
            hp.d0 d0Var3 = hp.d0.f26280d;
            String s12 = renderProps.s();
            if (s12 == null) {
                s12 = "";
            }
            String r12 = renderProps.r();
            if (r12 == null) {
                r12 = this.f21854b.getString(jp.e.f30794c);
                Intrinsics.checkNotNullExpressionValue(r12, "getString(...)");
            }
            Context context4 = this.f21854b;
            String string3 = context4.getString(jp.e.f30793b, rp.f.b(context4));
            Intrinsics.checkNotNullExpressionValue(string3, "getString(...)");
            ep.c e11 = hp.l1.e(bVar3, context, z12, d0Var3, false, s12, r12, string3, renderProps.q(), renderProps.p(), null, null, null, this.f21855c, renderProps.x(), null, new Function1() { // from class: eo.g0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    bn.r t12;
                    t12 = r2.t1(r2.this, renderState, (c1.a) obj);
                    return t12;
                }
            }, 19976, null);
            if (cVar.q()) {
                return ep.d.a(dq.m.f21130a.j(dq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: eo.h0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v12;
                        v12 = r2.v1(r2.this, context);
                        return v12;
                    }
                }, renderProps.l().b().a()), e11, "document_upload_screen");
            }
            return new ep.c(e11, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.e) {
            bn.w.l(context, this.f21862j.a(renderProps.v(), renderProps.j(), renderProps.i(), renderProps.h(), ((f.e) renderState).h()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.d.class), "", new Function1() { // from class: eo.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    bn.r w12;
                    w12 = r2.w1(r2.this, (d.b) obj);
                    return w12;
                }
            });
            zp.b.d(this.f21863k, false, false, false, 4, null);
            return new d.a(renderProps.o(), renderProps.m(), this.f21863k.b(), new Function0() { // from class: eo.k0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit z13;
                    z13 = r2.z1(r2.this, context);
                    return z13;
                }
            }, new Function0() { // from class: eo.l0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit A1;
                    A1 = r2.A1(r2.this, context);
                    return A1;
                }
            }, renderProps.x(), renderProps.a().getPendingPage(), renderProps.n());
        } else {
            throw new qr.p();
        }
    }

    @Override // bn.k
    /* renamed from: b2 */
    public bn.i g(f state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return dn.s.a(state);
    }
}
