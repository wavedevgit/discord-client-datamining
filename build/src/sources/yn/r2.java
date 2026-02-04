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
    private final v4.h f54882a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f54883b;

    /* renamed from: c  reason: collision with root package name */
    private final cp.c1 f54884c;

    /* renamed from: d  reason: collision with root package name */
    private final yn.c f54885d;

    /* renamed from: e  reason: collision with root package name */
    private final v2.b f54886e;

    /* renamed from: f  reason: collision with root package name */
    private final a.C0212a f54887f;

    /* renamed from: g  reason: collision with root package name */
    private final c.a f54888g;

    /* renamed from: h  reason: collision with root package name */
    private final b.a f54889h;

    /* renamed from: i  reason: collision with root package name */
    private final a.C0083a f54890i;

    /* renamed from: j  reason: collision with root package name */
    private final d.a f54891j;

    /* renamed from: k  reason: collision with root package name */
    private final up.b f54892k;

    /* renamed from: l  reason: collision with root package name */
    private final qp.c f54893l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: yn.r2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0759a extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final C0759a f54894a = new C0759a();

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
            public static final b f54895a = new b();

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
            public static final c f54896a = new c();

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
            public static final d f54897a = new d();

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
            public static final e f54898a = new e();

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
            private final String f54899a;

            /* renamed from: b  reason: collision with root package name */
            private final d.b f54900b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String documentId, d.b document) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(document, "document");
                this.f54899a = documentId;
                this.f54900b = document;
            }

            public final d.b a() {
                return this.f54900b;
            }

            public final String b() {
                return this.f54899a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof f)) {
                    return false;
                }
                f fVar = (f) obj;
                if (Intrinsics.areEqual(this.f54899a, fVar.f54899a) && Intrinsics.areEqual(this.f54900b, fVar.f54900b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f54899a.hashCode() * 31) + this.f54900b.hashCode();
            }

            public String toString() {
                String str = this.f54899a;
                d.b bVar = this.f54900b;
                return "RemoveDocument(documentId=" + str + ", document=" + bVar + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class g extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final g f54901a = new g();

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
            public static final h f54902a = new h();

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
            private final String f54903a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public i(String documentId) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                this.f54903a = documentId;
            }

            public final String a() {
                return this.f54903a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof i) && Intrinsics.areEqual(this.f54903a, ((i) obj).f54903a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f54903a.hashCode();
            }

            public String toString() {
                String str = this.f54903a;
                return "Submit(documentId=" + str + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class j extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final j f54904a = new j();

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
        private final String f54905a;

        /* renamed from: b  reason: collision with root package name */
        private final String f54906b;

        /* renamed from: c  reason: collision with root package name */
        private final String f54907c;

        /* renamed from: d  reason: collision with root package name */
        private final String f54908d;

        /* renamed from: e  reason: collision with root package name */
        private final String f54909e;

        /* renamed from: f  reason: collision with root package name */
        private final String f54910f;

        /* renamed from: g  reason: collision with root package name */
        private final String f54911g;

        /* renamed from: h  reason: collision with root package name */
        private final String f54912h;

        /* renamed from: i  reason: collision with root package name */
        private final String f54913i;

        /* renamed from: j  reason: collision with root package name */
        private final String f54914j;

        /* renamed from: k  reason: collision with root package name */
        private final String f54915k;

        /* renamed from: l  reason: collision with root package name */
        private final String f54916l;

        /* renamed from: m  reason: collision with root package name */
        private final String f54917m;

        /* renamed from: n  reason: collision with root package name */
        private final e f54918n;

        /* renamed from: o  reason: collision with root package name */
        private final l f54919o;

        /* renamed from: p  reason: collision with root package name */
        private final int f54920p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f54921q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f54922r;

        /* renamed from: s  reason: collision with root package name */
        private final String f54923s;

        /* renamed from: t  reason: collision with root package name */
        private final String f54924t;

        /* renamed from: u  reason: collision with root package name */
        private final String f54925u;

        /* renamed from: v  reason: collision with root package name */
        private final String f54926v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.DocumentStepStyle f54927w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.Document.AssetConfig f54928x;

        /* renamed from: y  reason: collision with root package name */
        private final PendingPageTextPosition f54929y;

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
            this.f54905a = sessionToken;
            this.f54906b = inquiryId;
            this.f54907c = fromStep;
            this.f54908d = fromComponent;
            this.f54909e = str;
            this.f54910f = str2;
            this.f54911g = str3;
            this.f54912h = str4;
            this.f54913i = str5;
            this.f54914j = str6;
            this.f54915k = fieldKeyDocument;
            this.f54916l = kind;
            this.f54917m = str7;
            this.f54918n = startPage;
            this.f54919o = pages;
            this.f54920p = i10;
            this.f54921q = z10;
            this.f54922r = z11;
            this.f54923s = str8;
            this.f54924t = str9;
            this.f54925u = str10;
            this.f54926v = str11;
            this.f54927w = documentStepStyle;
            this.f54928x = assetConfig;
            this.f54929y = pendingPageTextVerticalPosition;
        }

        public final NextStep.Document.AssetConfig a() {
            return this.f54928x;
        }

        public final boolean b() {
            return this.f54921q;
        }

        public final boolean c() {
            return this.f54922r;
        }

        public final String d() {
            return this.f54911g;
        }

        public final int e() {
            return this.f54920p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f54905a, bVar.f54905a) && Intrinsics.areEqual(this.f54906b, bVar.f54906b) && Intrinsics.areEqual(this.f54907c, bVar.f54907c) && Intrinsics.areEqual(this.f54908d, bVar.f54908d) && Intrinsics.areEqual(this.f54909e, bVar.f54909e) && Intrinsics.areEqual(this.f54910f, bVar.f54910f) && Intrinsics.areEqual(this.f54911g, bVar.f54911g) && Intrinsics.areEqual(this.f54912h, bVar.f54912h) && Intrinsics.areEqual(this.f54913i, bVar.f54913i) && Intrinsics.areEqual(this.f54914j, bVar.f54914j) && Intrinsics.areEqual(this.f54915k, bVar.f54915k) && Intrinsics.areEqual(this.f54916l, bVar.f54916l) && Intrinsics.areEqual(this.f54917m, bVar.f54917m) && Intrinsics.areEqual(this.f54918n, bVar.f54918n) && Intrinsics.areEqual(this.f54919o, bVar.f54919o) && this.f54920p == bVar.f54920p && this.f54921q == bVar.f54921q && this.f54922r == bVar.f54922r && Intrinsics.areEqual(this.f54923s, bVar.f54923s) && Intrinsics.areEqual(this.f54924t, bVar.f54924t) && Intrinsics.areEqual(this.f54925u, bVar.f54925u) && Intrinsics.areEqual(this.f54926v, bVar.f54926v) && Intrinsics.areEqual(this.f54927w, bVar.f54927w) && Intrinsics.areEqual(this.f54928x, bVar.f54928x) && this.f54929y == bVar.f54929y) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f54917m;
        }

        public final String g() {
            return this.f54915k;
        }

        public final String h() {
            return this.f54908d;
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
            int hashCode12 = ((((((this.f54905a.hashCode() * 31) + this.f54906b.hashCode()) * 31) + this.f54907c.hashCode()) * 31) + this.f54908d.hashCode()) * 31;
            String str = this.f54909e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode12 + hashCode) * 31;
            String str2 = this.f54910f;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f54911g;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f54912h;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f54913i;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f54914j;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int hashCode13 = (((((i15 + hashCode6) * 31) + this.f54915k.hashCode()) * 31) + this.f54916l.hashCode()) * 31;
            String str7 = this.f54917m;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int hashCode14 = (((((((((((hashCode13 + hashCode7) * 31) + this.f54918n.hashCode()) * 31) + this.f54919o.hashCode()) * 31) + Integer.hashCode(this.f54920p)) * 31) + Boolean.hashCode(this.f54921q)) * 31) + Boolean.hashCode(this.f54922r)) * 31;
            String str8 = this.f54923s;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i16 = (hashCode14 + hashCode8) * 31;
            String str9 = this.f54924t;
            if (str9 == null) {
                hashCode9 = 0;
            } else {
                hashCode9 = str9.hashCode();
            }
            int i17 = (i16 + hashCode9) * 31;
            String str10 = this.f54925u;
            if (str10 == null) {
                hashCode10 = 0;
            } else {
                hashCode10 = str10.hashCode();
            }
            int i18 = (i17 + hashCode10) * 31;
            String str11 = this.f54926v;
            if (str11 == null) {
                hashCode11 = 0;
            } else {
                hashCode11 = str11.hashCode();
            }
            int i19 = (i18 + hashCode11) * 31;
            StepStyles.DocumentStepStyle documentStepStyle = this.f54927w;
            if (documentStepStyle != null) {
                i10 = documentStepStyle.hashCode();
            }
            return ((((i19 + i10) * 31) + this.f54928x.hashCode()) * 31) + this.f54929y.hashCode();
        }

        public final String i() {
            return this.f54907c;
        }

        public final String j() {
            return this.f54906b;
        }

        public final String k() {
            return this.f54916l;
        }

        public final l l() {
            return this.f54919o;
        }

        public final String m() {
            return this.f54914j;
        }

        public final PendingPageTextPosition n() {
            return this.f54929y;
        }

        public final String o() {
            return this.f54913i;
        }

        public final String p() {
            return this.f54926v;
        }

        public final String q() {
            return this.f54925u;
        }

        public final String r() {
            return this.f54924t;
        }

        public final String s() {
            return this.f54923s;
        }

        public final String t() {
            return this.f54910f;
        }

        public String toString() {
            String str = this.f54905a;
            String str2 = this.f54906b;
            String str3 = this.f54907c;
            String str4 = this.f54908d;
            String str5 = this.f54909e;
            String str6 = this.f54910f;
            String str7 = this.f54911g;
            String str8 = this.f54912h;
            String str9 = this.f54913i;
            String str10 = this.f54914j;
            String str11 = this.f54915k;
            String str12 = this.f54916l;
            String str13 = this.f54917m;
            e eVar = this.f54918n;
            l lVar = this.f54919o;
            int i10 = this.f54920p;
            boolean z10 = this.f54921q;
            boolean z11 = this.f54922r;
            String str14 = this.f54923s;
            String str15 = this.f54924t;
            String str16 = this.f54925u;
            String str17 = this.f54926v;
            StepStyles.DocumentStepStyle documentStepStyle = this.f54927w;
            NextStep.Document.AssetConfig assetConfig = this.f54928x;
            PendingPageTextPosition pendingPageTextPosition = this.f54929y;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromStep=" + str3 + ", fromComponent=" + str4 + ", promptTitle=" + str5 + ", promptDescription=" + str6 + ", disclaimer=" + str7 + ", submitButtonText=" + str8 + ", pendingTitle=" + str9 + ", pendingDescription=" + str10 + ", fieldKeyDocument=" + str11 + ", kind=" + str12 + ", documentId=" + str13 + ", startPage=" + eVar + ", pages=" + lVar + ", documentFileLimit=" + i10 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", permissionsTitle=" + str14 + ", permissionsRationale=" + str15 + ", permissionsModalPositiveButton=" + str16 + ", permissionsModalNegativeButton=" + str17 + ", styles=" + documentStepStyle + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
        }

        public final String u() {
            return this.f54909e;
        }

        public final String v() {
            return this.f54905a;
        }

        public final e w() {
            return this.f54918n;
        }

        public final StepStyles.DocumentStepStyle x() {
            return this.f54927w;
        }

        public final String y() {
            return this.f54912h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f54930a = new a();

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
            public static final b f54931a = new b();

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
            private final InternalErrorInfo f54932a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0760c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f54932a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f54932a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0760c) && Intrinsics.areEqual(this.f54932a, ((C0760c) obj).f54932a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f54932a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f54932a;
                return "Errored(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f54933a = new d();

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
            private final String f54934a;

            /* renamed from: b  reason: collision with root package name */
            private final String f54935b;

            /* renamed from: c  reason: collision with root package name */
            private final up.a f54936c;

            /* renamed from: d  reason: collision with root package name */
            private final Function0 f54937d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f54938e;

            /* renamed from: f  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f54939f;

            /* renamed from: g  reason: collision with root package name */
            private final NextStep.Document.AssetConfig.PendingPage f54940g;

            /* renamed from: h  reason: collision with root package name */
            private final PendingPageTextPosition f54941h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, up.a navigationState, Function0 onBack, Function0 onCancel, StepStyles.DocumentStepStyle documentStepStyle, NextStep.Document.AssetConfig.PendingPage pendingPage, PendingPageTextPosition pendingPageTextVerticalPosition) {
                super(null);
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                this.f54934a = str;
                this.f54935b = str2;
                this.f54936c = navigationState;
                this.f54937d = onBack;
                this.f54938e = onCancel;
                this.f54939f = documentStepStyle;
                this.f54940g = pendingPage;
                this.f54941h = pendingPageTextVerticalPosition;
            }

            public final NextStep.Document.AssetConfig.PendingPage a() {
                return this.f54940g;
            }

            public final up.a b() {
                return this.f54936c;
            }

            public final Function0 c() {
                return this.f54937d;
            }

            public final Function0 d() {
                return this.f54938e;
            }

            public final PendingPageTextPosition e() {
                return this.f54941h;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f54934a, aVar.f54934a) && Intrinsics.areEqual(this.f54935b, aVar.f54935b) && Intrinsics.areEqual(this.f54936c, aVar.f54936c) && Intrinsics.areEqual(this.f54937d, aVar.f54937d) && Intrinsics.areEqual(this.f54938e, aVar.f54938e) && Intrinsics.areEqual(this.f54939f, aVar.f54939f) && Intrinsics.areEqual(this.f54940g, aVar.f54940g) && this.f54941h == aVar.f54941h) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f54935b;
            }

            public final StepStyles.DocumentStepStyle g() {
                return this.f54939f;
            }

            public final String h() {
                return this.f54934a;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                String str = this.f54934a;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = hashCode * 31;
                String str2 = this.f54935b;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int hashCode4 = (((((((i11 + hashCode2) * 31) + this.f54936c.hashCode()) * 31) + this.f54937d.hashCode()) * 31) + this.f54938e.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f54939f;
                if (documentStepStyle == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = documentStepStyle.hashCode();
                }
                int i12 = (hashCode4 + hashCode3) * 31;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f54940g;
                if (pendingPage != null) {
                    i10 = pendingPage.hashCode();
                }
                return ((i12 + i10) * 31) + this.f54941h.hashCode();
            }

            public String toString() {
                String str = this.f54934a;
                String str2 = this.f54935b;
                up.a aVar = this.f54936c;
                Function0 function0 = this.f54937d;
                Function0 function02 = this.f54938e;
                StepStyles.DocumentStepStyle documentStepStyle = this.f54939f;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f54940g;
                PendingPageTextPosition pendingPageTextPosition = this.f54941h;
                return "LoadingAnimation(title=" + str + ", prompt=" + str2 + ", navigationState=" + aVar + ", onBack=" + function0 + ", onCancel=" + function02 + ", styles=" + documentStepStyle + ", assetConfig=" + pendingPage + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final v4.h f54942a;

            /* renamed from: b  reason: collision with root package name */
            private final String f54943b;

            /* renamed from: c  reason: collision with root package name */
            private final String f54944c;

            /* renamed from: d  reason: collision with root package name */
            private final String f54945d;

            /* renamed from: e  reason: collision with root package name */
            private final String f54946e;

            /* renamed from: f  reason: collision with root package name */
            private final List f54947f;

            /* renamed from: g  reason: collision with root package name */
            private final up.a f54948g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f54949h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f54950i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f54951j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f54952k;

            /* renamed from: l  reason: collision with root package name */
            private final Function1 f54953l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f54954m;

            /* renamed from: n  reason: collision with root package name */
            private final Function0 f54955n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f54956o;

            /* renamed from: p  reason: collision with root package name */
            private final boolean f54957p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f54958q;

            /* renamed from: r  reason: collision with root package name */
            private final boolean f54959r;

            /* renamed from: s  reason: collision with root package name */
            private final String f54960s;

            /* renamed from: t  reason: collision with root package name */
            private final Function0 f54961t;

            /* renamed from: u  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f54962u;

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
                this.f54942a = imageLoader;
                this.f54943b = str;
                this.f54944c = str2;
                this.f54945d = str3;
                this.f54946e = str4;
                this.f54947f = documents;
                this.f54948g = navigationState;
                this.f54949h = openSelectFile;
                this.f54950i = selectFromPhotoLibrary;
                this.f54951j = openCamera;
                this.f54952k = openUploadOptions;
                this.f54953l = onRemove;
                this.f54954m = onSubmit;
                this.f54955n = onCancel;
                this.f54956o = onBack;
                this.f54957p = z10;
                this.f54958q = z11;
                this.f54959r = z12;
                this.f54960s = str5;
                this.f54961t = onErrorDismissed;
                this.f54962u = documentStepStyle;
            }

            public final boolean a() {
                return this.f54958q;
            }

            public final boolean b() {
                return this.f54957p;
            }

            public final String c() {
                return this.f54945d;
            }

            public final List d() {
                return this.f54947f;
            }

            public final String e() {
                return this.f54960s;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f54942a, bVar.f54942a) && Intrinsics.areEqual(this.f54943b, bVar.f54943b) && Intrinsics.areEqual(this.f54944c, bVar.f54944c) && Intrinsics.areEqual(this.f54945d, bVar.f54945d) && Intrinsics.areEqual(this.f54946e, bVar.f54946e) && Intrinsics.areEqual(this.f54947f, bVar.f54947f) && Intrinsics.areEqual(this.f54948g, bVar.f54948g) && Intrinsics.areEqual(this.f54949h, bVar.f54949h) && Intrinsics.areEqual(this.f54950i, bVar.f54950i) && Intrinsics.areEqual(this.f54951j, bVar.f54951j) && Intrinsics.areEqual(this.f54952k, bVar.f54952k) && Intrinsics.areEqual(this.f54953l, bVar.f54953l) && Intrinsics.areEqual(this.f54954m, bVar.f54954m) && Intrinsics.areEqual(this.f54955n, bVar.f54955n) && Intrinsics.areEqual(this.f54956o, bVar.f54956o) && this.f54957p == bVar.f54957p && this.f54958q == bVar.f54958q && this.f54959r == bVar.f54959r && Intrinsics.areEqual(this.f54960s, bVar.f54960s) && Intrinsics.areEqual(this.f54961t, bVar.f54961t) && Intrinsics.areEqual(this.f54962u, bVar.f54962u)) {
                    return true;
                }
                return false;
            }

            public final v4.h f() {
                return this.f54942a;
            }

            public final up.a g() {
                return this.f54948g;
            }

            public final Function0 h() {
                return this.f54956o;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                int hashCode4;
                int hashCode5;
                int hashCode6 = this.f54942a.hashCode() * 31;
                String str = this.f54943b;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode6 + hashCode) * 31;
                String str2 = this.f54944c;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f54945d;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f54946e;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int hashCode7 = (((((((((((((((((((((((((((i13 + hashCode4) * 31) + this.f54947f.hashCode()) * 31) + this.f54948g.hashCode()) * 31) + this.f54949h.hashCode()) * 31) + this.f54950i.hashCode()) * 31) + this.f54951j.hashCode()) * 31) + this.f54952k.hashCode()) * 31) + this.f54953l.hashCode()) * 31) + this.f54954m.hashCode()) * 31) + this.f54955n.hashCode()) * 31) + this.f54956o.hashCode()) * 31) + Boolean.hashCode(this.f54957p)) * 31) + Boolean.hashCode(this.f54958q)) * 31) + Boolean.hashCode(this.f54959r)) * 31;
                String str5 = this.f54960s;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int hashCode8 = (((hashCode7 + hashCode5) * 31) + this.f54961t.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f54962u;
                if (documentStepStyle != null) {
                    i10 = documentStepStyle.hashCode();
                }
                return hashCode8 + i10;
            }

            public final Function0 i() {
                return this.f54955n;
            }

            public final Function0 j() {
                return this.f54961t;
            }

            public final Function1 k() {
                return this.f54953l;
            }

            public final Function0 l() {
                return this.f54954m;
            }

            public final Function0 m() {
                return this.f54952k;
            }

            public final String n() {
                return this.f54944c;
            }

            public final StepStyles.DocumentStepStyle o() {
                return this.f54962u;
            }

            public final boolean p() {
                return this.f54959r;
            }

            public final String q() {
                return this.f54946e;
            }

            public final String r() {
                return this.f54943b;
            }

            public String toString() {
                v4.h hVar = this.f54942a;
                String str = this.f54943b;
                String str2 = this.f54944c;
                String str3 = this.f54945d;
                String str4 = this.f54946e;
                List list = this.f54947f;
                up.a aVar = this.f54948g;
                Function0 function0 = this.f54949h;
                Function0 function02 = this.f54950i;
                Function0 function03 = this.f54951j;
                Function0 function04 = this.f54952k;
                Function1 function1 = this.f54953l;
                Function0 function05 = this.f54954m;
                Function0 function06 = this.f54955n;
                Function0 function07 = this.f54956o;
                boolean z10 = this.f54957p;
                boolean z11 = this.f54958q;
                boolean z12 = this.f54959r;
                String str5 = this.f54960s;
                Function0 function08 = this.f54961t;
                StepStyles.DocumentStepStyle documentStepStyle = this.f54962u;
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
            public static final a f54963d = new a();
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
                    return a.f54963d;
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
            private final String f54964d;

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
                this.f54964d = documentId;
            }

            public final String a() {
                return this.f54964d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof b) && Intrinsics.areEqual(this.f54964d, ((b) obj).f54964d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f54964d.hashCode();
            }

            public String toString() {
                String str = this.f54964d;
                return "Review(documentId=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f54964d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        private final a f54965d;

        /* renamed from: e  reason: collision with root package name */
        private final InterfaceC0762f f54966e;

        /* renamed from: i  reason: collision with root package name */
        private final String f54967i;

        /* renamed from: o  reason: collision with root package name */
        private final List f54968o;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f54969d = new a("None", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f54970e = new a("CheckCameraPermissions", 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f54971i = new a("CameraRunning", 2);

            /* renamed from: o  reason: collision with root package name */
            public static final a f54972o = new a("SelectFileFromDocuments", 3);

            /* renamed from: p  reason: collision with root package name */
            public static final a f54973p = new a("SelectImageFromPhotoLibrary", 4);

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ a[] f54974q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f54975r;

            static {
                a[] a10 = a();
                f54974q = a10;
                f54975r = sr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f54969d, f54970e, f54971i, f54972o, f54973p};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f54974q.clone();
            }
        }

        /* renamed from: yn.r2$f$f  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public interface InterfaceC0762f extends Parcelable {

            /* renamed from: yn.r2$f$f$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements InterfaceC0762f {

                /* renamed from: d  reason: collision with root package name */
                public static final a f55000d = new a();
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
                        return a.f55000d;
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
                private final String f55001d;

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
                    this.f55001d = documentId;
                }

                public final String a() {
                    return this.f55001d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof b) && Intrinsics.areEqual(this.f55001d, ((b) obj).f55001d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f55001d.hashCode();
                }

                public String toString() {
                    String str = this.f55001d;
                    return "DeleteFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f55001d);
                }
            }

            /* renamed from: yn.r2$f$f$c */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class c implements InterfaceC0762f {
                @NotNull
                public static final Parcelable.Creator<c> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f55002d;

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
                    this.f55002d = documentId;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof c) && Intrinsics.areEqual(this.f55002d, ((c) obj).f55002d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f55002d.hashCode();
                }

                public String toString() {
                    String str = this.f55002d;
                    return "ReadyToSubmit(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f55002d);
                }
            }

            /* renamed from: yn.r2$f$f$d */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class d implements InterfaceC0762f {
                @NotNull
                public static final Parcelable.Creator<d> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f55003d;

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
                    this.f55003d = documentId;
                }

                public final String a() {
                    return this.f55003d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof d) && Intrinsics.areEqual(this.f55003d, ((d) obj).f55003d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f55003d.hashCode();
                }

                public String toString() {
                    String str = this.f55003d;
                    return "UploadFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f55003d);
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
            return this.f54965d;
        }

        public abstract String f();

        public List g() {
            return this.f54968o;
        }

        public abstract InterfaceC0762f i();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends f {
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f54996p;

            /* renamed from: q  reason: collision with root package name */
            private final String f54997q;

            /* renamed from: r  reason: collision with root package name */
            private final InterfaceC0762f f54998r;

            /* renamed from: s  reason: collision with root package name */
            private final String f54999s;

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
                this(list, str, (i10 & 4) != 0 ? InterfaceC0762f.a.f55000d : interfaceC0762f, (i10 & 8) != 0 ? null : str2);
            }

            public static /* synthetic */ e k(e eVar, List list, String str, InterfaceC0762f interfaceC0762f, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = eVar.f54996p;
                }
                if ((i10 & 2) != 0) {
                    str = eVar.f54997q;
                }
                if ((i10 & 4) != 0) {
                    interfaceC0762f = eVar.f54998r;
                }
                if ((i10 & 8) != 0) {
                    str2 = eVar.f54999s;
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
                if (Intrinsics.areEqual(this.f54996p, eVar.f54996p) && Intrinsics.areEqual(this.f54997q, eVar.f54997q) && Intrinsics.areEqual(this.f54998r, eVar.f54998r) && Intrinsics.areEqual(this.f54999s, eVar.f54999s)) {
                    return true;
                }
                return false;
            }

            @Override // yn.r2.f
            public String f() {
                return this.f54997q;
            }

            @Override // yn.r2.f
            public List g() {
                return this.f54996p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((this.f54996p.hashCode() * 31) + this.f54997q.hashCode()) * 31) + this.f54998r.hashCode()) * 31;
                String str = this.f54999s;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            @Override // yn.r2.f
            public InterfaceC0762f i() {
                return this.f54998r;
            }

            public final e j(List documents, String documentId, InterfaceC0762f uploadState, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new e(documents, documentId, uploadState, str);
            }

            public String toString() {
                List list = this.f54996p;
                String str = this.f54997q;
                InterfaceC0762f interfaceC0762f = this.f54998r;
                String str2 = this.f54999s;
                return "UploadDocument(documents=" + list + ", documentId=" + str + ", uploadState=" + interfaceC0762f + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f54996p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f54997q);
                dest.writeParcelable(this.f54998r, i10);
                dest.writeString(this.f54999s);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(List documents, String documentId, InterfaceC0762f uploadState, String str) {
                super(a.f54969d, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f54996p = documents;
                this.f54997q = documentId;
                this.f54998r = uploadState;
                this.f54999s = str;
            }
        }

        private f(a aVar, InterfaceC0762f interfaceC0762f, String str, List list) {
            this.f54965d = aVar;
            this.f54966e = interfaceC0762f;
            this.f54967i = str;
            this.f54968o = list;
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends f {
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f54976p;

            /* renamed from: q  reason: collision with root package name */
            private final String f54977q;

            /* renamed from: r  reason: collision with root package name */
            private final a f54978r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0762f f54979s;

            /* renamed from: t  reason: collision with root package name */
            private final yn.d f54980t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f54981u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f54982v;

            /* renamed from: w  reason: collision with root package name */
            private final String f54983w;

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
                this(list, str, (i10 & 4) != 0 ? a.f54969d : aVar, (i10 & 8) != 0 ? InterfaceC0762f.a.f55000d : interfaceC0762f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ b k(b bVar, List list, String str, a aVar, InterfaceC0762f interfaceC0762f, yn.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = bVar.f54976p;
                }
                if ((i10 & 2) != 0) {
                    str = bVar.f54977q;
                }
                if ((i10 & 4) != 0) {
                    aVar = bVar.f54978r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0762f = bVar.f54979s;
                }
                if ((i10 & 16) != 0) {
                    dVar = bVar.f54980t;
                }
                if ((i10 & 32) != 0) {
                    z10 = bVar.f54981u;
                }
                if ((i10 & 64) != 0) {
                    z11 = bVar.f54982v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = bVar.f54983w;
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
                return this.f54978r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f54976p, bVar.f54976p) && Intrinsics.areEqual(this.f54977q, bVar.f54977q) && this.f54978r == bVar.f54978r && Intrinsics.areEqual(this.f54979s, bVar.f54979s) && Intrinsics.areEqual(this.f54980t, bVar.f54980t) && this.f54981u == bVar.f54981u && this.f54982v == bVar.f54982v && Intrinsics.areEqual(this.f54983w, bVar.f54983w)) {
                    return true;
                }
                return false;
            }

            @Override // yn.r2.f
            public String f() {
                return this.f54977q;
            }

            @Override // yn.r2.f
            public List g() {
                return this.f54976p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((((this.f54976p.hashCode() * 31) + this.f54977q.hashCode()) * 31) + this.f54978r.hashCode()) * 31) + this.f54979s.hashCode()) * 31;
                yn.d dVar = this.f54980t;
                int i10 = 0;
                if (dVar == null) {
                    hashCode = 0;
                } else {
                    hashCode = dVar.hashCode();
                }
                int hashCode3 = (((((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f54981u)) * 31) + Boolean.hashCode(this.f54982v)) * 31;
                String str = this.f54983w;
                if (str != null) {
                    i10 = str.hashCode();
                }
                return hashCode3 + i10;
            }

            @Override // yn.r2.f
            public InterfaceC0762f i() {
                return this.f54979s;
            }

            public final b j(List documents, String documentId, a captureState, InterfaceC0762f uploadState, yn.d dVar, boolean z10, boolean z11, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new b(documents, documentId, captureState, uploadState, dVar, z10, z11, str);
            }

            public final yn.d m() {
                return this.f54980t;
            }

            public final String n() {
                return this.f54983w;
            }

            public final boolean o() {
                return this.f54981u;
            }

            public final boolean p() {
                return this.f54982v;
            }

            public String toString() {
                List list = this.f54976p;
                String str = this.f54977q;
                a aVar = this.f54978r;
                InterfaceC0762f interfaceC0762f = this.f54979s;
                yn.d dVar = this.f54980t;
                boolean z10 = this.f54981u;
                boolean z11 = this.f54982v;
                String str2 = this.f54983w;
                return "ReviewCaptures(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0762f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f54976p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f54977q);
                dest.writeString(this.f54978r.name());
                dest.writeParcelable(this.f54979s, i10);
                dest.writeParcelable(this.f54980t, i10);
                dest.writeInt(this.f54981u ? 1 : 0);
                dest.writeInt(this.f54982v ? 1 : 0);
                dest.writeString(this.f54983w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(List documents, String documentId, a captureState, InterfaceC0762f uploadState, yn.d dVar, boolean z10, boolean z11, String str) {
                super(captureState, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f54976p = documents;
                this.f54977q = documentId;
                this.f54978r = captureState;
                this.f54979s = uploadState;
                this.f54980t = dVar;
                this.f54981u = z10;
                this.f54982v = z11;
                this.f54983w = str;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends f {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f54984p;

            /* renamed from: q  reason: collision with root package name */
            private final String f54985q;

            /* renamed from: r  reason: collision with root package name */
            private final a f54986r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0762f f54987s;

            /* renamed from: t  reason: collision with root package name */
            private final yn.d f54988t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f54989u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f54990v;

            /* renamed from: w  reason: collision with root package name */
            private final String f54991w;

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
                this(list, str, (i10 & 4) != 0 ? a.f54969d : aVar, (i10 & 8) != 0 ? InterfaceC0762f.a.f55000d : interfaceC0762f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ c k(c cVar, List list, String str, a aVar, InterfaceC0762f interfaceC0762f, yn.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = cVar.f54984p;
                }
                if ((i10 & 2) != 0) {
                    str = cVar.f54985q;
                }
                if ((i10 & 4) != 0) {
                    aVar = cVar.f54986r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0762f = cVar.f54987s;
                }
                if ((i10 & 16) != 0) {
                    dVar = cVar.f54988t;
                }
                if ((i10 & 32) != 0) {
                    z10 = cVar.f54989u;
                }
                if ((i10 & 64) != 0) {
                    z11 = cVar.f54990v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = cVar.f54991w;
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
                return this.f54986r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof c)) {
                    return false;
                }
                c cVar = (c) obj;
                if (Intrinsics.areEqual(this.f54984p, cVar.f54984p) && Intrinsics.areEqual(this.f54985q, cVar.f54985q) && this.f54986r == cVar.f54986r && Intrinsics.areEqual(this.f54987s, cVar.f54987s) && Intrinsics.areEqual(this.f54988t, cVar.f54988t) && this.f54989u == cVar.f54989u && this.f54990v == cVar.f54990v && Intrinsics.areEqual(this.f54991w, cVar.f54991w)) {
                    return true;
                }
                return false;
            }

            @Override // yn.r2.f
            public String f() {
                return this.f54985q;
            }

            @Override // yn.r2.f
            public List g() {
                return this.f54984p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3 = this.f54984p.hashCode() * 31;
                String str = this.f54985q;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f54986r.hashCode()) * 31) + this.f54987s.hashCode()) * 31;
                yn.d dVar = this.f54988t;
                if (dVar == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = dVar.hashCode();
                }
                int hashCode5 = (((((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f54989u)) * 31) + Boolean.hashCode(this.f54990v)) * 31;
                String str2 = this.f54991w;
                if (str2 != null) {
                    i10 = str2.hashCode();
                }
                return hashCode5 + i10;
            }

            @Override // yn.r2.f
            public InterfaceC0762f i() {
                return this.f54987s;
            }

            public final c j(List documents, String str, a captureState, InterfaceC0762f uploadState, yn.d dVar, boolean z10, boolean z11, String str2) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new c(documents, str, captureState, uploadState, dVar, z10, z11, str2);
            }

            public final String m() {
                return this.f54991w;
            }

            public final boolean n() {
                return this.f54989u;
            }

            public final boolean o() {
                return this.f54990v;
            }

            public String toString() {
                List list = this.f54984p;
                String str = this.f54985q;
                a aVar = this.f54986r;
                InterfaceC0762f interfaceC0762f = this.f54987s;
                yn.d dVar = this.f54988t;
                boolean z10 = this.f54989u;
                boolean z11 = this.f54990v;
                String str2 = this.f54991w;
                return "ReviewCapturesWithoutDocumentId(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0762f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f54984p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f54985q);
                dest.writeString(this.f54986r.name());
                dest.writeParcelable(this.f54987s, i10);
                dest.writeParcelable(this.f54988t, i10);
                dest.writeInt(this.f54989u ? 1 : 0);
                dest.writeInt(this.f54990v ? 1 : 0);
                dest.writeString(this.f54991w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(List documents, String str, a captureState, InterfaceC0762f uploadState, yn.d dVar, boolean z10, boolean z11, String str2) {
                super(captureState, uploadState, str, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f54984p = documents;
                this.f54985q = str;
                this.f54986r = captureState;
                this.f54987s = uploadState;
                this.f54988t = dVar;
                this.f54989u = z10;
                this.f54990v = z11;
                this.f54991w = str2;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends f {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final a f54992p;

            /* renamed from: q  reason: collision with root package name */
            private final InterfaceC0762f f54993q;

            /* renamed from: r  reason: collision with root package name */
            private final String f54994r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f54995s;

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
                this((i10 & 1) != 0 ? a.f54969d : aVar, (i10 & 2) != 0 ? InterfaceC0762f.a.f55000d : interfaceC0762f, str, (i10 & 8) != 0 ? false : z10);
            }

            public static /* synthetic */ d k(d dVar, a aVar, InterfaceC0762f interfaceC0762f, String str, boolean z10, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    aVar = dVar.f54992p;
                }
                if ((i10 & 2) != 0) {
                    interfaceC0762f = dVar.f54993q;
                }
                if ((i10 & 4) != 0) {
                    str = dVar.f54994r;
                }
                if ((i10 & 8) != 0) {
                    z10 = dVar.f54995s;
                }
                return dVar.j(aVar, interfaceC0762f, str, z10);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // yn.r2.f
            public a e() {
                return this.f54992p;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof d)) {
                    return false;
                }
                d dVar = (d) obj;
                if (this.f54992p == dVar.f54992p && Intrinsics.areEqual(this.f54993q, dVar.f54993q) && Intrinsics.areEqual(this.f54994r, dVar.f54994r) && this.f54995s == dVar.f54995s) {
                    return true;
                }
                return false;
            }

            @Override // yn.r2.f
            public String f() {
                return this.f54994r;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f54992p.hashCode() * 31) + this.f54993q.hashCode()) * 31;
                String str = this.f54994r;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f54995s);
            }

            @Override // yn.r2.f
            public InterfaceC0762f i() {
                return this.f54993q;
            }

            public final d j(a captureState, InterfaceC0762f uploadState, String str, boolean z10) {
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new d(captureState, uploadState, str, z10);
            }

            public final boolean m() {
                return this.f54995s;
            }

            public String toString() {
                a aVar = this.f54992p;
                InterfaceC0762f interfaceC0762f = this.f54993q;
                String str = this.f54994r;
                boolean z10 = this.f54995s;
                return "Start(captureState=" + aVar + ", uploadState=" + interfaceC0762f + ", documentId=" + str + ", shouldShowUploadOptionsDialog=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f54992p.name());
                dest.writeParcelable(this.f54993q, i10);
                dest.writeString(this.f54994r);
                dest.writeInt(this.f54995s ? 1 : 0);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(a captureState, InterfaceC0762f uploadState, String str, boolean z10) {
                super(captureState, uploadState, str, CollectionsKt.l(), null);
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f54992p = captureState;
                this.f54993q = uploadState;
                this.f54994r = str;
                this.f54995s = z10;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f55004a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f55005b;

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
            f55004a = iArr;
            int[] iArr2 = new int[f.a.values().length];
            try {
                iArr2[f.a.f54969d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[f.a.f54970e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[f.a.f54971i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[f.a.f54972o.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[f.a.f54973p.ordinal()] = 5;
            } catch (NoSuchFieldError unused8) {
            }
            f55005b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55006d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f55007e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f55008i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f55009o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, r2 r2Var, String str, Continuation continuation) {
            super(2, continuation);
            this.f55007e = aVar;
            this.f55008i = r2Var;
            this.f55009o = str;
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
            return new h(this.f55007e, this.f55008i, this.f55009o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r d10;
            rr.b.f();
            if (this.f55006d == 0) {
                kotlin.c.b(obj);
                wm.h c10 = this.f55007e.c();
                r2 r2Var = this.f55008i;
                final String str = this.f55009o;
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
        int f55010d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f55011e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f55012i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f.InterfaceC0762f f55013o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, r2 r2Var, f.InterfaceC0762f interfaceC0762f, Continuation continuation) {
            super(2, continuation);
            this.f55011e = aVar;
            this.f55012i = r2Var;
            this.f55013o = interfaceC0762f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(f.InterfaceC0762f interfaceC0762f, r.c cVar) {
            cVar.e(f.d((f) cVar.c(), new f.InterfaceC0762f.c(((f.InterfaceC0762f.d) interfaceC0762f).a()), null, null, null, 14, null));
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f55011e, this.f55012i, this.f55013o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r d10;
            rr.b.f();
            if (this.f55010d == 0) {
                kotlin.c.b(obj);
                wm.h c10 = this.f55011e.c();
                r2 r2Var = this.f55012i;
                final f.InterfaceC0762f interfaceC0762f = this.f55013o;
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
        this.f54882a = imageLoader;
        this.f54883b = applicationContext;
        this.f54884c = permissionRequestWorkflow;
        this.f54885d = documentCameraWorker;
        this.f54886e = documentsSelectWorkerFactory;
        this.f54887f = documentCreateWorker;
        this.f54888g = documentLoadWorker;
        this.f54889h = documentFileUploadWorker;
        this.f54890i = documentFileDeleteWorker;
        this.f54891j = documentSubmitWorker;
        this.f54892k = navigationStateManager;
        this.f54893l = externalEventLogger;
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
        r2Var.L0(aVar, a.b.f54895a);
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
        r2Var.L0(aVar, a.g.f54901a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f55004a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new lr.p();
            }
            action.e(fVar.a(f.a.f54969d));
        } else {
            yn.c cVar = r2Var.f54885d;
            String string = r2Var.f54883b.getString(ep.e.f22484a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f54971i);
            } else {
                a10 = fVar.a(f.a.f54969d);
            }
            action.e(a10);
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f54902a);
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
        r2Var.L0(aVar, a.j.f54904a);
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
        r2Var.L0(aVar, a.e.f54898a);
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
        r2Var.L0(aVar, a.g.f54901a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f54901a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f54902a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f54902a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f54904a);
        return Unit.f32464a;
    }

    private final void I1(f.a aVar, final b bVar, final f fVar, k.a aVar2) {
        v2 e10;
        int i10 = g.f55005b[aVar.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4 && i10 != 5) {
                    throw new lr.p();
                }
                if (fVar.e() == f.a.f54972o) {
                    e10 = this.f54886e.c();
                } else {
                    e10 = this.f54886e.e();
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
            wm.w.l(aVar2, this.f54885d, Reflection.typeOf(yn.c.class), "", new Function1() { // from class: yn.g1
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
        if (Intrinsics.areEqual(interfaceC0762f, f.InterfaceC0762f.a.f55000d)) {
            if (fVar.f() == null) {
                wm.w.l(aVar, this.f54887f.a(bVar.v(), bVar.k(), bVar.g(), bVar.e()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.a.class), "", new Function1() { // from class: yn.j1
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
                wm.w.l(aVar, this.f54889h.a(bVar.v(), ((f.InterfaceC0762f.d) interfaceC0762f).a(), aVar2), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.b.class), aVar2.c(), new Function1() { // from class: yn.k1
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
                wm.w.l(aVar, this.f54890i.a(bVar.v(), bVar3.f(), bVar2), Reflection.typeOf(ao.a.class), "", new Function1() { // from class: yn.l1
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
        if (fVar.e() == f.a.f54971i) {
            bVar2 = b.d.f48021a;
        } else if (fVar instanceof f.d) {
            bVar2 = b.C0581b.f48019a;
        } else if (fVar instanceof f.b) {
            bVar2 = b.c.f48020a;
        } else if (fVar instanceof f.c) {
            bVar2 = b.c.f48020a;
        } else if (fVar instanceof f.e) {
            bVar2 = b.a.f48018a;
        } else {
            throw new lr.p();
        }
        this.f54893l.c(new i.b(bVar.i(), bVar2));
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
        } else if (Intrinsics.areEqual(it, c.b.a.f54742a)) {
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
        if (Intrinsics.areEqual(aVar2, a.b.f54895a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M0;
                    M0 = r2.M0((r.c) obj);
                    return M0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.C0759a.f54894a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = r2.N0((r.c) obj);
                    return N0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.g.f54901a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.s1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = r2.O0((r.c) obj);
                    return O0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.h.f54902a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.t1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P0;
                    P0 = r2.P0((r.c) obj);
                    return P0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.j.f54904a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.u1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q0;
                    Q0 = r2.Q0((r.c) obj);
                    return Q0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.e.f54898a)) {
            d10 = wm.z.d(this, null, new Function1() { // from class: yn.v1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R0;
                    R0 = r2.R0((r.c) obj);
                    return R0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.c.f54896a)) {
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
        } else if (Intrinsics.areEqual(aVar2, a.d.f54897a)) {
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
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.M0(((f) action.c()).g(), new d.a(((c.b.C0754b) bVar).a(), yn.a.f54715i, 0, 4, null)), bVar2.e()), ((f) action.c()).f(), null, ((f) action.c()).i(), null, false, false, null, 244, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.b.f54931a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f54969d));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.a.f54930a);
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
        } else if (Intrinsics.areEqual(it, v2.c.a.f55052a)) {
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
        action.e(((f) action.c()).a(f.a.f54972o).b(false));
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
        action.e(((f) action.c()).a(f.a.f54973p).b(false));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P1(v2.c cVar, b bVar, r2 r2Var, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0762f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.b) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, r2Var.f54883b.getString(ep.e.f22493j), 116, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f54970e).b(false));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(fVar.a(f.a.f54969d));
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
        r2Var.L0(aVar, a.C0759a.f54894a);
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
        f.a aVar2 = f.a.f54969d;
        d10 = u2.d(((b.AbstractC0215b.a) abstractC0215b).a(), r2Var.f54883b);
        action.e(new f.b(I0, a10, aVar2, interfaceC0762f2, null, false, false, d10, 80, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f54895a);
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
        r2Var.L0(aVar, a.j.f54904a);
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
        r2Var.L0(aVar, a.e.f54898a);
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
        r2Var.L0(aVar, a.b.f54895a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0759a.f54894a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f54897a);
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
        int i10 = g.f55004a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new lr.p();
            }
            action.e(fVar.a(f.a.f54969d));
        } else {
            yn.c cVar = r2Var.f54885d;
            String string = r2Var.f54883b.getString(ep.e.f22484a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f54971i);
            } else {
                a10 = fVar.a(f.a.f54969d);
            }
            action.e(a10);
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f54896a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f54896a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f54901a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f54902a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f54904a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f54898a);
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
        r2Var.L0(aVar, a.b.f54895a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0759a.f54894a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f54897a);
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
        int i10 = g.f55004a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new lr.p();
            }
            action.e(fVar.a(f.a.f54969d));
        } else {
            yn.c cVar = r2Var.f54885d;
            String string = r2Var.f54883b.getString(ep.e.f22484a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f54971i);
            } else {
                a10 = fVar.a(f.a.f54969d);
            }
            action.e(a10);
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f54896a);
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
        action.d(c.d.f54933a);
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
        r2Var.L0(aVar, a.b.f54895a);
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
        if (Intrinsics.areEqual(w10, e.a.f54963d)) {
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
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        boolean z15 = true;
        this.f54892k.c(renderProps.b(), renderProps.c(), !(renderState instanceof f.e));
        I1(renderState.e(), renderProps, renderState, context);
        J1(renderState.i(), renderProps, renderState, context);
        K0(renderProps, renderState);
        String str = "";
        if (renderState instanceof f.d) {
            Object iVar = new yn.i(yp.c.a(renderProps.l().a()), A0(renderProps.l().a(), context), this.f54892k.b(), new Function0() { // from class: yn.y
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
                iVar = zo.d.a(yp.m.f55269a.j(yp.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: yn.m0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit j12;
                        j12 = r2.j1(r2.this, context);
                        return j12;
                    }
                }, renderProps.l().b().a()), iVar, "document_upload_options_dialog");
            }
            if (dVar.e() != f.a.f54970e) {
                z15 = false;
            }
            cp.d0 d0Var = cp.d0.f19644d;
            String s10 = renderProps.s();
            if (s10 != null) {
                str = s10;
            }
            String r10 = renderProps.r();
            if (r10 == null) {
                r10 = this.f54883b.getString(ep.e.f22486c);
                Intrinsics.checkNotNullExpressionValue(r10, "getString(...)");
            }
            Context context2 = this.f54883b;
            String string = context2.getString(ep.e.f22485b, mp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return cp.l1.e(iVar, context, z15, d0Var, false, str, r10, string, renderProps.q(), renderProps.p(), null, null, null, this.f54884c, renderProps.x(), null, new Function1() { // from class: yn.n0
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
                wm.w.l(context, this.f54888g.a(renderProps.v(), bVar.f()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.c.class), "", new Function1() { // from class: yn.o0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        wm.r D1;
                        D1 = r2.D1(r2.this, renderState, (c.b) obj);
                        return D1;
                    }
                });
            }
            v4.h hVar = this.f54882a;
            String u10 = renderProps.u();
            String t10 = renderProps.t();
            String d10 = renderProps.d();
            String y10 = renderProps.y();
            List g10 = bVar.g();
            StepStyles.DocumentStepStyle x10 = renderProps.x();
            up.a b10 = this.f54892k.b();
            boolean o10 = bVar.o();
            if (bVar.g().size() < renderProps.e()) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (!bVar.g().isEmpty() && Intrinsics.areEqual(bVar.i(), new f.InterfaceC0762f.c(bVar.f()))) {
                z13 = true;
            } else {
                z13 = false;
            }
            d.b bVar2 = new d.b(hVar, u10, t10, d10, y10, g10, b10, new Function0() { // from class: yn.p0
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
            }, o10, z12, z13, bVar.n(), new Function0() { // from class: yn.q1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f12;
                    f12 = r2.f1(r2.this, context);
                    return f12;
                }
            }, x10);
            if (bVar.e() == f.a.f54970e) {
                z14 = true;
            } else {
                z14 = false;
            }
            cp.d0 d0Var2 = cp.d0.f19644d;
            String s11 = renderProps.s();
            if (s11 == null) {
                s11 = "";
            }
            String r11 = renderProps.r();
            if (r11 == null) {
                r11 = this.f54883b.getString(ep.e.f22486c);
                Intrinsics.checkNotNullExpressionValue(r11, "getString(...)");
            }
            Context context3 = this.f54883b;
            String string2 = context3.getString(ep.e.f22485b, mp.f.b(context3));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            zo.c e10 = cp.l1.e(bVar2, context, z14, d0Var2, false, s11, r11, string2, renderProps.q(), renderProps.p(), null, null, null, this.f54884c, renderProps.x(), null, new Function1() { // from class: yn.b2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r g12;
                    g12 = r2.g1(r2.this, renderState, (c1.a) obj);
                    return g12;
                }
            }, 19976, null);
            if (bVar.p()) {
                return zo.d.a(yp.m.f55269a.j(yp.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: yn.m2
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
            v4.h hVar2 = this.f54882a;
            String u11 = renderProps.u();
            String t11 = renderProps.t();
            String d11 = renderProps.d();
            String y11 = renderProps.y();
            List g11 = cVar.g();
            StepStyles.DocumentStepStyle x11 = renderProps.x();
            up.a b11 = this.f54892k.b();
            boolean n10 = cVar.n();
            if (cVar.g().size() < renderProps.e()) {
                z10 = true;
            } else {
                z10 = false;
            }
            d.b bVar3 = new d.b(hVar2, u11, t11, d11, y11, g11, b11, new Function0() { // from class: yn.o2
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
            }, n10, z10, false, cVar.m(), new Function0() { // from class: yn.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit s12;
                    s12 = r2.s1(r2.this, context);
                    return s12;
                }
            }, x11);
            if (cVar.e() == f.a.f54970e) {
                z11 = true;
            } else {
                z11 = false;
            }
            cp.d0 d0Var3 = cp.d0.f19644d;
            String s12 = renderProps.s();
            if (s12 == null) {
                s12 = "";
            }
            String r12 = renderProps.r();
            if (r12 == null) {
                r12 = this.f54883b.getString(ep.e.f22486c);
                Intrinsics.checkNotNullExpressionValue(r12, "getString(...)");
            }
            Context context4 = this.f54883b;
            String string3 = context4.getString(ep.e.f22485b, mp.f.b(context4));
            Intrinsics.checkNotNullExpressionValue(string3, "getString(...)");
            zo.c e11 = cp.l1.e(bVar3, context, z11, d0Var3, false, s12, r12, string3, renderProps.q(), renderProps.p(), null, null, null, this.f54884c, renderProps.x(), null, new Function1() { // from class: yn.g0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r t12;
                    t12 = r2.t1(r2.this, renderState, (c1.a) obj);
                    return t12;
                }
            }, 19976, null);
            if (cVar.o()) {
                return zo.d.a(yp.m.f55269a.j(yp.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: yn.h0
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
            wm.w.l(context, this.f54891j.a(renderProps.v(), renderProps.j(), renderProps.i(), renderProps.h(), ((f.e) renderState).g()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.d.class), "", new Function1() { // from class: yn.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r w12;
                    w12 = r2.w1(r2.this, (d.b) obj);
                    return w12;
                }
            });
            up.b.d(this.f54892k, false, false, false, 4, null);
            return new d.a(renderProps.o(), renderProps.m(), this.f54892k.b(), new Function0() { // from class: yn.k0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit z16;
                    z16 = r2.z1(r2.this, context);
                    return z16;
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
