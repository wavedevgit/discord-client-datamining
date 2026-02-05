package bo;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import bo.c;
import bo.d;
import bo.r2;
import bo.v2;
import bq.b;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.document.network.a;
import com.withpersona.sdk2.inquiry.document.network.b;
import com.withpersona.sdk2.inquiry.document.network.c;
import com.withpersona.sdk2.inquiry.document.network.d;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import dq.k5;
import eo.a;
import fp.c1;
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
import tp.b;
import tp.i;
import zm.k;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r2 extends zm.k {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f6827a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f6828b;

    /* renamed from: c  reason: collision with root package name */
    private final fp.c1 f6829c;

    /* renamed from: d  reason: collision with root package name */
    private final bo.c f6830d;

    /* renamed from: e  reason: collision with root package name */
    private final v2.b f6831e;

    /* renamed from: f  reason: collision with root package name */
    private final a.C0230a f6832f;

    /* renamed from: g  reason: collision with root package name */
    private final c.a f6833g;

    /* renamed from: h  reason: collision with root package name */
    private final b.a f6834h;

    /* renamed from: i  reason: collision with root package name */
    private final a.C0298a f6835i;

    /* renamed from: j  reason: collision with root package name */
    private final d.a f6836j;

    /* renamed from: k  reason: collision with root package name */
    private final xp.b f6837k;

    /* renamed from: l  reason: collision with root package name */
    private final tp.c f6838l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: bo.r2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0116a extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final C0116a f6839a = new C0116a();

            private C0116a() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0116a)) {
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
            public static final b f6840a = new b();

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
            public static final c f6841a = new c();

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
            public static final d f6842a = new d();

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
            public static final e f6843a = new e();

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
            private final String f6844a;

            /* renamed from: b  reason: collision with root package name */
            private final d.b f6845b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String documentId, d.b document) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(document, "document");
                this.f6844a = documentId;
                this.f6845b = document;
            }

            public final d.b a() {
                return this.f6845b;
            }

            public final String b() {
                return this.f6844a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof f)) {
                    return false;
                }
                f fVar = (f) obj;
                if (Intrinsics.areEqual(this.f6844a, fVar.f6844a) && Intrinsics.areEqual(this.f6845b, fVar.f6845b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f6844a.hashCode() * 31) + this.f6845b.hashCode();
            }

            public String toString() {
                String str = this.f6844a;
                d.b bVar = this.f6845b;
                return "RemoveDocument(documentId=" + str + ", document=" + bVar + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class g extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final g f6846a = new g();

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
            public static final h f6847a = new h();

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
            private final String f6848a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public i(String documentId) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                this.f6848a = documentId;
            }

            public final String a() {
                return this.f6848a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof i) && Intrinsics.areEqual(this.f6848a, ((i) obj).f6848a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f6848a.hashCode();
            }

            public String toString() {
                String str = this.f6848a;
                return "Submit(documentId=" + str + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class j extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final j f6849a = new j();

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
        private final String f6850a;

        /* renamed from: b  reason: collision with root package name */
        private final String f6851b;

        /* renamed from: c  reason: collision with root package name */
        private final String f6852c;

        /* renamed from: d  reason: collision with root package name */
        private final String f6853d;

        /* renamed from: e  reason: collision with root package name */
        private final String f6854e;

        /* renamed from: f  reason: collision with root package name */
        private final String f6855f;

        /* renamed from: g  reason: collision with root package name */
        private final String f6856g;

        /* renamed from: h  reason: collision with root package name */
        private final String f6857h;

        /* renamed from: i  reason: collision with root package name */
        private final String f6858i;

        /* renamed from: j  reason: collision with root package name */
        private final String f6859j;

        /* renamed from: k  reason: collision with root package name */
        private final String f6860k;

        /* renamed from: l  reason: collision with root package name */
        private final String f6861l;

        /* renamed from: m  reason: collision with root package name */
        private final String f6862m;

        /* renamed from: n  reason: collision with root package name */
        private final e f6863n;

        /* renamed from: o  reason: collision with root package name */
        private final l f6864o;

        /* renamed from: p  reason: collision with root package name */
        private final int f6865p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f6866q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f6867r;

        /* renamed from: s  reason: collision with root package name */
        private final String f6868s;

        /* renamed from: t  reason: collision with root package name */
        private final String f6869t;

        /* renamed from: u  reason: collision with root package name */
        private final String f6870u;

        /* renamed from: v  reason: collision with root package name */
        private final String f6871v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.DocumentStepStyle f6872w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.Document.AssetConfig f6873x;

        /* renamed from: y  reason: collision with root package name */
        private final PendingPageTextPosition f6874y;

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
            this.f6850a = sessionToken;
            this.f6851b = inquiryId;
            this.f6852c = fromStep;
            this.f6853d = fromComponent;
            this.f6854e = str;
            this.f6855f = str2;
            this.f6856g = str3;
            this.f6857h = str4;
            this.f6858i = str5;
            this.f6859j = str6;
            this.f6860k = fieldKeyDocument;
            this.f6861l = kind;
            this.f6862m = str7;
            this.f6863n = startPage;
            this.f6864o = pages;
            this.f6865p = i10;
            this.f6866q = z10;
            this.f6867r = z11;
            this.f6868s = str8;
            this.f6869t = str9;
            this.f6870u = str10;
            this.f6871v = str11;
            this.f6872w = documentStepStyle;
            this.f6873x = assetConfig;
            this.f6874y = pendingPageTextVerticalPosition;
        }

        public final NextStep.Document.AssetConfig a() {
            return this.f6873x;
        }

        public final boolean b() {
            return this.f6866q;
        }

        public final boolean c() {
            return this.f6867r;
        }

        public final String d() {
            return this.f6856g;
        }

        public final int e() {
            return this.f6865p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f6850a, bVar.f6850a) && Intrinsics.areEqual(this.f6851b, bVar.f6851b) && Intrinsics.areEqual(this.f6852c, bVar.f6852c) && Intrinsics.areEqual(this.f6853d, bVar.f6853d) && Intrinsics.areEqual(this.f6854e, bVar.f6854e) && Intrinsics.areEqual(this.f6855f, bVar.f6855f) && Intrinsics.areEqual(this.f6856g, bVar.f6856g) && Intrinsics.areEqual(this.f6857h, bVar.f6857h) && Intrinsics.areEqual(this.f6858i, bVar.f6858i) && Intrinsics.areEqual(this.f6859j, bVar.f6859j) && Intrinsics.areEqual(this.f6860k, bVar.f6860k) && Intrinsics.areEqual(this.f6861l, bVar.f6861l) && Intrinsics.areEqual(this.f6862m, bVar.f6862m) && Intrinsics.areEqual(this.f6863n, bVar.f6863n) && Intrinsics.areEqual(this.f6864o, bVar.f6864o) && this.f6865p == bVar.f6865p && this.f6866q == bVar.f6866q && this.f6867r == bVar.f6867r && Intrinsics.areEqual(this.f6868s, bVar.f6868s) && Intrinsics.areEqual(this.f6869t, bVar.f6869t) && Intrinsics.areEqual(this.f6870u, bVar.f6870u) && Intrinsics.areEqual(this.f6871v, bVar.f6871v) && Intrinsics.areEqual(this.f6872w, bVar.f6872w) && Intrinsics.areEqual(this.f6873x, bVar.f6873x) && this.f6874y == bVar.f6874y) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f6862m;
        }

        public final String g() {
            return this.f6860k;
        }

        public final String h() {
            return this.f6853d;
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
            int hashCode12 = ((((((this.f6850a.hashCode() * 31) + this.f6851b.hashCode()) * 31) + this.f6852c.hashCode()) * 31) + this.f6853d.hashCode()) * 31;
            String str = this.f6854e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode12 + hashCode) * 31;
            String str2 = this.f6855f;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f6856g;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f6857h;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f6858i;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f6859j;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int hashCode13 = (((((i15 + hashCode6) * 31) + this.f6860k.hashCode()) * 31) + this.f6861l.hashCode()) * 31;
            String str7 = this.f6862m;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int hashCode14 = (((((((((((hashCode13 + hashCode7) * 31) + this.f6863n.hashCode()) * 31) + this.f6864o.hashCode()) * 31) + Integer.hashCode(this.f6865p)) * 31) + Boolean.hashCode(this.f6866q)) * 31) + Boolean.hashCode(this.f6867r)) * 31;
            String str8 = this.f6868s;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i16 = (hashCode14 + hashCode8) * 31;
            String str9 = this.f6869t;
            if (str9 == null) {
                hashCode9 = 0;
            } else {
                hashCode9 = str9.hashCode();
            }
            int i17 = (i16 + hashCode9) * 31;
            String str10 = this.f6870u;
            if (str10 == null) {
                hashCode10 = 0;
            } else {
                hashCode10 = str10.hashCode();
            }
            int i18 = (i17 + hashCode10) * 31;
            String str11 = this.f6871v;
            if (str11 == null) {
                hashCode11 = 0;
            } else {
                hashCode11 = str11.hashCode();
            }
            int i19 = (i18 + hashCode11) * 31;
            StepStyles.DocumentStepStyle documentStepStyle = this.f6872w;
            if (documentStepStyle != null) {
                i10 = documentStepStyle.hashCode();
            }
            return ((((i19 + i10) * 31) + this.f6873x.hashCode()) * 31) + this.f6874y.hashCode();
        }

        public final String i() {
            return this.f6852c;
        }

        public final String j() {
            return this.f6851b;
        }

        public final String k() {
            return this.f6861l;
        }

        public final l l() {
            return this.f6864o;
        }

        public final String m() {
            return this.f6859j;
        }

        public final PendingPageTextPosition n() {
            return this.f6874y;
        }

        public final String o() {
            return this.f6858i;
        }

        public final String p() {
            return this.f6871v;
        }

        public final String q() {
            return this.f6870u;
        }

        public final String r() {
            return this.f6869t;
        }

        public final String s() {
            return this.f6868s;
        }

        public final String t() {
            return this.f6855f;
        }

        public String toString() {
            String str = this.f6850a;
            String str2 = this.f6851b;
            String str3 = this.f6852c;
            String str4 = this.f6853d;
            String str5 = this.f6854e;
            String str6 = this.f6855f;
            String str7 = this.f6856g;
            String str8 = this.f6857h;
            String str9 = this.f6858i;
            String str10 = this.f6859j;
            String str11 = this.f6860k;
            String str12 = this.f6861l;
            String str13 = this.f6862m;
            e eVar = this.f6863n;
            l lVar = this.f6864o;
            int i10 = this.f6865p;
            boolean z10 = this.f6866q;
            boolean z11 = this.f6867r;
            String str14 = this.f6868s;
            String str15 = this.f6869t;
            String str16 = this.f6870u;
            String str17 = this.f6871v;
            StepStyles.DocumentStepStyle documentStepStyle = this.f6872w;
            NextStep.Document.AssetConfig assetConfig = this.f6873x;
            PendingPageTextPosition pendingPageTextPosition = this.f6874y;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromStep=" + str3 + ", fromComponent=" + str4 + ", promptTitle=" + str5 + ", promptDescription=" + str6 + ", disclaimer=" + str7 + ", submitButtonText=" + str8 + ", pendingTitle=" + str9 + ", pendingDescription=" + str10 + ", fieldKeyDocument=" + str11 + ", kind=" + str12 + ", documentId=" + str13 + ", startPage=" + eVar + ", pages=" + lVar + ", documentFileLimit=" + i10 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", permissionsTitle=" + str14 + ", permissionsRationale=" + str15 + ", permissionsModalPositiveButton=" + str16 + ", permissionsModalNegativeButton=" + str17 + ", styles=" + documentStepStyle + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
        }

        public final String u() {
            return this.f6854e;
        }

        public final String v() {
            return this.f6850a;
        }

        public final e w() {
            return this.f6863n;
        }

        public final StepStyles.DocumentStepStyle x() {
            return this.f6872w;
        }

        public final String y() {
            return this.f6857h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f6875a = new a();

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
            public static final b f6876a = new b();

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

        /* renamed from: bo.r2$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0117c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f6877a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0117c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f6877a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f6877a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0117c) && Intrinsics.areEqual(this.f6877a, ((C0117c) obj).f6877a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f6877a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f6877a;
                return "Errored(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f6878a = new d();

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
            private final String f6879a;

            /* renamed from: b  reason: collision with root package name */
            private final String f6880b;

            /* renamed from: c  reason: collision with root package name */
            private final xp.a f6881c;

            /* renamed from: d  reason: collision with root package name */
            private final Function0 f6882d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f6883e;

            /* renamed from: f  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f6884f;

            /* renamed from: g  reason: collision with root package name */
            private final NextStep.Document.AssetConfig.PendingPage f6885g;

            /* renamed from: h  reason: collision with root package name */
            private final PendingPageTextPosition f6886h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, xp.a navigationState, Function0 onBack, Function0 onCancel, StepStyles.DocumentStepStyle documentStepStyle, NextStep.Document.AssetConfig.PendingPage pendingPage, PendingPageTextPosition pendingPageTextVerticalPosition) {
                super(null);
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                this.f6879a = str;
                this.f6880b = str2;
                this.f6881c = navigationState;
                this.f6882d = onBack;
                this.f6883e = onCancel;
                this.f6884f = documentStepStyle;
                this.f6885g = pendingPage;
                this.f6886h = pendingPageTextVerticalPosition;
            }

            public final NextStep.Document.AssetConfig.PendingPage a() {
                return this.f6885g;
            }

            public final xp.a b() {
                return this.f6881c;
            }

            public final Function0 c() {
                return this.f6882d;
            }

            public final Function0 d() {
                return this.f6883e;
            }

            public final PendingPageTextPosition e() {
                return this.f6886h;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f6879a, aVar.f6879a) && Intrinsics.areEqual(this.f6880b, aVar.f6880b) && Intrinsics.areEqual(this.f6881c, aVar.f6881c) && Intrinsics.areEqual(this.f6882d, aVar.f6882d) && Intrinsics.areEqual(this.f6883e, aVar.f6883e) && Intrinsics.areEqual(this.f6884f, aVar.f6884f) && Intrinsics.areEqual(this.f6885g, aVar.f6885g) && this.f6886h == aVar.f6886h) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f6880b;
            }

            public final StepStyles.DocumentStepStyle g() {
                return this.f6884f;
            }

            public final String h() {
                return this.f6879a;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                String str = this.f6879a;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = hashCode * 31;
                String str2 = this.f6880b;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int hashCode4 = (((((((i11 + hashCode2) * 31) + this.f6881c.hashCode()) * 31) + this.f6882d.hashCode()) * 31) + this.f6883e.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f6884f;
                if (documentStepStyle == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = documentStepStyle.hashCode();
                }
                int i12 = (hashCode4 + hashCode3) * 31;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f6885g;
                if (pendingPage != null) {
                    i10 = pendingPage.hashCode();
                }
                return ((i12 + i10) * 31) + this.f6886h.hashCode();
            }

            public String toString() {
                String str = this.f6879a;
                String str2 = this.f6880b;
                xp.a aVar = this.f6881c;
                Function0 function0 = this.f6882d;
                Function0 function02 = this.f6883e;
                StepStyles.DocumentStepStyle documentStepStyle = this.f6884f;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f6885g;
                PendingPageTextPosition pendingPageTextPosition = this.f6886h;
                return "LoadingAnimation(title=" + str + ", prompt=" + str2 + ", navigationState=" + aVar + ", onBack=" + function0 + ", onCancel=" + function02 + ", styles=" + documentStepStyle + ", assetConfig=" + pendingPage + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final v4.h f6887a;

            /* renamed from: b  reason: collision with root package name */
            private final String f6888b;

            /* renamed from: c  reason: collision with root package name */
            private final String f6889c;

            /* renamed from: d  reason: collision with root package name */
            private final String f6890d;

            /* renamed from: e  reason: collision with root package name */
            private final String f6891e;

            /* renamed from: f  reason: collision with root package name */
            private final List f6892f;

            /* renamed from: g  reason: collision with root package name */
            private final xp.a f6893g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f6894h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f6895i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f6896j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f6897k;

            /* renamed from: l  reason: collision with root package name */
            private final Function1 f6898l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f6899m;

            /* renamed from: n  reason: collision with root package name */
            private final Function0 f6900n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f6901o;

            /* renamed from: p  reason: collision with root package name */
            private final boolean f6902p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f6903q;

            /* renamed from: r  reason: collision with root package name */
            private final boolean f6904r;

            /* renamed from: s  reason: collision with root package name */
            private final String f6905s;

            /* renamed from: t  reason: collision with root package name */
            private final Function0 f6906t;

            /* renamed from: u  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f6907u;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(v4.h imageLoader, String str, String str2, String str3, String str4, List documents, xp.a navigationState, Function0 openSelectFile, Function0 selectFromPhotoLibrary, Function0 openCamera, Function0 openUploadOptions, Function1 onRemove, Function0 onSubmit, Function0 onCancel, Function0 onBack, boolean z10, boolean z11, boolean z12, String str5, Function0 onErrorDismissed, StepStyles.DocumentStepStyle documentStepStyle) {
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
                this.f6887a = imageLoader;
                this.f6888b = str;
                this.f6889c = str2;
                this.f6890d = str3;
                this.f6891e = str4;
                this.f6892f = documents;
                this.f6893g = navigationState;
                this.f6894h = openSelectFile;
                this.f6895i = selectFromPhotoLibrary;
                this.f6896j = openCamera;
                this.f6897k = openUploadOptions;
                this.f6898l = onRemove;
                this.f6899m = onSubmit;
                this.f6900n = onCancel;
                this.f6901o = onBack;
                this.f6902p = z10;
                this.f6903q = z11;
                this.f6904r = z12;
                this.f6905s = str5;
                this.f6906t = onErrorDismissed;
                this.f6907u = documentStepStyle;
            }

            public final boolean a() {
                return this.f6903q;
            }

            public final boolean b() {
                return this.f6902p;
            }

            public final String c() {
                return this.f6890d;
            }

            public final List d() {
                return this.f6892f;
            }

            public final String e() {
                return this.f6905s;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f6887a, bVar.f6887a) && Intrinsics.areEqual(this.f6888b, bVar.f6888b) && Intrinsics.areEqual(this.f6889c, bVar.f6889c) && Intrinsics.areEqual(this.f6890d, bVar.f6890d) && Intrinsics.areEqual(this.f6891e, bVar.f6891e) && Intrinsics.areEqual(this.f6892f, bVar.f6892f) && Intrinsics.areEqual(this.f6893g, bVar.f6893g) && Intrinsics.areEqual(this.f6894h, bVar.f6894h) && Intrinsics.areEqual(this.f6895i, bVar.f6895i) && Intrinsics.areEqual(this.f6896j, bVar.f6896j) && Intrinsics.areEqual(this.f6897k, bVar.f6897k) && Intrinsics.areEqual(this.f6898l, bVar.f6898l) && Intrinsics.areEqual(this.f6899m, bVar.f6899m) && Intrinsics.areEqual(this.f6900n, bVar.f6900n) && Intrinsics.areEqual(this.f6901o, bVar.f6901o) && this.f6902p == bVar.f6902p && this.f6903q == bVar.f6903q && this.f6904r == bVar.f6904r && Intrinsics.areEqual(this.f6905s, bVar.f6905s) && Intrinsics.areEqual(this.f6906t, bVar.f6906t) && Intrinsics.areEqual(this.f6907u, bVar.f6907u)) {
                    return true;
                }
                return false;
            }

            public final v4.h f() {
                return this.f6887a;
            }

            public final xp.a g() {
                return this.f6893g;
            }

            public final Function0 h() {
                return this.f6901o;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                int hashCode4;
                int hashCode5;
                int hashCode6 = this.f6887a.hashCode() * 31;
                String str = this.f6888b;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode6 + hashCode) * 31;
                String str2 = this.f6889c;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f6890d;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f6891e;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int hashCode7 = (((((((((((((((((((((((((((i13 + hashCode4) * 31) + this.f6892f.hashCode()) * 31) + this.f6893g.hashCode()) * 31) + this.f6894h.hashCode()) * 31) + this.f6895i.hashCode()) * 31) + this.f6896j.hashCode()) * 31) + this.f6897k.hashCode()) * 31) + this.f6898l.hashCode()) * 31) + this.f6899m.hashCode()) * 31) + this.f6900n.hashCode()) * 31) + this.f6901o.hashCode()) * 31) + Boolean.hashCode(this.f6902p)) * 31) + Boolean.hashCode(this.f6903q)) * 31) + Boolean.hashCode(this.f6904r)) * 31;
                String str5 = this.f6905s;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int hashCode8 = (((hashCode7 + hashCode5) * 31) + this.f6906t.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f6907u;
                if (documentStepStyle != null) {
                    i10 = documentStepStyle.hashCode();
                }
                return hashCode8 + i10;
            }

            public final Function0 i() {
                return this.f6900n;
            }

            public final Function0 j() {
                return this.f6906t;
            }

            public final Function1 k() {
                return this.f6898l;
            }

            public final Function0 l() {
                return this.f6899m;
            }

            public final Function0 m() {
                return this.f6897k;
            }

            public final String n() {
                return this.f6889c;
            }

            public final StepStyles.DocumentStepStyle o() {
                return this.f6907u;
            }

            public final boolean p() {
                return this.f6904r;
            }

            public final String q() {
                return this.f6891e;
            }

            public final String r() {
                return this.f6888b;
            }

            public String toString() {
                v4.h hVar = this.f6887a;
                String str = this.f6888b;
                String str2 = this.f6889c;
                String str3 = this.f6890d;
                String str4 = this.f6891e;
                List list = this.f6892f;
                xp.a aVar = this.f6893g;
                Function0 function0 = this.f6894h;
                Function0 function02 = this.f6895i;
                Function0 function03 = this.f6896j;
                Function0 function04 = this.f6897k;
                Function1 function1 = this.f6898l;
                Function0 function05 = this.f6899m;
                Function0 function06 = this.f6900n;
                Function0 function07 = this.f6901o;
                boolean z10 = this.f6902p;
                boolean z11 = this.f6903q;
                boolean z12 = this.f6904r;
                String str5 = this.f6905s;
                Function0 function08 = this.f6906t;
                StepStyles.DocumentStepStyle documentStepStyle = this.f6907u;
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
            public static final a f6908d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0118a();

            /* renamed from: bo.r2$e$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0118a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f6908d;
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
            private final String f6909d;

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
                this.f6909d = documentId;
            }

            public final String a() {
                return this.f6909d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof b) && Intrinsics.areEqual(this.f6909d, ((b) obj).f6909d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f6909d.hashCode();
            }

            public String toString() {
                String str = this.f6909d;
                return "Review(documentId=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f6909d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        private final a f6910d;

        /* renamed from: e  reason: collision with root package name */
        private final InterfaceC0119f f6911e;

        /* renamed from: i  reason: collision with root package name */
        private final String f6912i;

        /* renamed from: o  reason: collision with root package name */
        private final List f6913o;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f6914d = new a("None", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f6915e = new a("CheckCameraPermissions", 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f6916i = new a("CameraRunning", 2);

            /* renamed from: o  reason: collision with root package name */
            public static final a f6917o = new a("SelectFileFromDocuments", 3);

            /* renamed from: p  reason: collision with root package name */
            public static final a f6918p = new a("SelectImageFromPhotoLibrary", 4);

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ a[] f6919q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f6920r;

            static {
                a[] a10 = a();
                f6919q = a10;
                f6920r = vr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f6914d, f6915e, f6916i, f6917o, f6918p};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f6919q.clone();
            }
        }

        /* renamed from: bo.r2$f$f  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public interface InterfaceC0119f extends Parcelable {

            /* renamed from: bo.r2$f$f$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements InterfaceC0119f {

                /* renamed from: d  reason: collision with root package name */
                public static final a f6945d = new a();
                @NotNull
                public static final Parcelable.Creator<a> CREATOR = new C0120a();

                /* renamed from: bo.r2$f$f$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0120a implements Parcelable.Creator {
                    @Override // android.os.Parcelable.Creator
                    /* renamed from: a */
                    public final a createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        parcel.readInt();
                        return a.f6945d;
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

            /* renamed from: bo.r2$f$f$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b implements InterfaceC0119f {
                @NotNull
                public static final Parcelable.Creator<b> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f6946d;

                /* renamed from: bo.r2$f$f$b$a */
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
                    this.f6946d = documentId;
                }

                public final String a() {
                    return this.f6946d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof b) && Intrinsics.areEqual(this.f6946d, ((b) obj).f6946d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f6946d.hashCode();
                }

                public String toString() {
                    String str = this.f6946d;
                    return "DeleteFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f6946d);
                }
            }

            /* renamed from: bo.r2$f$f$c */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class c implements InterfaceC0119f {
                @NotNull
                public static final Parcelable.Creator<c> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f6947d;

                /* renamed from: bo.r2$f$f$c$a */
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
                    this.f6947d = documentId;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof c) && Intrinsics.areEqual(this.f6947d, ((c) obj).f6947d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f6947d.hashCode();
                }

                public String toString() {
                    String str = this.f6947d;
                    return "ReadyToSubmit(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f6947d);
                }
            }

            /* renamed from: bo.r2$f$f$d */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class d implements InterfaceC0119f {
                @NotNull
                public static final Parcelable.Creator<d> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f6948d;

                /* renamed from: bo.r2$f$f$d$a */
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
                    this.f6948d = documentId;
                }

                public final String a() {
                    return this.f6948d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof d) && Intrinsics.areEqual(this.f6948d, ((d) obj).f6948d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f6948d.hashCode();
                }

                public String toString() {
                    String str = this.f6948d;
                    return "UploadFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f6948d);
                }
            }
        }

        public /* synthetic */ f(a aVar, InterfaceC0119f interfaceC0119f, String str, List list, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, interfaceC0119f, str, list);
        }

        public static /* synthetic */ f d(f fVar, InterfaceC0119f interfaceC0119f, String str, List list, bo.d dVar, int i10, Object obj) {
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
                return fVar.c(interfaceC0119f, str, list, dVar);
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
            throw new or.p();
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
            throw new or.p();
        }

        public final f c(InterfaceC0119f uploadState, String str, List list, bo.d dVar) {
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
                    list = bVar.g();
                }
                return b.l(bVar, list, null, null, uploadState, dVar, false, false, null, 230, null);
            } else if (this instanceof c) {
                c cVar = (c) this;
                if (str == null) {
                    str = cVar.f();
                }
                String str2 = str;
                if (list == null) {
                    list = cVar.g();
                }
                return c.l(cVar, list, str2, null, uploadState, dVar, false, false, null, 228, null);
            } else if (this instanceof e) {
                return e.l((e) this, null, null, uploadState, null, 11, null);
            } else {
                throw new or.p();
            }
        }

        public a e() {
            return this.f6910d;
        }

        public abstract String f();

        public List g() {
            return this.f6913o;
        }

        public abstract InterfaceC0119f i();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends f {
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f6941p;

            /* renamed from: q  reason: collision with root package name */
            private final String f6942q;

            /* renamed from: r  reason: collision with root package name */
            private final InterfaceC0119f f6943r;

            /* renamed from: s  reason: collision with root package name */
            private final String f6944s;

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
                    return new e(arrayList, parcel.readString(), (InterfaceC0119f) parcel.readParcelable(e.class.getClassLoader()), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final e[] newArray(int i10) {
                    return new e[i10];
                }
            }

            public /* synthetic */ e(List list, String str, InterfaceC0119f interfaceC0119f, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? InterfaceC0119f.a.f6945d : interfaceC0119f, (i10 & 8) != 0 ? null : str2);
            }

            public static /* synthetic */ e l(e eVar, List list, String str, InterfaceC0119f interfaceC0119f, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = eVar.f6941p;
                }
                if ((i10 & 2) != 0) {
                    str = eVar.f6942q;
                }
                if ((i10 & 4) != 0) {
                    interfaceC0119f = eVar.f6943r;
                }
                if ((i10 & 8) != 0) {
                    str2 = eVar.f6944s;
                }
                return eVar.j(list, str, interfaceC0119f, str2);
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
                if (Intrinsics.areEqual(this.f6941p, eVar.f6941p) && Intrinsics.areEqual(this.f6942q, eVar.f6942q) && Intrinsics.areEqual(this.f6943r, eVar.f6943r) && Intrinsics.areEqual(this.f6944s, eVar.f6944s)) {
                    return true;
                }
                return false;
            }

            @Override // bo.r2.f
            public String f() {
                return this.f6942q;
            }

            @Override // bo.r2.f
            public List g() {
                return this.f6941p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((this.f6941p.hashCode() * 31) + this.f6942q.hashCode()) * 31) + this.f6943r.hashCode()) * 31;
                String str = this.f6944s;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            @Override // bo.r2.f
            public InterfaceC0119f i() {
                return this.f6943r;
            }

            public final e j(List documents, String documentId, InterfaceC0119f uploadState, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new e(documents, documentId, uploadState, str);
            }

            public String toString() {
                List list = this.f6941p;
                String str = this.f6942q;
                InterfaceC0119f interfaceC0119f = this.f6943r;
                String str2 = this.f6944s;
                return "UploadDocument(documents=" + list + ", documentId=" + str + ", uploadState=" + interfaceC0119f + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f6941p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f6942q);
                dest.writeParcelable(this.f6943r, i10);
                dest.writeString(this.f6944s);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(List documents, String documentId, InterfaceC0119f uploadState, String str) {
                super(a.f6914d, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f6941p = documents;
                this.f6942q = documentId;
                this.f6943r = uploadState;
                this.f6944s = str;
            }
        }

        private f(a aVar, InterfaceC0119f interfaceC0119f, String str, List list) {
            this.f6910d = aVar;
            this.f6911e = interfaceC0119f;
            this.f6912i = str;
            this.f6913o = list;
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends f {
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f6921p;

            /* renamed from: q  reason: collision with root package name */
            private final String f6922q;

            /* renamed from: r  reason: collision with root package name */
            private final a f6923r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0119f f6924s;

            /* renamed from: t  reason: collision with root package name */
            private final bo.d f6925t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f6926u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f6927v;

            /* renamed from: w  reason: collision with root package name */
            private final String f6928w;

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
                    InterfaceC0119f interfaceC0119f = (InterfaceC0119f) parcel.readParcelable(b.class.getClassLoader());
                    bo.d dVar = (bo.d) parcel.readParcelable(b.class.getClassLoader());
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
                    return new b(arrayList, readString, valueOf, interfaceC0119f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final b[] newArray(int i10) {
                    return new b[i10];
                }
            }

            public /* synthetic */ b(List list, String str, a aVar, InterfaceC0119f interfaceC0119f, bo.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f6914d : aVar, (i10 & 8) != 0 ? InterfaceC0119f.a.f6945d : interfaceC0119f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ b l(b bVar, List list, String str, a aVar, InterfaceC0119f interfaceC0119f, bo.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = bVar.f6921p;
                }
                if ((i10 & 2) != 0) {
                    str = bVar.f6922q;
                }
                if ((i10 & 4) != 0) {
                    aVar = bVar.f6923r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0119f = bVar.f6924s;
                }
                if ((i10 & 16) != 0) {
                    dVar = bVar.f6925t;
                }
                if ((i10 & 32) != 0) {
                    z10 = bVar.f6926u;
                }
                if ((i10 & 64) != 0) {
                    z11 = bVar.f6927v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = bVar.f6928w;
                }
                boolean z12 = z11;
                String str3 = str2;
                bo.d dVar2 = dVar;
                boolean z13 = z10;
                return bVar.j(list, str, aVar, interfaceC0119f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // bo.r2.f
            public a e() {
                return this.f6923r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f6921p, bVar.f6921p) && Intrinsics.areEqual(this.f6922q, bVar.f6922q) && this.f6923r == bVar.f6923r && Intrinsics.areEqual(this.f6924s, bVar.f6924s) && Intrinsics.areEqual(this.f6925t, bVar.f6925t) && this.f6926u == bVar.f6926u && this.f6927v == bVar.f6927v && Intrinsics.areEqual(this.f6928w, bVar.f6928w)) {
                    return true;
                }
                return false;
            }

            @Override // bo.r2.f
            public String f() {
                return this.f6922q;
            }

            @Override // bo.r2.f
            public List g() {
                return this.f6921p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((((this.f6921p.hashCode() * 31) + this.f6922q.hashCode()) * 31) + this.f6923r.hashCode()) * 31) + this.f6924s.hashCode()) * 31;
                bo.d dVar = this.f6925t;
                int i10 = 0;
                if (dVar == null) {
                    hashCode = 0;
                } else {
                    hashCode = dVar.hashCode();
                }
                int hashCode3 = (((((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f6926u)) * 31) + Boolean.hashCode(this.f6927v)) * 31;
                String str = this.f6928w;
                if (str != null) {
                    i10 = str.hashCode();
                }
                return hashCode3 + i10;
            }

            @Override // bo.r2.f
            public InterfaceC0119f i() {
                return this.f6924s;
            }

            public final b j(List documents, String documentId, a captureState, InterfaceC0119f uploadState, bo.d dVar, boolean z10, boolean z11, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new b(documents, documentId, captureState, uploadState, dVar, z10, z11, str);
            }

            public final bo.d n() {
                return this.f6925t;
            }

            public final String o() {
                return this.f6928w;
            }

            public final boolean p() {
                return this.f6926u;
            }

            public final boolean q() {
                return this.f6927v;
            }

            public String toString() {
                List list = this.f6921p;
                String str = this.f6922q;
                a aVar = this.f6923r;
                InterfaceC0119f interfaceC0119f = this.f6924s;
                bo.d dVar = this.f6925t;
                boolean z10 = this.f6926u;
                boolean z11 = this.f6927v;
                String str2 = this.f6928w;
                return "ReviewCaptures(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0119f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f6921p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f6922q);
                dest.writeString(this.f6923r.name());
                dest.writeParcelable(this.f6924s, i10);
                dest.writeParcelable(this.f6925t, i10);
                dest.writeInt(this.f6926u ? 1 : 0);
                dest.writeInt(this.f6927v ? 1 : 0);
                dest.writeString(this.f6928w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(List documents, String documentId, a captureState, InterfaceC0119f uploadState, bo.d dVar, boolean z10, boolean z11, String str) {
                super(captureState, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f6921p = documents;
                this.f6922q = documentId;
                this.f6923r = captureState;
                this.f6924s = uploadState;
                this.f6925t = dVar;
                this.f6926u = z10;
                this.f6927v = z11;
                this.f6928w = str;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends f {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f6929p;

            /* renamed from: q  reason: collision with root package name */
            private final String f6930q;

            /* renamed from: r  reason: collision with root package name */
            private final a f6931r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0119f f6932s;

            /* renamed from: t  reason: collision with root package name */
            private final bo.d f6933t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f6934u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f6935v;

            /* renamed from: w  reason: collision with root package name */
            private final String f6936w;

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
                    InterfaceC0119f interfaceC0119f = (InterfaceC0119f) parcel.readParcelable(c.class.getClassLoader());
                    bo.d dVar = (bo.d) parcel.readParcelable(c.class.getClassLoader());
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
                    return new c(arrayList, readString, valueOf, interfaceC0119f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public /* synthetic */ c(List list, String str, a aVar, InterfaceC0119f interfaceC0119f, bo.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f6914d : aVar, (i10 & 8) != 0 ? InterfaceC0119f.a.f6945d : interfaceC0119f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ c l(c cVar, List list, String str, a aVar, InterfaceC0119f interfaceC0119f, bo.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = cVar.f6929p;
                }
                if ((i10 & 2) != 0) {
                    str = cVar.f6930q;
                }
                if ((i10 & 4) != 0) {
                    aVar = cVar.f6931r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0119f = cVar.f6932s;
                }
                if ((i10 & 16) != 0) {
                    dVar = cVar.f6933t;
                }
                if ((i10 & 32) != 0) {
                    z10 = cVar.f6934u;
                }
                if ((i10 & 64) != 0) {
                    z11 = cVar.f6935v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = cVar.f6936w;
                }
                boolean z12 = z11;
                String str3 = str2;
                bo.d dVar2 = dVar;
                boolean z13 = z10;
                return cVar.j(list, str, aVar, interfaceC0119f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // bo.r2.f
            public a e() {
                return this.f6931r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof c)) {
                    return false;
                }
                c cVar = (c) obj;
                if (Intrinsics.areEqual(this.f6929p, cVar.f6929p) && Intrinsics.areEqual(this.f6930q, cVar.f6930q) && this.f6931r == cVar.f6931r && Intrinsics.areEqual(this.f6932s, cVar.f6932s) && Intrinsics.areEqual(this.f6933t, cVar.f6933t) && this.f6934u == cVar.f6934u && this.f6935v == cVar.f6935v && Intrinsics.areEqual(this.f6936w, cVar.f6936w)) {
                    return true;
                }
                return false;
            }

            @Override // bo.r2.f
            public String f() {
                return this.f6930q;
            }

            @Override // bo.r2.f
            public List g() {
                return this.f6929p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3 = this.f6929p.hashCode() * 31;
                String str = this.f6930q;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f6931r.hashCode()) * 31) + this.f6932s.hashCode()) * 31;
                bo.d dVar = this.f6933t;
                if (dVar == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = dVar.hashCode();
                }
                int hashCode5 = (((((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f6934u)) * 31) + Boolean.hashCode(this.f6935v)) * 31;
                String str2 = this.f6936w;
                if (str2 != null) {
                    i10 = str2.hashCode();
                }
                return hashCode5 + i10;
            }

            @Override // bo.r2.f
            public InterfaceC0119f i() {
                return this.f6932s;
            }

            public final c j(List documents, String str, a captureState, InterfaceC0119f uploadState, bo.d dVar, boolean z10, boolean z11, String str2) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new c(documents, str, captureState, uploadState, dVar, z10, z11, str2);
            }

            public final String n() {
                return this.f6936w;
            }

            public final boolean o() {
                return this.f6934u;
            }

            public final boolean p() {
                return this.f6935v;
            }

            public String toString() {
                List list = this.f6929p;
                String str = this.f6930q;
                a aVar = this.f6931r;
                InterfaceC0119f interfaceC0119f = this.f6932s;
                bo.d dVar = this.f6933t;
                boolean z10 = this.f6934u;
                boolean z11 = this.f6935v;
                String str2 = this.f6936w;
                return "ReviewCapturesWithoutDocumentId(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0119f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f6929p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f6930q);
                dest.writeString(this.f6931r.name());
                dest.writeParcelable(this.f6932s, i10);
                dest.writeParcelable(this.f6933t, i10);
                dest.writeInt(this.f6934u ? 1 : 0);
                dest.writeInt(this.f6935v ? 1 : 0);
                dest.writeString(this.f6936w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(List documents, String str, a captureState, InterfaceC0119f uploadState, bo.d dVar, boolean z10, boolean z11, String str2) {
                super(captureState, uploadState, str, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f6929p = documents;
                this.f6930q = str;
                this.f6931r = captureState;
                this.f6932s = uploadState;
                this.f6933t = dVar;
                this.f6934u = z10;
                this.f6935v = z11;
                this.f6936w = str2;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends f {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final a f6937p;

            /* renamed from: q  reason: collision with root package name */
            private final InterfaceC0119f f6938q;

            /* renamed from: r  reason: collision with root package name */
            private final String f6939r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f6940s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    boolean z10;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    a valueOf = a.valueOf(parcel.readString());
                    InterfaceC0119f interfaceC0119f = (InterfaceC0119f) parcel.readParcelable(d.class.getClassLoader());
                    String readString = parcel.readString();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    return new d(valueOf, interfaceC0119f, readString, z10);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final d[] newArray(int i10) {
                    return new d[i10];
                }
            }

            public /* synthetic */ d(a aVar, InterfaceC0119f interfaceC0119f, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this((i10 & 1) != 0 ? a.f6914d : aVar, (i10 & 2) != 0 ? InterfaceC0119f.a.f6945d : interfaceC0119f, str, (i10 & 8) != 0 ? false : z10);
            }

            public static /* synthetic */ d l(d dVar, a aVar, InterfaceC0119f interfaceC0119f, String str, boolean z10, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    aVar = dVar.f6937p;
                }
                if ((i10 & 2) != 0) {
                    interfaceC0119f = dVar.f6938q;
                }
                if ((i10 & 4) != 0) {
                    str = dVar.f6939r;
                }
                if ((i10 & 8) != 0) {
                    z10 = dVar.f6940s;
                }
                return dVar.j(aVar, interfaceC0119f, str, z10);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // bo.r2.f
            public a e() {
                return this.f6937p;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof d)) {
                    return false;
                }
                d dVar = (d) obj;
                if (this.f6937p == dVar.f6937p && Intrinsics.areEqual(this.f6938q, dVar.f6938q) && Intrinsics.areEqual(this.f6939r, dVar.f6939r) && this.f6940s == dVar.f6940s) {
                    return true;
                }
                return false;
            }

            @Override // bo.r2.f
            public String f() {
                return this.f6939r;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f6937p.hashCode() * 31) + this.f6938q.hashCode()) * 31;
                String str = this.f6939r;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f6940s);
            }

            @Override // bo.r2.f
            public InterfaceC0119f i() {
                return this.f6938q;
            }

            public final d j(a captureState, InterfaceC0119f uploadState, String str, boolean z10) {
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new d(captureState, uploadState, str, z10);
            }

            public final boolean n() {
                return this.f6940s;
            }

            public String toString() {
                a aVar = this.f6937p;
                InterfaceC0119f interfaceC0119f = this.f6938q;
                String str = this.f6939r;
                boolean z10 = this.f6940s;
                return "Start(captureState=" + aVar + ", uploadState=" + interfaceC0119f + ", documentId=" + str + ", shouldShowUploadOptionsDialog=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f6937p.name());
                dest.writeParcelable(this.f6938q, i10);
                dest.writeString(this.f6939r);
                dest.writeInt(this.f6940s ? 1 : 0);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(a captureState, InterfaceC0119f uploadState, String str, boolean z10) {
                super(captureState, uploadState, str, CollectionsKt.l(), null);
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f6937p = captureState;
                this.f6938q = uploadState;
                this.f6939r = str;
                this.f6940s = z10;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f6949a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f6950b;

        static {
            int[] iArr = new int[fp.g1.values().length];
            try {
                iArr[fp.g1.f23281d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[fp.g1.f23282e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[fp.g1.f23283i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f6949a = iArr;
            int[] iArr2 = new int[f.a.values().length];
            try {
                iArr2[f.a.f6914d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[f.a.f6915e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[f.a.f6916i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[f.a.f6917o.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[f.a.f6918p.ordinal()] = 5;
            } catch (NoSuchFieldError unused8) {
            }
            f6950b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6951d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f6952e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f6953i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f6954o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, r2 r2Var, String str, Continuation continuation) {
            super(2, continuation);
            this.f6952e = aVar;
            this.f6953i = r2Var;
            this.f6954o = str;
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
                return Unit.f31988a;
            }
            cVar.e(new f.b(cVar2.g(), str, null, new f.InterfaceC0119f.d(str), null, false, false, cVar2.n(), 116, null));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f6952e, this.f6953i, this.f6954o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            ur.b.f();
            if (this.f6951d == 0) {
                kotlin.c.b(obj);
                zm.h c10 = this.f6952e.c();
                r2 r2Var = this.f6953i;
                final String str = this.f6954o;
                d10 = zm.z.d(r2Var, null, new Function1() { // from class: bo.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.h.k(str, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6955d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f6956e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f6957i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f.InterfaceC0119f f6958o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, r2 r2Var, f.InterfaceC0119f interfaceC0119f, Continuation continuation) {
            super(2, continuation);
            this.f6956e = aVar;
            this.f6957i = r2Var;
            this.f6958o = interfaceC0119f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(f.InterfaceC0119f interfaceC0119f, r.c cVar) {
            cVar.e(f.d((f) cVar.c(), new f.InterfaceC0119f.c(((f.InterfaceC0119f.d) interfaceC0119f).a()), null, null, null, 14, null));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f6956e, this.f6957i, this.f6958o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            ur.b.f();
            if (this.f6955d == 0) {
                kotlin.c.b(obj);
                zm.h c10 = this.f6956e.c();
                r2 r2Var = this.f6957i;
                final f.InterfaceC0119f interfaceC0119f = this.f6958o;
                d10 = zm.z.d(r2Var, null, new Function1() { // from class: bo.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.i.k(r2.f.InterfaceC0119f.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public r2(v4.h imageLoader, Context applicationContext, fp.c1 permissionRequestWorkflow, bo.c documentCameraWorker, v2.b documentsSelectWorkerFactory, a.C0230a documentCreateWorker, c.a documentLoadWorker, b.a documentFileUploadWorker, a.C0298a documentFileDeleteWorker, d.a documentSubmitWorker, xp.b navigationStateManager, tp.c externalEventLogger) {
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
        this.f6827a = imageLoader;
        this.f6828b = applicationContext;
        this.f6829c = permissionRequestWorkflow;
        this.f6830d = documentCameraWorker;
        this.f6831e = documentsSelectWorkerFactory;
        this.f6832f = documentCreateWorker;
        this.f6833g = documentLoadWorker;
        this.f6834h = documentFileUploadWorker;
        this.f6835i = documentFileDeleteWorker;
        this.f6836j = documentSubmitWorker;
        this.f6837k = navigationStateManager;
        this.f6838l = externalEventLogger;
    }

    private final List A0(u uVar, final k.a aVar) {
        return new b.a().a(uVar.b(), new Function1() { // from class: bo.v0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit C0;
                C0 = r2.C0(r2.this, aVar, (k5) obj);
                return C0;
            }
        }).a(uVar.c(), new Function1() { // from class: bo.w0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit D0;
                D0 = r2.D0(r2.this, aVar, (k5) obj);
                return D0;
            }
        }).a(uVar.d(), new Function1() { // from class: bo.x0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E0;
                E0 = r2.E0(r2.this, aVar, (k5) obj);
                return E0;
            }
        }).a(uVar.a(), new Function1() { // from class: bo.y0
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
        r2Var.L0(aVar, a.b.f6840a);
        return Unit.f31988a;
    }

    private final List B0(b3 b3Var, final k.a aVar) {
        return new b.a().a(b3Var.b(), new Function1() { // from class: bo.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit G0;
                G0 = r2.G0(r2.this, aVar, (k5) obj);
                return G0;
            }
        }).a(b3Var.c(), new Function1() { // from class: bo.b1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit H0;
                H0 = r2.H0(r2.this, aVar, (k5) obj);
                return H0;
            }
        }).a(b3Var.d(), new Function1() { // from class: bo.c1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit I0;
                I0 = r2.I0(r2.this, aVar, (k5) obj);
                return I0;
            }
        }).b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r B1(final r2 r2Var, final f fVar, final c1.a it) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = zm.z.d(r2Var, null, new Function1() { // from class: bo.z0
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
        r2Var.L0(aVar, a.g.f6846a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f6949a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new or.p();
            }
            action.e(fVar.a(f.a.f6914d));
        } else {
            bo.c cVar = r2Var.f6830d;
            String string = r2Var.f6828b.getString(hp.e.f26796a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f6916i);
            } else {
                a10 = fVar.a(f.a.f6914d);
            }
            action.e(a10);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f6847a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r D1(r2 r2Var, final f fVar, final c.b it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0239b) {
            d11 = zm.z.d(r2Var, null, new Function1() { // from class: bo.d1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit E1;
                    E1 = r2.E1(r2.f.this, it, (r.c) obj);
                    return E1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = zm.z.d(r2Var, null, new Function1() { // from class: bo.e1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit F1;
                    F1 = r2.F1(c.b.this, (r.c) obj);
                    return F1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f6849a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(f fVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.b bVar2 = (f.b) fVar;
        action.e(f.b.l(bVar2, ((c.b.C0239b) bVar).a(), null, null, new f.InterfaceC0119f.c(bVar2.f()), null, false, false, null, 214, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.e.f6843a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F1(c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0117c(((c.b.a) bVar).a()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.g.f6846a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f6846a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f6847a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f6847a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f6849a);
        return Unit.f31988a;
    }

    private final void I1(f.a aVar, final b bVar, final f fVar, k.a aVar2) {
        v2 e10;
        int i10 = g.f6950b[aVar.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4 && i10 != 5) {
                    throw new or.p();
                }
                if (fVar.e() == f.a.f6917o) {
                    e10 = this.f6831e.c();
                } else {
                    e10 = this.f6831e.e();
                }
                zm.w.l(aVar2, e10, Reflection.typeOf(v2.class), "", new Function1() { // from class: bo.h1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r N1;
                        N1 = r2.N1(r2.this, bVar, fVar, (v2.c) obj);
                        return N1;
                    }
                });
                return;
            }
            zm.w.l(aVar2, this.f6830d, Reflection.typeOf(bo.c.class), "", new Function1() { // from class: bo.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r K1;
                    K1 = r2.K1(r2.this, bVar, (c.b) obj);
                    return K1;
                }
            });
        }
    }

    private final void J1(final f.InterfaceC0119f interfaceC0119f, b bVar, f fVar, k.a aVar) {
        if (Intrinsics.areEqual(interfaceC0119f, f.InterfaceC0119f.a.f6945d)) {
            if (fVar.f() == null) {
                zm.w.l(aVar, this.f6832f.a(bVar.v(), bVar.k(), bVar.g(), bVar.e()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.a.class), "", new Function1() { // from class: bo.j1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r R1;
                        R1 = r2.R1(r2.this, (a.b) obj);
                        return R1;
                    }
                });
                return;
            }
            return;
        }
        final d.b bVar2 = null;
        if (interfaceC0119f instanceof f.InterfaceC0119f.d) {
            ArrayList arrayList = new ArrayList();
            for (Object obj : fVar.g()) {
                if (obj instanceof d.a) {
                    arrayList.add(obj);
                }
            }
            if (arrayList.isEmpty()) {
                aVar.a("upload_complete", new i(aVar, this, interfaceC0119f, null));
                return;
            }
            for (final d.a aVar2 : CollectionsKt.a1(arrayList, 3)) {
                zm.w.l(aVar, this.f6834h.a(bVar.v(), ((f.InterfaceC0119f.d) interfaceC0119f).a(), aVar2), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.b.class), aVar2.c(), new Function1() { // from class: bo.k1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        zm.r U1;
                        U1 = r2.U1(r2.this, interfaceC0119f, aVar2, (b.AbstractC0233b) obj2);
                        return U1;
                    }
                });
            }
        } else if (interfaceC0119f instanceof f.InterfaceC0119f.b) {
            if (fVar instanceof f.b) {
                f.b bVar3 = (f.b) fVar;
                bo.d n10 = bVar3.n();
                if (n10 instanceof d.b) {
                    bVar2 = (d.b) n10;
                }
                if (bVar2 == null) {
                    return;
                }
                zm.w.l(aVar, this.f6835i.a(bVar.v(), bVar3.f(), bVar2), Reflection.typeOf(eo.a.class), "", new Function1() { // from class: bo.l1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        zm.r Z1;
                        Z1 = r2.Z1(r2.this, bVar2, interfaceC0119f, (a.b) obj2);
                        return Z1;
                    }
                });
            }
        } else if (!(interfaceC0119f instanceof f.InterfaceC0119f.c)) {
            throw new or.p();
        }
    }

    private final void K0(b bVar, f fVar) {
        tp.b bVar2;
        if (fVar.e() == f.a.f6916i) {
            bVar2 = b.d.f50888a;
        } else if (fVar instanceof f.d) {
            bVar2 = b.C0654b.f50886a;
        } else if (fVar instanceof f.b) {
            bVar2 = b.c.f50887a;
        } else if (fVar instanceof f.c) {
            bVar2 = b.c.f50887a;
        } else if (fVar instanceof f.e) {
            bVar2 = b.a.f50885a;
        } else {
            throw new or.p();
        }
        this.f6838l.c(new i.b(bVar.i(), bVar2));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r K1(r2 r2Var, final b bVar, final c.b it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0111b) {
            d11 = zm.z.d(r2Var, null, new Function1() { // from class: bo.d2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit L1;
                    L1 = r2.L1(c.b.this, bVar, (r.c) obj);
                    return L1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, c.b.a.f6687a)) {
            d10 = zm.z.d(r2Var, null, new Function1() { // from class: bo.e2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M1;
                    M1 = r2.M1((r.c) obj);
                    return M1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    private final void L0(k.a aVar, final a aVar2) {
        zm.r d10;
        if (Intrinsics.areEqual(aVar2, a.b.f6840a)) {
            d10 = zm.z.d(this, null, new Function1() { // from class: bo.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M0;
                    M0 = r2.M0((r.c) obj);
                    return M0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.C0116a.f6839a)) {
            d10 = zm.z.d(this, null, new Function1() { // from class: bo.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = r2.N0((r.c) obj);
                    return N0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.g.f6846a)) {
            d10 = zm.z.d(this, null, new Function1() { // from class: bo.s1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = r2.O0((r.c) obj);
                    return O0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.h.f6847a)) {
            d10 = zm.z.d(this, null, new Function1() { // from class: bo.t1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P0;
                    P0 = r2.P0((r.c) obj);
                    return P0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.j.f6849a)) {
            d10 = zm.z.d(this, null, new Function1() { // from class: bo.u1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q0;
                    Q0 = r2.Q0((r.c) obj);
                    return Q0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.e.f6843a)) {
            d10 = zm.z.d(this, null, new Function1() { // from class: bo.v1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R0;
                    R0 = r2.R0((r.c) obj);
                    return R0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.c.f6841a)) {
            d10 = zm.z.d(this, null, new Function1() { // from class: bo.w1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S0;
                    S0 = r2.S0((r.c) obj);
                    return S0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.f) {
            d10 = zm.z.d(this, null, new Function1() { // from class: bo.x1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = r2.T0(r2.a.this, (r.c) obj);
                    return T0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.d.f6842a)) {
            d10 = zm.z.d(this, null, new Function1() { // from class: bo.y1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = r2.U0((r.c) obj);
                    return U0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.i) {
            d10 = zm.z.d(this, null, new Function1() { // from class: bo.z1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V0;
                    V0 = r2.V0(r2.a.this, (r.c) obj);
                    return V0;
                }
            }, 1, null);
        } else {
            throw new or.p();
        }
        aVar.c().d(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(c.b bVar, b bVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.M0(((f) action.c()).g(), new d.a(((c.b.C0111b) bVar).a(), bo.a.f6660i, 0, 4, null)), bVar2.e()), ((f) action.c()).f(), null, ((f) action.c()).i(), null, false, false, null, 244, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.b.f6876a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f6914d));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.a.f6875a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r N1(final r2 r2Var, final b bVar, final f fVar, final v2.c it) {
        zm.r d10;
        zm.r d11;
        zm.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof v2.c.C0122c) {
            d12 = zm.z.d(r2Var, null, new Function1() { // from class: bo.f2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O1;
                    O1 = r2.O1(v2.c.this, bVar, (r.c) obj);
                    return O1;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof v2.c.b) {
            d11 = zm.z.d(r2Var, null, new Function1() { // from class: bo.g2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P1;
                    P1 = r2.P1(v2.c.this, bVar, r2Var, (r.c) obj);
                    return P1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, v2.c.a.f6997a)) {
            d10 = zm.z.d(r2Var, null, new Function1() { // from class: bo.h2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q1;
                    Q1 = r2.Q1(r2.f.this, (r.c) obj);
                    return Q1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f6917o).b(false));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(v2.c cVar, b bVar, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0119f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.C0122c) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, null, 244, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f6918p).b(false));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P1(v2.c cVar, b bVar, r2 r2Var, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0119f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.b) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, r2Var.f6828b.getString(hp.e.f26805j), 116, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f6915e).b(false));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(fVar.a(f.a.f6914d));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(true));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r R1(r2 r2Var, final a.b it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a.b.C0232b) {
            d11 = zm.z.d(r2Var, null, new Function1() { // from class: bo.a2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S1;
                    S1 = r2.S1(a.b.this, (r.c) obj);
                    return S1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof a.b.C0231a) {
            d10 = zm.z.d(r2Var, null, new Function1() { // from class: bo.c2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T1;
                    T1 = r2.T1(a.b.this, (r.c) obj);
                    return T1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(false));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0232b c0232b = (a.b.C0232b) bVar;
        action.e(f.d((f) action.c(), new f.InterfaceC0119f.c(c0232b.a()), c0232b.a(), null, null, 12, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (action.c() instanceof f.b) {
            a.f fVar = (a.f) aVar;
            action.e(f.d((f) action.c(), new f.InterfaceC0119f.b(fVar.b()), null, null, fVar.a(), 6, null));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0231a c0231a = (a.b.C0231a) bVar;
        if (!c0231a.a().isRecoverable()) {
            action.d(new c.C0117c(c0231a.a()));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f fVar = (f) action.c();
        if (fVar instanceof f.b) {
            action.e(f.b.l((f.b) fVar, null, null, null, null, null, false, false, null, 127, null));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r U1(final r2 r2Var, final f.InterfaceC0119f interfaceC0119f, final d.a aVar, final b.AbstractC0233b response) {
        zm.r d10;
        zm.r d11;
        zm.r d12;
        zm.r d13;
        Intrinsics.checkNotNullParameter(response, "response");
        if (response instanceof b.AbstractC0233b.d) {
            d13 = zm.z.d(r2Var, null, new Function1() { // from class: bo.i2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V1;
                    V1 = r2.V1(r2.f.InterfaceC0119f.this, response, (r.c) obj);
                    return V1;
                }
            }, 1, null);
            return d13;
        } else if (response instanceof b.AbstractC0233b.c) {
            d12 = zm.z.d(r2Var, null, new Function1() { // from class: bo.j2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit W1;
                    W1 = r2.W1(d.a.this, response, (r.c) obj);
                    return W1;
                }
            }, 1, null);
            return d12;
        } else if (response instanceof b.AbstractC0233b.a) {
            d11 = zm.z.d(r2Var, null, new Function1() { // from class: bo.k2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit X1;
                    X1 = r2.X1(d.a.this, interfaceC0119f, response, r2Var, (r.c) obj);
                    return X1;
                }
            }, 1, null);
            return d11;
        } else if (response instanceof b.AbstractC0233b.C0234b) {
            d10 = zm.z.d(r2Var, null, new Function1() { // from class: bo.l2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y1;
                    Y1 = r2.Y1(b.AbstractC0233b.this, (r.c) obj);
                    return Y1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.i iVar = (a.i) aVar;
        action.e(new f.e(((f) action.c()).g(), iVar.a(), new f.InterfaceC0119f.c(iVar.a()), null, 8, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(f.InterfaceC0119f interfaceC0119f, b.AbstractC0233b abstractC0233b, r.c action) {
        f.InterfaceC0119f cVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> g10 = ((f) action.c()).g();
        ArrayList<bo.d> arrayList = new ArrayList(CollectionsKt.w(g10, 10));
        for (Parcelable parcelable : g10) {
            b.AbstractC0233b.d dVar = (b.AbstractC0233b.d) abstractC0233b;
            if (Intrinsics.areEqual(parcelable, dVar.b())) {
                parcelable = dVar.a();
            }
            arrayList.add(parcelable);
        }
        if (!arrayList.isEmpty()) {
            for (bo.d dVar2 : arrayList) {
                if (dVar2 instanceof d.a) {
                    cVar = new f.InterfaceC0119f.d(((f.InterfaceC0119f.d) interfaceC0119f).a());
                    break;
                }
            }
        }
        cVar = new f.InterfaceC0119f.c(((f.InterfaceC0119f.d) interfaceC0119f).a());
        action.e(f.d((f) action.c(), cVar, null, arrayList, null, 10, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(d.a aVar, b.AbstractC0233b abstractC0233b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> g10 = ((f) action.c()).g();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(g10, 10));
        for (Parcelable parcelable : g10) {
            if ((parcelable instanceof d.a) && Intrinsics.areEqual(parcelable, aVar)) {
                parcelable = d.a.b((d.a) parcelable, null, null, ((b.AbstractC0233b.c) abstractC0233b).a(), 3, null);
            }
            arrayList.add(parcelable);
        }
        action.e(f.d((f) action.c(), ((f) action.c()).i(), null, arrayList, null, 10, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0116a.f6839a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(d.a aVar, f.InterfaceC0119f interfaceC0119f, b.AbstractC0233b abstractC0233b, r2 r2Var, r.c action) {
        f.InterfaceC0119f dVar;
        String d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List I0 = CollectionsKt.I0(((f) action.c()).g(), aVar);
        List<bo.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (bo.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0119f.d(((f.InterfaceC0119f.d) interfaceC0119f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0119f.c(((f.InterfaceC0119f.d) interfaceC0119f).a());
        f.InterfaceC0119f interfaceC0119f2 = dVar;
        String a10 = ((f.InterfaceC0119f.d) interfaceC0119f).a();
        f.a aVar2 = f.a.f6914d;
        d10 = u2.d(((b.AbstractC0233b.a) abstractC0233b).a(), r2Var.f6828b);
        action.e(new f.b(I0, a10, aVar2, interfaceC0119f2, null, false, false, d10, 80, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f6840a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(b.AbstractC0233b abstractC0233b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0117c(((b.AbstractC0233b.C0234b) abstractC0233b).a()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f6849a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r Z1(r2 r2Var, final d.b bVar, final f.InterfaceC0119f interfaceC0119f, final a.b response) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(response, "response");
        d10 = zm.z.d(r2Var, null, new Function1() { // from class: bo.n2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit a22;
                a22 = r2.a2(d.b.this, interfaceC0119f, response, (r.c) obj);
                return a22;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f6843a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(d.b bVar, f.InterfaceC0119f interfaceC0119f, a.b bVar2, r.c action) {
        f.b bVar3;
        f.InterfaceC0119f dVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof f.b) {
            bVar3 = (f.b) c10;
        } else {
            bVar3 = null;
        }
        f.b bVar4 = bVar3;
        if (bVar4 == null) {
            return Unit.f31988a;
        }
        List I0 = CollectionsKt.I0(bVar4.g(), bVar);
        List<bo.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (bo.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0119f.d(((f.InterfaceC0119f.b) interfaceC0119f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0119f.c(((f.InterfaceC0119f.b) interfaceC0119f).a());
        f.InterfaceC0119f interfaceC0119f2 = dVar;
        if (bVar2 instanceof a.b.C0300b) {
            action.e(f.b.l(bVar4, I0, null, null, interfaceC0119f2, null, false, false, null, 230, null));
        } else if (bVar2 instanceof a.b.C0299a) {
            action.d(new c.C0117c(((a.b.C0299a) bVar2).a()));
        } else {
            throw new or.p();
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b1(r2 r2Var, k.a aVar, f fVar, d.b document) {
        Intrinsics.checkNotNullParameter(document, "document");
        r2Var.L0(aVar, new a.f(((f.b) fVar).f(), document));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c1(r2 r2Var, k.a aVar, f fVar) {
        r2Var.L0(aVar, new a.i(((f.b) fVar).f()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f6840a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0116a.f6839a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f6842a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r g1(final r2 r2Var, final f fVar, final c1.a it) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = zm.z.d(r2Var, null, new Function1() { // from class: bo.i1
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
        int i10 = g.f6949a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new or.p();
            }
            action.e(fVar.a(f.a.f6914d));
        } else {
            bo.c cVar = r2Var.f6830d;
            String string = r2Var.f6828b.getString(hp.e.f26796a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f6916i);
            } else {
                a10 = fVar.a(f.a.f6914d);
            }
            action.e(a10);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f6841a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f6841a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f6846a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f6847a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f6849a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f6843a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(d.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1() {
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f6840a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0116a.f6839a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f6842a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r t1(final r2 r2Var, final f fVar, final c1.a it) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = zm.z.d(r2Var, null, new Function1() { // from class: bo.o1
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
        int i10 = g.f6949a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new or.p();
            }
            action.e(fVar.a(f.a.f6914d));
        } else {
            bo.c cVar = r2Var.f6830d;
            String string = r2Var.f6828b.getString(hp.e.f26796a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f6916i);
            } else {
                a10 = fVar.a(f.a.f6914d);
            }
            action.e(a10);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f6841a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r w1(r2 r2Var, final d.b it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, d.b.C0241b.f18611a)) {
            d11 = zm.z.d(r2Var, null, new Function1() { // from class: bo.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit x12;
                    x12 = r2.x1((r.c) obj);
                    return x12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof d.b.a) {
            d10 = zm.z.d(r2Var, null, new Function1() { // from class: bo.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = r2.y1(d.b.this, (r.c) obj);
                    return y12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.d.f6878a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(d.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0117c(((d.b.a) bVar).a()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f6840a);
        return Unit.f31988a;
    }

    @Override // zm.k
    /* renamed from: J0 */
    public f d(b props, zm.i iVar) {
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
                Object readParcelable = obtain.readParcelable(zm.i.class.getClassLoader());
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
        if (Intrinsics.areEqual(w10, e.a.f6908d)) {
            return new f.d(null, null, props.f(), false, 11, null);
        }
        if (w10 instanceof e.b) {
            return new f.b(CollectionsKt.l(), ((e.b) props.w()).a(), null, null, null, true, false, null, 220, null);
        }
        throw new or.p();
    }

    @Override // zm.k
    /* renamed from: W0 */
    public Object f(b renderProps, final f renderState, final k.a context) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        boolean z15 = true;
        this.f6837k.c(renderProps.b(), renderProps.c(), !(renderState instanceof f.e));
        I1(renderState.e(), renderProps, renderState, context);
        J1(renderState.i(), renderProps, renderState, context);
        K0(renderProps, renderState);
        String str = "";
        if (renderState instanceof f.d) {
            Object iVar = new bo.i(bq.c.a(renderProps.l().a()), A0(renderProps.l().a(), context), this.f6837k.b(), new Function0() { // from class: bo.y
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit X0;
                    X0 = r2.X0(r2.this, context);
                    return X0;
                }
            }, new Function0() { // from class: bo.a0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Y0;
                    Y0 = r2.Y0(r2.this, context);
                    return Y0;
                }
            });
            f.d dVar = (f.d) renderState;
            if (dVar.n()) {
                iVar = cp.d.a(bq.m.f7214a.j(bq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: bo.m0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit j12;
                        j12 = r2.j1(r2.this, context);
                        return j12;
                    }
                }, renderProps.l().b().a()), iVar, "document_upload_options_dialog");
            }
            if (dVar.e() != f.a.f6915e) {
                z15 = false;
            }
            fp.d0 d0Var = fp.d0.f23255d;
            String s10 = renderProps.s();
            if (s10 != null) {
                str = s10;
            }
            String r10 = renderProps.r();
            if (r10 == null) {
                r10 = this.f6828b.getString(hp.e.f26798c);
                Intrinsics.checkNotNullExpressionValue(r10, "getString(...)");
            }
            Context context2 = this.f6828b;
            String string = context2.getString(hp.e.f26797b, pp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return fp.l1.e(iVar, context, z15, d0Var, false, str, r10, string, renderProps.q(), renderProps.p(), null, null, null, this.f6829c, renderProps.x(), null, new Function1() { // from class: bo.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r B1;
                    B1 = r2.B1(r2.this, renderState, (c1.a) obj);
                    return B1;
                }
            }, 19976, null);
        } else if (renderState instanceof f.b) {
            f.b bVar = (f.b) renderState;
            if (bVar.p()) {
                zm.w.l(context, this.f6833g.a(renderProps.v(), bVar.f()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.c.class), "", new Function1() { // from class: bo.o0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r D1;
                        D1 = r2.D1(r2.this, renderState, (c.b) obj);
                        return D1;
                    }
                });
            }
            v4.h hVar = this.f6827a;
            String u10 = renderProps.u();
            String t10 = renderProps.t();
            String d10 = renderProps.d();
            String y10 = renderProps.y();
            List g10 = bVar.g();
            StepStyles.DocumentStepStyle x10 = renderProps.x();
            xp.a b10 = this.f6837k.b();
            boolean p10 = bVar.p();
            if (bVar.g().size() < renderProps.e()) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (!bVar.g().isEmpty() && Intrinsics.areEqual(bVar.i(), new f.InterfaceC0119f.c(bVar.f()))) {
                z13 = true;
            } else {
                z13 = false;
            }
            d.b bVar2 = new d.b(hVar, u10, t10, d10, y10, g10, b10, new Function0() { // from class: bo.p0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit G1;
                    G1 = r2.G1(r2.this, context);
                    return G1;
                }
            }, new Function0() { // from class: bo.q0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit H1;
                    H1 = r2.H1(r2.this, context);
                    return H1;
                }
            }, new Function0() { // from class: bo.r0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Z0;
                    Z0 = r2.Z0(r2.this, context);
                    return Z0;
                }
            }, new Function0() { // from class: bo.s0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit a12;
                    a12 = r2.a1(r2.this, context);
                    return a12;
                }
            }, new Function1() { // from class: bo.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit b12;
                    b12 = r2.b1(r2.this, context, renderState, (d.b) obj);
                    return b12;
                }
            }, new Function0() { // from class: bo.j0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit c12;
                    c12 = r2.c1(r2.this, context, renderState);
                    return c12;
                }
            }, new Function0() { // from class: bo.u0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit d12;
                    d12 = r2.d1(r2.this, context);
                    return d12;
                }
            }, new Function0() { // from class: bo.f1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit e12;
                    e12 = r2.e1(r2.this, context);
                    return e12;
                }
            }, p10, z12, z13, bVar.o(), new Function0() { // from class: bo.q1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f12;
                    f12 = r2.f1(r2.this, context);
                    return f12;
                }
            }, x10);
            if (bVar.e() == f.a.f6915e) {
                z14 = true;
            } else {
                z14 = false;
            }
            fp.d0 d0Var2 = fp.d0.f23255d;
            String s11 = renderProps.s();
            if (s11 == null) {
                s11 = "";
            }
            String r11 = renderProps.r();
            if (r11 == null) {
                r11 = this.f6828b.getString(hp.e.f26798c);
                Intrinsics.checkNotNullExpressionValue(r11, "getString(...)");
            }
            Context context3 = this.f6828b;
            String string2 = context3.getString(hp.e.f26797b, pp.f.b(context3));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            cp.c e10 = fp.l1.e(bVar2, context, z14, d0Var2, false, s11, r11, string2, renderProps.q(), renderProps.p(), null, null, null, this.f6829c, renderProps.x(), null, new Function1() { // from class: bo.b2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r g12;
                    g12 = r2.g1(r2.this, renderState, (c1.a) obj);
                    return g12;
                }
            }, 19976, null);
            if (bVar.q()) {
                return cp.d.a(bq.m.f7214a.j(bq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: bo.m2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i12;
                        i12 = r2.i1(r2.this, context);
                        return i12;
                    }
                }, renderProps.l().b().a()), e10, "document_upload_screen");
            }
            return new cp.c(e10, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.c) {
            f.c cVar = (f.c) renderState;
            String f10 = cVar.f();
            if (f10 != null) {
                context.a(f10, new h(context, this, f10, null));
            }
            v4.h hVar2 = this.f6827a;
            String u11 = renderProps.u();
            String t11 = renderProps.t();
            String d11 = renderProps.d();
            String y11 = renderProps.y();
            List g11 = cVar.g();
            StepStyles.DocumentStepStyle x11 = renderProps.x();
            xp.a b11 = this.f6837k.b();
            boolean o10 = cVar.o();
            if (cVar.g().size() < renderProps.e()) {
                z10 = true;
            } else {
                z10 = false;
            }
            d.b bVar3 = new d.b(hVar2, u11, t11, d11, y11, g11, b11, new Function0() { // from class: bo.o2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit k12;
                    k12 = r2.k1(r2.this, context);
                    return k12;
                }
            }, new Function0() { // from class: bo.p2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit l12;
                    l12 = r2.l1(r2.this, context);
                    return l12;
                }
            }, new Function0() { // from class: bo.q2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m12;
                    m12 = r2.m1(r2.this, context);
                    return m12;
                }
            }, new Function0() { // from class: bo.z
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit n12;
                    n12 = r2.n1(r2.this, context);
                    return n12;
                }
            }, new Function1() { // from class: bo.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o12;
                    o12 = r2.o1((d.b) obj);
                    return o12;
                }
            }, new Function0() { // from class: bo.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit p12;
                    p12 = r2.p1();
                    return p12;
                }
            }, new Function0() { // from class: bo.d0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit q12;
                    q12 = r2.q1(r2.this, context);
                    return q12;
                }
            }, new Function0() { // from class: bo.e0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit r12;
                    r12 = r2.r1(r2.this, context);
                    return r12;
                }
            }, o10, z10, false, cVar.n(), new Function0() { // from class: bo.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit s12;
                    s12 = r2.s1(r2.this, context);
                    return s12;
                }
            }, x11);
            if (cVar.e() == f.a.f6915e) {
                z11 = true;
            } else {
                z11 = false;
            }
            fp.d0 d0Var3 = fp.d0.f23255d;
            String s12 = renderProps.s();
            if (s12 == null) {
                s12 = "";
            }
            String r12 = renderProps.r();
            if (r12 == null) {
                r12 = this.f6828b.getString(hp.e.f26798c);
                Intrinsics.checkNotNullExpressionValue(r12, "getString(...)");
            }
            Context context4 = this.f6828b;
            String string3 = context4.getString(hp.e.f26797b, pp.f.b(context4));
            Intrinsics.checkNotNullExpressionValue(string3, "getString(...)");
            cp.c e11 = fp.l1.e(bVar3, context, z11, d0Var3, false, s12, r12, string3, renderProps.q(), renderProps.p(), null, null, null, this.f6829c, renderProps.x(), null, new Function1() { // from class: bo.g0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r t12;
                    t12 = r2.t1(r2.this, renderState, (c1.a) obj);
                    return t12;
                }
            }, 19976, null);
            if (cVar.p()) {
                return cp.d.a(bq.m.f7214a.j(bq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: bo.h0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v12;
                        v12 = r2.v1(r2.this, context);
                        return v12;
                    }
                }, renderProps.l().b().a()), e11, "document_upload_screen");
            }
            return new cp.c(e11, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.e) {
            zm.w.l(context, this.f6836j.a(renderProps.v(), renderProps.j(), renderProps.i(), renderProps.h(), ((f.e) renderState).g()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.d.class), "", new Function1() { // from class: bo.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r w12;
                    w12 = r2.w1(r2.this, (d.b) obj);
                    return w12;
                }
            });
            xp.b.d(this.f6837k, false, false, false, 4, null);
            return new d.a(renderProps.o(), renderProps.m(), this.f6837k.b(), new Function0() { // from class: bo.k0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit z16;
                    z16 = r2.z1(r2.this, context);
                    return z16;
                }
            }, new Function0() { // from class: bo.l0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit A1;
                    A1 = r2.A1(r2.this, context);
                    return A1;
                }
            }, renderProps.x(), renderProps.a().getPendingPage(), renderProps.n());
        } else {
            throw new or.p();
        }
    }

    @Override // zm.k
    /* renamed from: b2 */
    public zm.i g(f state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return bn.s.a(state);
    }
}
