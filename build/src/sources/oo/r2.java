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
    private final v4.h f40838a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f40839b;

    /* renamed from: c  reason: collision with root package name */
    private final rp.c1 f40840c;

    /* renamed from: d  reason: collision with root package name */
    private final oo.c f40841d;

    /* renamed from: e  reason: collision with root package name */
    private final v2.b f40842e;

    /* renamed from: f  reason: collision with root package name */
    private final a.C0234a f40843f;

    /* renamed from: g  reason: collision with root package name */
    private final c.a f40844g;

    /* renamed from: h  reason: collision with root package name */
    private final b.a f40845h;

    /* renamed from: i  reason: collision with root package name */
    private final a.C0612a f40846i;

    /* renamed from: j  reason: collision with root package name */
    private final d.a f40847j;

    /* renamed from: k  reason: collision with root package name */
    private final jq.b f40848k;

    /* renamed from: l  reason: collision with root package name */
    private final fq.c f40849l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: oo.r2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0566a extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final C0566a f40850a = new C0566a();

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
            public static final b f40851a = new b();

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
            public static final c f40852a = new c();

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
            public static final d f40853a = new d();

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
            public static final e f40854a = new e();

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
            private final String f40855a;

            /* renamed from: b  reason: collision with root package name */
            private final d.b f40856b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String documentId, d.b document) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(document, "document");
                this.f40855a = documentId;
                this.f40856b = document;
            }

            public final d.b a() {
                return this.f40856b;
            }

            public final String b() {
                return this.f40855a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof f)) {
                    return false;
                }
                f fVar = (f) obj;
                if (Intrinsics.areEqual(this.f40855a, fVar.f40855a) && Intrinsics.areEqual(this.f40856b, fVar.f40856b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f40855a.hashCode() * 31) + this.f40856b.hashCode();
            }

            public String toString() {
                String str = this.f40855a;
                d.b bVar = this.f40856b;
                return "RemoveDocument(documentId=" + str + ", document=" + bVar + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class g extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final g f40857a = new g();

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
            public static final h f40858a = new h();

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
            private final String f40859a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public i(String documentId) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                this.f40859a = documentId;
            }

            public final String a() {
                return this.f40859a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof i) && Intrinsics.areEqual(this.f40859a, ((i) obj).f40859a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f40859a.hashCode();
            }

            public String toString() {
                String str = this.f40859a;
                return "Submit(documentId=" + str + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class j extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final j f40860a = new j();

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
        private final String f40861a;

        /* renamed from: b  reason: collision with root package name */
        private final String f40862b;

        /* renamed from: c  reason: collision with root package name */
        private final String f40863c;

        /* renamed from: d  reason: collision with root package name */
        private final String f40864d;

        /* renamed from: e  reason: collision with root package name */
        private final String f40865e;

        /* renamed from: f  reason: collision with root package name */
        private final String f40866f;

        /* renamed from: g  reason: collision with root package name */
        private final String f40867g;

        /* renamed from: h  reason: collision with root package name */
        private final String f40868h;

        /* renamed from: i  reason: collision with root package name */
        private final String f40869i;

        /* renamed from: j  reason: collision with root package name */
        private final String f40870j;

        /* renamed from: k  reason: collision with root package name */
        private final String f40871k;

        /* renamed from: l  reason: collision with root package name */
        private final String f40872l;

        /* renamed from: m  reason: collision with root package name */
        private final String f40873m;

        /* renamed from: n  reason: collision with root package name */
        private final e f40874n;

        /* renamed from: o  reason: collision with root package name */
        private final l f40875o;

        /* renamed from: p  reason: collision with root package name */
        private final int f40876p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f40877q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f40878r;

        /* renamed from: s  reason: collision with root package name */
        private final String f40879s;

        /* renamed from: t  reason: collision with root package name */
        private final String f40880t;

        /* renamed from: u  reason: collision with root package name */
        private final String f40881u;

        /* renamed from: v  reason: collision with root package name */
        private final String f40882v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.DocumentStepStyle f40883w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.Document.AssetConfig f40884x;

        /* renamed from: y  reason: collision with root package name */
        private final PendingPageTextPosition f40885y;

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
            this.f40861a = sessionToken;
            this.f40862b = inquiryId;
            this.f40863c = fromStep;
            this.f40864d = fromComponent;
            this.f40865e = str;
            this.f40866f = str2;
            this.f40867g = str3;
            this.f40868h = str4;
            this.f40869i = str5;
            this.f40870j = str6;
            this.f40871k = fieldKeyDocument;
            this.f40872l = kind;
            this.f40873m = str7;
            this.f40874n = startPage;
            this.f40875o = pages;
            this.f40876p = i10;
            this.f40877q = z10;
            this.f40878r = z11;
            this.f40879s = str8;
            this.f40880t = str9;
            this.f40881u = str10;
            this.f40882v = str11;
            this.f40883w = documentStepStyle;
            this.f40884x = assetConfig;
            this.f40885y = pendingPageTextVerticalPosition;
        }

        public final NextStep.Document.AssetConfig a() {
            return this.f40884x;
        }

        public final boolean b() {
            return this.f40877q;
        }

        public final boolean c() {
            return this.f40878r;
        }

        public final String d() {
            return this.f40867g;
        }

        public final int e() {
            return this.f40876p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f40861a, bVar.f40861a) && Intrinsics.areEqual(this.f40862b, bVar.f40862b) && Intrinsics.areEqual(this.f40863c, bVar.f40863c) && Intrinsics.areEqual(this.f40864d, bVar.f40864d) && Intrinsics.areEqual(this.f40865e, bVar.f40865e) && Intrinsics.areEqual(this.f40866f, bVar.f40866f) && Intrinsics.areEqual(this.f40867g, bVar.f40867g) && Intrinsics.areEqual(this.f40868h, bVar.f40868h) && Intrinsics.areEqual(this.f40869i, bVar.f40869i) && Intrinsics.areEqual(this.f40870j, bVar.f40870j) && Intrinsics.areEqual(this.f40871k, bVar.f40871k) && Intrinsics.areEqual(this.f40872l, bVar.f40872l) && Intrinsics.areEqual(this.f40873m, bVar.f40873m) && Intrinsics.areEqual(this.f40874n, bVar.f40874n) && Intrinsics.areEqual(this.f40875o, bVar.f40875o) && this.f40876p == bVar.f40876p && this.f40877q == bVar.f40877q && this.f40878r == bVar.f40878r && Intrinsics.areEqual(this.f40879s, bVar.f40879s) && Intrinsics.areEqual(this.f40880t, bVar.f40880t) && Intrinsics.areEqual(this.f40881u, bVar.f40881u) && Intrinsics.areEqual(this.f40882v, bVar.f40882v) && Intrinsics.areEqual(this.f40883w, bVar.f40883w) && Intrinsics.areEqual(this.f40884x, bVar.f40884x) && this.f40885y == bVar.f40885y) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f40873m;
        }

        public final String g() {
            return this.f40871k;
        }

        public final String h() {
            return this.f40864d;
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
            int hashCode12 = ((((((this.f40861a.hashCode() * 31) + this.f40862b.hashCode()) * 31) + this.f40863c.hashCode()) * 31) + this.f40864d.hashCode()) * 31;
            String str = this.f40865e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode12 + hashCode) * 31;
            String str2 = this.f40866f;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f40867g;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f40868h;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f40869i;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f40870j;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int hashCode13 = (((((i15 + hashCode6) * 31) + this.f40871k.hashCode()) * 31) + this.f40872l.hashCode()) * 31;
            String str7 = this.f40873m;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int hashCode14 = (((((((((((hashCode13 + hashCode7) * 31) + this.f40874n.hashCode()) * 31) + this.f40875o.hashCode()) * 31) + Integer.hashCode(this.f40876p)) * 31) + Boolean.hashCode(this.f40877q)) * 31) + Boolean.hashCode(this.f40878r)) * 31;
            String str8 = this.f40879s;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i16 = (hashCode14 + hashCode8) * 31;
            String str9 = this.f40880t;
            if (str9 == null) {
                hashCode9 = 0;
            } else {
                hashCode9 = str9.hashCode();
            }
            int i17 = (i16 + hashCode9) * 31;
            String str10 = this.f40881u;
            if (str10 == null) {
                hashCode10 = 0;
            } else {
                hashCode10 = str10.hashCode();
            }
            int i18 = (i17 + hashCode10) * 31;
            String str11 = this.f40882v;
            if (str11 == null) {
                hashCode11 = 0;
            } else {
                hashCode11 = str11.hashCode();
            }
            int i19 = (i18 + hashCode11) * 31;
            StepStyles.DocumentStepStyle documentStepStyle = this.f40883w;
            if (documentStepStyle != null) {
                i10 = documentStepStyle.hashCode();
            }
            return ((((i19 + i10) * 31) + this.f40884x.hashCode()) * 31) + this.f40885y.hashCode();
        }

        public final String i() {
            return this.f40863c;
        }

        public final String j() {
            return this.f40862b;
        }

        public final String k() {
            return this.f40872l;
        }

        public final l l() {
            return this.f40875o;
        }

        public final String m() {
            return this.f40870j;
        }

        public final PendingPageTextPosition n() {
            return this.f40885y;
        }

        public final String o() {
            return this.f40869i;
        }

        public final String p() {
            return this.f40882v;
        }

        public final String q() {
            return this.f40881u;
        }

        public final String r() {
            return this.f40880t;
        }

        public final String s() {
            return this.f40879s;
        }

        public final String t() {
            return this.f40866f;
        }

        public String toString() {
            String str = this.f40861a;
            String str2 = this.f40862b;
            String str3 = this.f40863c;
            String str4 = this.f40864d;
            String str5 = this.f40865e;
            String str6 = this.f40866f;
            String str7 = this.f40867g;
            String str8 = this.f40868h;
            String str9 = this.f40869i;
            String str10 = this.f40870j;
            String str11 = this.f40871k;
            String str12 = this.f40872l;
            String str13 = this.f40873m;
            e eVar = this.f40874n;
            l lVar = this.f40875o;
            int i10 = this.f40876p;
            boolean z10 = this.f40877q;
            boolean z11 = this.f40878r;
            String str14 = this.f40879s;
            String str15 = this.f40880t;
            String str16 = this.f40881u;
            String str17 = this.f40882v;
            StepStyles.DocumentStepStyle documentStepStyle = this.f40883w;
            NextStep.Document.AssetConfig assetConfig = this.f40884x;
            PendingPageTextPosition pendingPageTextPosition = this.f40885y;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromStep=" + str3 + ", fromComponent=" + str4 + ", promptTitle=" + str5 + ", promptDescription=" + str6 + ", disclaimer=" + str7 + ", submitButtonText=" + str8 + ", pendingTitle=" + str9 + ", pendingDescription=" + str10 + ", fieldKeyDocument=" + str11 + ", kind=" + str12 + ", documentId=" + str13 + ", startPage=" + eVar + ", pages=" + lVar + ", documentFileLimit=" + i10 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", permissionsTitle=" + str14 + ", permissionsRationale=" + str15 + ", permissionsModalPositiveButton=" + str16 + ", permissionsModalNegativeButton=" + str17 + ", styles=" + documentStepStyle + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
        }

        public final String u() {
            return this.f40865e;
        }

        public final String v() {
            return this.f40861a;
        }

        public final e w() {
            return this.f40874n;
        }

        public final StepStyles.DocumentStepStyle x() {
            return this.f40883w;
        }

        public final String y() {
            return this.f40868h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f40886a = new a();

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
            public static final b f40887a = new b();

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
            private final InternalErrorInfo f40888a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0567c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f40888a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f40888a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0567c) && Intrinsics.areEqual(this.f40888a, ((C0567c) obj).f40888a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f40888a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f40888a;
                return "Errored(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f40889a = new d();

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
            private final String f40890a;

            /* renamed from: b  reason: collision with root package name */
            private final String f40891b;

            /* renamed from: c  reason: collision with root package name */
            private final jq.a f40892c;

            /* renamed from: d  reason: collision with root package name */
            private final Function0 f40893d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f40894e;

            /* renamed from: f  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f40895f;

            /* renamed from: g  reason: collision with root package name */
            private final NextStep.Document.AssetConfig.PendingPage f40896g;

            /* renamed from: h  reason: collision with root package name */
            private final PendingPageTextPosition f40897h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, jq.a navigationState, Function0 onBack, Function0 onCancel, StepStyles.DocumentStepStyle documentStepStyle, NextStep.Document.AssetConfig.PendingPage pendingPage, PendingPageTextPosition pendingPageTextVerticalPosition) {
                super(null);
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                this.f40890a = str;
                this.f40891b = str2;
                this.f40892c = navigationState;
                this.f40893d = onBack;
                this.f40894e = onCancel;
                this.f40895f = documentStepStyle;
                this.f40896g = pendingPage;
                this.f40897h = pendingPageTextVerticalPosition;
            }

            public final NextStep.Document.AssetConfig.PendingPage a() {
                return this.f40896g;
            }

            public final jq.a b() {
                return this.f40892c;
            }

            public final Function0 c() {
                return this.f40893d;
            }

            public final Function0 d() {
                return this.f40894e;
            }

            public final PendingPageTextPosition e() {
                return this.f40897h;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f40890a, aVar.f40890a) && Intrinsics.areEqual(this.f40891b, aVar.f40891b) && Intrinsics.areEqual(this.f40892c, aVar.f40892c) && Intrinsics.areEqual(this.f40893d, aVar.f40893d) && Intrinsics.areEqual(this.f40894e, aVar.f40894e) && Intrinsics.areEqual(this.f40895f, aVar.f40895f) && Intrinsics.areEqual(this.f40896g, aVar.f40896g) && this.f40897h == aVar.f40897h) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f40891b;
            }

            public final StepStyles.DocumentStepStyle g() {
                return this.f40895f;
            }

            public final String h() {
                return this.f40890a;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                String str = this.f40890a;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = hashCode * 31;
                String str2 = this.f40891b;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int hashCode4 = (((((((i11 + hashCode2) * 31) + this.f40892c.hashCode()) * 31) + this.f40893d.hashCode()) * 31) + this.f40894e.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f40895f;
                if (documentStepStyle == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = documentStepStyle.hashCode();
                }
                int i12 = (hashCode4 + hashCode3) * 31;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f40896g;
                if (pendingPage != null) {
                    i10 = pendingPage.hashCode();
                }
                return ((i12 + i10) * 31) + this.f40897h.hashCode();
            }

            public String toString() {
                String str = this.f40890a;
                String str2 = this.f40891b;
                jq.a aVar = this.f40892c;
                Function0 function0 = this.f40893d;
                Function0 function02 = this.f40894e;
                StepStyles.DocumentStepStyle documentStepStyle = this.f40895f;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f40896g;
                PendingPageTextPosition pendingPageTextPosition = this.f40897h;
                return "LoadingAnimation(title=" + str + ", prompt=" + str2 + ", navigationState=" + aVar + ", onBack=" + function0 + ", onCancel=" + function02 + ", styles=" + documentStepStyle + ", assetConfig=" + pendingPage + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final v4.h f40898a;

            /* renamed from: b  reason: collision with root package name */
            private final String f40899b;

            /* renamed from: c  reason: collision with root package name */
            private final String f40900c;

            /* renamed from: d  reason: collision with root package name */
            private final String f40901d;

            /* renamed from: e  reason: collision with root package name */
            private final String f40902e;

            /* renamed from: f  reason: collision with root package name */
            private final List f40903f;

            /* renamed from: g  reason: collision with root package name */
            private final jq.a f40904g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f40905h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f40906i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f40907j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f40908k;

            /* renamed from: l  reason: collision with root package name */
            private final Function1 f40909l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f40910m;

            /* renamed from: n  reason: collision with root package name */
            private final Function0 f40911n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f40912o;

            /* renamed from: p  reason: collision with root package name */
            private final boolean f40913p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f40914q;

            /* renamed from: r  reason: collision with root package name */
            private final boolean f40915r;

            /* renamed from: s  reason: collision with root package name */
            private final String f40916s;

            /* renamed from: t  reason: collision with root package name */
            private final Function0 f40917t;

            /* renamed from: u  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f40918u;

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
                this.f40898a = imageLoader;
                this.f40899b = str;
                this.f40900c = str2;
                this.f40901d = str3;
                this.f40902e = str4;
                this.f40903f = documents;
                this.f40904g = navigationState;
                this.f40905h = openSelectFile;
                this.f40906i = selectFromPhotoLibrary;
                this.f40907j = openCamera;
                this.f40908k = openUploadOptions;
                this.f40909l = onRemove;
                this.f40910m = onSubmit;
                this.f40911n = onCancel;
                this.f40912o = onBack;
                this.f40913p = z10;
                this.f40914q = z11;
                this.f40915r = z12;
                this.f40916s = str5;
                this.f40917t = onErrorDismissed;
                this.f40918u = documentStepStyle;
            }

            public final boolean a() {
                return this.f40914q;
            }

            public final boolean b() {
                return this.f40913p;
            }

            public final String c() {
                return this.f40901d;
            }

            public final List d() {
                return this.f40903f;
            }

            public final String e() {
                return this.f40916s;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f40898a, bVar.f40898a) && Intrinsics.areEqual(this.f40899b, bVar.f40899b) && Intrinsics.areEqual(this.f40900c, bVar.f40900c) && Intrinsics.areEqual(this.f40901d, bVar.f40901d) && Intrinsics.areEqual(this.f40902e, bVar.f40902e) && Intrinsics.areEqual(this.f40903f, bVar.f40903f) && Intrinsics.areEqual(this.f40904g, bVar.f40904g) && Intrinsics.areEqual(this.f40905h, bVar.f40905h) && Intrinsics.areEqual(this.f40906i, bVar.f40906i) && Intrinsics.areEqual(this.f40907j, bVar.f40907j) && Intrinsics.areEqual(this.f40908k, bVar.f40908k) && Intrinsics.areEqual(this.f40909l, bVar.f40909l) && Intrinsics.areEqual(this.f40910m, bVar.f40910m) && Intrinsics.areEqual(this.f40911n, bVar.f40911n) && Intrinsics.areEqual(this.f40912o, bVar.f40912o) && this.f40913p == bVar.f40913p && this.f40914q == bVar.f40914q && this.f40915r == bVar.f40915r && Intrinsics.areEqual(this.f40916s, bVar.f40916s) && Intrinsics.areEqual(this.f40917t, bVar.f40917t) && Intrinsics.areEqual(this.f40918u, bVar.f40918u)) {
                    return true;
                }
                return false;
            }

            public final v4.h f() {
                return this.f40898a;
            }

            public final jq.a g() {
                return this.f40904g;
            }

            public final Function0 h() {
                return this.f40912o;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                int hashCode4;
                int hashCode5;
                int hashCode6 = this.f40898a.hashCode() * 31;
                String str = this.f40899b;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode6 + hashCode) * 31;
                String str2 = this.f40900c;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f40901d;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f40902e;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int hashCode7 = (((((((((((((((((((((((((((i13 + hashCode4) * 31) + this.f40903f.hashCode()) * 31) + this.f40904g.hashCode()) * 31) + this.f40905h.hashCode()) * 31) + this.f40906i.hashCode()) * 31) + this.f40907j.hashCode()) * 31) + this.f40908k.hashCode()) * 31) + this.f40909l.hashCode()) * 31) + this.f40910m.hashCode()) * 31) + this.f40911n.hashCode()) * 31) + this.f40912o.hashCode()) * 31) + Boolean.hashCode(this.f40913p)) * 31) + Boolean.hashCode(this.f40914q)) * 31) + Boolean.hashCode(this.f40915r)) * 31;
                String str5 = this.f40916s;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int hashCode8 = (((hashCode7 + hashCode5) * 31) + this.f40917t.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f40918u;
                if (documentStepStyle != null) {
                    i10 = documentStepStyle.hashCode();
                }
                return hashCode8 + i10;
            }

            public final Function0 i() {
                return this.f40911n;
            }

            public final Function0 j() {
                return this.f40917t;
            }

            public final Function1 k() {
                return this.f40909l;
            }

            public final Function0 l() {
                return this.f40910m;
            }

            public final Function0 m() {
                return this.f40908k;
            }

            public final String n() {
                return this.f40900c;
            }

            public final StepStyles.DocumentStepStyle o() {
                return this.f40918u;
            }

            public final boolean p() {
                return this.f40915r;
            }

            public final String q() {
                return this.f40902e;
            }

            public final String r() {
                return this.f40899b;
            }

            public String toString() {
                v4.h hVar = this.f40898a;
                String str = this.f40899b;
                String str2 = this.f40900c;
                String str3 = this.f40901d;
                String str4 = this.f40902e;
                List list = this.f40903f;
                jq.a aVar = this.f40904g;
                Function0 function0 = this.f40905h;
                Function0 function02 = this.f40906i;
                Function0 function03 = this.f40907j;
                Function0 function04 = this.f40908k;
                Function1 function1 = this.f40909l;
                Function0 function05 = this.f40910m;
                Function0 function06 = this.f40911n;
                Function0 function07 = this.f40912o;
                boolean z10 = this.f40913p;
                boolean z11 = this.f40914q;
                boolean z12 = this.f40915r;
                String str5 = this.f40916s;
                Function0 function08 = this.f40917t;
                StepStyles.DocumentStepStyle documentStepStyle = this.f40918u;
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
            public static final a f40919d = new a();
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
                    return a.f40919d;
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
            private final String f40920d;

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
                this.f40920d = documentId;
            }

            public final String a() {
                return this.f40920d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof b) && Intrinsics.areEqual(this.f40920d, ((b) obj).f40920d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f40920d.hashCode();
            }

            public String toString() {
                String str = this.f40920d;
                return "Review(documentId=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f40920d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        private final a f40921d;

        /* renamed from: e  reason: collision with root package name */
        private final InterfaceC0569f f40922e;

        /* renamed from: i  reason: collision with root package name */
        private final String f40923i;

        /* renamed from: o  reason: collision with root package name */
        private final List f40924o;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f40925d = new a("None", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f40926e = new a("CheckCameraPermissions", 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f40927i = new a("CameraRunning", 2);

            /* renamed from: o  reason: collision with root package name */
            public static final a f40928o = new a("SelectFileFromDocuments", 3);

            /* renamed from: p  reason: collision with root package name */
            public static final a f40929p = new a("SelectImageFromPhotoLibrary", 4);

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ a[] f40930q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f40931r;

            static {
                a[] a10 = a();
                f40930q = a10;
                f40931r = hs.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f40925d, f40926e, f40927i, f40928o, f40929p};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f40930q.clone();
            }
        }

        /* renamed from: oo.r2$f$f  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public interface InterfaceC0569f extends Parcelable {

            /* renamed from: oo.r2$f$f$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements InterfaceC0569f {

                /* renamed from: d  reason: collision with root package name */
                public static final a f40956d = new a();
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
                        return a.f40956d;
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
                private final String f40957d;

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
                    this.f40957d = documentId;
                }

                public final String a() {
                    return this.f40957d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof b) && Intrinsics.areEqual(this.f40957d, ((b) obj).f40957d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f40957d.hashCode();
                }

                public String toString() {
                    String str = this.f40957d;
                    return "DeleteFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f40957d);
                }
            }

            /* renamed from: oo.r2$f$f$c */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class c implements InterfaceC0569f {
                @NotNull
                public static final Parcelable.Creator<c> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f40958d;

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
                    this.f40958d = documentId;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof c) && Intrinsics.areEqual(this.f40958d, ((c) obj).f40958d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f40958d.hashCode();
                }

                public String toString() {
                    String str = this.f40958d;
                    return "ReadyToSubmit(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f40958d);
                }
            }

            /* renamed from: oo.r2$f$f$d */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class d implements InterfaceC0569f {
                @NotNull
                public static final Parcelable.Creator<d> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f40959d;

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
                    this.f40959d = documentId;
                }

                public final String a() {
                    return this.f40959d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof d) && Intrinsics.areEqual(this.f40959d, ((d) obj).f40959d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f40959d.hashCode();
                }

                public String toString() {
                    String str = this.f40959d;
                    return "UploadFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f40959d);
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
            return this.f40921d;
        }

        public abstract String f();

        public List g() {
            return this.f40924o;
        }

        public abstract InterfaceC0569f i();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends f {
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f40952p;

            /* renamed from: q  reason: collision with root package name */
            private final String f40953q;

            /* renamed from: r  reason: collision with root package name */
            private final InterfaceC0569f f40954r;

            /* renamed from: s  reason: collision with root package name */
            private final String f40955s;

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
                this(list, str, (i10 & 4) != 0 ? InterfaceC0569f.a.f40956d : interfaceC0569f, (i10 & 8) != 0 ? null : str2);
            }

            public static /* synthetic */ e k(e eVar, List list, String str, InterfaceC0569f interfaceC0569f, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = eVar.f40952p;
                }
                if ((i10 & 2) != 0) {
                    str = eVar.f40953q;
                }
                if ((i10 & 4) != 0) {
                    interfaceC0569f = eVar.f40954r;
                }
                if ((i10 & 8) != 0) {
                    str2 = eVar.f40955s;
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
                if (Intrinsics.areEqual(this.f40952p, eVar.f40952p) && Intrinsics.areEqual(this.f40953q, eVar.f40953q) && Intrinsics.areEqual(this.f40954r, eVar.f40954r) && Intrinsics.areEqual(this.f40955s, eVar.f40955s)) {
                    return true;
                }
                return false;
            }

            @Override // oo.r2.f
            public String f() {
                return this.f40953q;
            }

            @Override // oo.r2.f
            public List g() {
                return this.f40952p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((this.f40952p.hashCode() * 31) + this.f40953q.hashCode()) * 31) + this.f40954r.hashCode()) * 31;
                String str = this.f40955s;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            @Override // oo.r2.f
            public InterfaceC0569f i() {
                return this.f40954r;
            }

            public final e j(List documents, String documentId, InterfaceC0569f uploadState, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new e(documents, documentId, uploadState, str);
            }

            public String toString() {
                List list = this.f40952p;
                String str = this.f40953q;
                InterfaceC0569f interfaceC0569f = this.f40954r;
                String str2 = this.f40955s;
                return "UploadDocument(documents=" + list + ", documentId=" + str + ", uploadState=" + interfaceC0569f + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f40952p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f40953q);
                dest.writeParcelable(this.f40954r, i10);
                dest.writeString(this.f40955s);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(List documents, String documentId, InterfaceC0569f uploadState, String str) {
                super(a.f40925d, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f40952p = documents;
                this.f40953q = documentId;
                this.f40954r = uploadState;
                this.f40955s = str;
            }
        }

        private f(a aVar, InterfaceC0569f interfaceC0569f, String str, List list) {
            this.f40921d = aVar;
            this.f40922e = interfaceC0569f;
            this.f40923i = str;
            this.f40924o = list;
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends f {
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f40932p;

            /* renamed from: q  reason: collision with root package name */
            private final String f40933q;

            /* renamed from: r  reason: collision with root package name */
            private final a f40934r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0569f f40935s;

            /* renamed from: t  reason: collision with root package name */
            private final oo.d f40936t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f40937u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f40938v;

            /* renamed from: w  reason: collision with root package name */
            private final String f40939w;

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
                this(list, str, (i10 & 4) != 0 ? a.f40925d : aVar, (i10 & 8) != 0 ? InterfaceC0569f.a.f40956d : interfaceC0569f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ b k(b bVar, List list, String str, a aVar, InterfaceC0569f interfaceC0569f, oo.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = bVar.f40932p;
                }
                if ((i10 & 2) != 0) {
                    str = bVar.f40933q;
                }
                if ((i10 & 4) != 0) {
                    aVar = bVar.f40934r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0569f = bVar.f40935s;
                }
                if ((i10 & 16) != 0) {
                    dVar = bVar.f40936t;
                }
                if ((i10 & 32) != 0) {
                    z10 = bVar.f40937u;
                }
                if ((i10 & 64) != 0) {
                    z11 = bVar.f40938v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = bVar.f40939w;
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
                return this.f40934r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f40932p, bVar.f40932p) && Intrinsics.areEqual(this.f40933q, bVar.f40933q) && this.f40934r == bVar.f40934r && Intrinsics.areEqual(this.f40935s, bVar.f40935s) && Intrinsics.areEqual(this.f40936t, bVar.f40936t) && this.f40937u == bVar.f40937u && this.f40938v == bVar.f40938v && Intrinsics.areEqual(this.f40939w, bVar.f40939w)) {
                    return true;
                }
                return false;
            }

            @Override // oo.r2.f
            public String f() {
                return this.f40933q;
            }

            @Override // oo.r2.f
            public List g() {
                return this.f40932p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((((this.f40932p.hashCode() * 31) + this.f40933q.hashCode()) * 31) + this.f40934r.hashCode()) * 31) + this.f40935s.hashCode()) * 31;
                oo.d dVar = this.f40936t;
                int i10 = 0;
                if (dVar == null) {
                    hashCode = 0;
                } else {
                    hashCode = dVar.hashCode();
                }
                int hashCode3 = (((((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f40937u)) * 31) + Boolean.hashCode(this.f40938v)) * 31;
                String str = this.f40939w;
                if (str != null) {
                    i10 = str.hashCode();
                }
                return hashCode3 + i10;
            }

            @Override // oo.r2.f
            public InterfaceC0569f i() {
                return this.f40935s;
            }

            public final b j(List documents, String documentId, a captureState, InterfaceC0569f uploadState, oo.d dVar, boolean z10, boolean z11, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new b(documents, documentId, captureState, uploadState, dVar, z10, z11, str);
            }

            public final oo.d l() {
                return this.f40936t;
            }

            public final String o() {
                return this.f40939w;
            }

            public final boolean p() {
                return this.f40937u;
            }

            public final boolean q() {
                return this.f40938v;
            }

            public String toString() {
                List list = this.f40932p;
                String str = this.f40933q;
                a aVar = this.f40934r;
                InterfaceC0569f interfaceC0569f = this.f40935s;
                oo.d dVar = this.f40936t;
                boolean z10 = this.f40937u;
                boolean z11 = this.f40938v;
                String str2 = this.f40939w;
                return "ReviewCaptures(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0569f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f40932p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f40933q);
                dest.writeString(this.f40934r.name());
                dest.writeParcelable(this.f40935s, i10);
                dest.writeParcelable(this.f40936t, i10);
                dest.writeInt(this.f40937u ? 1 : 0);
                dest.writeInt(this.f40938v ? 1 : 0);
                dest.writeString(this.f40939w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(List documents, String documentId, a captureState, InterfaceC0569f uploadState, oo.d dVar, boolean z10, boolean z11, String str) {
                super(captureState, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f40932p = documents;
                this.f40933q = documentId;
                this.f40934r = captureState;
                this.f40935s = uploadState;
                this.f40936t = dVar;
                this.f40937u = z10;
                this.f40938v = z11;
                this.f40939w = str;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends f {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f40940p;

            /* renamed from: q  reason: collision with root package name */
            private final String f40941q;

            /* renamed from: r  reason: collision with root package name */
            private final a f40942r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0569f f40943s;

            /* renamed from: t  reason: collision with root package name */
            private final oo.d f40944t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f40945u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f40946v;

            /* renamed from: w  reason: collision with root package name */
            private final String f40947w;

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
                this(list, str, (i10 & 4) != 0 ? a.f40925d : aVar, (i10 & 8) != 0 ? InterfaceC0569f.a.f40956d : interfaceC0569f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ c k(c cVar, List list, String str, a aVar, InterfaceC0569f interfaceC0569f, oo.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = cVar.f40940p;
                }
                if ((i10 & 2) != 0) {
                    str = cVar.f40941q;
                }
                if ((i10 & 4) != 0) {
                    aVar = cVar.f40942r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0569f = cVar.f40943s;
                }
                if ((i10 & 16) != 0) {
                    dVar = cVar.f40944t;
                }
                if ((i10 & 32) != 0) {
                    z10 = cVar.f40945u;
                }
                if ((i10 & 64) != 0) {
                    z11 = cVar.f40946v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = cVar.f40947w;
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
                return this.f40942r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof c)) {
                    return false;
                }
                c cVar = (c) obj;
                if (Intrinsics.areEqual(this.f40940p, cVar.f40940p) && Intrinsics.areEqual(this.f40941q, cVar.f40941q) && this.f40942r == cVar.f40942r && Intrinsics.areEqual(this.f40943s, cVar.f40943s) && Intrinsics.areEqual(this.f40944t, cVar.f40944t) && this.f40945u == cVar.f40945u && this.f40946v == cVar.f40946v && Intrinsics.areEqual(this.f40947w, cVar.f40947w)) {
                    return true;
                }
                return false;
            }

            @Override // oo.r2.f
            public String f() {
                return this.f40941q;
            }

            @Override // oo.r2.f
            public List g() {
                return this.f40940p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3 = this.f40940p.hashCode() * 31;
                String str = this.f40941q;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f40942r.hashCode()) * 31) + this.f40943s.hashCode()) * 31;
                oo.d dVar = this.f40944t;
                if (dVar == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = dVar.hashCode();
                }
                int hashCode5 = (((((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f40945u)) * 31) + Boolean.hashCode(this.f40946v)) * 31;
                String str2 = this.f40947w;
                if (str2 != null) {
                    i10 = str2.hashCode();
                }
                return hashCode5 + i10;
            }

            @Override // oo.r2.f
            public InterfaceC0569f i() {
                return this.f40943s;
            }

            public final c j(List documents, String str, a captureState, InterfaceC0569f uploadState, oo.d dVar, boolean z10, boolean z11, String str2) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new c(documents, str, captureState, uploadState, dVar, z10, z11, str2);
            }

            public final String l() {
                return this.f40947w;
            }

            public final boolean o() {
                return this.f40945u;
            }

            public final boolean p() {
                return this.f40946v;
            }

            public String toString() {
                List list = this.f40940p;
                String str = this.f40941q;
                a aVar = this.f40942r;
                InterfaceC0569f interfaceC0569f = this.f40943s;
                oo.d dVar = this.f40944t;
                boolean z10 = this.f40945u;
                boolean z11 = this.f40946v;
                String str2 = this.f40947w;
                return "ReviewCapturesWithoutDocumentId(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0569f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f40940p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f40941q);
                dest.writeString(this.f40942r.name());
                dest.writeParcelable(this.f40943s, i10);
                dest.writeParcelable(this.f40944t, i10);
                dest.writeInt(this.f40945u ? 1 : 0);
                dest.writeInt(this.f40946v ? 1 : 0);
                dest.writeString(this.f40947w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(List documents, String str, a captureState, InterfaceC0569f uploadState, oo.d dVar, boolean z10, boolean z11, String str2) {
                super(captureState, uploadState, str, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f40940p = documents;
                this.f40941q = str;
                this.f40942r = captureState;
                this.f40943s = uploadState;
                this.f40944t = dVar;
                this.f40945u = z10;
                this.f40946v = z11;
                this.f40947w = str2;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends f {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final a f40948p;

            /* renamed from: q  reason: collision with root package name */
            private final InterfaceC0569f f40949q;

            /* renamed from: r  reason: collision with root package name */
            private final String f40950r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f40951s;

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
                this((i10 & 1) != 0 ? a.f40925d : aVar, (i10 & 2) != 0 ? InterfaceC0569f.a.f40956d : interfaceC0569f, str, (i10 & 8) != 0 ? false : z10);
            }

            public static /* synthetic */ d k(d dVar, a aVar, InterfaceC0569f interfaceC0569f, String str, boolean z10, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    aVar = dVar.f40948p;
                }
                if ((i10 & 2) != 0) {
                    interfaceC0569f = dVar.f40949q;
                }
                if ((i10 & 4) != 0) {
                    str = dVar.f40950r;
                }
                if ((i10 & 8) != 0) {
                    z10 = dVar.f40951s;
                }
                return dVar.j(aVar, interfaceC0569f, str, z10);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // oo.r2.f
            public a e() {
                return this.f40948p;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof d)) {
                    return false;
                }
                d dVar = (d) obj;
                if (this.f40948p == dVar.f40948p && Intrinsics.areEqual(this.f40949q, dVar.f40949q) && Intrinsics.areEqual(this.f40950r, dVar.f40950r) && this.f40951s == dVar.f40951s) {
                    return true;
                }
                return false;
            }

            @Override // oo.r2.f
            public String f() {
                return this.f40950r;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f40948p.hashCode() * 31) + this.f40949q.hashCode()) * 31;
                String str = this.f40950r;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f40951s);
            }

            @Override // oo.r2.f
            public InterfaceC0569f i() {
                return this.f40949q;
            }

            public final d j(a captureState, InterfaceC0569f uploadState, String str, boolean z10) {
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new d(captureState, uploadState, str, z10);
            }

            public final boolean l() {
                return this.f40951s;
            }

            public String toString() {
                a aVar = this.f40948p;
                InterfaceC0569f interfaceC0569f = this.f40949q;
                String str = this.f40950r;
                boolean z10 = this.f40951s;
                return "Start(captureState=" + aVar + ", uploadState=" + interfaceC0569f + ", documentId=" + str + ", shouldShowUploadOptionsDialog=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f40948p.name());
                dest.writeParcelable(this.f40949q, i10);
                dest.writeString(this.f40950r);
                dest.writeInt(this.f40951s ? 1 : 0);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(a captureState, InterfaceC0569f uploadState, String str, boolean z10) {
                super(captureState, uploadState, str, CollectionsKt.l(), null);
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f40948p = captureState;
                this.f40949q = uploadState;
                this.f40950r = str;
                this.f40951s = z10;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f40960a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f40961b;

        static {
            int[] iArr = new int[rp.g1.values().length];
            try {
                iArr[rp.g1.f47601d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[rp.g1.f47602e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[rp.g1.f47603i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f40960a = iArr;
            int[] iArr2 = new int[f.a.values().length];
            try {
                iArr2[f.a.f40925d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[f.a.f40926e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[f.a.f40927i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[f.a.f40928o.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[f.a.f40929p.ordinal()] = 5;
            } catch (NoSuchFieldError unused8) {
            }
            f40961b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f40962d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f40963e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f40964i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f40965o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, r2 r2Var, String str, Continuation continuation) {
            super(2, continuation);
            this.f40963e = aVar;
            this.f40964i = r2Var;
            this.f40965o = str;
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
            cVar.e(new f.b(cVar2.g(), str, null, new f.InterfaceC0569f.d(str), null, false, false, cVar2.l(), 116, null));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f40963e, this.f40964i, this.f40965o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            gs.b.f();
            if (this.f40962d == 0) {
                kotlin.c.b(obj);
                en.h c10 = this.f40963e.c();
                r2 r2Var = this.f40964i;
                final String str = this.f40965o;
                d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.s2
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
        int f40966d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f40967e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f40968i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f.InterfaceC0569f f40969o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, r2 r2Var, f.InterfaceC0569f interfaceC0569f, Continuation continuation) {
            super(2, continuation);
            this.f40967e = aVar;
            this.f40968i = r2Var;
            this.f40969o = interfaceC0569f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(f.InterfaceC0569f interfaceC0569f, r.c cVar) {
            cVar.e(f.d((f) cVar.c(), new f.InterfaceC0569f.c(((f.InterfaceC0569f.d) interfaceC0569f).a()), null, null, null, 14, null));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f40967e, this.f40968i, this.f40969o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            gs.b.f();
            if (this.f40966d == 0) {
                kotlin.c.b(obj);
                en.h c10 = this.f40967e.c();
                r2 r2Var = this.f40968i;
                final f.InterfaceC0569f interfaceC0569f = this.f40969o;
                d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.i.k(r2.f.InterfaceC0569f.this, (r.c) obj2);
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
        this.f40838a = imageLoader;
        this.f40839b = applicationContext;
        this.f40840c = permissionRequestWorkflow;
        this.f40841d = documentCameraWorker;
        this.f40842e = documentsSelectWorkerFactory;
        this.f40843f = documentCreateWorker;
        this.f40844g = documentLoadWorker;
        this.f40845h = documentFileUploadWorker;
        this.f40846i = documentFileDeleteWorker;
        this.f40847j = documentSubmitWorker;
        this.f40848k = navigationStateManager;
        this.f40849l = externalEventLogger;
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
        r2Var.L0(aVar, a.b.f40851a);
        return Unit.f31988a;
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
        r2Var.L0(aVar, a.g.f40857a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f40960a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new as.p();
            }
            action.e(fVar.a(f.a.f40925d));
        } else {
            oo.c cVar = r2Var.f40841d;
            String string = r2Var.f40839b.getString(tp.e.f49784a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f40927i);
            } else {
                a10 = fVar.a(f.a.f40925d);
            }
            action.e(a10);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f40858a);
        return Unit.f31988a;
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
        r2Var.L0(aVar, a.j.f40860a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(f fVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.b bVar2 = (f.b) fVar;
        action.e(f.b.k(bVar2, ((c.b.C0243b) bVar).a(), null, null, new f.InterfaceC0569f.c(bVar2.f()), null, false, false, null, 214, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.e.f40854a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F1(c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0567c(((c.b.a) bVar).a()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.g.f40857a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f40857a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f40858a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f40858a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f40860a);
        return Unit.f31988a;
    }

    private final void I1(f.a aVar, final b bVar, final f fVar, k.a aVar2) {
        v2 e10;
        int i10 = g.f40961b[aVar.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4 && i10 != 5) {
                    throw new as.p();
                }
                if (fVar.e() == f.a.f40928o) {
                    e10 = this.f40842e.c();
                } else {
                    e10 = this.f40842e.e();
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
            en.w.l(aVar2, this.f40841d, Reflection.typeOf(oo.c.class), "", new Function1() { // from class: oo.g1
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
        if (Intrinsics.areEqual(interfaceC0569f, f.InterfaceC0569f.a.f40956d)) {
            if (fVar.f() == null) {
                en.w.l(aVar, this.f40843f.a(bVar.v(), bVar.k(), bVar.g(), bVar.e()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.a.class), "", new Function1() { // from class: oo.j1
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
                en.w.l(aVar, this.f40845h.a(bVar.v(), ((f.InterfaceC0569f.d) interfaceC0569f).a(), aVar2), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.b.class), aVar2.c(), new Function1() { // from class: oo.k1
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
                en.w.l(aVar, this.f40846i.a(bVar.v(), bVar3.f(), bVar2), Reflection.typeOf(qo.a.class), "", new Function1() { // from class: oo.l1
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
        if (fVar.e() == f.a.f40927i) {
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
        this.f40849l.c(new i.b(bVar.i(), bVar2));
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
        } else if (Intrinsics.areEqual(it, c.b.a.f40698a)) {
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
        if (Intrinsics.areEqual(aVar2, a.b.f40851a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M0;
                    M0 = r2.M0((r.c) obj);
                    return M0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.C0566a.f40850a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = r2.N0((r.c) obj);
                    return N0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.g.f40857a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.s1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = r2.O0((r.c) obj);
                    return O0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.h.f40858a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.t1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P0;
                    P0 = r2.P0((r.c) obj);
                    return P0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.j.f40860a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.u1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q0;
                    Q0 = r2.Q0((r.c) obj);
                    return Q0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.e.f40854a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.v1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R0;
                    R0 = r2.R0((r.c) obj);
                    return R0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.c.f40852a)) {
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
        } else if (Intrinsics.areEqual(aVar2, a.d.f40853a)) {
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
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.M0(((f) action.c()).g(), new d.a(((c.b.C0561b) bVar).a(), oo.a.f40671i, 0, 4, null)), bVar2.e()), ((f) action.c()).f(), null, ((f) action.c()).i(), null, false, false, null, 244, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.b.f40887a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f40925d));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.a.f40886a);
        return Unit.f31988a;
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
        } else if (Intrinsics.areEqual(it, v2.c.a.f41008a)) {
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
        action.e(((f) action.c()).a(f.a.f40928o).b(false));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(v2.c cVar, b bVar, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0569f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.C0572c) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, null, 244, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f40929p).b(false));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P1(v2.c cVar, b bVar, r2 r2Var, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0569f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.b) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, r2Var.f40839b.getString(tp.e.f49793j), 116, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f40926e).b(false));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(fVar.a(f.a.f40925d));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(true));
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0236b c0236b = (a.b.C0236b) bVar;
        action.e(f.d((f) action.c(), new f.InterfaceC0569f.c(c0236b.a()), c0236b.a(), null, null, 12, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (action.c() instanceof f.b) {
            a.f fVar = (a.f) aVar;
            action.e(f.d((f) action.c(), new f.InterfaceC0569f.b(fVar.b()), null, null, fVar.a(), 6, null));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0235a c0235a = (a.b.C0235a) bVar;
        if (!c0235a.a().isRecoverable()) {
            action.d(new c.C0567c(c0235a.a()));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f fVar = (f) action.c();
        if (fVar instanceof f.b) {
            action.e(f.b.k((f.b) fVar, null, null, null, null, null, false, false, null, 127, null));
        }
        return Unit.f31988a;
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
        return Unit.f31988a;
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
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0566a.f40850a);
        return Unit.f31988a;
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
        f.a aVar2 = f.a.f40925d;
        d10 = u2.d(((b.AbstractC0237b.a) abstractC0237b).a(), r2Var.f40839b);
        action.e(new f.b(I0, a10, aVar2, interfaceC0569f2, null, false, false, d10, 80, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f40851a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(b.AbstractC0237b abstractC0237b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0567c(((b.AbstractC0237b.C0238b) abstractC0237b).a()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f40860a);
        return Unit.f31988a;
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
        r2Var.L0(aVar, a.e.f40854a);
        return Unit.f31988a;
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
            return Unit.f31988a;
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
        r2Var.L0(aVar, a.b.f40851a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0566a.f40850a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f40853a);
        return Unit.f31988a;
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
        int i10 = g.f40960a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new as.p();
            }
            action.e(fVar.a(f.a.f40925d));
        } else {
            oo.c cVar = r2Var.f40841d;
            String string = r2Var.f40839b.getString(tp.e.f49784a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f40927i);
            } else {
                a10 = fVar.a(f.a.f40925d);
            }
            action.e(a10);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f40852a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f40852a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f40857a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f40858a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f40860a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f40854a);
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
        r2Var.L0(aVar, a.b.f40851a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0566a.f40850a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f40853a);
        return Unit.f31988a;
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
        int i10 = g.f40960a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new as.p();
            }
            action.e(fVar.a(f.a.f40925d));
        } else {
            oo.c cVar = r2Var.f40841d;
            String string = r2Var.f40839b.getString(tp.e.f49784a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f40927i);
            } else {
                a10 = fVar.a(f.a.f40925d);
            }
            action.e(a10);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f40852a);
        return Unit.f31988a;
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
        action.d(c.d.f40889a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(d.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0567c(((d.b.a) bVar).a()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f40851a);
        return Unit.f31988a;
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
        if (Intrinsics.areEqual(w10, e.a.f40919d)) {
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
        this.f40848k.c(renderProps.b(), renderProps.c(), !(renderState instanceof f.e));
        I1(renderState.e(), renderProps, renderState, context);
        J1(renderState.i(), renderProps, renderState, context);
        K0(renderProps, renderState);
        if (renderState instanceof f.d) {
            Object iVar = new oo.i(nq.c.a(renderProps.l().a()), A0(renderProps.l().a(), context), this.f40848k.b(), new Function0() { // from class: oo.y
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
                iVar = op.d.a(nq.m.f38355a.j(nq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: oo.m0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit j12;
                        j12 = r2.j1(r2.this, context);
                        return j12;
                    }
                }, renderProps.l().b().a()), iVar, "document_upload_options_dialog");
            }
            boolean z10 = dVar.e() == f.a.f40926e;
            rp.d0 d0Var = rp.d0.f47575d;
            String s10 = renderProps.s();
            String str = s10 != null ? s10 : "";
            String r10 = renderProps.r();
            if (r10 == null) {
                r10 = this.f40839b.getString(tp.e.f49786c);
                Intrinsics.checkNotNullExpressionValue(r10, "getString(...)");
            }
            Context context2 = this.f40839b;
            String string = context2.getString(tp.e.f49785b, bq.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return rp.l1.e(iVar, context, z10, d0Var, false, str, r10, string, renderProps.q(), renderProps.p(), null, null, null, this.f40840c, renderProps.x(), null, new Function1() { // from class: oo.n0
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
                en.w.l(context, this.f40844g.a(renderProps.v(), bVar.f()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.c.class), "", new Function1() { // from class: oo.o0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        en.r D1;
                        D1 = r2.D1(r2.this, renderState, (c.b) obj);
                        return D1;
                    }
                });
            }
            d.b bVar2 = new d.b(this.f40838a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), bVar.g(), this.f40848k.b(), new Function0() { // from class: oo.p0
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
            boolean z11 = bVar.e() == f.a.f40926e;
            rp.d0 d0Var2 = rp.d0.f47575d;
            String s11 = renderProps.s();
            if (s11 == null) {
                s11 = "";
            }
            String r11 = renderProps.r();
            if (r11 == null) {
                r11 = this.f40839b.getString(tp.e.f49786c);
                Intrinsics.checkNotNullExpressionValue(r11, "getString(...)");
            }
            Context context3 = this.f40839b;
            String string2 = context3.getString(tp.e.f49785b, bq.f.b(context3));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            op.c e10 = rp.l1.e(bVar2, context, z11, d0Var2, false, s11, r11, string2, renderProps.q(), renderProps.p(), null, null, null, this.f40840c, renderProps.x(), null, new Function1() { // from class: oo.b2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r g12;
                    g12 = r2.g1(r2.this, renderState, (c1.a) obj);
                    return g12;
                }
            }, 19976, null);
            if (bVar.q()) {
                return op.d.a(nq.m.f38355a.j(nq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: oo.m2
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
            d.b bVar3 = new d.b(this.f40838a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), cVar.g(), this.f40848k.b(), new Function0() { // from class: oo.o2
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
            boolean z12 = cVar.e() == f.a.f40926e;
            rp.d0 d0Var3 = rp.d0.f47575d;
            String s12 = renderProps.s();
            if (s12 == null) {
                s12 = "";
            }
            String r12 = renderProps.r();
            if (r12 == null) {
                r12 = this.f40839b.getString(tp.e.f49786c);
                Intrinsics.checkNotNullExpressionValue(r12, "getString(...)");
            }
            Context context4 = this.f40839b;
            String string3 = context4.getString(tp.e.f49785b, bq.f.b(context4));
            Intrinsics.checkNotNullExpressionValue(string3, "getString(...)");
            op.c e11 = rp.l1.e(bVar3, context, z12, d0Var3, false, s12, r12, string3, renderProps.q(), renderProps.p(), null, null, null, this.f40840c, renderProps.x(), null, new Function1() { // from class: oo.g0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r t12;
                    t12 = r2.t1(r2.this, renderState, (c1.a) obj);
                    return t12;
                }
            }, 19976, null);
            if (cVar.p()) {
                return op.d.a(nq.m.f38355a.j(nq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: oo.h0
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
            en.w.l(context, this.f40847j.a(renderProps.v(), renderProps.j(), renderProps.i(), renderProps.h(), ((f.e) renderState).g()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.d.class), "", new Function1() { // from class: oo.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r w12;
                    w12 = r2.w1(r2.this, (d.b) obj);
                    return w12;
                }
            });
            jq.b.d(this.f40848k, false, false, false, 4, null);
            return new d.a(renderProps.o(), renderProps.m(), this.f40848k.b(), new Function0() { // from class: oo.k0
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
