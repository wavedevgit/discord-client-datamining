package wn;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.MimeTypeMap;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.e;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.progressindicator.CircularProgressIndicator;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import g5.h;
import java.io.File;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.IndexedValue;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import wn.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x extends RecyclerView.Adapter {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f52783a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f52784b;

    /* renamed from: c  reason: collision with root package name */
    private final StepStyles.DocumentStepStyle f52785c;

    /* renamed from: d  reason: collision with root package name */
    private final LayoutInflater f52786d;

    /* renamed from: e  reason: collision with root package name */
    private List f52787e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f52788f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: wn.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0729a extends a {
            public C0729a() {
                super(null);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static abstract class b extends a {

            /* renamed from: wn.x$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0730a extends b {

                /* renamed from: a  reason: collision with root package name */
                private final File f52789a;

                /* renamed from: b  reason: collision with root package name */
                private final d.a f52790b;

                /* renamed from: c  reason: collision with root package name */
                private final String f52791c;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0730a(File file, d.a document, String str) {
                    super(null);
                    Intrinsics.checkNotNullParameter(file, "file");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f52789a = file;
                    this.f52790b = document;
                    this.f52791c = str;
                }

                @Override // wn.x.a.b
                /* renamed from: b */
                public d.a a() {
                    return this.f52790b;
                }

                public final File c() {
                    return this.f52789a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0730a)) {
                        return false;
                    }
                    C0730a c0730a = (C0730a) obj;
                    if (Intrinsics.areEqual(this.f52789a, c0730a.f52789a) && Intrinsics.areEqual(this.f52790b, c0730a.f52790b) && Intrinsics.areEqual(this.f52791c, c0730a.f52791c)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = ((this.f52789a.hashCode() * 31) + this.f52790b.hashCode()) * 31;
                    String str = this.f52791c;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    return hashCode2 + hashCode;
                }

                public String toString() {
                    File file = this.f52789a;
                    d.a aVar = this.f52790b;
                    String str = this.f52791c;
                    return "Local(file=" + file + ", document=" + aVar + ", mimeType=" + str + ")";
                }
            }

            /* renamed from: wn.x$a$b$b  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0731b extends b {

                /* renamed from: a  reason: collision with root package name */
                private final String f52792a;

                /* renamed from: b  reason: collision with root package name */
                private final String f52793b;

                /* renamed from: c  reason: collision with root package name */
                private final d.b f52794c;

                /* renamed from: d  reason: collision with root package name */
                private final String f52795d;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0731b(String remoteUrl, String str, d.b document, String str2) {
                    super(null);
                    Intrinsics.checkNotNullParameter(remoteUrl, "remoteUrl");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f52792a = remoteUrl;
                    this.f52793b = str;
                    this.f52794c = document;
                    this.f52795d = str2;
                }

                @Override // wn.x.a.b
                /* renamed from: b */
                public d.b a() {
                    return this.f52794c;
                }

                public final String c() {
                    return this.f52793b;
                }

                public String d() {
                    return this.f52795d;
                }

                public final String e() {
                    return this.f52792a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0731b)) {
                        return false;
                    }
                    C0731b c0731b = (C0731b) obj;
                    if (Intrinsics.areEqual(this.f52792a, c0731b.f52792a) && Intrinsics.areEqual(this.f52793b, c0731b.f52793b) && Intrinsics.areEqual(this.f52794c, c0731b.f52794c) && Intrinsics.areEqual(this.f52795d, c0731b.f52795d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = this.f52792a.hashCode() * 31;
                    String str = this.f52793b;
                    int i10 = 0;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f52794c.hashCode()) * 31;
                    String str2 = this.f52795d;
                    if (str2 != null) {
                        i10 = str2.hashCode();
                    }
                    return hashCode3 + i10;
                }

                public String toString() {
                    String str = this.f52792a;
                    String str2 = this.f52793b;
                    d.b bVar = this.f52794c;
                    String str3 = this.f52795d;
                    return "Remote(remoteUrl=" + str + ", filename=" + str2 + ", document=" + bVar + ", mimeType=" + str3 + ")";
                }
            }

            public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public abstract d a();

            private b() {
                super(null);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends e.b {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ List f52796a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ List f52797b;

        b(List list, List list2) {
            this.f52796a = list;
            this.f52797b = list2;
        }

        @Override // androidx.recyclerview.widget.e.b
        public boolean areContentsTheSame(int i10, int i11) {
            boolean z10;
            a aVar = (a) this.f52796a.get(i10);
            a aVar2 = (a) this.f52797b.get(i11);
            if (areItemsTheSame(i10, i11)) {
                if (aVar instanceof a.C0729a) {
                    z10 = Intrinsics.areEqual(aVar, aVar2);
                } else if (aVar instanceof a.b) {
                    z10 = true;
                } else {
                    throw new jr.p();
                }
                if (z10) {
                    return true;
                }
                return false;
            }
            return false;
        }

        @Override // androidx.recyclerview.widget.e.b
        public boolean areItemsTheSame(int i10, int i11) {
            a aVar = (a) this.f52796a.get(i10);
            a aVar2 = (a) this.f52797b.get(i11);
            if (aVar.getClass() != aVar2.getClass()) {
                return false;
            }
            if (aVar instanceof a.C0729a) {
                return true;
            }
            if (aVar instanceof a.b.C0730a) {
                String absolutePath = ((a.b.C0730a) aVar).c().getAbsolutePath();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Local");
                return Intrinsics.areEqual(absolutePath, ((a.b.C0730a) aVar2).c().getAbsolutePath());
            } else if (aVar instanceof a.b.C0731b) {
                String e10 = ((a.b.C0731b) aVar).e();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Remote");
                return Intrinsics.areEqual(e10, ((a.b.C0731b) aVar2).e());
            } else {
                throw new jr.p();
            }
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getNewListSize() {
            return this.f52797b.size();
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getOldListSize() {
            return this.f52796a.size();
        }
    }

    public x(Context context, v4.h imageLoader, Function0 onClickAddButton, StepStyles.DocumentStepStyle documentStepStyle) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
        Intrinsics.checkNotNullParameter(onClickAddButton, "onClickAddButton");
        this.f52783a = imageLoader;
        this.f52784b = onClickAddButton;
        this.f52785c = documentStepStyle;
        this.f52786d = LayoutInflater.from(context);
        this.f52787e = CollectionsKt.l();
    }

    private final void c(xn.b bVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f52785c;
        if (documentStepStyle == null) {
            return;
        }
        Double imagePreviewBorderRadius = documentStepStyle.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            bVar.f53706c.setRadius((float) kp.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f52785c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            bVar.f53706c.setStrokeWidth((int) Math.ceil(kp.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f52785c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            bVar.f53706c.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        Integer imagePreviewMainAreaFillColor = this.f52785c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            bVar.f53705b.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView addButton = bVar.f53705b;
        Intrinsics.checkNotNullExpressionValue(addButton, "addButton");
        dq.g.g(addButton, this.f52785c.getImagePreviewPlusIconStrokeColor(), this.f52785c.getImagePreviewPlusIconFillColor(), null, new String[]{"#FFFFFF"}, new String[]{"#5B3FD3"}, new String[0]);
    }

    private final void d(xn.d dVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f52785c;
        if (documentStepStyle == null) {
            return;
        }
        Integer strokeColorValue = documentStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            dVar.f53722f.setIndicatorColor(strokeColorValue.intValue());
        }
        Integer fillColorValue = this.f52785c.getFillColorValue();
        if (fillColorValue != null) {
            dVar.f53722f.setTrackColor(fillColorValue.intValue());
        }
        Integer imagePreviewCropAreaFillColor = this.f52785c.getImagePreviewCropAreaFillColor();
        if (imagePreviewCropAreaFillColor != null) {
            dVar.f53720d.setBackgroundColor(imagePreviewCropAreaFillColor.intValue());
        }
        Double imagePreviewBorderRadius = this.f52785c.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            dVar.f53718b.setRadius((float) kp.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f52785c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            dVar.f53718b.setStrokeWidth((int) Math.ceil(kp.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f52785c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            dVar.f53718b.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        TextBasedComponentStyle imageNameStyleValue = this.f52785c.getImageNameStyleValue();
        if (imageNameStyleValue != null) {
            TextView filenameView = dVar.f53719c;
            Intrinsics.checkNotNullExpressionValue(filenameView, "filenameView");
            dq.f0.n(filenameView, imageNameStyleValue, null, 2, null);
        }
        Integer imagePreviewMainAreaFillColor = this.f52785c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            dVar.f53721e.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView removeButton = dVar.f53723g;
        Intrinsics.checkNotNullExpressionValue(removeButton, "removeButton");
        dq.g.g(removeButton, this.f52785c.getImagePreviewXIconStrokeColor(), this.f52785c.getImagePreviewXIconFillColor(), null, new String[]{"#6B6D82"}, new String[]{"#FFFFFF"}, new String[0]);
    }

    private final List e(boolean z10, List list) {
        a.b c0731b;
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            d dVar = (d) it.next();
            if (dVar instanceof d.a) {
                d.a aVar = (d.a) dVar;
                File file = new File(aVar.c());
                c0731b = new a.b.C0730a(file, aVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(ur.j.s(file)));
            } else if (dVar instanceof d.b) {
                d.b bVar = (d.b) dVar;
                c0731b = new a.b.C0731b(bVar.d(), bVar.c(), bVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(MimeTypeMap.getFileExtensionFromUrl(bVar.d())));
            } else {
                throw new jr.p();
            }
            arrayList.add(c0731b);
        }
        if (z10) {
            arrayList.add(new a.C0729a());
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(x xVar, View view) {
        xVar.f52784b.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(x xVar, a aVar, View view) {
        Function1 function1 = xVar.f52788f;
        if (function1 != null) {
            function1.invoke(((a.b) aVar).a());
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f52787e.size();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemViewType(int i10) {
        a aVar = (a) this.f52787e.get(i10);
        if (aVar instanceof a.C0729a) {
            return z2.f52833c;
        }
        if (aVar instanceof a.b) {
            return z2.f52834d;
        }
        throw new jr.p();
    }

    public final void h(Function1 function1) {
        this.f52788f = function1;
    }

    public final void i(boolean z10, List documents) {
        Intrinsics.checkNotNullParameter(documents, "documents");
        List e10 = e(z10, documents);
        List list = this.f52787e;
        e.C0069e b10 = androidx.recyclerview.widget.e.b(new b(list, e10));
        Intrinsics.checkNotNullExpressionValue(b10, "calculateDiff(...)");
        this.f52787e = e10;
        b10.c(this);
        List list2 = list;
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(CollectionsKt.w(list2, 10)), 16));
        for (Object obj : list2) {
            linkedHashMap.put(obj, (a) obj);
        }
        for (IndexedValue indexedValue : CollectionsKt.n1(e10)) {
            int a10 = indexedValue.a();
            a aVar = (a) indexedValue.b();
            a aVar2 = (a) linkedHashMap.get(aVar);
            if ((aVar2 instanceof a.b.C0730a) && (aVar instanceof a.b.C0730a)) {
                a.b.C0730a c0730a = (a.b.C0730a) aVar;
                if (((a.b.C0730a) aVar2).a().e() != c0730a.a().e()) {
                    if (c0730a.a().e() == 100) {
                        notifyItemChanged(a10);
                    } else {
                        notifyItemChanged(a10, Unit.f33074a);
                    }
                }
            }
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int i10) {
        int i11;
        Intrinsics.checkNotNullParameter(holder, "holder");
        final a aVar = (a) this.f52787e.get(i10);
        if (aVar instanceof a.C0729a) {
            ((xn.b) kp.c0.a(holder)).f53705b.setOnClickListener(new View.OnClickListener() { // from class: wn.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.f(x.this, view);
                }
            });
        } else if (aVar instanceof a.b) {
            xn.d dVar = (xn.d) kp.c0.a(holder);
            dVar.f53723g.setOnClickListener(new View.OnClickListener() { // from class: wn.w
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.g(x.this, aVar, view);
                }
            });
            ImageView imageView = dVar.f53720d;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            k5.l.a(imageView);
            dVar.f53720d.setImageDrawable(null);
            a.b bVar = (a.b) aVar;
            int i12 = 8;
            if (bVar instanceof a.b.C0730a) {
                ImageView imageView2 = dVar.f53720d;
                a.b.C0730a c0730a = (a.b.C0730a) aVar;
                if (c0730a.a().e() < 100) {
                    i11 = 4;
                } else {
                    i11 = 0;
                }
                imageView2.setVisibility(i11);
                dVar.f53723g.setVisibility(8);
                dVar.f53719c.setText(c0730a.c().getName());
                CircularProgressIndicator circularProgressIndicator = dVar.f53722f;
                if (c0730a.a().e() < 100) {
                    i12 = 0;
                }
                circularProgressIndicator.setVisibility(i12);
                dVar.f53722f.setProgress(c0730a.a().e());
            } else if (bVar instanceof a.b.C0731b) {
                dVar.f53720d.setVisibility(0);
                a.b.C0731b c0731b = (a.b.C0731b) aVar;
                if (Intrinsics.areEqual(c0731b.d(), "application/pdf")) {
                    ImageView imageView3 = dVar.f53720d;
                    Intrinsics.checkNotNullExpressionValue(imageView3, "imageView");
                    Integer valueOf = Integer.valueOf(kp.l.f36252l);
                    v4.h hVar = this.f52783a;
                    h.a r10 = new h.a(imageView3.getContext()).d(valueOf).r(imageView3);
                    r10.o(100, 100);
                    hVar.a(r10.a());
                } else {
                    ImageView imageView4 = dVar.f53720d;
                    Intrinsics.checkNotNullExpressionValue(imageView4, "imageView");
                    String e10 = c0731b.e();
                    v4.h hVar2 = this.f52783a;
                    h.a r11 = new h.a(imageView4.getContext()).d(e10).r(imageView4);
                    r11.c(true);
                    r11.b(100);
                    r11.o(500, 500);
                    hVar2.a(r11.a());
                }
                dVar.f53722f.setVisibility(8);
                dVar.f53723g.setVisibility(0);
                dVar.f53719c.setText(c0731b.c());
            } else {
                throw new jr.p();
            }
        } else {
            throw new jr.p();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int i10) {
        l5.i iVar;
        l5.i iVar2;
        Intrinsics.checkNotNullParameter(parent, "parent");
        View inflate = this.f52786d.inflate(i10, parent, false);
        if (i10 == z2.f52833c) {
            xn.b a10 = xn.b.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a10, "bind(...)");
            kp.b0 b0Var = new kp.b0(a10);
            l5.b0 w10 = l5.s.w(((xn.b) b0Var.getBinding()).getRoot().getContext(), a3.f52438a);
            if (w10 != null && (iVar2 = (l5.i) w10.b()) != null) {
                ((xn.b) b0Var.getBinding()).f53705b.setComposition(iVar2);
            }
            ViewBinding binding = b0Var.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding, "<get-binding>(...)");
            c((xn.b) binding);
            return b0Var;
        } else if (i10 == z2.f52834d) {
            xn.d a11 = xn.d.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a11, "bind(...)");
            kp.b0 b0Var2 = new kp.b0(a11);
            l5.b0 w11 = l5.s.w(((xn.d) b0Var2.getBinding()).getRoot().getContext(), a3.f52439b);
            if (w11 != null && (iVar = (l5.i) w11.b()) != null) {
                ((xn.d) b0Var2.getBinding()).f53723g.setComposition(iVar);
            }
            ViewBinding binding2 = b0Var2.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding2, "<get-binding>(...)");
            d((xn.d) binding2);
            return b0Var2;
        } else {
            throw new IllegalStateException(("Unknown view type " + i10).toString());
        }
    }
}
