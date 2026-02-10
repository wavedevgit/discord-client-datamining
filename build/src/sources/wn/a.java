package wn;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import vn.d0;
import vn.h0;
import vn.i0;
import vn.t0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: wn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0750a extends a {

        /* renamed from: a  reason: collision with root package name */
        private final vn.g f53844a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0750a(vn.g extractedBarcode) {
            super(null);
            Intrinsics.checkNotNullParameter(extractedBarcode, "extractedBarcode");
            this.f53844a = extractedBarcode;
        }

        public final vn.g a() {
            return this.f53844a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        public static final b f53845a = new b();

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
            return 801215118;
        }

        public String toString() {
            return "Empty";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends a {

        /* renamed from: a  reason: collision with root package name */
        private final t0.c f53846a;

        /* renamed from: b  reason: collision with root package name */
        private final a f53847b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(t0.c side, a frontOrBackData) {
            super(null);
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(frontOrBackData, "frontOrBackData");
            this.f53846a = side;
            this.f53847b = frontOrBackData;
        }

        public final a a() {
            return this.f53847b;
        }

        public final t0.c b() {
            return this.f53846a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a {

        /* renamed from: a  reason: collision with root package name */
        private final h0 f53848a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(h0 metadata) {
            super(null);
            Intrinsics.checkNotNullParameter(metadata, "metadata");
            this.f53848a = metadata;
        }

        public final h0 a() {
            return this.f53848a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends a {

        /* renamed from: a  reason: collision with root package name */
        private final i0 f53849a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(i0 imageLightCondition) {
            super(null);
            Intrinsics.checkNotNullParameter(imageLightCondition, "imageLightCondition");
            this.f53849a = imageLightCondition;
        }

        public final i0 a() {
            return this.f53849a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends a {

        /* renamed from: a  reason: collision with root package name */
        private final d0 f53850a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(d0 extractedTexts) {
            super(null);
            Intrinsics.checkNotNullParameter(extractedTexts, "extractedTexts");
            this.f53850a = extractedTexts;
        }

        public final d0 a() {
            return this.f53850a;
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
