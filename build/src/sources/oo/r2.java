package oo;

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
import en.k;
import en.r;
import fq.b;
import fq.i;
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
import nq.b;
import okio.ByteString;
import oo.c;
import oo.d;
import oo.r2;
import oo.v2;
import org.jetbrains.annotations.NotNull;
import pq.k5;
import qo.a;
import rp.c1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r2 extends en.k {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f41406a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f41407b;

    /* renamed from: c  reason: collision with root package name */
    private final rp.c1 f41408c;

    /* renamed from: d  reason: collision with root package name */
    private final oo.c f41409d;

    /* renamed from: e  reason: collision with root package name */
    private final v2.b f41410e;

    /* renamed from: f  reason: collision with root package name */
    private final a.C0234a f41411f;

    /* renamed from: g  reason: collision with root package name */
    private final c.a f41412g;

    /* renamed from: h  reason: collision with root package name */
    private final b.a f41413h;

    /* renamed from: i  reason: collision with root package name */
    private final a.C0612a f41414i;

    /* renamed from: j  reason: collision with root package name */
    private final d.a f41415j;

    /* renamed from: k  reason: collision with root package name */
    private final jq.b f41416k;

    /* renamed from: l  reason: collision with root package name */
    private final fq.c f41417l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: oo.r2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0566a extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final C0566a f41418a = new C0566a();

            private C0566a() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0566a)) {
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
            public static final b f41419a = new b();

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
            public static final c f41420a = new c();

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
            public static final d f41421a = new d();

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
            public static final e f41422a = new e();

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
            private final String f41423a;

            /* renamed from: b  reason: collision with root package name */
            private final d.b f41424b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String documentId, d.b document) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(document, "document");
                this.f41423a = documentId;
                this.f41424b = document;
            }

            public final d.b a() {
                return this.f41424b;
            }

            public final String b() {
                return this.f41423a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof f)) {
                    return false;
                }
                f fVar = (f) obj;
                if (Intrinsics.areEqual(this.f41423a, fVar.f41423a) && Intrinsics.areEqual(this.f41424b, fVar.f41424b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f41423a.hashCode() * 31) + this.f41424b.hashCode();
            }

            public String toString() {
                String str = this.f41423a;
                d.b bVar = this.f41424b;
                return "RemoveDocument(documentId=" + str + ", document=" + bVar + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class g extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final g f41425a = new g();

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
            public static final h f41426a = new h();

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
            private final String f41427a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public i(String documentId) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                this.f41427a = documentId;
            }

            public final String a() {
                return this.f41427a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof i) && Intrinsics.areEqual(this.f41427a, ((i) obj).f41427a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f41427a.hashCode();
            }

            public String toString() {
                String str = this.f41427a;
                return "Submit(documentId=" + str + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class j extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final j f41428a = new j();

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
        private final String f41429a;

        /* renamed from: b  reason: collision with root package name */
        private final String f41430b;

        /* renamed from: c  reason: collision with root package name */
        private final String f41431c;

        /* renamed from: d  reason: collision with root package name */
        private final String f41432d;

        /* renamed from: e  reason: collision with root package name */
        private final String f41433e;

        /* renamed from: f  reason: collision with root package name */
        private final String f41434f;

        /* renamed from: g  reason: collision with root package name */
        private final String f41435g;

        /* renamed from: h  reason: collision with root package name */
        private final String f41436h;

        /* renamed from: i  reason: collision with root package name */
        private final String f41437i;

        /* renamed from: j  reason: collision with root package name */
        private final String f41438j;

        /* renamed from: k  reason: collision with root package name */
        private final String f41439k;

        /* renamed from: l  reason: collision with root package name */
        private final String f41440l;

        /* renamed from: m  reason: collision with root package name */
        private final String f41441m;

        /* renamed from: n  reason: collision with root package name */
        private final e f41442n;

        /* renamed from: o  reason: collision with root package name */
        private final l f41443o;

        /* renamed from: p  reason: collision with root package name */
        private final int f41444p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f41445q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f41446r;

        /* renamed from: s  reason: collision with root package name */
        private final String f41447s;

        /* renamed from: t  reason: collision with root package name */
        private final String f41448t;

        /* renamed from: u  reason: collision with root package name */
        private final String f41449u;

        /* renamed from: v  reason: collision with root package name */
        private final String f41450v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.DocumentStepStyle f41451w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.Document.AssetConfig f41452x;

        /* renamed from: y  reason: collision with root package name */
        private final PendingPageTextPosition f41453y;

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
            this.f41429a = sessionToken;
            this.f41430b = inquiryId;
            this.f41431c = fromStep;
            this.f41432d = fromComponent;
            this.f41433e = str;
            this.f41434f = str2;
            this.f41435g = str3;
            this.f41436h = str4;
            this.f41437i = str5;
            this.f41438j = str6;
            this.f41439k = fieldKeyDocument;
            this.f41440l = kind;
            this.f41441m = str7;
            this.f41442n = startPage;
            this.f41443o = pages;
            this.f41444p = i10;
            this.f41445q = z10;
            this.f41446r = z11;
            this.f41447s = str8;
            this.f41448t = str9;
            this.f41449u = str10;
            this.f41450v = str11;
            this.f41451w = documentStepStyle;
            this.f41452x = assetConfig;
            this.f41453y = pendingPageTextVerticalPosition;
        }

        public final NextStep.Document.AssetConfig a() {
            return this.f41452x;
        }

        public final boolean b() {
            return this.f41445q;
        }

        public final boolean c() {
            return this.f41446r;
        }

        public final String d() {
            return this.f41435g;
        }

        public final int e() {
            return this.f41444p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f41429a, bVar.f41429a) && Intrinsics.areEqual(this.f41430b, bVar.f41430b) && Intrinsics.areEqual(this.f41431c, bVar.f41431c) && Intrinsics.areEqual(this.f41432d, bVar.f41432d) && Intrinsics.areEqual(this.f41433e, bVar.f41433e) && Intrinsics.areEqual(this.f41434f, bVar.f41434f) && Intrinsics.areEqual(this.f41435g, bVar.f41435g) && Intrinsics.areEqual(this.f41436h, bVar.f41436h) && Intrinsics.areEqual(this.f41437i, bVar.f41437i) && Intrinsics.areEqual(this.f41438j, bVar.f41438j) && Intrinsics.areEqual(this.f41439k, bVar.f41439k) && Intrinsics.areEqual(this.f41440l, bVar.f41440l) && Intrinsics.areEqual(this.f41441m, bVar.f41441m) && Intrinsics.areEqual(this.f41442n, bVar.f41442n) && Intrinsics.areEqual(this.f41443o, bVar.f41443o) && this.f41444p == bVar.f41444p && this.f41445q == bVar.f41445q && this.f41446r == bVar.f41446r && Intrinsics.areEqual(this.f41447s, bVar.f41447s) && Intrinsics.areEqual(this.f41448t, bVar.f41448t) && Intrinsics.areEqual(this.f41449u, bVar.f41449u) && Intrinsics.areEqual(this.f41450v, bVar.f41450v) && Intrinsics.areEqual(this.f41451w, bVar.f41451w) && Intrinsics.areEqual(this.f41452x, bVar.f41452x) && this.f41453y == bVar.f41453y) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f41441m;
        }

        public final String g() {
            return this.f41439k;
        }

        public final String h() {
            return this.f41432d;
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
            int hashCode12 = ((((((this.f41429a.hashCode() * 31) + this.f41430b.hashCode()) * 31) + this.f41431c.hashCode()) * 31) + this.f41432d.hashCode()) * 31;
            String str = this.f41433e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode12 + hashCode) * 31;
            String str2 = this.f41434f;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f41435g;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f41436h;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f41437i;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f41438j;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int hashCode13 = (((((i15 + hashCode6) * 31) + this.f41439k.hashCode()) * 31) + this.f41440l.hashCode()) * 31;
            String str7 = this.f41441m;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int hashCode14 = (((((((((((hashCode13 + hashCode7) * 31) + this.f41442n.hashCode()) * 31) + this.f41443o.hashCode()) * 31) + Integer.hashCode(this.f41444p)) * 31) + Boolean.hashCode(this.f41445q)) * 31) + Boolean.hashCode(this.f41446r)) * 31;
            String str8 = this.f41447s;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i16 = (hashCode14 + hashCode8) * 31;
            String str9 = this.f41448t;
            if (str9 == null) {
                hashCode9 = 0;
            } else {
                hashCode9 = str9.hashCode();
            }
            int i17 = (i16 + hashCode9) * 31;
            String str10 = this.f41449u;
            if (str10 == null) {
                hashCode10 = 0;
            } else {
                hashCode10 = str10.hashCode();
            }
            int i18 = (i17 + hashCode10) * 31;
            String str11 = this.f41450v;
            if (str11 == null) {
                hashCode11 = 0;
            } else {
                hashCode11 = str11.hashCode();
            }
            int i19 = (i18 + hashCode11) * 31;
            StepStyles.DocumentStepStyle documentStepStyle = this.f41451w;
            if (documentStepStyle != null) {
                i10 = documentStepStyle.hashCode();
            }
            return ((((i19 + i10) * 31) + this.f41452x.hashCode()) * 31) + this.f41453y.hashCode();
        }

        public final String i() {
            return this.f41431c;
        }

        public final String j() {
            return this.f41430b;
        }

        public final String k() {
            return this.f41440l;
        }

        public final l l() {
            return this.f41443o;
        }

        public final String m() {
            return this.f41438j;
        }

        public final PendingPageTextPosition n() {
            return this.f41453y;
        }

        public final String o() {
            return this.f41437i;
        }

        public final String p() {
            return this.f41450v;
        }

        public final String q() {
            return this.f41449u;
        }

        public final String r() {
            return this.f41448t;
        }

        public final String s() {
            return this.f41447s;
        }

        public final String t() {
            return this.f41434f;
        }

        public String toString() {
            String str = this.f41429a;
            String str2 = this.f41430b;
            String str3 = this.f41431c;
            String str4 = this.f41432d;
            String str5 = this.f41433e;
            String str6 = this.f41434f;
            String str7 = this.f41435g;
            String str8 = this.f41436h;
            String str9 = this.f41437i;
            String str10 = this.f41438j;
            String str11 = this.f41439k;
            String str12 = this.f41440l;
            String str13 = this.f41441m;
            e eVar = this.f41442n;
            l lVar = this.f41443o;
            int i10 = this.f41444p;
            boolean z10 = this.f41445q;
            boolean z11 = this.f41446r;
            String str14 = this.f41447s;
            String str15 = this.f41448t;
            String str16 = this.f41449u;
            String str17 = this.f41450v;
            StepStyles.DocumentStepStyle documentStepStyle = this.f41451w;
            NextStep.Document.AssetConfig assetConfig = this.f41452x;
            PendingPageTextPosition pendingPageTextPosition = this.f41453y;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromStep=" + str3 + ", fromComponent=" + str4 + ", promptTitle=" + str5 + ", promptDescription=" + str6 + ", disclaimer=" + str7 + ", submitButtonText=" + str8 + ", pendingTitle=" + str9 + ", pendingDescription=" + str10 + ", fieldKeyDocument=" + str11 + ", kind=" + str12 + ", documentId=" + str13 + ", startPage=" + eVar + ", pages=" + lVar + ", documentFileLimit=" + i10 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", permissionsTitle=" + str14 + ", permissionsRationale=" + str15 + ", permissionsModalPositiveButton=" + str16 + ", permissionsModalNegativeButton=" + str17 + ", styles=" + documentStepStyle + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
        }

        public final String u() {
            return this.f41433e;
        }

        public final String v() {
            return this.f41429a;
        }

        public final e w() {
            return this.f41442n;
        }

        public final StepStyles.DocumentStepStyle x() {
            return this.f41451w;
        }

        public final String y() {
            return this.f41436h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f41454a = new a();

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
            public static final b f41455a = new b();

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

        /* renamed from: oo.r2$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0567c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f41456a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0567c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f41456a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f41456a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0567c) && Intrinsics.areEqual(this.f41456a, ((C0567c) obj).f41456a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f41456a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f41456a;
                return "Errored(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f41457a = new d();

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
            private final String f41458a;

            /* renamed from: b  reason: collision with root package name */
            private final String f41459b;

            /* renamed from: c  reason: collision with root package name */
            private final jq.a f41460c;

            /* renamed from: d  reason: collision with root package name */
            private final Function0 f41461d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f41462e;

            /* renamed from: f  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f41463f;

            /* renamed from: g  reason: collision with root package name */
            private final NextStep.Document.AssetConfig.PendingPage f41464g;

            /* renamed from: h  reason: collision with root package name */
            private final PendingPageTextPosition f41465h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, jq.a navigationState, Function0 onBack, Function0 onCancel, StepStyles.DocumentStepStyle documentStepStyle, NextStep.Document.AssetConfig.PendingPage pendingPage, PendingPageTextPosition pendingPageTextVerticalPosition) {
                super(null);
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                this.f41458a = str;
                this.f41459b = str2;
                this.f41460c = navigationState;
                this.f41461d = onBack;
                this.f41462e = onCancel;
                this.f41463f = documentStepStyle;
                this.f41464g = pendingPage;
                this.f41465h = pendingPageTextVerticalPosition;
            }

            public final NextStep.Document.AssetConfig.PendingPage a() {
                return this.f41464g;
            }

            public final jq.a b() {
                return this.f41460c;
            }

            public final Function0 c() {
                return this.f41461d;
            }

            public final Function0 d() {
                return this.f41462e;
            }

            public final PendingPageTextPosition e() {
                return this.f41465h;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f41458a, aVar.f41458a) && Intrinsics.areEqual(this.f41459b, aVar.f41459b) && Intrinsics.areEqual(this.f41460c, aVar.f41460c) && Intrinsics.areEqual(this.f41461d, aVar.f41461d) && Intrinsics.areEqual(this.f41462e, aVar.f41462e) && Intrinsics.areEqual(this.f41463f, aVar.f41463f) && Intrinsics.areEqual(this.f41464g, aVar.f41464g) && this.f41465h == aVar.f41465h) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f41459b;
            }

            public final StepStyles.DocumentStepStyle g() {
                return this.f41463f;
            }

            public final String h() {
                return this.f41458a;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                String str = this.f41458a;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = hashCode * 31;
                String str2 = this.f41459b;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int hashCode4 = (((((((i11 + hashCode2) * 31) + this.f41460c.hashCode()) * 31) + this.f41461d.hashCode()) * 31) + this.f41462e.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f41463f;
                if (documentStepStyle == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = documentStepStyle.hashCode();
                }
                int i12 = (hashCode4 + hashCode3) * 31;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f41464g;
                if (pendingPage != null) {
                    i10 = pendingPage.hashCode();
                }
                return ((i12 + i10) * 31) + this.f41465h.hashCode();
            }

            public String toString() {
                String str = this.f41458a;
                String str2 = this.f41459b;
                jq.a aVar = this.f41460c;
                Function0 function0 = this.f41461d;
                Function0 function02 = this.f41462e;
                StepStyles.DocumentStepStyle documentStepStyle = this.f41463f;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f41464g;
                PendingPageTextPosition pendingPageTextPosition = this.f41465h;
                return "LoadingAnimation(title=" + str + ", prompt=" + str2 + ", navigationState=" + aVar + ", onBack=" + function0 + ", onCancel=" + function02 + ", styles=" + documentStepStyle + ", assetConfig=" + pendingPage + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final v4.h f41466a;

            /* renamed from: b  reason: collision with root package name */
            private final String f41467b;

            /* renamed from: c  reason: collision with root package name */
            private final String f41468c;

            /* renamed from: d  reason: collision with root package name */
            private final String f41469d;

            /* renamed from: e  reason: collision with root package name */
            private final String f41470e;

            /* renamed from: f  reason: collision with root package name */
            private final List f41471f;

            /* renamed from: g  reason: collision with root package name */
            private final jq.a f41472g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f41473h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f41474i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f41475j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f41476k;

            /* renamed from: l  reason: collision with root package name */
            private final Function1 f41477l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f41478m;

            /* renamed from: n  reason: collision with root package name */
            private final Function0 f41479n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f41480o;

            /* renamed from: p  reason: collision with root package name */
            private final boolean f41481p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f41482q;

            /* renamed from: r  reason: collision with root package name */
            private final boolean f41483r;

            /* renamed from: s  reason: collision with root package name */
            private final String f41484s;

            /* renamed from: t  reason: collision with root package name */
            private final Function0 f41485t;

            /* renamed from: u  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f41486u;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(v4.h imageLoader, String str, String str2, String str3, String str4, List documents, jq.a navigationState, Function0 openSelectFile, Function0 selectFromPhotoLibrary, Function0 openCamera, Function0 openUploadOptions, Function1 onRemove, Function0 onSubmit, Function0 onCancel, Function0 onBack, boolean z10, boolean z11, boolean z12, String str5, Function0 onErrorDismissed, StepStyles.DocumentStepStyle documentStepStyle) {
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
                this.f41466a = imageLoader;
                this.f41467b = str;
                this.f41468c = str2;
                this.f41469d = str3;
                this.f41470e = str4;
                this.f41471f = documents;
                this.f41472g = navigationState;
                this.f41473h = openSelectFile;
                this.f41474i = selectFromPhotoLibrary;
                this.f41475j = openCamera;
                this.f41476k = openUploadOptions;
                this.f41477l = onRemove;
                this.f41478m = onSubmit;
                this.f41479n = onCancel;
                this.f41480o = onBack;
                this.f41481p = z10;
                this.f41482q = z11;
                this.f41483r = z12;
                this.f41484s = str5;
                this.f41485t = onErrorDismissed;
                this.f41486u = documentStepStyle;
            }

            public final boolean a() {
                return this.f41482q;
            }

            public final boolean b() {
                return this.f41481p;
            }

            public final String c() {
                return this.f41469d;
            }

            public final List d() {
                return this.f41471f;
            }

            public final String e() {
                return this.f41484s;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f41466a, bVar.f41466a) && Intrinsics.areEqual(this.f41467b, bVar.f41467b) && Intrinsics.areEqual(this.f41468c, bVar.f41468c) && Intrinsics.areEqual(this.f41469d, bVar.f41469d) && Intrinsics.areEqual(this.f41470e, bVar.f41470e) && Intrinsics.areEqual(this.f41471f, bVar.f41471f) && Intrinsics.areEqual(this.f41472g, bVar.f41472g) && Intrinsics.areEqual(this.f41473h, bVar.f41473h) && Intrinsics.areEqual(this.f41474i, bVar.f41474i) && Intrinsics.areEqual(this.f41475j, bVar.f41475j) && Intrinsics.areEqual(this.f41476k, bVar.f41476k) && Intrinsics.areEqual(this.f41477l, bVar.f41477l) && Intrinsics.areEqual(this.f41478m, bVar.f41478m) && Intrinsics.areEqual(this.f41479n, bVar.f41479n) && Intrinsics.areEqual(this.f41480o, bVar.f41480o) && this.f41481p == bVar.f41481p && this.f41482q == bVar.f41482q && this.f41483r == bVar.f41483r && Intrinsics.areEqual(this.f41484s, bVar.f41484s) && Intrinsics.areEqual(this.f41485t, bVar.f41485t) && Intrinsics.areEqual(this.f41486u, bVar.f41486u)) {
                    return true;
                }
                return false;
            }

            public final v4.h f() {
                return this.f41466a;
            }

            public final jq.a g() {
                return this.f41472g;
            }

            public final Function0 h() {
                return this.f41480o;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                int hashCode4;
                int hashCode5;
                int hashCode6 = this.f41466a.hashCode() * 31;
                String str = this.f41467b;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode6 + hashCode) * 31;
                String str2 = this.f41468c;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f41469d;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f41470e;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int hashCode7 = (((((((((((((((((((((((((((i13 + hashCode4) * 31) + this.f41471f.hashCode()) * 31) + this.f41472g.hashCode()) * 31) + this.f41473h.hashCode()) * 31) + this.f41474i.hashCode()) * 31) + this.f41475j.hashCode()) * 31) + this.f41476k.hashCode()) * 31) + this.f41477l.hashCode()) * 31) + this.f41478m.hashCode()) * 31) + this.f41479n.hashCode()) * 31) + this.f41480o.hashCode()) * 31) + Boolean.hashCode(this.f41481p)) * 31) + Boolean.hashCode(this.f41482q)) * 31) + Boolean.hashCode(this.f41483r)) * 31;
                String str5 = this.f41484s;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int hashCode8 = (((hashCode7 + hashCode5) * 31) + this.f41485t.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f41486u;
                if (documentStepStyle != null) {
                    i10 = documentStepStyle.hashCode();
                }
                return hashCode8 + i10;
            }

            public final Function0 i() {
                return this.f41479n;
            }

            public final Function0 j() {
                return this.f41485t;
            }

            public final Function1 k() {
                return this.f41477l;
            }

            public final Function0 l() {
                return this.f41478m;
            }

            public final Function0 m() {
                return this.f41476k;
            }

            public final String n() {
                return this.f41468c;
            }

            public final StepStyles.DocumentStepStyle o() {
                return this.f41486u;
            }

            public final boolean p() {
                return this.f41483r;
            }

            public final String q() {
                return this.f41470e;
            }

            public final String r() {
                return this.f41467b;
            }

            public String toString() {
                v4.h hVar = this.f41466a;
                String str = this.f41467b;
                String str2 = this.f41468c;
                String str3 = this.f41469d;
                String str4 = this.f41470e;
                List list = this.f41471f;
                jq.a aVar = this.f41472g;
                Function0 function0 = this.f41473h;
                Function0 function02 = this.f41474i;
                Function0 function03 = this.f41475j;
                Function0 function04 = this.f41476k;
                Function1 function1 = this.f41477l;
                Function0 function05 = this.f41478m;
                Function0 function06 = this.f41479n;
                Function0 function07 = this.f41480o;
                boolean z10 = this.f41481p;
                boolean z11 = this.f41482q;
                boolean z12 = this.f41483r;
                String str5 = this.f41484s;
                Function0 function08 = this.f41485t;
                StepStyles.DocumentStepStyle documentStepStyle = this.f41486u;
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
            public static final a f41487d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0568a();

            /* renamed from: oo.r2$e$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0568a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f41487d;
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
            private final String f41488d;

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
                this.f41488d = documentId;
            }

            public final String a() {
                return this.f41488d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof b) && Intrinsics.areEqual(this.f41488d, ((b) obj).f41488d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f41488d.hashCode();
            }

            public String toString() {
                String str = this.f41488d;
                return "Review(documentId=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f41488d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        private final a f41489d;

        /* renamed from: e  reason: collision with root package name */
        private final InterfaceC0569f f41490e;

        /* renamed from: i  reason: collision with root package name */
        private final String f41491i;

        /* renamed from: o  reason: collision with root package name */
        private final List f41492o;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f41493d = new a("None", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f41494e = new a("CheckCameraPermissions", 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f41495i = new a("CameraRunning", 2);

            /* renamed from: o  reason: collision with root package name */
            public static final a f41496o = new a("SelectFileFromDocuments", 3);

            /* renamed from: p  reason: collision with root package name */
            public static final a f41497p = new a("SelectImageFromPhotoLibrary", 4);

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ a[] f41498q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f41499r;

            static {
                a[] a10 = a();
                f41498q = a10;
                f41499r = hs.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f41493d, f41494e, f41495i, f41496o, f41497p};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f41498q.clone();
            }
        }

        /* renamed from: oo.r2$f$f  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public interface InterfaceC0569f extends Parcelable {

            /* renamed from: oo.r2$f$f$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements InterfaceC0569f {

                /* renamed from: d  reason: collision with root package name */
                public static final a f41524d = new a();
                @NotNull
                public static final Parcelable.Creator<a> CREATOR = new C0570a();

                /* renamed from: oo.r2$f$f$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0570a implements Parcelable.Creator {
                    @Override // android.os.Parcelable.Creator
                    /* renamed from: a */
                    public final a createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        parcel.readInt();
                        return a.f41524d;
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

            /* renamed from: oo.r2$f$f$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b implements InterfaceC0569f {
                @NotNull
                public static final Parcelable.Creator<b> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f41525d;

                /* renamed from: oo.r2$f$f$b$a */
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
                    this.f41525d = documentId;
                }

                public final String a() {
                    return this.f41525d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof b) && Intrinsics.areEqual(this.f41525d, ((b) obj).f41525d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f41525d.hashCode();
                }

                public String toString() {
                    String str = this.f41525d;
                    return "DeleteFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f41525d);
                }
            }

            /* renamed from: oo.r2$f$f$c */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class c implements InterfaceC0569f {
                @NotNull
                public static final Parcelable.Creator<c> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f41526d;

                /* renamed from: oo.r2$f$f$c$a */
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
                    this.f41526d = documentId;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof c) && Intrinsics.areEqual(this.f41526d, ((c) obj).f41526d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f41526d.hashCode();
                }

                public String toString() {
                    String str = this.f41526d;
                    return "ReadyToSubmit(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f41526d);
                }
            }

            /* renamed from: oo.r2$f$f$d */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class d implements InterfaceC0569f {
                @NotNull
                public static final Parcelable.Creator<d> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f41527d;

                /* renamed from: oo.r2$f$f$d$a */
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
                    this.f41527d = documentId;
                }

                public final String a() {
                    return this.f41527d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof d) && Intrinsics.areEqual(this.f41527d, ((d) obj).f41527d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f41527d.hashCode();
                }

                public String toString() {
                    String str = this.f41527d;
                    return "UploadFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f41527d);
                }
            }
        }

        public /* synthetic */ f(a aVar, InterfaceC0569f interfaceC0569f, String str, List list, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, interfaceC0569f, str, list);
        }

        public static /* synthetic */ f d(f fVar, InterfaceC0569f interfaceC0569f, String str, List list, oo.d dVar, int i10, Object obj) {
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
                return fVar.c(interfaceC0569f, str, list, dVar);
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
            throw new as.p();
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
            throw new as.p();
        }

        public final f c(InterfaceC0569f uploadState, String str, List list, oo.d dVar) {
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
                throw new as.p();
            }
        }

        public a e() {
            return this.f41489d;
        }

        public abstract String f();

        public List g() {
            return this.f41492o;
        }

        public abstract InterfaceC0569f i();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends f {
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f41520p;

            /* renamed from: q  reason: collision with root package name */
            private final String f41521q;

            /* renamed from: r  reason: collision with root package name */
            private final InterfaceC0569f f41522r;

            /* renamed from: s  reason: collision with root package name */
            private final String f41523s;

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
                    return new e(arrayList, parcel.readString(), (InterfaceC0569f) parcel.readParcelable(e.class.getClassLoader()), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final e[] newArray(int i10) {
                    return new e[i10];
                }
            }

            public /* synthetic */ e(List list, String str, InterfaceC0569f interfaceC0569f, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? InterfaceC0569f.a.f41524d : interfaceC0569f, (i10 & 8) != 0 ? null : str2);
            }

            public static /* synthetic */ e k(e eVar, List list, String str, InterfaceC0569f interfaceC0569f, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = eVar.f41520p;
                }
                if ((i10 & 2) != 0) {
                    str = eVar.f41521q;
                }
                if ((i10 & 4) != 0) {
                    interfaceC0569f = eVar.f41522r;
                }
                if ((i10 & 8) != 0) {
                    str2 = eVar.f41523s;
                }
                return eVar.j(list, str, interfaceC0569f, str2);
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
                if (Intrinsics.areEqual(this.f41520p, eVar.f41520p) && Intrinsics.areEqual(this.f41521q, eVar.f41521q) && Intrinsics.areEqual(this.f41522r, eVar.f41522r) && Intrinsics.areEqual(this.f41523s, eVar.f41523s)) {
                    return true;
                }
                return false;
            }

            @Override // oo.r2.f
            public String f() {
                return this.f41521q;
            }

            @Override // oo.r2.f
            public List g() {
                return this.f41520p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((this.f41520p.hashCode() * 31) + this.f41521q.hashCode()) * 31) + this.f41522r.hashCode()) * 31;
                String str = this.f41523s;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            @Override // oo.r2.f
            public InterfaceC0569f i() {
                return this.f41522r;
            }

            public final e j(List documents, String documentId, InterfaceC0569f uploadState, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new e(documents, documentId, uploadState, str);
            }

            public String toString() {
                List list = this.f41520p;
                String str = this.f41521q;
                InterfaceC0569f interfaceC0569f = this.f41522r;
                String str2 = this.f41523s;
                return "UploadDocument(documents=" + list + ", documentId=" + str + ", uploadState=" + interfaceC0569f + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f41520p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f41521q);
                dest.writeParcelable(this.f41522r, i10);
                dest.writeString(this.f41523s);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(List documents, String documentId, InterfaceC0569f uploadState, String str) {
                super(a.f41493d, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f41520p = documents;
                this.f41521q = documentId;
                this.f41522r = uploadState;
                this.f41523s = str;
            }
        }

        private f(a aVar, InterfaceC0569f interfaceC0569f, String str, List list) {
            this.f41489d = aVar;
            this.f41490e = interfaceC0569f;
            this.f41491i = str;
            this.f41492o = list;
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends f {
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f41500p;

            /* renamed from: q  reason: collision with root package name */
            private final String f41501q;

            /* renamed from: r  reason: collision with root package name */
            private final a f41502r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0569f f41503s;

            /* renamed from: t  reason: collision with root package name */
            private final oo.d f41504t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f41505u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f41506v;

            /* renamed from: w  reason: collision with root package name */
            private final String f41507w;

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
                    InterfaceC0569f interfaceC0569f = (InterfaceC0569f) parcel.readParcelable(b.class.getClassLoader());
                    oo.d dVar = (oo.d) parcel.readParcelable(b.class.getClassLoader());
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
                    return new b(arrayList, readString, valueOf, interfaceC0569f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final b[] newArray(int i10) {
                    return new b[i10];
                }
            }

            public /* synthetic */ b(List list, String str, a aVar, InterfaceC0569f interfaceC0569f, oo.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f41493d : aVar, (i10 & 8) != 0 ? InterfaceC0569f.a.f41524d : interfaceC0569f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ b k(b bVar, List list, String str, a aVar, InterfaceC0569f interfaceC0569f, oo.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = bVar.f41500p;
                }
                if ((i10 & 2) != 0) {
                    str = bVar.f41501q;
                }
                if ((i10 & 4) != 0) {
                    aVar = bVar.f41502r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0569f = bVar.f41503s;
                }
                if ((i10 & 16) != 0) {
                    dVar = bVar.f41504t;
                }
                if ((i10 & 32) != 0) {
                    z10 = bVar.f41505u;
                }
                if ((i10 & 64) != 0) {
                    z11 = bVar.f41506v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = bVar.f41507w;
                }
                boolean z12 = z11;
                String str3 = str2;
                oo.d dVar2 = dVar;
                boolean z13 = z10;
                return bVar.j(list, str, aVar, interfaceC0569f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // oo.r2.f
            public a e() {
                return this.f41502r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f41500p, bVar.f41500p) && Intrinsics.areEqual(this.f41501q, bVar.f41501q) && this.f41502r == bVar.f41502r && Intrinsics.areEqual(this.f41503s, bVar.f41503s) && Intrinsics.areEqual(this.f41504t, bVar.f41504t) && this.f41505u == bVar.f41505u && this.f41506v == bVar.f41506v && Intrinsics.areEqual(this.f41507w, bVar.f41507w)) {
                    return true;
                }
                return false;
            }

            @Override // oo.r2.f
            public String f() {
                return this.f41501q;
            }

            @Override // oo.r2.f
            public List g() {
                return this.f41500p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((((this.f41500p.hashCode() * 31) + this.f41501q.hashCode()) * 31) + this.f41502r.hashCode()) * 31) + this.f41503s.hashCode()) * 31;
                oo.d dVar = this.f41504t;
                int i10 = 0;
                if (dVar == null) {
                    hashCode = 0;
                } else {
                    hashCode = dVar.hashCode();
                }
                int hashCode3 = (((((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f41505u)) * 31) + Boolean.hashCode(this.f41506v)) * 31;
                String str = this.f41507w;
                if (str != null) {
                    i10 = str.hashCode();
                }
                return hashCode3 + i10;
            }

            @Override // oo.r2.f
            public InterfaceC0569f i() {
                return this.f41503s;
            }

            public final b j(List documents, String documentId, a captureState, InterfaceC0569f uploadState, oo.d dVar, boolean z10, boolean z11, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new b(documents, documentId, captureState, uploadState, dVar, z10, z11, str);
            }

            public final oo.d l() {
                return this.f41504t;
            }

            public final String o() {
                return this.f41507w;
            }

            public final boolean p() {
                return this.f41505u;
            }

            public final boolean q() {
                return this.f41506v;
            }

            public String toString() {
                List list = this.f41500p;
                String str = this.f41501q;
                a aVar = this.f41502r;
                InterfaceC0569f interfaceC0569f = this.f41503s;
                oo.d dVar = this.f41504t;
                boolean z10 = this.f41505u;
                boolean z11 = this.f41506v;
                String str2 = this.f41507w;
                return "ReviewCaptures(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0569f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f41500p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f41501q);
                dest.writeString(this.f41502r.name());
                dest.writeParcelable(this.f41503s, i10);
                dest.writeParcelable(this.f41504t, i10);
                dest.writeInt(this.f41505u ? 1 : 0);
                dest.writeInt(this.f41506v ? 1 : 0);
                dest.writeString(this.f41507w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(List documents, String documentId, a captureState, InterfaceC0569f uploadState, oo.d dVar, boolean z10, boolean z11, String str) {
                super(captureState, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f41500p = documents;
                this.f41501q = documentId;
                this.f41502r = captureState;
                this.f41503s = uploadState;
                this.f41504t = dVar;
                this.f41505u = z10;
                this.f41506v = z11;
                this.f41507w = str;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends f {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f41508p;

            /* renamed from: q  reason: collision with root package name */
            private final String f41509q;

            /* renamed from: r  reason: collision with root package name */
            private final a f41510r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0569f f41511s;

            /* renamed from: t  reason: collision with root package name */
            private final oo.d f41512t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f41513u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f41514v;

            /* renamed from: w  reason: collision with root package name */
            private final String f41515w;

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
                    InterfaceC0569f interfaceC0569f = (InterfaceC0569f) parcel.readParcelable(c.class.getClassLoader());
                    oo.d dVar = (oo.d) parcel.readParcelable(c.class.getClassLoader());
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
                    return new c(arrayList, readString, valueOf, interfaceC0569f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public /* synthetic */ c(List list, String str, a aVar, InterfaceC0569f interfaceC0569f, oo.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f41493d : aVar, (i10 & 8) != 0 ? InterfaceC0569f.a.f41524d : interfaceC0569f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ c k(c cVar, List list, String str, a aVar, InterfaceC0569f interfaceC0569f, oo.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = cVar.f41508p;
                }
                if ((i10 & 2) != 0) {
                    str = cVar.f41509q;
                }
                if ((i10 & 4) != 0) {
                    aVar = cVar.f41510r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0569f = cVar.f41511s;
                }
                if ((i10 & 16) != 0) {
                    dVar = cVar.f41512t;
                }
                if ((i10 & 32) != 0) {
                    z10 = cVar.f41513u;
                }
                if ((i10 & 64) != 0) {
                    z11 = cVar.f41514v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = cVar.f41515w;
                }
                boolean z12 = z11;
                String str3 = str2;
                oo.d dVar2 = dVar;
                boolean z13 = z10;
                return cVar.j(list, str, aVar, interfaceC0569f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // oo.r2.f
            public a e() {
                return this.f41510r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof c)) {
                    return false;
                }
                c cVar = (c) obj;
                if (Intrinsics.areEqual(this.f41508p, cVar.f41508p) && Intrinsics.areEqual(this.f41509q, cVar.f41509q) && this.f41510r == cVar.f41510r && Intrinsics.areEqual(this.f41511s, cVar.f41511s) && Intrinsics.areEqual(this.f41512t, cVar.f41512t) && this.f41513u == cVar.f41513u && this.f41514v == cVar.f41514v && Intrinsics.areEqual(this.f41515w, cVar.f41515w)) {
                    return true;
                }
                return false;
            }

            @Override // oo.r2.f
            public String f() {
                return this.f41509q;
            }

            @Override // oo.r2.f
            public List g() {
                return this.f41508p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3 = this.f41508p.hashCode() * 31;
                String str = this.f41509q;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f41510r.hashCode()) * 31) + this.f41511s.hashCode()) * 31;
                oo.d dVar = this.f41512t;
                if (dVar == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = dVar.hashCode();
                }
                int hashCode5 = (((((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f41513u)) * 31) + Boolean.hashCode(this.f41514v)) * 31;
                String str2 = this.f41515w;
                if (str2 != null) {
                    i10 = str2.hashCode();
                }
                return hashCode5 + i10;
            }

            @Override // oo.r2.f
            public InterfaceC0569f i() {
                return this.f41511s;
            }

            public final c j(List documents, String str, a captureState, InterfaceC0569f uploadState, oo.d dVar, boolean z10, boolean z11, String str2) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new c(documents, str, captureState, uploadState, dVar, z10, z11, str2);
            }

            public final String l() {
                return this.f41515w;
            }

            public final boolean o() {
                return this.f41513u;
            }

            public final boolean p() {
                return this.f41514v;
            }

            public String toString() {
                List list = this.f41508p;
                String str = this.f41509q;
                a aVar = this.f41510r;
                InterfaceC0569f interfaceC0569f = this.f41511s;
                oo.d dVar = this.f41512t;
                boolean z10 = this.f41513u;
                boolean z11 = this.f41514v;
                String str2 = this.f41515w;
                return "ReviewCapturesWithoutDocumentId(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0569f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f41508p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f41509q);
                dest.writeString(this.f41510r.name());
                dest.writeParcelable(this.f41511s, i10);
                dest.writeParcelable(this.f41512t, i10);
                dest.writeInt(this.f41513u ? 1 : 0);
                dest.writeInt(this.f41514v ? 1 : 0);
                dest.writeString(this.f41515w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(List documents, String str, a captureState, InterfaceC0569f uploadState, oo.d dVar, boolean z10, boolean z11, String str2) {
                super(captureState, uploadState, str, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f41508p = documents;
                this.f41509q = str;
                this.f41510r = captureState;
                this.f41511s = uploadState;
                this.f41512t = dVar;
                this.f41513u = z10;
                this.f41514v = z11;
                this.f41515w = str2;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends f {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final a f41516p;

            /* renamed from: q  reason: collision with root package name */
            private final InterfaceC0569f f41517q;

            /* renamed from: r  reason: collision with root package name */
            private final String f41518r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f41519s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    boolean z10;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    a valueOf = a.valueOf(parcel.readString());
                    InterfaceC0569f interfaceC0569f = (InterfaceC0569f) parcel.readParcelable(d.class.getClassLoader());
                    String readString = parcel.readString();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    return new d(valueOf, interfaceC0569f, readString, z10);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final d[] newArray(int i10) {
                    return new d[i10];
                }
            }

            public /* synthetic */ d(a aVar, InterfaceC0569f interfaceC0569f, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this((i10 & 1) != 0 ? a.f41493d : aVar, (i10 & 2) != 0 ? InterfaceC0569f.a.f41524d : interfaceC0569f, str, (i10 & 8) != 0 ? false : z10);
            }

            public static /* synthetic */ d k(d dVar, a aVar, InterfaceC0569f interfaceC0569f, String str, boolean z10, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    aVar = dVar.f41516p;
                }
                if ((i10 & 2) != 0) {
                    interfaceC0569f = dVar.f41517q;
                }
                if ((i10 & 4) != 0) {
                    str = dVar.f41518r;
                }
                if ((i10 & 8) != 0) {
                    z10 = dVar.f41519s;
                }
                return dVar.j(aVar, interfaceC0569f, str, z10);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // oo.r2.f
            public a e() {
                return this.f41516p;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof d)) {
                    return false;
                }
                d dVar = (d) obj;
                if (this.f41516p == dVar.f41516p && Intrinsics.areEqual(this.f41517q, dVar.f41517q) && Intrinsics.areEqual(this.f41518r, dVar.f41518r) && this.f41519s == dVar.f41519s) {
                    return true;
                }
                return false;
            }

            @Override // oo.r2.f
            public String f() {
                return this.f41518r;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f41516p.hashCode() * 31) + this.f41517q.hashCode()) * 31;
                String str = this.f41518r;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f41519s);
            }

            @Override // oo.r2.f
            public InterfaceC0569f i() {
                return this.f41517q;
            }

            public final d j(a captureState, InterfaceC0569f uploadState, String str, boolean z10) {
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new d(captureState, uploadState, str, z10);
            }

            public final boolean l() {
                return this.f41519s;
            }

            public String toString() {
                a aVar = this.f41516p;
                InterfaceC0569f interfaceC0569f = this.f41517q;
                String str = this.f41518r;
                boolean z10 = this.f41519s;
                return "Start(captureState=" + aVar + ", uploadState=" + interfaceC0569f + ", documentId=" + str + ", shouldShowUploadOptionsDialog=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f41516p.name());
                dest.writeParcelable(this.f41517q, i10);
                dest.writeString(this.f41518r);
                dest.writeInt(this.f41519s ? 1 : 0);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(a captureState, InterfaceC0569f uploadState, String str, boolean z10) {
                super(captureState, uploadState, str, CollectionsKt.l(), null);
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f41516p = captureState;
                this.f41517q = uploadState;
                this.f41518r = str;
                this.f41519s = z10;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f41528a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f41529b;

        static {
            int[] iArr = new int[rp.g1.values().length];
            try {
                iArr[rp.g1.f48169d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[rp.g1.f48170e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[rp.g1.f48171i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f41528a = iArr;
            int[] iArr2 = new int[f.a.values().length];
            try {
                iArr2[f.a.f41493d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[f.a.f41494e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[f.a.f41495i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[f.a.f41496o.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[f.a.f41497p.ordinal()] = 5;
            } catch (NoSuchFieldError unused8) {
            }
            f41529b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f41530d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f41531e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f41532i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f41533o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, r2 r2Var, String str, Continuation continuation) {
            super(2, continuation);
            this.f41531e = aVar;
            this.f41532i = r2Var;
            this.f41533o = str;
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
                return Unit.f32556a;
            }
            cVar.e(new f.b(cVar2.g(), str, null, new f.InterfaceC0569f.d(str), null, false, false, cVar2.l(), 116, null));
            return Unit.f32556a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f41531e, this.f41532i, this.f41533o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            gs.b.f();
            if (this.f41530d == 0) {
                kotlin.c.b(obj);
                en.h c10 = this.f41531e.c();
                r2 r2Var = this.f41532i;
                final String str = this.f41533o;
                d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.h.k(str, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f32556a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f41534d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f41535e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f41536i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f.InterfaceC0569f f41537o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, r2 r2Var, f.InterfaceC0569f interfaceC0569f, Continuation continuation) {
            super(2, continuation);
            this.f41535e = aVar;
            this.f41536i = r2Var;
            this.f41537o = interfaceC0569f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(f.InterfaceC0569f interfaceC0569f, r.c cVar) {
            cVar.e(f.d((f) cVar.c(), new f.InterfaceC0569f.c(((f.InterfaceC0569f.d) interfaceC0569f).a()), null, null, null, 14, null));
            return Unit.f32556a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f41535e, this.f41536i, this.f41537o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            gs.b.f();
            if (this.f41534d == 0) {
                kotlin.c.b(obj);
                en.h c10 = this.f41535e.c();
                r2 r2Var = this.f41536i;
                final f.InterfaceC0569f interfaceC0569f = this.f41537o;
                d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.i.k(r2.f.InterfaceC0569f.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f32556a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    public r2(v4.h imageLoader, Context applicationContext, rp.c1 permissionRequestWorkflow, oo.c documentCameraWorker, v2.b documentsSelectWorkerFactory, a.C0234a documentCreateWorker, c.a documentLoadWorker, b.a documentFileUploadWorker, a.C0612a documentFileDeleteWorker, d.a documentSubmitWorker, jq.b navigationStateManager, fq.c externalEventLogger) {
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
        this.f41406a = imageLoader;
        this.f41407b = applicationContext;
        this.f41408c = permissionRequestWorkflow;
        this.f41409d = documentCameraWorker;
        this.f41410e = documentsSelectWorkerFactory;
        this.f41411f = documentCreateWorker;
        this.f41412g = documentLoadWorker;
        this.f41413h = documentFileUploadWorker;
        this.f41414i = documentFileDeleteWorker;
        this.f41415j = documentSubmitWorker;
        this.f41416k = navigationStateManager;
        this.f41417l = externalEventLogger;
    }

    private final List A0(u uVar, final k.a aVar) {
        return new b.a().a(uVar.b(), new Function1() { // from class: oo.v0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit C0;
                C0 = r2.C0(r2.this, aVar, (k5) obj);
                return C0;
            }
        }).a(uVar.c(), new Function1() { // from class: oo.w0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit D0;
                D0 = r2.D0(r2.this, aVar, (k5) obj);
                return D0;
            }
        }).a(uVar.d(), new Function1() { // from class: oo.x0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E0;
                E0 = r2.E0(r2.this, aVar, (k5) obj);
                return E0;
            }
        }).a(uVar.a(), new Function1() { // from class: oo.y0
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
        r2Var.L0(aVar, a.b.f41419a);
        return Unit.f32556a;
    }

    private final List B0(b3 b3Var, final k.a aVar) {
        return new b.a().a(b3Var.b(), new Function1() { // from class: oo.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit G0;
                G0 = r2.G0(r2.this, aVar, (k5) obj);
                return G0;
            }
        }).a(b3Var.c(), new Function1() { // from class: oo.b1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit H0;
                H0 = r2.H0(r2.this, aVar, (k5) obj);
                return H0;
            }
        }).a(b3Var.d(), new Function1() { // from class: oo.c1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit I0;
                I0 = r2.I0(r2.this, aVar, (k5) obj);
                return I0;
            }
        }).b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r B1(final r2 r2Var, final f fVar, final c1.a it) {
        en.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.z0
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
        r2Var.L0(aVar, a.g.f41425a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f41528a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new as.p();
            }
            action.e(fVar.a(f.a.f41493d));
        } else {
            oo.c cVar = r2Var.f41409d;
            String string = r2Var.f41407b.getString(tp.e.f50352a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f41495i);
            } else {
                a10 = fVar.a(f.a.f41493d);
            }
            action.e(a10);
        }
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f41426a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r D1(r2 r2Var, final f fVar, final c.b it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0243b) {
            d11 = en.z.d(r2Var, null, new Function1() { // from class: oo.d1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit E1;
                    E1 = r2.E1(r2.f.this, it, (r.c) obj);
                    return E1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.e1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit F1;
                    F1 = r2.F1(c.b.this, (r.c) obj);
                    return F1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f41428a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(f fVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.b bVar2 = (f.b) fVar;
        action.e(f.b.k(bVar2, ((c.b.C0243b) bVar).a(), null, null, new f.InterfaceC0569f.c(bVar2.f()), null, false, false, null, 214, null));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.e.f41422a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F1(c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0567c(((c.b.a) bVar).a()));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.g.f41425a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f41425a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f41426a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f41426a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f41428a);
        return Unit.f32556a;
    }

    private final void I1(f.a aVar, final b bVar, final f fVar, k.a aVar2) {
        v2 e10;
        int i10 = g.f41529b[aVar.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4 && i10 != 5) {
                    throw new as.p();
                }
                if (fVar.e() == f.a.f41496o) {
                    e10 = this.f41410e.c();
                } else {
                    e10 = this.f41410e.e();
                }
                en.w.l(aVar2, e10, Reflection.typeOf(v2.class), "", new Function1() { // from class: oo.h1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        en.r N1;
                        N1 = r2.N1(r2.this, bVar, fVar, (v2.c) obj);
                        return N1;
                    }
                });
                return;
            }
            en.w.l(aVar2, this.f41409d, Reflection.typeOf(oo.c.class), "", new Function1() { // from class: oo.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r K1;
                    K1 = r2.K1(r2.this, bVar, (c.b) obj);
                    return K1;
                }
            });
        }
    }

    private final void J1(final f.InterfaceC0569f interfaceC0569f, b bVar, f fVar, k.a aVar) {
        if (Intrinsics.areEqual(interfaceC0569f, f.InterfaceC0569f.a.f41524d)) {
            if (fVar.f() == null) {
                en.w.l(aVar, this.f41411f.a(bVar.v(), bVar.k(), bVar.g(), bVar.e()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.a.class), "", new Function1() { // from class: oo.j1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        en.r R1;
                        R1 = r2.R1(r2.this, (a.b) obj);
                        return R1;
                    }
                });
                return;
            }
            return;
        }
        final d.b bVar2 = null;
        if (interfaceC0569f instanceof f.InterfaceC0569f.d) {
            ArrayList arrayList = new ArrayList();
            for (Object obj : fVar.g()) {
                if (obj instanceof d.a) {
                    arrayList.add(obj);
                }
            }
            if (arrayList.isEmpty()) {
                aVar.a("upload_complete", new i(aVar, this, interfaceC0569f, null));
                return;
            }
            for (final d.a aVar2 : CollectionsKt.a1(arrayList, 3)) {
                en.w.l(aVar, this.f41413h.a(bVar.v(), ((f.InterfaceC0569f.d) interfaceC0569f).a(), aVar2), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.b.class), aVar2.c(), new Function1() { // from class: oo.k1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        en.r U1;
                        U1 = r2.U1(r2.this, interfaceC0569f, aVar2, (b.AbstractC0237b) obj2);
                        return U1;
                    }
                });
            }
        } else if (interfaceC0569f instanceof f.InterfaceC0569f.b) {
            if (fVar instanceof f.b) {
                f.b bVar3 = (f.b) fVar;
                oo.d l10 = bVar3.l();
                if (l10 instanceof d.b) {
                    bVar2 = (d.b) l10;
                }
                if (bVar2 == null) {
                    return;
                }
                en.w.l(aVar, this.f41414i.a(bVar.v(), bVar3.f(), bVar2), Reflection.typeOf(qo.a.class), "", new Function1() { // from class: oo.l1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        en.r Z1;
                        Z1 = r2.Z1(r2.this, bVar2, interfaceC0569f, (a.b) obj2);
                        return Z1;
                    }
                });
            }
        } else if (!(interfaceC0569f instanceof f.InterfaceC0569f.c)) {
            throw new as.p();
        }
    }

    private final void K0(b bVar, f fVar) {
        fq.b bVar2;
        if (fVar.e() == f.a.f41495i) {
            bVar2 = b.d.f24187a;
        } else if (fVar instanceof f.d) {
            bVar2 = b.C0326b.f24185a;
        } else if (fVar instanceof f.b) {
            bVar2 = b.c.f24186a;
        } else if (fVar instanceof f.c) {
            bVar2 = b.c.f24186a;
        } else if (fVar instanceof f.e) {
            bVar2 = b.a.f24184a;
        } else {
            throw new as.p();
        }
        this.f41417l.c(new i.b(bVar.i(), bVar2));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r K1(r2 r2Var, final b bVar, final c.b it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0561b) {
            d11 = en.z.d(r2Var, null, new Function1() { // from class: oo.d2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit L1;
                    L1 = r2.L1(c.b.this, bVar, (r.c) obj);
                    return L1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, c.b.a.f41266a)) {
            d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.e2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M1;
                    M1 = r2.M1((r.c) obj);
                    return M1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    private final void L0(k.a aVar, final a aVar2) {
        en.r d10;
        if (Intrinsics.areEqual(aVar2, a.b.f41419a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M0;
                    M0 = r2.M0((r.c) obj);
                    return M0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.C0566a.f41418a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = r2.N0((r.c) obj);
                    return N0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.g.f41425a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.s1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = r2.O0((r.c) obj);
                    return O0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.h.f41426a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.t1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P0;
                    P0 = r2.P0((r.c) obj);
                    return P0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.j.f41428a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.u1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q0;
                    Q0 = r2.Q0((r.c) obj);
                    return Q0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.e.f41422a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.v1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R0;
                    R0 = r2.R0((r.c) obj);
                    return R0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.c.f41420a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.w1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S0;
                    S0 = r2.S0((r.c) obj);
                    return S0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.f) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.x1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = r2.T0(r2.a.this, (r.c) obj);
                    return T0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.d.f41421a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.y1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = r2.U0((r.c) obj);
                    return U0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.i) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.z1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V0;
                    V0 = r2.V0(r2.a.this, (r.c) obj);
                    return V0;
                }
            }, 1, null);
        } else {
            throw new as.p();
        }
        aVar.c().d(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(c.b bVar, b bVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.M0(((f) action.c()).g(), new d.a(((c.b.C0561b) bVar).a(), oo.a.f41239i, 0, 4, null)), bVar2.e()), ((f) action.c()).f(), null, ((f) action.c()).i(), null, false, false, null, 244, null));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.b.f41455a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f41493d));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.a.f41454a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r N1(final r2 r2Var, final b bVar, final f fVar, final v2.c it) {
        en.r d10;
        en.r d11;
        en.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof v2.c.C0572c) {
            d12 = en.z.d(r2Var, null, new Function1() { // from class: oo.f2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O1;
                    O1 = r2.O1(v2.c.this, bVar, (r.c) obj);
                    return O1;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof v2.c.b) {
            d11 = en.z.d(r2Var, null, new Function1() { // from class: oo.g2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P1;
                    P1 = r2.P1(v2.c.this, bVar, r2Var, (r.c) obj);
                    return P1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, v2.c.a.f41576a)) {
            d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.h2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q1;
                    Q1 = r2.Q1(r2.f.this, (r.c) obj);
                    return Q1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f41496o).b(false));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(v2.c cVar, b bVar, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0569f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.C0572c) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, null, 244, null));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f41497p).b(false));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P1(v2.c cVar, b bVar, r2 r2Var, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0569f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.b) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, r2Var.f41407b.getString(tp.e.f50361j), 116, null));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f41494e).b(false));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(fVar.a(f.a.f41493d));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(true));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r R1(r2 r2Var, final a.b it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a.b.C0236b) {
            d11 = en.z.d(r2Var, null, new Function1() { // from class: oo.a2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S1;
                    S1 = r2.S1(a.b.this, (r.c) obj);
                    return S1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof a.b.C0235a) {
            d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.c2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T1;
                    T1 = r2.T1(a.b.this, (r.c) obj);
                    return T1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(false));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0236b c0236b = (a.b.C0236b) bVar;
        action.e(f.d((f) action.c(), new f.InterfaceC0569f.c(c0236b.a()), c0236b.a(), null, null, 12, null));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (action.c() instanceof f.b) {
            a.f fVar = (a.f) aVar;
            action.e(f.d((f) action.c(), new f.InterfaceC0569f.b(fVar.b()), null, null, fVar.a(), 6, null));
        }
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0235a c0235a = (a.b.C0235a) bVar;
        if (!c0235a.a().isRecoverable()) {
            action.d(new c.C0567c(c0235a.a()));
        }
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f fVar = (f) action.c();
        if (fVar instanceof f.b) {
            action.e(f.b.k((f.b) fVar, null, null, null, null, null, false, false, null, 127, null));
        }
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r U1(final r2 r2Var, final f.InterfaceC0569f interfaceC0569f, final d.a aVar, final b.AbstractC0237b response) {
        en.r d10;
        en.r d11;
        en.r d12;
        en.r d13;
        Intrinsics.checkNotNullParameter(response, "response");
        if (response instanceof b.AbstractC0237b.d) {
            d13 = en.z.d(r2Var, null, new Function1() { // from class: oo.i2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V1;
                    V1 = r2.V1(r2.f.InterfaceC0569f.this, response, (r.c) obj);
                    return V1;
                }
            }, 1, null);
            return d13;
        } else if (response instanceof b.AbstractC0237b.c) {
            d12 = en.z.d(r2Var, null, new Function1() { // from class: oo.j2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit W1;
                    W1 = r2.W1(d.a.this, response, (r.c) obj);
                    return W1;
                }
            }, 1, null);
            return d12;
        } else if (response instanceof b.AbstractC0237b.a) {
            d11 = en.z.d(r2Var, null, new Function1() { // from class: oo.k2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit X1;
                    X1 = r2.X1(d.a.this, interfaceC0569f, response, r2Var, (r.c) obj);
                    return X1;
                }
            }, 1, null);
            return d11;
        } else if (response instanceof b.AbstractC0237b.C0238b) {
            d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.l2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y1;
                    Y1 = r2.Y1(b.AbstractC0237b.this, (r.c) obj);
                    return Y1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.i iVar = (a.i) aVar;
        action.e(new f.e(((f) action.c()).g(), iVar.a(), new f.InterfaceC0569f.c(iVar.a()), null, 8, null));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(f.InterfaceC0569f interfaceC0569f, b.AbstractC0237b abstractC0237b, r.c action) {
        f.InterfaceC0569f cVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> g10 = ((f) action.c()).g();
        ArrayList<oo.d> arrayList = new ArrayList(CollectionsKt.w(g10, 10));
        for (Parcelable parcelable : g10) {
            b.AbstractC0237b.d dVar = (b.AbstractC0237b.d) abstractC0237b;
            if (Intrinsics.areEqual(parcelable, dVar.b())) {
                parcelable = dVar.a();
            }
            arrayList.add(parcelable);
        }
        if (!arrayList.isEmpty()) {
            for (oo.d dVar2 : arrayList) {
                if (dVar2 instanceof d.a) {
                    cVar = new f.InterfaceC0569f.d(((f.InterfaceC0569f.d) interfaceC0569f).a());
                    break;
                }
            }
        }
        cVar = new f.InterfaceC0569f.c(((f.InterfaceC0569f.d) interfaceC0569f).a());
        action.e(f.d((f) action.c(), cVar, null, arrayList, null, 10, null));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(d.a aVar, b.AbstractC0237b abstractC0237b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> g10 = ((f) action.c()).g();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(g10, 10));
        for (Parcelable parcelable : g10) {
            if ((parcelable instanceof d.a) && Intrinsics.areEqual(parcelable, aVar)) {
                parcelable = d.a.b((d.a) parcelable, null, null, ((b.AbstractC0237b.c) abstractC0237b).a(), 3, null);
            }
            arrayList.add(parcelable);
        }
        action.e(f.d((f) action.c(), ((f) action.c()).i(), null, arrayList, null, 10, null));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0566a.f41418a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(d.a aVar, f.InterfaceC0569f interfaceC0569f, b.AbstractC0237b abstractC0237b, r2 r2Var, r.c action) {
        f.InterfaceC0569f dVar;
        String d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List I0 = CollectionsKt.I0(((f) action.c()).g(), aVar);
        List<oo.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (oo.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0569f.d(((f.InterfaceC0569f.d) interfaceC0569f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0569f.c(((f.InterfaceC0569f.d) interfaceC0569f).a());
        f.InterfaceC0569f interfaceC0569f2 = dVar;
        String a10 = ((f.InterfaceC0569f.d) interfaceC0569f).a();
        f.a aVar2 = f.a.f41493d;
        d10 = u2.d(((b.AbstractC0237b.a) abstractC0237b).a(), r2Var.f41407b);
        action.e(new f.b(I0, a10, aVar2, interfaceC0569f2, null, false, false, d10, 80, null));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f41419a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(b.AbstractC0237b abstractC0237b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0567c(((b.AbstractC0237b.C0238b) abstractC0237b).a()));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f41428a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r Z1(r2 r2Var, final d.b bVar, final f.InterfaceC0569f interfaceC0569f, final a.b response) {
        en.r d10;
        Intrinsics.checkNotNullParameter(response, "response");
        d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.n2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit a22;
                a22 = r2.a2(d.b.this, interfaceC0569f, response, (r.c) obj);
                return a22;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f41422a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(d.b bVar, f.InterfaceC0569f interfaceC0569f, a.b bVar2, r.c action) {
        f.b bVar3;
        f.InterfaceC0569f dVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof f.b) {
            bVar3 = (f.b) c10;
        } else {
            bVar3 = null;
        }
        f.b bVar4 = bVar3;
        if (bVar4 == null) {
            return Unit.f32556a;
        }
        List I0 = CollectionsKt.I0(bVar4.g(), bVar);
        List<oo.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (oo.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0569f.d(((f.InterfaceC0569f.b) interfaceC0569f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0569f.c(((f.InterfaceC0569f.b) interfaceC0569f).a());
        f.InterfaceC0569f interfaceC0569f2 = dVar;
        if (bVar2 instanceof a.b.C0614b) {
            action.e(f.b.k(bVar4, I0, null, null, interfaceC0569f2, null, false, false, null, 230, null));
        } else if (bVar2 instanceof a.b.C0613a) {
            action.d(new c.C0567c(((a.b.C0613a) bVar2).a()));
        } else {
            throw new as.p();
        }
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b1(r2 r2Var, k.a aVar, f fVar, d.b document) {
        Intrinsics.checkNotNullParameter(document, "document");
        r2Var.L0(aVar, new a.f(((f.b) fVar).f(), document));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c1(r2 r2Var, k.a aVar, f fVar) {
        r2Var.L0(aVar, new a.i(((f.b) fVar).f()));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f41419a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0566a.f41418a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f41421a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r g1(final r2 r2Var, final f fVar, final c1.a it) {
        en.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.i1
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
        int i10 = g.f41528a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new as.p();
            }
            action.e(fVar.a(f.a.f41493d));
        } else {
            oo.c cVar = r2Var.f41409d;
            String string = r2Var.f41407b.getString(tp.e.f50352a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f41495i);
            } else {
                a10 = fVar.a(f.a.f41493d);
            }
            action.e(a10);
        }
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f41420a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f41420a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f41425a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f41426a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f41428a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f41422a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(d.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1() {
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f41419a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0566a.f41418a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f41421a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r t1(final r2 r2Var, final f fVar, final c1.a it) {
        en.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.o1
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
        int i10 = g.f41528a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new as.p();
            }
            action.e(fVar.a(f.a.f41493d));
        } else {
            oo.c cVar = r2Var.f41409d;
            String string = r2Var.f41407b.getString(tp.e.f50352a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f41495i);
            } else {
                a10 = fVar.a(f.a.f41493d);
            }
            action.e(a10);
        }
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f41420a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r w1(r2 r2Var, final d.b it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, d.b.C0245b.f19612a)) {
            d11 = en.z.d(r2Var, null, new Function1() { // from class: oo.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit x12;
                    x12 = r2.x1((r.c) obj);
                    return x12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof d.b.a) {
            d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = r2.y1(d.b.this, (r.c) obj);
                    return y12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.d.f41457a);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(d.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0567c(((d.b.a) bVar).a()));
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f41419a);
        return Unit.f32556a;
    }

    @Override // en.k
    /* renamed from: J0 */
    public f d(b props, en.i iVar) {
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
                Object readParcelable = obtain.readParcelable(en.i.class.getClassLoader());
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
        if (Intrinsics.areEqual(w10, e.a.f41487d)) {
            return new f.d(null, null, props.f(), false, 11, null);
        }
        if (w10 instanceof e.b) {
            return new f.b(CollectionsKt.l(), ((e.b) props.w()).a(), null, null, null, true, false, null, 220, null);
        }
        throw new as.p();
    }

    @Override // en.k
    /* renamed from: W0 */
    public Object f(b renderProps, final f renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        this.f41416k.c(renderProps.b(), renderProps.c(), !(renderState instanceof f.e));
        I1(renderState.e(), renderProps, renderState, context);
        J1(renderState.i(), renderProps, renderState, context);
        K0(renderProps, renderState);
        if (renderState instanceof f.d) {
            Object iVar = new oo.i(nq.c.a(renderProps.l().a()), A0(renderProps.l().a(), context), this.f41416k.b(), new Function0() { // from class: oo.y
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit X0;
                    X0 = r2.X0(r2.this, context);
                    return X0;
                }
            }, new Function0() { // from class: oo.a0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Y0;
                    Y0 = r2.Y0(r2.this, context);
                    return Y0;
                }
            });
            f.d dVar = (f.d) renderState;
            if (dVar.l()) {
                iVar = op.d.a(nq.m.f38923a.j(nq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: oo.m0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit j12;
                        j12 = r2.j1(r2.this, context);
                        return j12;
                    }
                }, renderProps.l().b().a()), iVar, "document_upload_options_dialog");
            }
            boolean z10 = dVar.e() == f.a.f41494e;
            rp.d0 d0Var = rp.d0.f48143d;
            String s10 = renderProps.s();
            String str = s10 != null ? s10 : "";
            String r10 = renderProps.r();
            if (r10 == null) {
                r10 = this.f41407b.getString(tp.e.f50354c);
                Intrinsics.checkNotNullExpressionValue(r10, "getString(...)");
            }
            Context context2 = this.f41407b;
            String string = context2.getString(tp.e.f50353b, bq.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return rp.l1.e(iVar, context, z10, d0Var, false, str, r10, string, renderProps.q(), renderProps.p(), null, null, null, this.f41408c, renderProps.x(), null, new Function1() { // from class: oo.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r B1;
                    B1 = r2.B1(r2.this, renderState, (c1.a) obj);
                    return B1;
                }
            }, 19976, null);
        } else if (renderState instanceof f.b) {
            f.b bVar = (f.b) renderState;
            if (bVar.p()) {
                en.w.l(context, this.f41412g.a(renderProps.v(), bVar.f()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.c.class), "", new Function1() { // from class: oo.o0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        en.r D1;
                        D1 = r2.D1(r2.this, renderState, (c.b) obj);
                        return D1;
                    }
                });
            }
            d.b bVar2 = new d.b(this.f41406a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), bVar.g(), this.f41416k.b(), new Function0() { // from class: oo.p0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit G1;
                    G1 = r2.G1(r2.this, context);
                    return G1;
                }
            }, new Function0() { // from class: oo.q0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit H1;
                    H1 = r2.H1(r2.this, context);
                    return H1;
                }
            }, new Function0() { // from class: oo.r0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Z0;
                    Z0 = r2.Z0(r2.this, context);
                    return Z0;
                }
            }, new Function0() { // from class: oo.s0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit a12;
                    a12 = r2.a1(r2.this, context);
                    return a12;
                }
            }, new Function1() { // from class: oo.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit b12;
                    b12 = r2.b1(r2.this, context, renderState, (d.b) obj);
                    return b12;
                }
            }, new Function0() { // from class: oo.j0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit c12;
                    c12 = r2.c1(r2.this, context, renderState);
                    return c12;
                }
            }, new Function0() { // from class: oo.u0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit d12;
                    d12 = r2.d1(r2.this, context);
                    return d12;
                }
            }, new Function0() { // from class: oo.f1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit e12;
                    e12 = r2.e1(r2.this, context);
                    return e12;
                }
            }, bVar.p(), bVar.g().size() < renderProps.e(), !bVar.g().isEmpty() && Intrinsics.areEqual(bVar.i(), new f.InterfaceC0569f.c(bVar.f())), bVar.o(), new Function0() { // from class: oo.q1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f12;
                    f12 = r2.f1(r2.this, context);
                    return f12;
                }
            }, renderProps.x());
            boolean z11 = bVar.e() == f.a.f41494e;
            rp.d0 d0Var2 = rp.d0.f48143d;
            String s11 = renderProps.s();
            if (s11 == null) {
                s11 = "";
            }
            String r11 = renderProps.r();
            if (r11 == null) {
                r11 = this.f41407b.getString(tp.e.f50354c);
                Intrinsics.checkNotNullExpressionValue(r11, "getString(...)");
            }
            Context context3 = this.f41407b;
            String string2 = context3.getString(tp.e.f50353b, bq.f.b(context3));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            op.c e10 = rp.l1.e(bVar2, context, z11, d0Var2, false, s11, r11, string2, renderProps.q(), renderProps.p(), null, null, null, this.f41408c, renderProps.x(), null, new Function1() { // from class: oo.b2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r g12;
                    g12 = r2.g1(r2.this, renderState, (c1.a) obj);
                    return g12;
                }
            }, 19976, null);
            if (bVar.q()) {
                return op.d.a(nq.m.f38923a.j(nq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: oo.m2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i12;
                        i12 = r2.i1(r2.this, context);
                        return i12;
                    }
                }, renderProps.l().b().a()), e10, "document_upload_screen");
            }
            return new op.c(e10, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.c) {
            f.c cVar = (f.c) renderState;
            String f10 = cVar.f();
            if (f10 != null) {
                context.a(f10, new h(context, this, f10, null));
            }
            d.b bVar3 = new d.b(this.f41406a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), cVar.g(), this.f41416k.b(), new Function0() { // from class: oo.o2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit k12;
                    k12 = r2.k1(r2.this, context);
                    return k12;
                }
            }, new Function0() { // from class: oo.p2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit l12;
                    l12 = r2.l1(r2.this, context);
                    return l12;
                }
            }, new Function0() { // from class: oo.q2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m12;
                    m12 = r2.m1(r2.this, context);
                    return m12;
                }
            }, new Function0() { // from class: oo.z
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit n12;
                    n12 = r2.n1(r2.this, context);
                    return n12;
                }
            }, new Function1() { // from class: oo.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o12;
                    o12 = r2.o1((d.b) obj);
                    return o12;
                }
            }, new Function0() { // from class: oo.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit p12;
                    p12 = r2.p1();
                    return p12;
                }
            }, new Function0() { // from class: oo.d0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit q12;
                    q12 = r2.q1(r2.this, context);
                    return q12;
                }
            }, new Function0() { // from class: oo.e0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit r12;
                    r12 = r2.r1(r2.this, context);
                    return r12;
                }
            }, cVar.o(), cVar.g().size() < renderProps.e(), false, cVar.l(), new Function0() { // from class: oo.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit s12;
                    s12 = r2.s1(r2.this, context);
                    return s12;
                }
            }, renderProps.x());
            boolean z12 = cVar.e() == f.a.f41494e;
            rp.d0 d0Var3 = rp.d0.f48143d;
            String s12 = renderProps.s();
            if (s12 == null) {
                s12 = "";
            }
            String r12 = renderProps.r();
            if (r12 == null) {
                r12 = this.f41407b.getString(tp.e.f50354c);
                Intrinsics.checkNotNullExpressionValue(r12, "getString(...)");
            }
            Context context4 = this.f41407b;
            String string3 = context4.getString(tp.e.f50353b, bq.f.b(context4));
            Intrinsics.checkNotNullExpressionValue(string3, "getString(...)");
            op.c e11 = rp.l1.e(bVar3, context, z12, d0Var3, false, s12, r12, string3, renderProps.q(), renderProps.p(), null, null, null, this.f41408c, renderProps.x(), null, new Function1() { // from class: oo.g0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r t12;
                    t12 = r2.t1(r2.this, renderState, (c1.a) obj);
                    return t12;
                }
            }, 19976, null);
            if (cVar.p()) {
                return op.d.a(nq.m.f38923a.j(nq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: oo.h0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v12;
                        v12 = r2.v1(r2.this, context);
                        return v12;
                    }
                }, renderProps.l().b().a()), e11, "document_upload_screen");
            }
            return new op.c(e11, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.e) {
            en.w.l(context, this.f41415j.a(renderProps.v(), renderProps.j(), renderProps.i(), renderProps.h(), ((f.e) renderState).g()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.d.class), "", new Function1() { // from class: oo.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r w12;
                    w12 = r2.w1(r2.this, (d.b) obj);
                    return w12;
                }
            });
            jq.b.d(this.f41416k, false, false, false, 4, null);
            return new d.a(renderProps.o(), renderProps.m(), this.f41416k.b(), new Function0() { // from class: oo.k0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit z13;
                    z13 = r2.z1(r2.this, context);
                    return z13;
                }
            }, new Function0() { // from class: oo.l0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit A1;
                    A1 = r2.A1(r2.this, context);
                    return A1;
                }
            }, renderProps.x(), renderProps.a().getPendingPage(), renderProps.n());
        } else {
            throw new as.p();
        }
    }

    @Override // en.k
    /* renamed from: b2 */
    public en.i g(f state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return gn.s.a(state);
    }
}
