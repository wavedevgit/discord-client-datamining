package com.henninghall.date_picker;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.graphics.Color;
import android.util.TypedValue;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private AlertDialog f16563a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements Callback {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ i f16564d;

        a(i iVar) {
            this.f16564d = iVar;
        }

        @Override // com.facebook.react.bridge.Callback
        public void invoke(Object... objArr) {
            com.henninghall.date_picker.e.c(this.f16564d.getDate(), this.f16564d.getPickerId());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.henninghall.date_picker.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0190b implements Callback {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ i f16566d;

        C0190b(i iVar) {
            this.f16566d = iVar;
        }

        @Override // com.facebook.react.bridge.Callback
        public void invoke(Object... objArr) {
            com.henninghall.date_picker.e.b(this.f16566d.getPickerId());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements DialogInterface.OnCancelListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Callback f16568d;

        c(Callback callback) {
            this.f16568d = callback;
        }

        @Override // android.content.DialogInterface.OnCancelListener
        public void onCancel(DialogInterface dialogInterface) {
            this.f16568d.invoke(new Object[0]);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements DialogInterface.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Callback f16570d;

        d(Callback callback) {
            this.f16570d = callback;
        }

        @Override // android.content.DialogInterface.OnClickListener
        public void onClick(DialogInterface dialogInterface, int i10) {
            this.f16570d.invoke(new Object[0]);
            dialogInterface.dismiss();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements DialogInterface.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Callback f16572d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ i f16573e;

        e(Callback callback, i iVar) {
            this.f16572d = callback;
            this.f16573e = iVar;
        }

        @Override // android.content.DialogInterface.OnClickListener
        public void onClick(DialogInterface dialogInterface, int i10) {
            this.f16572d.invoke(this.f16573e.getDate());
            dialogInterface.dismiss();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements DialogInterface.OnShowListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ String f16575a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ AlertDialog f16576b;

        f(String str, AlertDialog alertDialog) {
            this.f16575a = str;
            this.f16576b = alertDialog;
        }

        @Override // android.content.DialogInterface.OnShowListener
        public void onShow(DialogInterface dialogInterface) {
            String str = this.f16575a;
            if (str != null) {
                int parseColor = Color.parseColor(str);
                this.f16576b.getButton(-1).setTextColor(parseColor);
                this.f16576b.getButton(-2).setTextColor(parseColor);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class g implements hl.d {
        g() {
        }

        @Override // hl.d
        public void a(hl.c cVar) {
            boolean z10;
            b bVar = b.this;
            if (cVar == hl.c.idle) {
                z10 = true;
            } else {
                z10 = false;
            }
            bVar.g(z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class h extends AlertDialog.Builder {
        public h(Context context, int i10) {
            super(context, i10);
        }

        public h a(ReadableMap readableMap) {
            String string = readableMap.getString("textColor");
            CharSequence string2 = readableMap.getString("title");
            if (string == null) {
                setTitle(string2);
                return this;
            }
            TextView textView = new TextView(com.henninghall.date_picker.c.f16579a.getCurrentActivity());
            textView.setText(string2);
            TypedValue typedValue = new TypedValue();
            com.henninghall.date_picker.c.f16579a.getCurrentActivity().getTheme().resolveAttribute(16843987, typedValue, true);
            int complexToDimensionPixelSize = TypedValue.complexToDimensionPixelSize(typedValue.data, com.henninghall.date_picker.c.f16579a.getResources().getDisplayMetrics());
            textView.setPadding(complexToDimensionPixelSize, complexToDimensionPixelSize, complexToDimensionPixelSize, 0);
            textView.setTextSize(20.0f);
            textView.setTextColor(Color.parseColor(string));
            setCustomTitle(textView);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context) {
        ot.a.b(context, false);
    }

    private AlertDialog c(ReadableMap readableMap, i iVar, Callback callback, Callback callback2) {
        String string = readableMap.getString("confirmText");
        String string2 = readableMap.getString("cancelText");
        String string3 = readableMap.getString("buttonColor");
        AlertDialog create = new h(com.henninghall.date_picker.c.f16579a.getCurrentActivity(), e(readableMap)).a(readableMap).setCancelable(true).setView(h(iVar)).setPositiveButton(string, new e(callback, iVar)).setNegativeButton(string2, new d(callback2)).setOnCancelListener(new c(callback2)).create();
        create.setOnShowListener(new f(string3, create));
        return create;
    }

    private i d(ReadableMap readableMap) {
        i iVar = new i(new LinearLayout.LayoutParams(-1, o.j(180)));
        ReadableMapKeySetIterator keySetIterator = readableMap.keySetIterator();
        while (keySetIterator.hasNextKey()) {
            String nextKey = keySetIterator.nextKey();
            Dynamic dynamic = readableMap.getDynamic(nextKey);
            if (!nextKey.equals("style")) {
                try {
                    iVar.d(nextKey, dynamic);
                } catch (Exception unused) {
                }
            }
        }
        iVar.c();
        iVar.a(new g());
        return iVar;
    }

    private int e(ReadableMap readableMap) {
        String string = readableMap.getString("theme");
        if (string != null) {
            if (!string.equals("dark")) {
                if (!string.equals("light")) {
                    return 0;
                }
                return 5;
            }
            return 4;
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void g(boolean z10) {
        this.f16563a.getButton(-1).setEnabled(z10);
    }

    private View h(i iVar) {
        LinearLayout linearLayout = new LinearLayout(com.henninghall.date_picker.c.f16579a);
        linearLayout.setLayoutParams(new LinearLayout.LayoutParams(-1, -2));
        linearLayout.addView(iVar);
        linearLayout.setPadding(0, o.j(20), 0, 0);
        return linearLayout;
    }

    public void b() {
        this.f16563a.dismiss();
    }

    public void f(ReadableMap readableMap) {
        i d10 = d(readableMap);
        AlertDialog c10 = c(readableMap, d10, new a(d10), new C0190b(d10));
        this.f16563a = c10;
        c10.show();
    }
}
