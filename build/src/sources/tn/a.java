package tn;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import sn.d0;
import sn.h0;
import sn.i0;
import sn.t0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: tn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0651a extends a {

        /* renamed from: a  reason: collision with root package name */
        private final sn.g f50841a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0651a(sn.g extractedBarcode) {
            super(null);
            Intrinsics.checkNotNullParameter(extractedBarcode, "extractedBarcode");
            this.f50841a = extractedBarcode;
        }

        public final sn.g a() {
            return this.f50841a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        public static final b f50842a = new b();

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
        private final t0.c f50843a;

        /* renamed from: b  reason: collision with root package name */
        private final a f50844b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(t0.c side, a frontOrBackData) {
            super(null);
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(frontOrBackData, "frontOrBackData");
            this.f50843a = side;
            this.f50844b = frontOrBackData;
        }

        public final a a() {
            return this.f50844b;
        }

        public final t0.c b() {
            return this.f50843a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a {

        /* renamed from: a  reason: collision with root package name */
        private final h0 f50845a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(h0 metadata) {
            super(null);
            Intrinsics.checkNotNullParameter(metadata, "metadata");
            this.f50845a = metadata;
        }

        public final h0 a() {
            return this.f50845a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends a {

        /* renamed from: a  reason: collision with root package name */
        private final i0 f50846a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(i0 imageLightCondition) {
            super(null);
            Intrinsics.checkNotNullParameter(imageLightCondition, "imageLightCondition");
            this.f50846a = imageLightCondition;
        }

        public final i0 a() {
            return this.f50846a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends a {

        /* renamed from: a  reason: collision with root package name */
        private final d0 f50847a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(d0 extractedTexts) {
            super(null);
            Intrinsics.checkNotNullParameter(extractedTexts, "extractedTexts");
            this.f50847a = extractedTexts;
        }

        public final d0 a() {
            return this.f50847a;
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
