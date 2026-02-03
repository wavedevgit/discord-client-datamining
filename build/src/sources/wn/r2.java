package wn;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import ap.c1;
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
import okio.ByteString;
import op.b;
import op.i;
import org.jetbrains.annotations.NotNull;
import um.k;
import um.r;
import wn.c;
import wn.d;
import wn.r2;
import wn.v2;
import wp.b;
import yn.a;
import yp.k5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r2 extends um.k {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f52596a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f52597b;

    /* renamed from: c  reason: collision with root package name */
    private final ap.c1 f52598c;

    /* renamed from: d  reason: collision with root package name */
    private final wn.c f52599d;

    /* renamed from: e  reason: collision with root package name */
    private final v2.b f52600e;

    /* renamed from: f  reason: collision with root package name */
    private final a.C0231a f52601f;

    /* renamed from: g  reason: collision with root package name */
    private final c.a f52602g;

    /* renamed from: h  reason: collision with root package name */
    private final b.a f52603h;

    /* renamed from: i  reason: collision with root package name */
    private final a.C0774a f52604i;

    /* renamed from: j  reason: collision with root package name */
    private final d.a f52605j;

    /* renamed from: k  reason: collision with root package name */
    private final sp.b f52606k;

    /* renamed from: l  reason: collision with root package name */
    private final op.c f52607l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: wn.r2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0722a extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final C0722a f52608a = new C0722a();

            private C0722a() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0722a)) {
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
            public static final b f52609a = new b();

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
            public static final c f52610a = new c();

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
            public static final d f52611a = new d();

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
            public static final e f52612a = new e();

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
            private final String f52613a;

            /* renamed from: b  reason: collision with root package name */
            private final d.b f52614b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String documentId, d.b document) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(document, "document");
                this.f52613a = documentId;
                this.f52614b = document;
            }

            public final d.b a() {
                return this.f52614b;
            }

            public final String b() {
                return this.f52613a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof f)) {
                    return false;
                }
                f fVar = (f) obj;
                if (Intrinsics.areEqual(this.f52613a, fVar.f52613a) && Intrinsics.areEqual(this.f52614b, fVar.f52614b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f52613a.hashCode() * 31) + this.f52614b.hashCode();
            }

            public String toString() {
                String str = this.f52613a;
                d.b bVar = this.f52614b;
                return "RemoveDocument(documentId=" + str + ", document=" + bVar + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class g extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final g f52615a = new g();

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
            public static final h f52616a = new h();

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
            private final String f52617a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public i(String documentId) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                this.f52617a = documentId;
            }

            public final String a() {
                return this.f52617a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof i) && Intrinsics.areEqual(this.f52617a, ((i) obj).f52617a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f52617a.hashCode();
            }

            public String toString() {
                String str = this.f52617a;
                return "Submit(documentId=" + str + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class j extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final j f52618a = new j();

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
        private final String f52619a;

        /* renamed from: b  reason: collision with root package name */
        private final String f52620b;

        /* renamed from: c  reason: collision with root package name */
        private final String f52621c;

        /* renamed from: d  reason: collision with root package name */
        private final String f52622d;

        /* renamed from: e  reason: collision with root package name */
        private final String f52623e;

        /* renamed from: f  reason: collision with root package name */
        private final String f52624f;

        /* renamed from: g  reason: collision with root package name */
        private final String f52625g;

        /* renamed from: h  reason: collision with root package name */
        private final String f52626h;

        /* renamed from: i  reason: collision with root package name */
        private final String f52627i;

        /* renamed from: j  reason: collision with root package name */
        private final String f52628j;

        /* renamed from: k  reason: collision with root package name */
        private final String f52629k;

        /* renamed from: l  reason: collision with root package name */
        private final String f52630l;

        /* renamed from: m  reason: collision with root package name */
        private final String f52631m;

        /* renamed from: n  reason: collision with root package name */
        private final e f52632n;

        /* renamed from: o  reason: collision with root package name */
        private final l f52633o;

        /* renamed from: p  reason: collision with root package name */
        private final int f52634p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f52635q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f52636r;

        /* renamed from: s  reason: collision with root package name */
        private final String f52637s;

        /* renamed from: t  reason: collision with root package name */
        private final String f52638t;

        /* renamed from: u  reason: collision with root package name */
        private final String f52639u;

        /* renamed from: v  reason: collision with root package name */
        private final String f52640v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.DocumentStepStyle f52641w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.Document.AssetConfig f52642x;

        /* renamed from: y  reason: collision with root package name */
        private final PendingPageTextPosition f52643y;

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
            this.f52619a = sessionToken;
            this.f52620b = inquiryId;
            this.f52621c = fromStep;
            this.f52622d = fromComponent;
            this.f52623e = str;
            this.f52624f = str2;
            this.f52625g = str3;
            this.f52626h = str4;
            this.f52627i = str5;
            this.f52628j = str6;
            this.f52629k = fieldKeyDocument;
            this.f52630l = kind;
            this.f52631m = str7;
            this.f52632n = startPage;
            this.f52633o = pages;
            this.f52634p = i10;
            this.f52635q = z10;
            this.f52636r = z11;
            this.f52637s = str8;
            this.f52638t = str9;
            this.f52639u = str10;
            this.f52640v = str11;
            this.f52641w = documentStepStyle;
            this.f52642x = assetConfig;
            this.f52643y = pendingPageTextVerticalPosition;
        }

        public final NextStep.Document.AssetConfig a() {
            return this.f52642x;
        }

        public final boolean b() {
            return this.f52635q;
        }

        public final boolean c() {
            return this.f52636r;
        }

        public final String d() {
            return this.f52625g;
        }

        public final int e() {
            return this.f52634p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f52619a, bVar.f52619a) && Intrinsics.areEqual(this.f52620b, bVar.f52620b) && Intrinsics.areEqual(this.f52621c, bVar.f52621c) && Intrinsics.areEqual(this.f52622d, bVar.f52622d) && Intrinsics.areEqual(this.f52623e, bVar.f52623e) && Intrinsics.areEqual(this.f52624f, bVar.f52624f) && Intrinsics.areEqual(this.f52625g, bVar.f52625g) && Intrinsics.areEqual(this.f52626h, bVar.f52626h) && Intrinsics.areEqual(this.f52627i, bVar.f52627i) && Intrinsics.areEqual(this.f52628j, bVar.f52628j) && Intrinsics.areEqual(this.f52629k, bVar.f52629k) && Intrinsics.areEqual(this.f52630l, bVar.f52630l) && Intrinsics.areEqual(this.f52631m, bVar.f52631m) && Intrinsics.areEqual(this.f52632n, bVar.f52632n) && Intrinsics.areEqual(this.f52633o, bVar.f52633o) && this.f52634p == bVar.f52634p && this.f52635q == bVar.f52635q && this.f52636r == bVar.f52636r && Intrinsics.areEqual(this.f52637s, bVar.f52637s) && Intrinsics.areEqual(this.f52638t, bVar.f52638t) && Intrinsics.areEqual(this.f52639u, bVar.f52639u) && Intrinsics.areEqual(this.f52640v, bVar.f52640v) && Intrinsics.areEqual(this.f52641w, bVar.f52641w) && Intrinsics.areEqual(this.f52642x, bVar.f52642x) && this.f52643y == bVar.f52643y) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f52631m;
        }

        public final String g() {
            return this.f52629k;
        }

        public final String h() {
            return this.f52622d;
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
            int hashCode12 = ((((((this.f52619a.hashCode() * 31) + this.f52620b.hashCode()) * 31) + this.f52621c.hashCode()) * 31) + this.f52622d.hashCode()) * 31;
            String str = this.f52623e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode12 + hashCode) * 31;
            String str2 = this.f52624f;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f52625g;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f52626h;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f52627i;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f52628j;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int hashCode13 = (((((i15 + hashCode6) * 31) + this.f52629k.hashCode()) * 31) + this.f52630l.hashCode()) * 31;
            String str7 = this.f52631m;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int hashCode14 = (((((((((((hashCode13 + hashCode7) * 31) + this.f52632n.hashCode()) * 31) + this.f52633o.hashCode()) * 31) + Integer.hashCode(this.f52634p)) * 31) + Boolean.hashCode(this.f52635q)) * 31) + Boolean.hashCode(this.f52636r)) * 31;
            String str8 = this.f52637s;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i16 = (hashCode14 + hashCode8) * 31;
            String str9 = this.f52638t;
            if (str9 == null) {
                hashCode9 = 0;
            } else {
                hashCode9 = str9.hashCode();
            }
            int i17 = (i16 + hashCode9) * 31;
            String str10 = this.f52639u;
            if (str10 == null) {
                hashCode10 = 0;
            } else {
                hashCode10 = str10.hashCode();
            }
            int i18 = (i17 + hashCode10) * 31;
            String str11 = this.f52640v;
            if (str11 == null) {
                hashCode11 = 0;
            } else {
                hashCode11 = str11.hashCode();
            }
            int i19 = (i18 + hashCode11) * 31;
            StepStyles.DocumentStepStyle documentStepStyle = this.f52641w;
            if (documentStepStyle != null) {
                i10 = documentStepStyle.hashCode();
            }
            return ((((i19 + i10) * 31) + this.f52642x.hashCode()) * 31) + this.f52643y.hashCode();
        }

        public final String i() {
            return this.f52621c;
        }

        public final String j() {
            return this.f52620b;
        }

        public final String k() {
            return this.f52630l;
        }

        public final l l() {
            return this.f52633o;
        }

        public final String m() {
            return this.f52628j;
        }

        public final PendingPageTextPosition n() {
            return this.f52643y;
        }

        public final String o() {
            return this.f52627i;
        }

        public final String p() {
            return this.f52640v;
        }

        public final String q() {
            return this.f52639u;
        }

        public final String r() {
            return this.f52638t;
        }

        public final String s() {
            return this.f52637s;
        }

        public final String t() {
            return this.f52624f;
        }

        public String toString() {
            String str = this.f52619a;
            String str2 = this.f52620b;
            String str3 = this.f52621c;
            String str4 = this.f52622d;
            String str5 = this.f52623e;
            String str6 = this.f52624f;
            String str7 = this.f52625g;
            String str8 = this.f52626h;
            String str9 = this.f52627i;
            String str10 = this.f52628j;
            String str11 = this.f52629k;
            String str12 = this.f52630l;
            String str13 = this.f52631m;
            e eVar = this.f52632n;
            l lVar = this.f52633o;
            int i10 = this.f52634p;
            boolean z10 = this.f52635q;
            boolean z11 = this.f52636r;
            String str14 = this.f52637s;
            String str15 = this.f52638t;
            String str16 = this.f52639u;
            String str17 = this.f52640v;
            StepStyles.DocumentStepStyle documentStepStyle = this.f52641w;
            NextStep.Document.AssetConfig assetConfig = this.f52642x;
            PendingPageTextPosition pendingPageTextPosition = this.f52643y;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromStep=" + str3 + ", fromComponent=" + str4 + ", promptTitle=" + str5 + ", promptDescription=" + str6 + ", disclaimer=" + str7 + ", submitButtonText=" + str8 + ", pendingTitle=" + str9 + ", pendingDescription=" + str10 + ", fieldKeyDocument=" + str11 + ", kind=" + str12 + ", documentId=" + str13 + ", startPage=" + eVar + ", pages=" + lVar + ", documentFileLimit=" + i10 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", permissionsTitle=" + str14 + ", permissionsRationale=" + str15 + ", permissionsModalPositiveButton=" + str16 + ", permissionsModalNegativeButton=" + str17 + ", styles=" + documentStepStyle + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
        }

        public final String u() {
            return this.f52623e;
        }

        public final String v() {
            return this.f52619a;
        }

        public final e w() {
            return this.f52632n;
        }

        public final StepStyles.DocumentStepStyle x() {
            return this.f52641w;
        }

        public final String y() {
            return this.f52626h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f52644a = new a();

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
            public static final b f52645a = new b();

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

        /* renamed from: wn.r2$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0723c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f52646a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0723c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f52646a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f52646a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0723c) && Intrinsics.areEqual(this.f52646a, ((C0723c) obj).f52646a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f52646a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f52646a;
                return "Errored(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f52647a = new d();

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
            private final String f52648a;

            /* renamed from: b  reason: collision with root package name */
            private final String f52649b;

            /* renamed from: c  reason: collision with root package name */
            private final sp.a f52650c;

            /* renamed from: d  reason: collision with root package name */
            private final Function0 f52651d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f52652e;

            /* renamed from: f  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f52653f;

            /* renamed from: g  reason: collision with root package name */
            private final NextStep.Document.AssetConfig.PendingPage f52654g;

            /* renamed from: h  reason: collision with root package name */
            private final PendingPageTextPosition f52655h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, sp.a navigationState, Function0 onBack, Function0 onCancel, StepStyles.DocumentStepStyle documentStepStyle, NextStep.Document.AssetConfig.PendingPage pendingPage, PendingPageTextPosition pendingPageTextVerticalPosition) {
                super(null);
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                this.f52648a = str;
                this.f52649b = str2;
                this.f52650c = navigationState;
                this.f52651d = onBack;
                this.f52652e = onCancel;
                this.f52653f = documentStepStyle;
                this.f52654g = pendingPage;
                this.f52655h = pendingPageTextVerticalPosition;
            }

            public final NextStep.Document.AssetConfig.PendingPage a() {
                return this.f52654g;
            }

            public final sp.a b() {
                return this.f52650c;
            }

            public final Function0 c() {
                return this.f52651d;
            }

            public final Function0 d() {
                return this.f52652e;
            }

            public final PendingPageTextPosition e() {
                return this.f52655h;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f52648a, aVar.f52648a) && Intrinsics.areEqual(this.f52649b, aVar.f52649b) && Intrinsics.areEqual(this.f52650c, aVar.f52650c) && Intrinsics.areEqual(this.f52651d, aVar.f52651d) && Intrinsics.areEqual(this.f52652e, aVar.f52652e) && Intrinsics.areEqual(this.f52653f, aVar.f52653f) && Intrinsics.areEqual(this.f52654g, aVar.f52654g) && this.f52655h == aVar.f52655h) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f52649b;
            }

            public final StepStyles.DocumentStepStyle g() {
                return this.f52653f;
            }

            public final String h() {
                return this.f52648a;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                String str = this.f52648a;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = hashCode * 31;
                String str2 = this.f52649b;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int hashCode4 = (((((((i11 + hashCode2) * 31) + this.f52650c.hashCode()) * 31) + this.f52651d.hashCode()) * 31) + this.f52652e.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f52653f;
                if (documentStepStyle == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = documentStepStyle.hashCode();
                }
                int i12 = (hashCode4 + hashCode3) * 31;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f52654g;
                if (pendingPage != null) {
                    i10 = pendingPage.hashCode();
                }
                return ((i12 + i10) * 31) + this.f52655h.hashCode();
            }

            public String toString() {
                String str = this.f52648a;
                String str2 = this.f52649b;
                sp.a aVar = this.f52650c;
                Function0 function0 = this.f52651d;
                Function0 function02 = this.f52652e;
                StepStyles.DocumentStepStyle documentStepStyle = this.f52653f;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f52654g;
                PendingPageTextPosition pendingPageTextPosition = this.f52655h;
                return "LoadingAnimation(title=" + str + ", prompt=" + str2 + ", navigationState=" + aVar + ", onBack=" + function0 + ", onCancel=" + function02 + ", styles=" + documentStepStyle + ", assetConfig=" + pendingPage + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final v4.h f52656a;

            /* renamed from: b  reason: collision with root package name */
            private final String f52657b;

            /* renamed from: c  reason: collision with root package name */
            private final String f52658c;

            /* renamed from: d  reason: collision with root package name */
            private final String f52659d;

            /* renamed from: e  reason: collision with root package name */
            private final String f52660e;

            /* renamed from: f  reason: collision with root package name */
            private final List f52661f;

            /* renamed from: g  reason: collision with root package name */
            private final sp.a f52662g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f52663h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f52664i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f52665j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f52666k;

            /* renamed from: l  reason: collision with root package name */
            private final Function1 f52667l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f52668m;

            /* renamed from: n  reason: collision with root package name */
            private final Function0 f52669n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f52670o;

            /* renamed from: p  reason: collision with root package name */
            private final boolean f52671p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f52672q;

            /* renamed from: r  reason: collision with root package name */
            private final boolean f52673r;

            /* renamed from: s  reason: collision with root package name */
            private final String f52674s;

            /* renamed from: t  reason: collision with root package name */
            private final Function0 f52675t;

            /* renamed from: u  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f52676u;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(v4.h imageLoader, String str, String str2, String str3, String str4, List documents, sp.a navigationState, Function0 openSelectFile, Function0 selectFromPhotoLibrary, Function0 openCamera, Function0 openUploadOptions, Function1 onRemove, Function0 onSubmit, Function0 onCancel, Function0 onBack, boolean z10, boolean z11, boolean z12, String str5, Function0 onErrorDismissed, StepStyles.DocumentStepStyle documentStepStyle) {
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
                this.f52656a = imageLoader;
                this.f52657b = str;
                this.f52658c = str2;
                this.f52659d = str3;
                this.f52660e = str4;
                this.f52661f = documents;
                this.f52662g = navigationState;
                this.f52663h = openSelectFile;
                this.f52664i = selectFromPhotoLibrary;
                this.f52665j = openCamera;
                this.f52666k = openUploadOptions;
                this.f52667l = onRemove;
                this.f52668m = onSubmit;
                this.f52669n = onCancel;
                this.f52670o = onBack;
                this.f52671p = z10;
                this.f52672q = z11;
                this.f52673r = z12;
                this.f52674s = str5;
                this.f52675t = onErrorDismissed;
                this.f52676u = documentStepStyle;
            }

            public final boolean a() {
                return this.f52672q;
            }

            public final boolean b() {
                return this.f52671p;
            }

            public final String c() {
                return this.f52659d;
            }

            public final List d() {
                return this.f52661f;
            }

            public final String e() {
                return this.f52674s;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f52656a, bVar.f52656a) && Intrinsics.areEqual(this.f52657b, bVar.f52657b) && Intrinsics.areEqual(this.f52658c, bVar.f52658c) && Intrinsics.areEqual(this.f52659d, bVar.f52659d) && Intrinsics.areEqual(this.f52660e, bVar.f52660e) && Intrinsics.areEqual(this.f52661f, bVar.f52661f) && Intrinsics.areEqual(this.f52662g, bVar.f52662g) && Intrinsics.areEqual(this.f52663h, bVar.f52663h) && Intrinsics.areEqual(this.f52664i, bVar.f52664i) && Intrinsics.areEqual(this.f52665j, bVar.f52665j) && Intrinsics.areEqual(this.f52666k, bVar.f52666k) && Intrinsics.areEqual(this.f52667l, bVar.f52667l) && Intrinsics.areEqual(this.f52668m, bVar.f52668m) && Intrinsics.areEqual(this.f52669n, bVar.f52669n) && Intrinsics.areEqual(this.f52670o, bVar.f52670o) && this.f52671p == bVar.f52671p && this.f52672q == bVar.f52672q && this.f52673r == bVar.f52673r && Intrinsics.areEqual(this.f52674s, bVar.f52674s) && Intrinsics.areEqual(this.f52675t, bVar.f52675t) && Intrinsics.areEqual(this.f52676u, bVar.f52676u)) {
                    return true;
                }
                return false;
            }

            public final v4.h f() {
                return this.f52656a;
            }

            public final sp.a g() {
                return this.f52662g;
            }

            public final Function0 h() {
                return this.f52670o;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                int hashCode4;
                int hashCode5;
                int hashCode6 = this.f52656a.hashCode() * 31;
                String str = this.f52657b;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode6 + hashCode) * 31;
                String str2 = this.f52658c;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f52659d;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f52660e;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int hashCode7 = (((((((((((((((((((((((((((i13 + hashCode4) * 31) + this.f52661f.hashCode()) * 31) + this.f52662g.hashCode()) * 31) + this.f52663h.hashCode()) * 31) + this.f52664i.hashCode()) * 31) + this.f52665j.hashCode()) * 31) + this.f52666k.hashCode()) * 31) + this.f52667l.hashCode()) * 31) + this.f52668m.hashCode()) * 31) + this.f52669n.hashCode()) * 31) + this.f52670o.hashCode()) * 31) + Boolean.hashCode(this.f52671p)) * 31) + Boolean.hashCode(this.f52672q)) * 31) + Boolean.hashCode(this.f52673r)) * 31;
                String str5 = this.f52674s;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int hashCode8 = (((hashCode7 + hashCode5) * 31) + this.f52675t.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f52676u;
                if (documentStepStyle != null) {
                    i10 = documentStepStyle.hashCode();
                }
                return hashCode8 + i10;
            }

            public final Function0 i() {
                return this.f52669n;
            }

            public final Function0 j() {
                return this.f52675t;
            }

            public final Function1 k() {
                return this.f52667l;
            }

            public final Function0 l() {
                return this.f52668m;
            }

            public final Function0 m() {
                return this.f52666k;
            }

            public final String n() {
                return this.f52658c;
            }

            public final StepStyles.DocumentStepStyle o() {
                return this.f52676u;
            }

            public final boolean p() {
                return this.f52673r;
            }

            public final String q() {
                return this.f52660e;
            }

            public final String r() {
                return this.f52657b;
            }

            public String toString() {
                v4.h hVar = this.f52656a;
                String str = this.f52657b;
                String str2 = this.f52658c;
                String str3 = this.f52659d;
                String str4 = this.f52660e;
                List list = this.f52661f;
                sp.a aVar = this.f52662g;
                Function0 function0 = this.f52663h;
                Function0 function02 = this.f52664i;
                Function0 function03 = this.f52665j;
                Function0 function04 = this.f52666k;
                Function1 function1 = this.f52667l;
                Function0 function05 = this.f52668m;
                Function0 function06 = this.f52669n;
                Function0 function07 = this.f52670o;
                boolean z10 = this.f52671p;
                boolean z11 = this.f52672q;
                boolean z12 = this.f52673r;
                String str5 = this.f52674s;
                Function0 function08 = this.f52675t;
                StepStyles.DocumentStepStyle documentStepStyle = this.f52676u;
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
            public static final a f52677d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0724a();

            /* renamed from: wn.r2$e$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0724a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f52677d;
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
            private final String f52678d;

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
                this.f52678d = documentId;
            }

            public final String a() {
                return this.f52678d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof b) && Intrinsics.areEqual(this.f52678d, ((b) obj).f52678d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f52678d.hashCode();
            }

            public String toString() {
                String str = this.f52678d;
                return "Review(documentId=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f52678d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        private final a f52679d;

        /* renamed from: e  reason: collision with root package name */
        private final InterfaceC0725f f52680e;

        /* renamed from: i  reason: collision with root package name */
        private final String f52681i;

        /* renamed from: o  reason: collision with root package name */
        private final List f52682o;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f52683d = new a("None", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f52684e = new a("CheckCameraPermissions", 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f52685i = new a("CameraRunning", 2);

            /* renamed from: o  reason: collision with root package name */
            public static final a f52686o = new a("SelectFileFromDocuments", 3);

            /* renamed from: p  reason: collision with root package name */
            public static final a f52687p = new a("SelectImageFromPhotoLibrary", 4);

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ a[] f52688q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f52689r;

            static {
                a[] a10 = a();
                f52688q = a10;
                f52689r = qr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f52683d, f52684e, f52685i, f52686o, f52687p};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f52688q.clone();
            }
        }

        /* renamed from: wn.r2$f$f  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public interface InterfaceC0725f extends Parcelable {

            /* renamed from: wn.r2$f$f$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements InterfaceC0725f {

                /* renamed from: d  reason: collision with root package name */
                public static final a f52714d = new a();
                @NotNull
                public static final Parcelable.Creator<a> CREATOR = new C0726a();

                /* renamed from: wn.r2$f$f$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0726a implements Parcelable.Creator {
                    @Override // android.os.Parcelable.Creator
                    /* renamed from: a */
                    public final a createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        parcel.readInt();
                        return a.f52714d;
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

            /* renamed from: wn.r2$f$f$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b implements InterfaceC0725f {
                @NotNull
                public static final Parcelable.Creator<b> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f52715d;

                /* renamed from: wn.r2$f$f$b$a */
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
                    this.f52715d = documentId;
                }

                public final String a() {
                    return this.f52715d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof b) && Intrinsics.areEqual(this.f52715d, ((b) obj).f52715d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f52715d.hashCode();
                }

                public String toString() {
                    String str = this.f52715d;
                    return "DeleteFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f52715d);
                }
            }

            /* renamed from: wn.r2$f$f$c */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class c implements InterfaceC0725f {
                @NotNull
                public static final Parcelable.Creator<c> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f52716d;

                /* renamed from: wn.r2$f$f$c$a */
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
                    this.f52716d = documentId;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof c) && Intrinsics.areEqual(this.f52716d, ((c) obj).f52716d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f52716d.hashCode();
                }

                public String toString() {
                    String str = this.f52716d;
                    return "ReadyToSubmit(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f52716d);
                }
            }

            /* renamed from: wn.r2$f$f$d */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class d implements InterfaceC0725f {
                @NotNull
                public static final Parcelable.Creator<d> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f52717d;

                /* renamed from: wn.r2$f$f$d$a */
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
                    this.f52717d = documentId;
                }

                public final String a() {
                    return this.f52717d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof d) && Intrinsics.areEqual(this.f52717d, ((d) obj).f52717d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f52717d.hashCode();
                }

                public String toString() {
                    String str = this.f52717d;
                    return "UploadFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f52717d);
                }
            }
        }

        public /* synthetic */ f(a aVar, InterfaceC0725f interfaceC0725f, String str, List list, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, interfaceC0725f, str, list);
        }

        public static /* synthetic */ f d(f fVar, InterfaceC0725f interfaceC0725f, String str, List list, wn.d dVar, int i10, Object obj) {
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
                return fVar.c(interfaceC0725f, str, list, dVar);
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
            throw new jr.p();
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
            throw new jr.p();
        }

        public final f c(InterfaceC0725f uploadState, String str, List list, wn.d dVar) {
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
                throw new jr.p();
            }
        }

        public a e() {
            return this.f52679d;
        }

        public abstract String f();

        public List g() {
            return this.f52682o;
        }

        public abstract InterfaceC0725f i();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends f {
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f52710p;

            /* renamed from: q  reason: collision with root package name */
            private final String f52711q;

            /* renamed from: r  reason: collision with root package name */
            private final InterfaceC0725f f52712r;

            /* renamed from: s  reason: collision with root package name */
            private final String f52713s;

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
                    return new e(arrayList, parcel.readString(), (InterfaceC0725f) parcel.readParcelable(e.class.getClassLoader()), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final e[] newArray(int i10) {
                    return new e[i10];
                }
            }

            public /* synthetic */ e(List list, String str, InterfaceC0725f interfaceC0725f, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? InterfaceC0725f.a.f52714d : interfaceC0725f, (i10 & 8) != 0 ? null : str2);
            }

            public static /* synthetic */ e k(e eVar, List list, String str, InterfaceC0725f interfaceC0725f, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = eVar.f52710p;
                }
                if ((i10 & 2) != 0) {
                    str = eVar.f52711q;
                }
                if ((i10 & 4) != 0) {
                    interfaceC0725f = eVar.f52712r;
                }
                if ((i10 & 8) != 0) {
                    str2 = eVar.f52713s;
                }
                return eVar.j(list, str, interfaceC0725f, str2);
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
                if (Intrinsics.areEqual(this.f52710p, eVar.f52710p) && Intrinsics.areEqual(this.f52711q, eVar.f52711q) && Intrinsics.areEqual(this.f52712r, eVar.f52712r) && Intrinsics.areEqual(this.f52713s, eVar.f52713s)) {
                    return true;
                }
                return false;
            }

            @Override // wn.r2.f
            public String f() {
                return this.f52711q;
            }

            @Override // wn.r2.f
            public List g() {
                return this.f52710p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((this.f52710p.hashCode() * 31) + this.f52711q.hashCode()) * 31) + this.f52712r.hashCode()) * 31;
                String str = this.f52713s;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            @Override // wn.r2.f
            public InterfaceC0725f i() {
                return this.f52712r;
            }

            public final e j(List documents, String documentId, InterfaceC0725f uploadState, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new e(documents, documentId, uploadState, str);
            }

            public String toString() {
                List list = this.f52710p;
                String str = this.f52711q;
                InterfaceC0725f interfaceC0725f = this.f52712r;
                String str2 = this.f52713s;
                return "UploadDocument(documents=" + list + ", documentId=" + str + ", uploadState=" + interfaceC0725f + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f52710p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f52711q);
                dest.writeParcelable(this.f52712r, i10);
                dest.writeString(this.f52713s);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(List documents, String documentId, InterfaceC0725f uploadState, String str) {
                super(a.f52683d, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f52710p = documents;
                this.f52711q = documentId;
                this.f52712r = uploadState;
                this.f52713s = str;
            }
        }

        private f(a aVar, InterfaceC0725f interfaceC0725f, String str, List list) {
            this.f52679d = aVar;
            this.f52680e = interfaceC0725f;
            this.f52681i = str;
            this.f52682o = list;
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends f {
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f52690p;

            /* renamed from: q  reason: collision with root package name */
            private final String f52691q;

            /* renamed from: r  reason: collision with root package name */
            private final a f52692r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0725f f52693s;

            /* renamed from: t  reason: collision with root package name */
            private final wn.d f52694t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f52695u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f52696v;

            /* renamed from: w  reason: collision with root package name */
            private final String f52697w;

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
                    InterfaceC0725f interfaceC0725f = (InterfaceC0725f) parcel.readParcelable(b.class.getClassLoader());
                    wn.d dVar = (wn.d) parcel.readParcelable(b.class.getClassLoader());
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
                    return new b(arrayList, readString, valueOf, interfaceC0725f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final b[] newArray(int i10) {
                    return new b[i10];
                }
            }

            public /* synthetic */ b(List list, String str, a aVar, InterfaceC0725f interfaceC0725f, wn.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f52683d : aVar, (i10 & 8) != 0 ? InterfaceC0725f.a.f52714d : interfaceC0725f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ b k(b bVar, List list, String str, a aVar, InterfaceC0725f interfaceC0725f, wn.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = bVar.f52690p;
                }
                if ((i10 & 2) != 0) {
                    str = bVar.f52691q;
                }
                if ((i10 & 4) != 0) {
                    aVar = bVar.f52692r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0725f = bVar.f52693s;
                }
                if ((i10 & 16) != 0) {
                    dVar = bVar.f52694t;
                }
                if ((i10 & 32) != 0) {
                    z10 = bVar.f52695u;
                }
                if ((i10 & 64) != 0) {
                    z11 = bVar.f52696v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = bVar.f52697w;
                }
                boolean z12 = z11;
                String str3 = str2;
                wn.d dVar2 = dVar;
                boolean z13 = z10;
                return bVar.j(list, str, aVar, interfaceC0725f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // wn.r2.f
            public a e() {
                return this.f52692r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f52690p, bVar.f52690p) && Intrinsics.areEqual(this.f52691q, bVar.f52691q) && this.f52692r == bVar.f52692r && Intrinsics.areEqual(this.f52693s, bVar.f52693s) && Intrinsics.areEqual(this.f52694t, bVar.f52694t) && this.f52695u == bVar.f52695u && this.f52696v == bVar.f52696v && Intrinsics.areEqual(this.f52697w, bVar.f52697w)) {
                    return true;
                }
                return false;
            }

            @Override // wn.r2.f
            public String f() {
                return this.f52691q;
            }

            @Override // wn.r2.f
            public List g() {
                return this.f52690p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((((this.f52690p.hashCode() * 31) + this.f52691q.hashCode()) * 31) + this.f52692r.hashCode()) * 31) + this.f52693s.hashCode()) * 31;
                wn.d dVar = this.f52694t;
                int i10 = 0;
                if (dVar == null) {
                    hashCode = 0;
                } else {
                    hashCode = dVar.hashCode();
                }
                int hashCode3 = (((((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f52695u)) * 31) + Boolean.hashCode(this.f52696v)) * 31;
                String str = this.f52697w;
                if (str != null) {
                    i10 = str.hashCode();
                }
                return hashCode3 + i10;
            }

            @Override // wn.r2.f
            public InterfaceC0725f i() {
                return this.f52693s;
            }

            public final b j(List documents, String documentId, a captureState, InterfaceC0725f uploadState, wn.d dVar, boolean z10, boolean z11, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new b(documents, documentId, captureState, uploadState, dVar, z10, z11, str);
            }

            public final wn.d m() {
                return this.f52694t;
            }

            public final String n() {
                return this.f52697w;
            }

            public final boolean o() {
                return this.f52695u;
            }

            public final boolean p() {
                return this.f52696v;
            }

            public String toString() {
                List list = this.f52690p;
                String str = this.f52691q;
                a aVar = this.f52692r;
                InterfaceC0725f interfaceC0725f = this.f52693s;
                wn.d dVar = this.f52694t;
                boolean z10 = this.f52695u;
                boolean z11 = this.f52696v;
                String str2 = this.f52697w;
                return "ReviewCaptures(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0725f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f52690p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f52691q);
                dest.writeString(this.f52692r.name());
                dest.writeParcelable(this.f52693s, i10);
                dest.writeParcelable(this.f52694t, i10);
                dest.writeInt(this.f52695u ? 1 : 0);
                dest.writeInt(this.f52696v ? 1 : 0);
                dest.writeString(this.f52697w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(List documents, String documentId, a captureState, InterfaceC0725f uploadState, wn.d dVar, boolean z10, boolean z11, String str) {
                super(captureState, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f52690p = documents;
                this.f52691q = documentId;
                this.f52692r = captureState;
                this.f52693s = uploadState;
                this.f52694t = dVar;
                this.f52695u = z10;
                this.f52696v = z11;
                this.f52697w = str;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends f {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f52698p;

            /* renamed from: q  reason: collision with root package name */
            private final String f52699q;

            /* renamed from: r  reason: collision with root package name */
            private final a f52700r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0725f f52701s;

            /* renamed from: t  reason: collision with root package name */
            private final wn.d f52702t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f52703u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f52704v;

            /* renamed from: w  reason: collision with root package name */
            private final String f52705w;

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
                    InterfaceC0725f interfaceC0725f = (InterfaceC0725f) parcel.readParcelable(c.class.getClassLoader());
                    wn.d dVar = (wn.d) parcel.readParcelable(c.class.getClassLoader());
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
                    return new c(arrayList, readString, valueOf, interfaceC0725f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public /* synthetic */ c(List list, String str, a aVar, InterfaceC0725f interfaceC0725f, wn.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f52683d : aVar, (i10 & 8) != 0 ? InterfaceC0725f.a.f52714d : interfaceC0725f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ c k(c cVar, List list, String str, a aVar, InterfaceC0725f interfaceC0725f, wn.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = cVar.f52698p;
                }
                if ((i10 & 2) != 0) {
                    str = cVar.f52699q;
                }
                if ((i10 & 4) != 0) {
                    aVar = cVar.f52700r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0725f = cVar.f52701s;
                }
                if ((i10 & 16) != 0) {
                    dVar = cVar.f52702t;
                }
                if ((i10 & 32) != 0) {
                    z10 = cVar.f52703u;
                }
                if ((i10 & 64) != 0) {
                    z11 = cVar.f52704v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = cVar.f52705w;
                }
                boolean z12 = z11;
                String str3 = str2;
                wn.d dVar2 = dVar;
                boolean z13 = z10;
                return cVar.j(list, str, aVar, interfaceC0725f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // wn.r2.f
            public a e() {
                return this.f52700r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof c)) {
                    return false;
                }
                c cVar = (c) obj;
                if (Intrinsics.areEqual(this.f52698p, cVar.f52698p) && Intrinsics.areEqual(this.f52699q, cVar.f52699q) && this.f52700r == cVar.f52700r && Intrinsics.areEqual(this.f52701s, cVar.f52701s) && Intrinsics.areEqual(this.f52702t, cVar.f52702t) && this.f52703u == cVar.f52703u && this.f52704v == cVar.f52704v && Intrinsics.areEqual(this.f52705w, cVar.f52705w)) {
                    return true;
                }
                return false;
            }

            @Override // wn.r2.f
            public String f() {
                return this.f52699q;
            }

            @Override // wn.r2.f
            public List g() {
                return this.f52698p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3 = this.f52698p.hashCode() * 31;
                String str = this.f52699q;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f52700r.hashCode()) * 31) + this.f52701s.hashCode()) * 31;
                wn.d dVar = this.f52702t;
                if (dVar == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = dVar.hashCode();
                }
                int hashCode5 = (((((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f52703u)) * 31) + Boolean.hashCode(this.f52704v)) * 31;
                String str2 = this.f52705w;
                if (str2 != null) {
                    i10 = str2.hashCode();
                }
                return hashCode5 + i10;
            }

            @Override // wn.r2.f
            public InterfaceC0725f i() {
                return this.f52701s;
            }

            public final c j(List documents, String str, a captureState, InterfaceC0725f uploadState, wn.d dVar, boolean z10, boolean z11, String str2) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new c(documents, str, captureState, uploadState, dVar, z10, z11, str2);
            }

            public final String m() {
                return this.f52705w;
            }

            public final boolean n() {
                return this.f52703u;
            }

            public final boolean o() {
                return this.f52704v;
            }

            public String toString() {
                List list = this.f52698p;
                String str = this.f52699q;
                a aVar = this.f52700r;
                InterfaceC0725f interfaceC0725f = this.f52701s;
                wn.d dVar = this.f52702t;
                boolean z10 = this.f52703u;
                boolean z11 = this.f52704v;
                String str2 = this.f52705w;
                return "ReviewCapturesWithoutDocumentId(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0725f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f52698p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f52699q);
                dest.writeString(this.f52700r.name());
                dest.writeParcelable(this.f52701s, i10);
                dest.writeParcelable(this.f52702t, i10);
                dest.writeInt(this.f52703u ? 1 : 0);
                dest.writeInt(this.f52704v ? 1 : 0);
                dest.writeString(this.f52705w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(List documents, String str, a captureState, InterfaceC0725f uploadState, wn.d dVar, boolean z10, boolean z11, String str2) {
                super(captureState, uploadState, str, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f52698p = documents;
                this.f52699q = str;
                this.f52700r = captureState;
                this.f52701s = uploadState;
                this.f52702t = dVar;
                this.f52703u = z10;
                this.f52704v = z11;
                this.f52705w = str2;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends f {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final a f52706p;

            /* renamed from: q  reason: collision with root package name */
            private final InterfaceC0725f f52707q;

            /* renamed from: r  reason: collision with root package name */
            private final String f52708r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f52709s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    boolean z10;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    a valueOf = a.valueOf(parcel.readString());
                    InterfaceC0725f interfaceC0725f = (InterfaceC0725f) parcel.readParcelable(d.class.getClassLoader());
                    String readString = parcel.readString();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    return new d(valueOf, interfaceC0725f, readString, z10);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final d[] newArray(int i10) {
                    return new d[i10];
                }
            }

            public /* synthetic */ d(a aVar, InterfaceC0725f interfaceC0725f, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this((i10 & 1) != 0 ? a.f52683d : aVar, (i10 & 2) != 0 ? InterfaceC0725f.a.f52714d : interfaceC0725f, str, (i10 & 8) != 0 ? false : z10);
            }

            public static /* synthetic */ d k(d dVar, a aVar, InterfaceC0725f interfaceC0725f, String str, boolean z10, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    aVar = dVar.f52706p;
                }
                if ((i10 & 2) != 0) {
                    interfaceC0725f = dVar.f52707q;
                }
                if ((i10 & 4) != 0) {
                    str = dVar.f52708r;
                }
                if ((i10 & 8) != 0) {
                    z10 = dVar.f52709s;
                }
                return dVar.j(aVar, interfaceC0725f, str, z10);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // wn.r2.f
            public a e() {
                return this.f52706p;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof d)) {
                    return false;
                }
                d dVar = (d) obj;
                if (this.f52706p == dVar.f52706p && Intrinsics.areEqual(this.f52707q, dVar.f52707q) && Intrinsics.areEqual(this.f52708r, dVar.f52708r) && this.f52709s == dVar.f52709s) {
                    return true;
                }
                return false;
            }

            @Override // wn.r2.f
            public String f() {
                return this.f52708r;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f52706p.hashCode() * 31) + this.f52707q.hashCode()) * 31;
                String str = this.f52708r;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f52709s);
            }

            @Override // wn.r2.f
            public InterfaceC0725f i() {
                return this.f52707q;
            }

            public final d j(a captureState, InterfaceC0725f uploadState, String str, boolean z10) {
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new d(captureState, uploadState, str, z10);
            }

            public final boolean m() {
                return this.f52709s;
            }

            public String toString() {
                a aVar = this.f52706p;
                InterfaceC0725f interfaceC0725f = this.f52707q;
                String str = this.f52708r;
                boolean z10 = this.f52709s;
                return "Start(captureState=" + aVar + ", uploadState=" + interfaceC0725f + ", documentId=" + str + ", shouldShowUploadOptionsDialog=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f52706p.name());
                dest.writeParcelable(this.f52707q, i10);
                dest.writeString(this.f52708r);
                dest.writeInt(this.f52709s ? 1 : 0);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(a captureState, InterfaceC0725f uploadState, String str, boolean z10) {
                super(captureState, uploadState, str, CollectionsKt.l(), null);
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f52706p = captureState;
                this.f52707q = uploadState;
                this.f52708r = str;
                this.f52709s = z10;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f52718a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f52719b;

        static {
            int[] iArr = new int[ap.g1.values().length];
            try {
                iArr[ap.g1.f5897d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ap.g1.f5898e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[ap.g1.f5899i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f52718a = iArr;
            int[] iArr2 = new int[f.a.values().length];
            try {
                iArr2[f.a.f52683d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[f.a.f52684e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[f.a.f52685i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[f.a.f52686o.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[f.a.f52687p.ordinal()] = 5;
            } catch (NoSuchFieldError unused8) {
            }
            f52719b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f52720d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f52721e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f52722i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f52723o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, r2 r2Var, String str, Continuation continuation) {
            super(2, continuation);
            this.f52721e = aVar;
            this.f52722i = r2Var;
            this.f52723o = str;
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
                return Unit.f33074a;
            }
            cVar.e(new f.b(cVar2.g(), str, null, new f.InterfaceC0725f.d(str), null, false, false, cVar2.m(), 116, null));
            return Unit.f33074a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f52721e, this.f52722i, this.f52723o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            um.r d10;
            pr.b.f();
            if (this.f52720d == 0) {
                kotlin.c.b(obj);
                um.h c10 = this.f52721e.c();
                r2 r2Var = this.f52722i;
                final String str = this.f52723o;
                d10 = um.z.d(r2Var, null, new Function1() { // from class: wn.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.h.k(str, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f33074a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f52724d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f52725e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f52726i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f.InterfaceC0725f f52727o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, r2 r2Var, f.InterfaceC0725f interfaceC0725f, Continuation continuation) {
            super(2, continuation);
            this.f52725e = aVar;
            this.f52726i = r2Var;
            this.f52727o = interfaceC0725f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(f.InterfaceC0725f interfaceC0725f, r.c cVar) {
            cVar.e(f.d((f) cVar.c(), new f.InterfaceC0725f.c(((f.InterfaceC0725f.d) interfaceC0725f).a()), null, null, null, 14, null));
            return Unit.f33074a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f52725e, this.f52726i, this.f52727o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            um.r d10;
            pr.b.f();
            if (this.f52724d == 0) {
                kotlin.c.b(obj);
                um.h c10 = this.f52725e.c();
                r2 r2Var = this.f52726i;
                final f.InterfaceC0725f interfaceC0725f = this.f52727o;
                d10 = um.z.d(r2Var, null, new Function1() { // from class: wn.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.i.k(r2.f.InterfaceC0725f.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f33074a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public r2(v4.h imageLoader, Context applicationContext, ap.c1 permissionRequestWorkflow, wn.c documentCameraWorker, v2.b documentsSelectWorkerFactory, a.C0231a documentCreateWorker, c.a documentLoadWorker, b.a documentFileUploadWorker, a.C0774a documentFileDeleteWorker, d.a documentSubmitWorker, sp.b navigationStateManager, op.c externalEventLogger) {
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
        this.f52596a = imageLoader;
        this.f52597b = applicationContext;
        this.f52598c = permissionRequestWorkflow;
        this.f52599d = documentCameraWorker;
        this.f52600e = documentsSelectWorkerFactory;
        this.f52601f = documentCreateWorker;
        this.f52602g = documentLoadWorker;
        this.f52603h = documentFileUploadWorker;
        this.f52604i = documentFileDeleteWorker;
        this.f52605j = documentSubmitWorker;
        this.f52606k = navigationStateManager;
        this.f52607l = externalEventLogger;
    }

    private final List A0(u uVar, final k.a aVar) {
        return new b.a().a(uVar.b(), new Function1() { // from class: wn.v0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit C0;
                C0 = r2.C0(r2.this, aVar, (k5) obj);
                return C0;
            }
        }).a(uVar.c(), new Function1() { // from class: wn.w0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit D0;
                D0 = r2.D0(r2.this, aVar, (k5) obj);
                return D0;
            }
        }).a(uVar.d(), new Function1() { // from class: wn.x0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E0;
                E0 = r2.E0(r2.this, aVar, (k5) obj);
                return E0;
            }
        }).a(uVar.a(), new Function1() { // from class: wn.y0
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
        r2Var.L0(aVar, a.b.f52609a);
        return Unit.f33074a;
    }

    private final List B0(b3 b3Var, final k.a aVar) {
        return new b.a().a(b3Var.b(), new Function1() { // from class: wn.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit G0;
                G0 = r2.G0(r2.this, aVar, (k5) obj);
                return G0;
            }
        }).a(b3Var.c(), new Function1() { // from class: wn.b1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit H0;
                H0 = r2.H0(r2.this, aVar, (k5) obj);
                return H0;
            }
        }).a(b3Var.d(), new Function1() { // from class: wn.c1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit I0;
                I0 = r2.I0(r2.this, aVar, (k5) obj);
                return I0;
            }
        }).b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r B1(final r2 r2Var, final f fVar, final c1.a it) {
        um.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = um.z.d(r2Var, null, new Function1() { // from class: wn.z0
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
        r2Var.L0(aVar, a.g.f52615a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f52718a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new jr.p();
            }
            action.e(fVar.a(f.a.f52683d));
        } else {
            wn.c cVar = r2Var.f52599d;
            String string = r2Var.f52597b.getString(cp.e.f20638a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f52685i);
            } else {
                a10 = fVar.a(f.a.f52683d);
            }
            action.e(a10);
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f52616a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r D1(r2 r2Var, final f fVar, final c.b it) {
        um.r d10;
        um.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0240b) {
            d11 = um.z.d(r2Var, null, new Function1() { // from class: wn.d1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit E1;
                    E1 = r2.E1(r2.f.this, it, (r.c) obj);
                    return E1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = um.z.d(r2Var, null, new Function1() { // from class: wn.e1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit F1;
                    F1 = r2.F1(c.b.this, (r.c) obj);
                    return F1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new jr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f52618a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(f fVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.b bVar2 = (f.b) fVar;
        action.e(f.b.k(bVar2, ((c.b.C0240b) bVar).a(), null, null, new f.InterfaceC0725f.c(bVar2.f()), null, false, false, null, 214, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.e.f52612a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F1(c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0723c(((c.b.a) bVar).a()));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.g.f52615a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f52615a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f52616a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f52616a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f52618a);
        return Unit.f33074a;
    }

    private final void I1(f.a aVar, final b bVar, final f fVar, k.a aVar2) {
        v2 e10;
        int i10 = g.f52719b[aVar.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4 && i10 != 5) {
                    throw new jr.p();
                }
                if (fVar.e() == f.a.f52686o) {
                    e10 = this.f52600e.c();
                } else {
                    e10 = this.f52600e.e();
                }
                um.w.l(aVar2, e10, Reflection.typeOf(v2.class), "", new Function1() { // from class: wn.h1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        um.r N1;
                        N1 = r2.N1(r2.this, bVar, fVar, (v2.c) obj);
                        return N1;
                    }
                });
                return;
            }
            um.w.l(aVar2, this.f52599d, Reflection.typeOf(wn.c.class), "", new Function1() { // from class: wn.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    um.r K1;
                    K1 = r2.K1(r2.this, bVar, (c.b) obj);
                    return K1;
                }
            });
        }
    }

    private final void J1(final f.InterfaceC0725f interfaceC0725f, b bVar, f fVar, k.a aVar) {
        if (Intrinsics.areEqual(interfaceC0725f, f.InterfaceC0725f.a.f52714d)) {
            if (fVar.f() == null) {
                um.w.l(aVar, this.f52601f.a(bVar.v(), bVar.k(), bVar.g(), bVar.e()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.a.class), "", new Function1() { // from class: wn.j1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        um.r R1;
                        R1 = r2.R1(r2.this, (a.b) obj);
                        return R1;
                    }
                });
                return;
            }
            return;
        }
        final d.b bVar2 = null;
        if (interfaceC0725f instanceof f.InterfaceC0725f.d) {
            ArrayList arrayList = new ArrayList();
            for (Object obj : fVar.g()) {
                if (obj instanceof d.a) {
                    arrayList.add(obj);
                }
            }
            if (arrayList.isEmpty()) {
                aVar.a("upload_complete", new i(aVar, this, interfaceC0725f, null));
                return;
            }
            for (final d.a aVar2 : CollectionsKt.a1(arrayList, 3)) {
                um.w.l(aVar, this.f52603h.a(bVar.v(), ((f.InterfaceC0725f.d) interfaceC0725f).a(), aVar2), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.b.class), aVar2.c(), new Function1() { // from class: wn.k1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        um.r U1;
                        U1 = r2.U1(r2.this, interfaceC0725f, aVar2, (b.AbstractC0234b) obj2);
                        return U1;
                    }
                });
            }
        } else if (interfaceC0725f instanceof f.InterfaceC0725f.b) {
            if (fVar instanceof f.b) {
                f.b bVar3 = (f.b) fVar;
                wn.d m10 = bVar3.m();
                if (m10 instanceof d.b) {
                    bVar2 = (d.b) m10;
                }
                if (bVar2 == null) {
                    return;
                }
                um.w.l(aVar, this.f52604i.a(bVar.v(), bVar3.f(), bVar2), Reflection.typeOf(yn.a.class), "", new Function1() { // from class: wn.l1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        um.r Z1;
                        Z1 = r2.Z1(r2.this, bVar2, interfaceC0725f, (a.b) obj2);
                        return Z1;
                    }
                });
            }
        } else if (!(interfaceC0725f instanceof f.InterfaceC0725f.c)) {
            throw new jr.p();
        }
    }

    private final void K0(b bVar, f fVar) {
        op.b bVar2;
        if (fVar.e() == f.a.f52685i) {
            bVar2 = b.d.f44597a;
        } else if (fVar instanceof f.d) {
            bVar2 = b.C0553b.f44595a;
        } else if (fVar instanceof f.b) {
            bVar2 = b.c.f44596a;
        } else if (fVar instanceof f.c) {
            bVar2 = b.c.f44596a;
        } else if (fVar instanceof f.e) {
            bVar2 = b.a.f44594a;
        } else {
            throw new jr.p();
        }
        this.f52607l.c(new i.b(bVar.i(), bVar2));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r K1(r2 r2Var, final b bVar, final c.b it) {
        um.r d10;
        um.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0717b) {
            d11 = um.z.d(r2Var, null, new Function1() { // from class: wn.d2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit L1;
                    L1 = r2.L1(c.b.this, bVar, (r.c) obj);
                    return L1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, c.b.a.f52456a)) {
            d10 = um.z.d(r2Var, null, new Function1() { // from class: wn.e2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M1;
                    M1 = r2.M1((r.c) obj);
                    return M1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new jr.p();
        }
    }

    private final void L0(k.a aVar, final a aVar2) {
        um.r d10;
        if (Intrinsics.areEqual(aVar2, a.b.f52609a)) {
            d10 = um.z.d(this, null, new Function1() { // from class: wn.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M0;
                    M0 = r2.M0((r.c) obj);
                    return M0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.C0722a.f52608a)) {
            d10 = um.z.d(this, null, new Function1() { // from class: wn.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = r2.N0((r.c) obj);
                    return N0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.g.f52615a)) {
            d10 = um.z.d(this, null, new Function1() { // from class: wn.s1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = r2.O0((r.c) obj);
                    return O0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.h.f52616a)) {
            d10 = um.z.d(this, null, new Function1() { // from class: wn.t1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P0;
                    P0 = r2.P0((r.c) obj);
                    return P0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.j.f52618a)) {
            d10 = um.z.d(this, null, new Function1() { // from class: wn.u1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q0;
                    Q0 = r2.Q0((r.c) obj);
                    return Q0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.e.f52612a)) {
            d10 = um.z.d(this, null, new Function1() { // from class: wn.v1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R0;
                    R0 = r2.R0((r.c) obj);
                    return R0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.c.f52610a)) {
            d10 = um.z.d(this, null, new Function1() { // from class: wn.w1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S0;
                    S0 = r2.S0((r.c) obj);
                    return S0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.f) {
            d10 = um.z.d(this, null, new Function1() { // from class: wn.x1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = r2.T0(r2.a.this, (r.c) obj);
                    return T0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.d.f52611a)) {
            d10 = um.z.d(this, null, new Function1() { // from class: wn.y1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = r2.U0((r.c) obj);
                    return U0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.i) {
            d10 = um.z.d(this, null, new Function1() { // from class: wn.z1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V0;
                    V0 = r2.V0(r2.a.this, (r.c) obj);
                    return V0;
                }
            }, 1, null);
        } else {
            throw new jr.p();
        }
        aVar.c().d(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(c.b bVar, b bVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.M0(((f) action.c()).g(), new d.a(((c.b.C0717b) bVar).a(), wn.a.f52429i, 0, 4, null)), bVar2.e()), ((f) action.c()).f(), null, ((f) action.c()).i(), null, false, false, null, 244, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.b.f52645a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f52683d));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.a.f52644a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r N1(final r2 r2Var, final b bVar, final f fVar, final v2.c it) {
        um.r d10;
        um.r d11;
        um.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof v2.c.C0728c) {
            d12 = um.z.d(r2Var, null, new Function1() { // from class: wn.f2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O1;
                    O1 = r2.O1(v2.c.this, bVar, (r.c) obj);
                    return O1;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof v2.c.b) {
            d11 = um.z.d(r2Var, null, new Function1() { // from class: wn.g2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P1;
                    P1 = r2.P1(v2.c.this, bVar, r2Var, (r.c) obj);
                    return P1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, v2.c.a.f52766a)) {
            d10 = um.z.d(r2Var, null, new Function1() { // from class: wn.h2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q1;
                    Q1 = r2.Q1(r2.f.this, (r.c) obj);
                    return Q1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new jr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f52686o).b(false));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(v2.c cVar, b bVar, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0725f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.C0728c) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, null, 244, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f52687p).b(false));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P1(v2.c cVar, b bVar, r2 r2Var, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0725f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.b) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, r2Var.f52597b.getString(cp.e.f20647j), 116, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f52684e).b(false));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(fVar.a(f.a.f52683d));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(true));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r R1(r2 r2Var, final a.b it) {
        um.r d10;
        um.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a.b.C0233b) {
            d11 = um.z.d(r2Var, null, new Function1() { // from class: wn.a2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S1;
                    S1 = r2.S1(a.b.this, (r.c) obj);
                    return S1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof a.b.C0232a) {
            d10 = um.z.d(r2Var, null, new Function1() { // from class: wn.c2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T1;
                    T1 = r2.T1(a.b.this, (r.c) obj);
                    return T1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new jr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(false));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0233b c0233b = (a.b.C0233b) bVar;
        action.e(f.d((f) action.c(), new f.InterfaceC0725f.c(c0233b.a()), c0233b.a(), null, null, 12, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (action.c() instanceof f.b) {
            a.f fVar = (a.f) aVar;
            action.e(f.d((f) action.c(), new f.InterfaceC0725f.b(fVar.b()), null, null, fVar.a(), 6, null));
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0232a c0232a = (a.b.C0232a) bVar;
        if (!c0232a.a().isRecoverable()) {
            action.d(new c.C0723c(c0232a.a()));
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f fVar = (f) action.c();
        if (fVar instanceof f.b) {
            action.e(f.b.k((f.b) fVar, null, null, null, null, null, false, false, null, 127, null));
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r U1(final r2 r2Var, final f.InterfaceC0725f interfaceC0725f, final d.a aVar, final b.AbstractC0234b response) {
        um.r d10;
        um.r d11;
        um.r d12;
        um.r d13;
        Intrinsics.checkNotNullParameter(response, "response");
        if (response instanceof b.AbstractC0234b.d) {
            d13 = um.z.d(r2Var, null, new Function1() { // from class: wn.i2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V1;
                    V1 = r2.V1(r2.f.InterfaceC0725f.this, response, (r.c) obj);
                    return V1;
                }
            }, 1, null);
            return d13;
        } else if (response instanceof b.AbstractC0234b.c) {
            d12 = um.z.d(r2Var, null, new Function1() { // from class: wn.j2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit W1;
                    W1 = r2.W1(d.a.this, response, (r.c) obj);
                    return W1;
                }
            }, 1, null);
            return d12;
        } else if (response instanceof b.AbstractC0234b.a) {
            d11 = um.z.d(r2Var, null, new Function1() { // from class: wn.k2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit X1;
                    X1 = r2.X1(d.a.this, interfaceC0725f, response, r2Var, (r.c) obj);
                    return X1;
                }
            }, 1, null);
            return d11;
        } else if (response instanceof b.AbstractC0234b.C0235b) {
            d10 = um.z.d(r2Var, null, new Function1() { // from class: wn.l2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y1;
                    Y1 = r2.Y1(b.AbstractC0234b.this, (r.c) obj);
                    return Y1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new jr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.i iVar = (a.i) aVar;
        action.e(new f.e(((f) action.c()).g(), iVar.a(), new f.InterfaceC0725f.c(iVar.a()), null, 8, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(f.InterfaceC0725f interfaceC0725f, b.AbstractC0234b abstractC0234b, r.c action) {
        f.InterfaceC0725f cVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> g10 = ((f) action.c()).g();
        ArrayList<wn.d> arrayList = new ArrayList(CollectionsKt.w(g10, 10));
        for (Parcelable parcelable : g10) {
            b.AbstractC0234b.d dVar = (b.AbstractC0234b.d) abstractC0234b;
            if (Intrinsics.areEqual(parcelable, dVar.b())) {
                parcelable = dVar.a();
            }
            arrayList.add(parcelable);
        }
        if (!arrayList.isEmpty()) {
            for (wn.d dVar2 : arrayList) {
                if (dVar2 instanceof d.a) {
                    cVar = new f.InterfaceC0725f.d(((f.InterfaceC0725f.d) interfaceC0725f).a());
                    break;
                }
            }
        }
        cVar = new f.InterfaceC0725f.c(((f.InterfaceC0725f.d) interfaceC0725f).a());
        action.e(f.d((f) action.c(), cVar, null, arrayList, null, 10, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(d.a aVar, b.AbstractC0234b abstractC0234b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> g10 = ((f) action.c()).g();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(g10, 10));
        for (Parcelable parcelable : g10) {
            if ((parcelable instanceof d.a) && Intrinsics.areEqual(parcelable, aVar)) {
                parcelable = d.a.b((d.a) parcelable, null, null, ((b.AbstractC0234b.c) abstractC0234b).a(), 3, null);
            }
            arrayList.add(parcelable);
        }
        action.e(f.d((f) action.c(), ((f) action.c()).i(), null, arrayList, null, 10, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0722a.f52608a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(d.a aVar, f.InterfaceC0725f interfaceC0725f, b.AbstractC0234b abstractC0234b, r2 r2Var, r.c action) {
        f.InterfaceC0725f dVar;
        String d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List I0 = CollectionsKt.I0(((f) action.c()).g(), aVar);
        List<wn.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (wn.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0725f.d(((f.InterfaceC0725f.d) interfaceC0725f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0725f.c(((f.InterfaceC0725f.d) interfaceC0725f).a());
        f.InterfaceC0725f interfaceC0725f2 = dVar;
        String a10 = ((f.InterfaceC0725f.d) interfaceC0725f).a();
        f.a aVar2 = f.a.f52683d;
        d10 = u2.d(((b.AbstractC0234b.a) abstractC0234b).a(), r2Var.f52597b);
        action.e(new f.b(I0, a10, aVar2, interfaceC0725f2, null, false, false, d10, 80, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f52609a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(b.AbstractC0234b abstractC0234b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0723c(((b.AbstractC0234b.C0235b) abstractC0234b).a()));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f52618a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r Z1(r2 r2Var, final d.b bVar, final f.InterfaceC0725f interfaceC0725f, final a.b response) {
        um.r d10;
        Intrinsics.checkNotNullParameter(response, "response");
        d10 = um.z.d(r2Var, null, new Function1() { // from class: wn.n2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit a22;
                a22 = r2.a2(d.b.this, interfaceC0725f, response, (r.c) obj);
                return a22;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f52612a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(d.b bVar, f.InterfaceC0725f interfaceC0725f, a.b bVar2, r.c action) {
        f.b bVar3;
        f.InterfaceC0725f dVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof f.b) {
            bVar3 = (f.b) c10;
        } else {
            bVar3 = null;
        }
        f.b bVar4 = bVar3;
        if (bVar4 == null) {
            return Unit.f33074a;
        }
        List I0 = CollectionsKt.I0(bVar4.g(), bVar);
        List<wn.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (wn.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0725f.d(((f.InterfaceC0725f.b) interfaceC0725f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0725f.c(((f.InterfaceC0725f.b) interfaceC0725f).a());
        f.InterfaceC0725f interfaceC0725f2 = dVar;
        if (bVar2 instanceof a.b.C0776b) {
            action.e(f.b.k(bVar4, I0, null, null, interfaceC0725f2, null, false, false, null, 230, null));
        } else if (bVar2 instanceof a.b.C0775a) {
            action.d(new c.C0723c(((a.b.C0775a) bVar2).a()));
        } else {
            throw new jr.p();
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b1(r2 r2Var, k.a aVar, f fVar, d.b document) {
        Intrinsics.checkNotNullParameter(document, "document");
        r2Var.L0(aVar, new a.f(((f.b) fVar).f(), document));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c1(r2 r2Var, k.a aVar, f fVar) {
        r2Var.L0(aVar, new a.i(((f.b) fVar).f()));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f52609a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0722a.f52608a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f52611a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r g1(final r2 r2Var, final f fVar, final c1.a it) {
        um.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = um.z.d(r2Var, null, new Function1() { // from class: wn.i1
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
        int i10 = g.f52718a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new jr.p();
            }
            action.e(fVar.a(f.a.f52683d));
        } else {
            wn.c cVar = r2Var.f52599d;
            String string = r2Var.f52597b.getString(cp.e.f20638a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f52685i);
            } else {
                a10 = fVar.a(f.a.f52683d);
            }
            action.e(a10);
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f52610a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f52610a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f52615a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f52616a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f52618a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f52612a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(d.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1() {
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f52609a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0722a.f52608a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f52611a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r t1(final r2 r2Var, final f fVar, final c1.a it) {
        um.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = um.z.d(r2Var, null, new Function1() { // from class: wn.o1
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
        int i10 = g.f52718a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new jr.p();
            }
            action.e(fVar.a(f.a.f52683d));
        } else {
            wn.c cVar = r2Var.f52599d;
            String string = r2Var.f52597b.getString(cp.e.f20638a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f52685i);
            } else {
                a10 = fVar.a(f.a.f52683d);
            }
            action.e(a10);
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f52610a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r w1(r2 r2Var, final d.b it) {
        um.r d10;
        um.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, d.b.C0242b.f19223a)) {
            d11 = um.z.d(r2Var, null, new Function1() { // from class: wn.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit x12;
                    x12 = r2.x1((r.c) obj);
                    return x12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof d.b.a) {
            d10 = um.z.d(r2Var, null, new Function1() { // from class: wn.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = r2.y1(d.b.this, (r.c) obj);
                    return y12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new jr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.d.f52647a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(d.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0723c(((d.b.a) bVar).a()));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f52609a);
        return Unit.f33074a;
    }

    @Override // um.k
    /* renamed from: J0 */
    public f d(b props, um.i iVar) {
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
                Object readParcelable = obtain.readParcelable(um.i.class.getClassLoader());
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
        if (Intrinsics.areEqual(w10, e.a.f52677d)) {
            return new f.d(null, null, props.f(), false, 11, null);
        }
        if (w10 instanceof e.b) {
            return new f.b(CollectionsKt.l(), ((e.b) props.w()).a(), null, null, null, true, false, null, 220, null);
        }
        throw new jr.p();
    }

    @Override // um.k
    /* renamed from: W0 */
    public Object f(b renderProps, final f renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        this.f52606k.c(renderProps.b(), renderProps.c(), !(renderState instanceof f.e));
        I1(renderState.e(), renderProps, renderState, context);
        J1(renderState.i(), renderProps, renderState, context);
        K0(renderProps, renderState);
        if (renderState instanceof f.d) {
            Object iVar = new wn.i(wp.c.a(renderProps.l().a()), A0(renderProps.l().a(), context), this.f52606k.b(), new Function0() { // from class: wn.y
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit X0;
                    X0 = r2.X0(r2.this, context);
                    return X0;
                }
            }, new Function0() { // from class: wn.a0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Y0;
                    Y0 = r2.Y0(r2.this, context);
                    return Y0;
                }
            });
            f.d dVar = (f.d) renderState;
            if (dVar.m()) {
                iVar = xo.d.a(wp.m.f52983a.j(wp.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: wn.m0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit j12;
                        j12 = r2.j1(r2.this, context);
                        return j12;
                    }
                }, renderProps.l().b().a()), iVar, "document_upload_options_dialog");
            }
            boolean z10 = dVar.e() == f.a.f52684e;
            ap.d0 d0Var = ap.d0.f5871d;
            String s10 = renderProps.s();
            String str = s10 != null ? s10 : "";
            String r10 = renderProps.r();
            if (r10 == null) {
                r10 = this.f52597b.getString(cp.e.f20640c);
                Intrinsics.checkNotNullExpressionValue(r10, "getString(...)");
            }
            Context context2 = this.f52597b;
            String string = context2.getString(cp.e.f20639b, kp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return ap.l1.e(iVar, context, z10, d0Var, false, str, r10, string, renderProps.q(), renderProps.p(), null, null, null, this.f52598c, renderProps.x(), null, new Function1() { // from class: wn.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    um.r B1;
                    B1 = r2.B1(r2.this, renderState, (c1.a) obj);
                    return B1;
                }
            }, 19976, null);
        } else if (renderState instanceof f.b) {
            f.b bVar = (f.b) renderState;
            if (bVar.o()) {
                um.w.l(context, this.f52602g.a(renderProps.v(), bVar.f()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.c.class), "", new Function1() { // from class: wn.o0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        um.r D1;
                        D1 = r2.D1(r2.this, renderState, (c.b) obj);
                        return D1;
                    }
                });
            }
            d.b bVar2 = new d.b(this.f52596a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), bVar.g(), this.f52606k.b(), new Function0() { // from class: wn.p0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit G1;
                    G1 = r2.G1(r2.this, context);
                    return G1;
                }
            }, new Function0() { // from class: wn.q0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit H1;
                    H1 = r2.H1(r2.this, context);
                    return H1;
                }
            }, new Function0() { // from class: wn.r0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Z0;
                    Z0 = r2.Z0(r2.this, context);
                    return Z0;
                }
            }, new Function0() { // from class: wn.s0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit a12;
                    a12 = r2.a1(r2.this, context);
                    return a12;
                }
            }, new Function1() { // from class: wn.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit b12;
                    b12 = r2.b1(r2.this, context, renderState, (d.b) obj);
                    return b12;
                }
            }, new Function0() { // from class: wn.j0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit c12;
                    c12 = r2.c1(r2.this, context, renderState);
                    return c12;
                }
            }, new Function0() { // from class: wn.u0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit d12;
                    d12 = r2.d1(r2.this, context);
                    return d12;
                }
            }, new Function0() { // from class: wn.f1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit e12;
                    e12 = r2.e1(r2.this, context);
                    return e12;
                }
            }, bVar.o(), bVar.g().size() < renderProps.e(), !bVar.g().isEmpty() && Intrinsics.areEqual(bVar.i(), new f.InterfaceC0725f.c(bVar.f())), bVar.n(), new Function0() { // from class: wn.q1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f12;
                    f12 = r2.f1(r2.this, context);
                    return f12;
                }
            }, renderProps.x());
            boolean z11 = bVar.e() == f.a.f52684e;
            ap.d0 d0Var2 = ap.d0.f5871d;
            String s11 = renderProps.s();
            if (s11 == null) {
                s11 = "";
            }
            String r11 = renderProps.r();
            if (r11 == null) {
                r11 = this.f52597b.getString(cp.e.f20640c);
                Intrinsics.checkNotNullExpressionValue(r11, "getString(...)");
            }
            Context context3 = this.f52597b;
            String string2 = context3.getString(cp.e.f20639b, kp.f.b(context3));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            xo.c e10 = ap.l1.e(bVar2, context, z11, d0Var2, false, s11, r11, string2, renderProps.q(), renderProps.p(), null, null, null, this.f52598c, renderProps.x(), null, new Function1() { // from class: wn.b2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    um.r g12;
                    g12 = r2.g1(r2.this, renderState, (c1.a) obj);
                    return g12;
                }
            }, 19976, null);
            if (bVar.p()) {
                return xo.d.a(wp.m.f52983a.j(wp.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: wn.m2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i12;
                        i12 = r2.i1(r2.this, context);
                        return i12;
                    }
                }, renderProps.l().b().a()), e10, "document_upload_screen");
            }
            return new xo.c(e10, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.c) {
            f.c cVar = (f.c) renderState;
            String f10 = cVar.f();
            if (f10 != null) {
                context.a(f10, new h(context, this, f10, null));
            }
            d.b bVar3 = new d.b(this.f52596a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), cVar.g(), this.f52606k.b(), new Function0() { // from class: wn.o2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit k12;
                    k12 = r2.k1(r2.this, context);
                    return k12;
                }
            }, new Function0() { // from class: wn.p2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit l12;
                    l12 = r2.l1(r2.this, context);
                    return l12;
                }
            }, new Function0() { // from class: wn.q2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m12;
                    m12 = r2.m1(r2.this, context);
                    return m12;
                }
            }, new Function0() { // from class: wn.z
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit n12;
                    n12 = r2.n1(r2.this, context);
                    return n12;
                }
            }, new Function1() { // from class: wn.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o12;
                    o12 = r2.o1((d.b) obj);
                    return o12;
                }
            }, new Function0() { // from class: wn.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit p12;
                    p12 = r2.p1();
                    return p12;
                }
            }, new Function0() { // from class: wn.d0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit q12;
                    q12 = r2.q1(r2.this, context);
                    return q12;
                }
            }, new Function0() { // from class: wn.e0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit r12;
                    r12 = r2.r1(r2.this, context);
                    return r12;
                }
            }, cVar.n(), cVar.g().size() < renderProps.e(), false, cVar.m(), new Function0() { // from class: wn.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit s12;
                    s12 = r2.s1(r2.this, context);
                    return s12;
                }
            }, renderProps.x());
            boolean z12 = cVar.e() == f.a.f52684e;
            ap.d0 d0Var3 = ap.d0.f5871d;
            String s12 = renderProps.s();
            if (s12 == null) {
                s12 = "";
            }
            String r12 = renderProps.r();
            if (r12 == null) {
                r12 = this.f52597b.getString(cp.e.f20640c);
                Intrinsics.checkNotNullExpressionValue(r12, "getString(...)");
            }
            Context context4 = this.f52597b;
            String string3 = context4.getString(cp.e.f20639b, kp.f.b(context4));
            Intrinsics.checkNotNullExpressionValue(string3, "getString(...)");
            xo.c e11 = ap.l1.e(bVar3, context, z12, d0Var3, false, s12, r12, string3, renderProps.q(), renderProps.p(), null, null, null, this.f52598c, renderProps.x(), null, new Function1() { // from class: wn.g0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    um.r t12;
                    t12 = r2.t1(r2.this, renderState, (c1.a) obj);
                    return t12;
                }
            }, 19976, null);
            if (cVar.o()) {
                return xo.d.a(wp.m.f52983a.j(wp.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: wn.h0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v12;
                        v12 = r2.v1(r2.this, context);
                        return v12;
                    }
                }, renderProps.l().b().a()), e11, "document_upload_screen");
            }
            return new xo.c(e11, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.e) {
            um.w.l(context, this.f52605j.a(renderProps.v(), renderProps.j(), renderProps.i(), renderProps.h(), ((f.e) renderState).g()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.d.class), "", new Function1() { // from class: wn.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    um.r w12;
                    w12 = r2.w1(r2.this, (d.b) obj);
                    return w12;
                }
            });
            sp.b.d(this.f52606k, false, false, false, 4, null);
            return new d.a(renderProps.o(), renderProps.m(), this.f52606k.b(), new Function0() { // from class: wn.k0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit z13;
                    z13 = r2.z1(r2.this, context);
                    return z13;
                }
            }, new Function0() { // from class: wn.l0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit A1;
                    A1 = r2.A1(r2.this, context);
                    return A1;
                }
            }, renderProps.x(), renderProps.a().getPendingPage(), renderProps.n());
        } else {
            throw new jr.p();
        }
    }

    @Override // um.k
    /* renamed from: b2 */
    public um.i g(f state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return wm.s.a(state);
    }
}
