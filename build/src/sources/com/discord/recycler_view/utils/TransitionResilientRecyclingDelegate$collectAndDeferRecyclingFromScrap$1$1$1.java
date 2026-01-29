package com.discord.recycler_view.utils;

import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.crash_reporting.CrashReporting;
import kotlin.Metadata;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TransitionResilientRecyclingDelegate$collectAndDeferRecyclingFromScrap$1$1$1 implements Runnable {
    final /* synthetic */ String $breadcrumbContext;
    final /* synthetic */ RecyclerView.Recycler $recycler;
    final /* synthetic */ View $view;
    final /* synthetic */ TransitionResilientRecyclingDelegate this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public TransitionResilientRecyclingDelegate$collectAndDeferRecyclingFromScrap$1$1$1(View view, RecyclerView.Recycler recycler, String str, TransitionResilientRecyclingDelegate transitionResilientRecyclingDelegate) {
        this.$view = view;
        this.$recycler = recycler;
        this.$breadcrumbContext = str;
        this.this$0 = transitionResilientRecyclingDelegate;
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            if (this.$view.getParent() == null) {
                this.$recycler.G(this.$view);
                return;
            }
            CrashReporting crashReporting = CrashReporting.INSTANCE;
            String str = this.$breadcrumbContext;
            CrashReporting.addBreadcrumb$default(crashReporting, "Skipped recycling view that still has a parent during deferred recycling" + str, null, null, null, false, 30, null);
        } catch (Exception e10) {
            TransitionResilientRecyclingDelegate transitionResilientRecyclingDelegate = this.this$0;
            String str2 = this.$breadcrumbContext;
            transitionResilientRecyclingDelegate.captureException(new Exception("Deferred recycling failed" + str2, e10));
        }
    }
}
