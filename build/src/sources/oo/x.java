package oo;

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
import oo.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x extends RecyclerView.Adapter {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f41024a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f41025b;

    /* renamed from: c  reason: collision with root package name */
    private final StepStyles.DocumentStepStyle f41026c;

    /* renamed from: d  reason: collision with root package name */
    private final LayoutInflater f41027d;

    /* renamed from: e  reason: collision with root package name */
    private List f41028e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f41029f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: oo.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0573a extends a {
            public C0573a() {
                super(null);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static abstract class b extends a {

            /* renamed from: oo.x$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0574a extends b {

                /* renamed from: a  reason: collision with root package name */
                private final File f41030a;

                /* renamed from: b  reason: collision with root package name */
                private final d.a f41031b;

                /* renamed from: c  reason: collision with root package name */
                private final String f41032c;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0574a(File file, d.a document, String str) {
                    super(null);
                    Intrinsics.checkNotNullParameter(file, "file");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f41030a = file;
                    this.f41031b = document;
                    this.f41032c = str;
                }

                @Override // oo.x.a.b
                /* renamed from: b */
                public d.a a() {
                    return this.f41031b;
                }

                public final File c() {
                    return this.f41030a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0574a)) {
                        return false;
                    }
                    C0574a c0574a = (C0574a) obj;
                    if (Intrinsics.areEqual(this.f41030a, c0574a.f41030a) && Intrinsics.areEqual(this.f41031b, c0574a.f41031b) && Intrinsics.areEqual(this.f41032c, c0574a.f41032c)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = ((this.f41030a.hashCode() * 31) + this.f41031b.hashCode()) * 31;
                    String str = this.f41032c;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    return hashCode2 + hashCode;
                }

                public String toString() {
                    File file = this.f41030a;
                    d.a aVar = this.f41031b;
                    String str = this.f41032c;
                    return "Local(file=" + file + ", document=" + aVar + ", mimeType=" + str + ")";
                }
            }

            /* renamed from: oo.x$a$b$b  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0575b extends b {

                /* renamed from: a  reason: collision with root package name */
                private final String f41033a;

                /* renamed from: b  reason: collision with root package name */
                private final String f41034b;

                /* renamed from: c  reason: collision with root package name */
                private final d.b f41035c;

                /* renamed from: d  reason: collision with root package name */
                private final String f41036d;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0575b(String remoteUrl, String str, d.b document, String str2) {
                    super(null);
                    Intrinsics.checkNotNullParameter(remoteUrl, "remoteUrl");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f41033a = remoteUrl;
                    this.f41034b = str;
                    this.f41035c = document;
                    this.f41036d = str2;
                }

                @Override // oo.x.a.b
                /* renamed from: b */
                public d.b a() {
                    return this.f41035c;
                }

                public final String c() {
                    return this.f41034b;
                }

                public String d() {
                    return this.f41036d;
                }

                public final String e() {
                    return this.f41033a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0575b)) {
                        return false;
                    }
                    C0575b c0575b = (C0575b) obj;
                    if (Intrinsics.areEqual(this.f41033a, c0575b.f41033a) && Intrinsics.areEqual(this.f41034b, c0575b.f41034b) && Intrinsics.areEqual(this.f41035c, c0575b.f41035c) && Intrinsics.areEqual(this.f41036d, c0575b.f41036d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = this.f41033a.hashCode() * 31;
                    String str = this.f41034b;
                    int i10 = 0;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f41035c.hashCode()) * 31;
                    String str2 = this.f41036d;
                    if (str2 != null) {
                        i10 = str2.hashCode();
                    }
                    return hashCode3 + i10;
                }

                public String toString() {
                    String str = this.f41033a;
                    String str2 = this.f41034b;
                    d.b bVar = this.f41035c;
                    String str3 = this.f41036d;
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
        final /* synthetic */ List f41037a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ List f41038b;

        b(List list, List list2) {
            this.f41037a = list;
            this.f41038b = list2;
        }

        @Override // androidx.recyclerview.widget.e.b
        public boolean areContentsTheSame(int i10, int i11) {
            boolean z10;
            a aVar = (a) this.f41037a.get(i10);
            a aVar2 = (a) this.f41038b.get(i11);
            if (areItemsTheSame(i10, i11)) {
                if (aVar instanceof a.C0573a) {
                    z10 = Intrinsics.areEqual(aVar, aVar2);
                } else if (aVar instanceof a.b) {
                    z10 = true;
                } else {
                    throw new as.p();
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
            a aVar = (a) this.f41037a.get(i10);
            a aVar2 = (a) this.f41038b.get(i11);
            if (aVar.getClass() != aVar2.getClass()) {
                return false;
            }
            if (aVar instanceof a.C0573a) {
                return true;
            }
            if (aVar instanceof a.b.C0574a) {
                String absolutePath = ((a.b.C0574a) aVar).c().getAbsolutePath();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Local");
                return Intrinsics.areEqual(absolutePath, ((a.b.C0574a) aVar2).c().getAbsolutePath());
            } else if (aVar instanceof a.b.C0575b) {
                String e10 = ((a.b.C0575b) aVar).e();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Remote");
                return Intrinsics.areEqual(e10, ((a.b.C0575b) aVar2).e());
            } else {
                throw new as.p();
            }
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getNewListSize() {
            return this.f41038b.size();
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getOldListSize() {
            return this.f41037a.size();
        }
    }

    public x(Context context, v4.h imageLoader, Function0 onClickAddButton, StepStyles.DocumentStepStyle documentStepStyle) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
        Intrinsics.checkNotNullParameter(onClickAddButton, "onClickAddButton");
        this.f41024a = imageLoader;
        this.f41025b = onClickAddButton;
        this.f41026c = documentStepStyle;
        this.f41027d = LayoutInflater.from(context);
        this.f41028e = CollectionsKt.l();
    }

    private final void c(po.b bVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f41026c;
        if (documentStepStyle == null) {
            return;
        }
        Double imagePreviewBorderRadius = documentStepStyle.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            bVar.f42853c.setRadius((float) bq.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f41026c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            bVar.f42853c.setStrokeWidth((int) Math.ceil(bq.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f41026c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            bVar.f42853c.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        Integer imagePreviewMainAreaFillColor = this.f41026c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            bVar.f42852b.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView addButton = bVar.f42852b;
        Intrinsics.checkNotNullExpressionValue(addButton, "addButton");
        uq.g.g(addButton, this.f41026c.getImagePreviewPlusIconStrokeColor(), this.f41026c.getImagePreviewPlusIconFillColor(), null, new String[]{"#FFFFFF"}, new String[]{"#5B3FD3"}, new String[0]);
    }

    private final void d(po.d dVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f41026c;
        if (documentStepStyle == null) {
            return;
        }
        Integer strokeColorValue = documentStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            dVar.f42869f.setIndicatorColor(strokeColorValue.intValue());
        }
        Integer fillColorValue = this.f41026c.getFillColorValue();
        if (fillColorValue != null) {
            dVar.f42869f.setTrackColor(fillColorValue.intValue());
        }
        Integer imagePreviewCropAreaFillColor = this.f41026c.getImagePreviewCropAreaFillColor();
        if (imagePreviewCropAreaFillColor != null) {
            dVar.f42867d.setBackgroundColor(imagePreviewCropAreaFillColor.intValue());
        }
        Double imagePreviewBorderRadius = this.f41026c.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            dVar.f42865b.setRadius((float) bq.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f41026c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            dVar.f42865b.setStrokeWidth((int) Math.ceil(bq.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f41026c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            dVar.f42865b.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        TextBasedComponentStyle imageNameStyleValue = this.f41026c.getImageNameStyleValue();
        if (imageNameStyleValue != null) {
            TextView filenameView = dVar.f42866c;
            Intrinsics.checkNotNullExpressionValue(filenameView, "filenameView");
            uq.f0.n(filenameView, imageNameStyleValue, null, 2, null);
        }
        Integer imagePreviewMainAreaFillColor = this.f41026c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            dVar.f42868e.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView removeButton = dVar.f42870g;
        Intrinsics.checkNotNullExpressionValue(removeButton, "removeButton");
        uq.g.g(removeButton, this.f41026c.getImagePreviewXIconStrokeColor(), this.f41026c.getImagePreviewXIconFillColor(), null, new String[]{"#6B6D82"}, new String[]{"#FFFFFF"}, new String[0]);
    }

    private final List e(boolean z10, List list) {
        a.b c0575b;
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            d dVar = (d) it.next();
            if (dVar instanceof d.a) {
                d.a aVar = (d.a) dVar;
                File file = new File(aVar.c());
                c0575b = new a.b.C0574a(file, aVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(ls.j.s(file)));
            } else if (dVar instanceof d.b) {
                d.b bVar = (d.b) dVar;
                c0575b = new a.b.C0575b(bVar.d(), bVar.c(), bVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(MimeTypeMap.getFileExtensionFromUrl(bVar.d())));
            } else {
                throw new as.p();
            }
            arrayList.add(c0575b);
        }
        if (z10) {
            arrayList.add(new a.C0573a());
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(x xVar, View view) {
        xVar.f41025b.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(x xVar, a aVar, View view) {
        Function1 function1 = xVar.f41029f;
        if (function1 != null) {
            function1.invoke(((a.b) aVar).a());
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f41028e.size();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemViewType(int i10) {
        a aVar = (a) this.f41028e.get(i10);
        if (aVar instanceof a.C0573a) {
            return z2.f41074c;
        }
        if (aVar instanceof a.b) {
            return z2.f41075d;
        }
        throw new as.p();
    }

    public final void h(Function1 function1) {
        this.f41029f = function1;
    }

    public final void i(boolean z10, List documents) {
        Intrinsics.checkNotNullParameter(documents, "documents");
        List e10 = e(z10, documents);
        List list = this.f41028e;
        e.C0064e b10 = androidx.recyclerview.widget.e.b(new b(list, e10));
        Intrinsics.checkNotNullExpressionValue(b10, "calculateDiff(...)");
        this.f41028e = e10;
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
            if ((aVar2 instanceof a.b.C0574a) && (aVar instanceof a.b.C0574a)) {
                a.b.C0574a c0574a = (a.b.C0574a) aVar;
                if (((a.b.C0574a) aVar2).a().e() != c0574a.a().e()) {
                    if (c0574a.a().e() == 100) {
                        notifyItemChanged(a10);
                    } else {
                        notifyItemChanged(a10, Unit.f31987a);
                    }
                }
            }
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int i10) {
        int i11;
        Intrinsics.checkNotNullParameter(holder, "holder");
        final a aVar = (a) this.f41028e.get(i10);
        if (aVar instanceof a.C0573a) {
            ((po.b) bq.c0.a(holder)).f42852b.setOnClickListener(new View.OnClickListener() { // from class: oo.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.f(x.this, view);
                }
            });
        } else if (aVar instanceof a.b) {
            po.d dVar = (po.d) bq.c0.a(holder);
            dVar.f42870g.setOnClickListener(new View.OnClickListener() { // from class: oo.w
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.g(x.this, aVar, view);
                }
            });
            ImageView imageView = dVar.f42867d;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            k5.l.a(imageView);
            dVar.f42867d.setImageDrawable(null);
            a.b bVar = (a.b) aVar;
            int i12 = 8;
            if (bVar instanceof a.b.C0574a) {
                ImageView imageView2 = dVar.f42867d;
                a.b.C0574a c0574a = (a.b.C0574a) aVar;
                if (c0574a.a().e() < 100) {
                    i11 = 4;
                } else {
                    i11 = 0;
                }
                imageView2.setVisibility(i11);
                dVar.f42870g.setVisibility(8);
                dVar.f42866c.setText(c0574a.c().getName());
                CircularProgressIndicator circularProgressIndicator = dVar.f42869f;
                if (c0574a.a().e() < 100) {
                    i12 = 0;
                }
                circularProgressIndicator.setVisibility(i12);
                dVar.f42869f.setProgress(c0574a.a().e());
            } else if (bVar instanceof a.b.C0575b) {
                dVar.f42867d.setVisibility(0);
                a.b.C0575b c0575b = (a.b.C0575b) aVar;
                if (Intrinsics.areEqual(c0575b.d(), "application/pdf")) {
                    ImageView imageView3 = dVar.f42867d;
                    Intrinsics.checkNotNullExpressionValue(imageView3, "imageView");
                    Integer valueOf = Integer.valueOf(bq.l.f7379l);
                    v4.h hVar = this.f41024a;
                    h.a r10 = new h.a(imageView3.getContext()).d(valueOf).r(imageView3);
                    r10.o(100, 100);
                    hVar.a(r10.a());
                } else {
                    ImageView imageView4 = dVar.f42867d;
                    Intrinsics.checkNotNullExpressionValue(imageView4, "imageView");
                    String e10 = c0575b.e();
                    v4.h hVar2 = this.f41024a;
                    h.a r11 = new h.a(imageView4.getContext()).d(e10).r(imageView4);
                    r11.c(true);
                    r11.b(100);
                    r11.o(500, 500);
                    hVar2.a(r11.a());
                }
                dVar.f42869f.setVisibility(8);
                dVar.f42870g.setVisibility(0);
                dVar.f42866c.setText(c0575b.c());
            } else {
                throw new as.p();
            }
        } else {
            throw new as.p();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int i10) {
        l5.i iVar;
        l5.i iVar2;
        Intrinsics.checkNotNullParameter(parent, "parent");
        View inflate = this.f41027d.inflate(i10, parent, false);
        if (i10 == z2.f41074c) {
            po.b a10 = po.b.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a10, "bind(...)");
            bq.b0 b0Var = new bq.b0(a10);
            l5.c0 y10 = l5.s.y(((po.b) b0Var.getBinding()).getRoot().getContext(), a3.f40679a);
            if (y10 != null && (iVar2 = (l5.i) y10.b()) != null) {
                ((po.b) b0Var.getBinding()).f42852b.setComposition(iVar2);
            }
            ViewBinding binding = b0Var.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding, "<get-binding>(...)");
            c((po.b) binding);
            return b0Var;
        } else if (i10 == z2.f41075d) {
            po.d a11 = po.d.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a11, "bind(...)");
            bq.b0 b0Var2 = new bq.b0(a11);
            l5.c0 y11 = l5.s.y(((po.d) b0Var2.getBinding()).getRoot().getContext(), a3.f40680b);
            if (y11 != null && (iVar = (l5.i) y11.b()) != null) {
                ((po.d) b0Var2.getBinding()).f42870g.setComposition(iVar);
            }
            ViewBinding binding2 = b0Var2.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding2, "<get-binding>(...)");
            d((po.d) binding2);
            return b0Var2;
        } else {
            throw new IllegalStateException(("Unknown view type " + i10).toString());
        }
    }
}
