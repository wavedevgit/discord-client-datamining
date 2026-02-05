package com.horcrux.svg;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.module.annotations.ReactModule;
@ReactModule(name = "RNSVGSvgViewModule")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class SvgViewModule extends NativeSvgViewModuleSpec {
    public static final String NAME = "RNSVGSvgViewModule";

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f16768d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ ReadableMap f16769e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Callback f16770i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ int f16771o;

        /* renamed from: com.horcrux.svg.SvgViewModule$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class RunnableC0201a implements Runnable {

            /* renamed from: com.horcrux.svg.SvgViewModule$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            class RunnableC0202a implements Runnable {
                RunnableC0202a() {
                }

                @Override // java.lang.Runnable
                public void run() {
                    a aVar = a.this;
                    SvgViewModule.toDataURL(aVar.f16768d, aVar.f16769e, aVar.f16770i, aVar.f16771o + 1);
                }
            }

            RunnableC0201a() {
            }

            @Override // java.lang.Runnable
            public void run() {
                SvgView svgViewByTag = SvgViewManager.getSvgViewByTag(a.this.f16768d);
                if (svgViewByTag == null) {
                    return;
                }
                svgViewByTag.setToDataUrlTask(new RunnableC0202a());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class b implements Runnable {
            b() {
            }

            @Override // java.lang.Runnable
            public void run() {
                a aVar = a.this;
                SvgViewModule.toDataURL(aVar.f16768d, aVar.f16769e, aVar.f16770i, aVar.f16771o + 1);
            }
        }

        a(int i10, ReadableMap readableMap, Callback callback, int i11) {
            this.f16768d = i10;
            this.f16769e = readableMap;
            this.f16770i = callback;
            this.f16771o = i11;
        }

        @Override // java.lang.Runnable
        public void run() {
            SvgView svgViewByTag = SvgViewManager.getSvgViewByTag(this.f16768d);
            if (svgViewByTag == null) {
                SvgViewManager.runWhenViewIsAvailable(this.f16768d, new RunnableC0201a());
            } else if (svgViewByTag.notRendered()) {
                svgViewByTag.setToDataUrlTask(new b());
            } else {
                ReadableMap readableMap = this.f16769e;
                if (readableMap != null) {
                    this.f16770i.invoke(svgViewByTag.toDataURL(readableMap.getInt("width"), this.f16769e.getInt("height")));
                } else {
                    this.f16770i.invoke(svgViewByTag.toDataURL());
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SvgViewModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void toDataURL(int i10, ReadableMap readableMap, Callback callback, int i11) {
        UiThreadUtil.runOnUiThread(new a(i10, readableMap, callback, i11));
    }

    @Override // com.horcrux.svg.NativeSvgViewModuleSpec, com.facebook.react.bridge.NativeModule
    public String getName() {
        return "RNSVGSvgViewModule";
    }

    @Override // com.horcrux.svg.NativeSvgViewModuleSpec
    @ReactMethod
    public void toDataURL(Double d10, ReadableMap readableMap, Callback callback) {
        toDataURL(d10.intValue(), readableMap, callback, 0);
    }
}
