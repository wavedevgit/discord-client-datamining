package com.discord.media.engine;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.media.MediaCodecInfo;
import android.media.MediaCodecList;
import android.os.Build;
import com.discord.async_init.AsyncInitDispatcher;
import com.discord.logging.Log;
import com.discord.media.engine.types.Debug;
import com.discord.media.engine.types.NativeTypeExtensionsKt;
import com.discord.media.engine.video.screen_capture.ScreenCapturer;
import com.discord.media.engine.video.screen_capture.ThumbnailEmitter;
import com.discord.p000native.engine.AudioInputDeviceDescription;
import com.discord.p000native.engine.AudioOutputDeviceDescription;
import com.discord.p000native.engine.ConnectionInfo;
import com.discord.p000native.engine.NativeConnection;
import com.discord.p000native.engine.NativeEngine;
import com.discord.p000native.engine.VideoInputDeviceDescription;
import com.facebook.react.modules.appstate.AppStateModule;
import com.facebook.react.uimanager.ViewProps;
import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
import org.jetbrains.annotations.NotNull;
import org.json.JSONArray;
import org.json.JSONObject;
import org.webrtc.MediaStreamTrack;
import org.webrtc.VideoFrame;
@Metadata(d1 = {"\u0000Â\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0010\u0007\n\u0002\b\u0018\n\u0002\u0010 \n\u0002\u0010$\n\u0002\b\u000f\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\u0011\n\u0002\b\u0011\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\t\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\bQ\n\u0002\u0018\u0002\n\u0002\b0\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\b\u0018\u0000 \u0099\u00022\u00020\u0001:\u0004\u009a\u0002\u0099\u0002B\u0019\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\b\b\u0002\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J!\u0010\r\u001a\u0004\u0018\u00010\f2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\nH\u0002¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\u0010\u0010\u0011J\u000f\u0010\u0012\u001a\u00020\u000fH\u0002¢\u0006\u0004\b\u0012\u0010\u0013J\r\u0010\u0014\u001a\u00020\u000f¢\u0006\u0004\b\u0014\u0010\u0013J#\u0010\u001a\u001a\u00020\u000f2\u0012\u0010\u0017\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0004\b\u0018\u0010\u0019J)\u0010\u001f\u001a\u00020\u000f2\u0018\u0010\u0017\u001a\u0014\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u000f0\u001bH\u0000¢\u0006\u0004\b\u001d\u0010\u001eJ)\u0010!\u001a\u00020\u000f2\u0018\u0010\u0017\u001a\u0014\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u000f0\u001bH\u0000¢\u0006\u0004\b \u0010\u001eJ!\u0010&\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\"\u001a\u00020\n2\u0006\u0010#\u001a\u00020\u0016H\u0000¢\u0006\u0004\b$\u0010%J\u0017\u0010*\u001a\u00020\u000f2\u0006\u0010'\u001a\u00020\nH\u0000¢\u0006\u0004\b(\u0010)J\u0017\u0010.\u001a\u00020\u000f2\u0006\u0010+\u001a\u00020\u001cH\u0000¢\u0006\u0004\b,\u0010-J\u0017\u00100\u001a\u00020\u000f2\u0006\u0010+\u001a\u00020\u001cH\u0000¢\u0006\u0004\b/\u0010-J\u0017\u00104\u001a\u00020\u000f2\u0006\u00101\u001a\u00020\u0016H\u0000¢\u0006\u0004\b2\u00103J5\u00109\u001a\u00020\u000f2$\u00107\u001a \u0012\u0016\u0012\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u00010605\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0004\b8\u0010\u0019J\u0017\u0010<\u001a\u00020\u000f2\u0006\u0010:\u001a\u00020\bH\u0000¢\u0006\u0004\b;\u0010\u0011J\u0017\u0010<\u001a\u00020\u000f2\u0006\u0010:\u001a\u00020\nH\u0000¢\u0006\u0004\b;\u0010)J5\u0010>\u001a\u00020\u000f2$\u00107\u001a \u0012\u0016\u0012\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u00010605\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0004\b=\u0010\u0019J\u0017\u0010@\u001a\u00020\u000f2\u0006\u0010:\u001a\u00020\bH\u0000¢\u0006\u0004\b?\u0010\u0011J\u0017\u0010@\u001a\u00020\u000f2\u0006\u0010:\u001a\u00020\nH\u0000¢\u0006\u0004\b?\u0010)J5\u0010B\u001a\u00020\u000f2$\u00107\u001a \u0012\u0016\u0012\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u00010605\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0004\bA\u0010\u0019J\u0017\u0010E\u001a\u00020\u000f2\u0006\u0010C\u001a\u00020\nH\u0000¢\u0006\u0004\bD\u0010)J\u0017\u0010E\u001a\u00020\u000f2\u0006\u0010:\u001a\u00020\bH\u0000¢\u0006\u0004\bD\u0010\u0011Je\u0010I\u001a\u00020\u000f2T\u00107\u001aP\u0012\u0016\u0012\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u00010605\u0012\u0016\u0012\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u00010605\u0012\u0016\u0012\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u00010605\u0012\u0004\u0012\u00020\u000f0FH\u0000¢\u0006\u0004\bG\u0010HJ5\u0010L\u001a\u00020\u000f2$\u00107\u001a \u0012\u0004\u0012\u00020J\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000106\u0012\u0004\u0012\u00020\u000f0\u001bH\u0000¢\u0006\u0004\bK\u0010\u001eJ3\u0010Q\u001a\u00020\u000f2\u0006\u0010M\u001a\u00020\n2\u001a\u00107\u001a\u0016\u0012\u0004\u0012\u00020N\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u0016\u0018\u00010\u001bH\u0001¢\u0006\u0004\bO\u0010PJ\u0017\u0010T\u001a\u00020\u000f2\u0006\u0010R\u001a\u00020\u001cH\u0000¢\u0006\u0004\bS\u0010-J)\u0010V\u001a\u00020\u000f2\u0018\u0010\u0017\u001a\u0014\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0\u001bH\u0000¢\u0006\u0004\bU\u0010\u001eJ#\u0010X\u001a\u00020\u000f2\u0012\u00107\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0004\bW\u0010\u0019J#\u0010Z\u001a\u00020\u000f2\u0012\u00107\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0004\bY\u0010\u0019J1\u0010_\u001a\u00020\u000f2\u0006\u0010[\u001a\u00020\n2\u0018\u00107\u001a\u0014\u0012\n\u0012\b\u0012\u0004\u0012\u00020\n0\\\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0004\b]\u0010^J+\u0010a\u001a\u00020\u000f2\u0006\u0010'\u001a\u00020\n2\u0012\u00107\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0004\b`\u0010^J)\u0010c\u001a\u00020\u000f2\u0018\u00107\u001a\u0014\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u000f0\u001bH\u0000¢\u0006\u0004\bb\u0010\u001eJ\u0017\u0010f\u001a\u00020\u000f2\u0006\u0010d\u001a\u00020\u0016H\u0000¢\u0006\u0004\be\u00103JK\u0010i\u001a\u00020\u000f2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010g\u001a\u00020\n2\u0006\u0010h\u001a\u00020\n2$\u00107\u001a \u0012\u0004\u0012\u00020\n\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000106\u0012\u0004\u0012\u00020\u000f0\u001b¢\u0006\u0004\bi\u0010jJ9\u0010m\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u001e\u0010\u0017\u001a\u001a\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u000f0FH\u0000¢\u0006\u0004\bk\u0010lJ?\u0010q\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2$\u0010\u0017\u001a \u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u000f0nH\u0000¢\u0006\u0004\bo\u0010pJ?\u0010s\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2$\u0010\u0017\u001a \u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u000f0nH\u0000¢\u0006\u0004\br\u0010pJ=\u0010w\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\"\u0010\u0017\u001a\u001e\u0012\u0004\u0012\u00020\n\u0012\b\u0012\u00060tj\u0002`u\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0FH\u0000¢\u0006\u0004\bv\u0010lJC\u0010y\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2(\u0010\u0017\u001a$\u0012\u0004\u0012\u00020\n\u0012\b\u0012\u00060tj\u0002`u\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0nH\u0000¢\u0006\u0004\bx\u0010pJ3\u0010|\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0018\u0010\u0017\u001a\u0014\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0\u001bH\u0000¢\u0006\u0004\bz\u0010{J-\u0010\u007f\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0012\u0010\u0017\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0004\b}\u0010~J\u0019\u0010\u0081\u0001\u001a\u00020\u000f2\u0006\u0010\t\u001a\u00020\bH\u0000¢\u0006\u0005\b\u0080\u0001\u0010\u0011J$\u0010\u0086\u0001\u001a\u00020\u000f2\u0006\u0010\t\u001a\u00020\b2\b\u0010\u0083\u0001\u001a\u00030\u0082\u0001H\u0000¢\u0006\u0006\b\u0084\u0001\u0010\u0085\u0001JA\u0010\u008c\u0001\u001a\u00020\u000f2\u0007\u0010\u0087\u0001\u001a\u00020\b2\u0007\u0010\u0088\u0001\u001a\u00020\b2\u0007\u0010\u0089\u0001\u001a\u00020\b2\u0012\u00107\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0006\b\u008a\u0001\u0010\u008b\u0001J\u0019\u0010\u008e\u0001\u001a\u00020\u000f2\u0006\u0010\t\u001a\u00020\bH\u0000¢\u0006\u0005\b\u008d\u0001\u0010\u0011J,\u0010\u0093\u0001\u001a\u00020\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010\u008f\u0001\u001a\u00020\b2\u0007\u0010\u0090\u0001\u001a\u00020\nH\u0000¢\u0006\u0006\b\u0091\u0001\u0010\u0092\u0001J7\u0010\u0099\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010\u0094\u0001\u001a\u00020\b2\u0007\u0010\u0095\u0001\u001a\u00020\b2\u0007\u0010\u0096\u0001\u001a\u00020\bH\u0000¢\u0006\u0006\b\u0097\u0001\u0010\u0098\u0001J5\u0010\u009b\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0018\u00107\u001a\u0014\u0012\n\u0012\b\u0012\u0004\u0012\u00020\n0\\\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0005\b\u009a\u0001\u0010~J$\u0010\u009e\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010'\u001a\u00020\nH\u0000¢\u0006\u0006\b\u009c\u0001\u0010\u009d\u0001J%\u0010¡\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010\u009f\u0001\u001a\u00020\nH\u0000¢\u0006\u0006\b \u0001\u0010\u009d\u0001J$\u0010£\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010g\u001a\u00020\nH\u0000¢\u0006\u0006\b¢\u0001\u0010\u009d\u0001J%\u0010§\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010¤\u0001\u001a\u00020\u0016H\u0000¢\u0006\u0006\b¥\u0001\u0010¦\u0001J6\u0010¬\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010g\u001a\u00020\n2\u0007\u0010¨\u0001\u001a\u00020\u001c2\u0007\u0010©\u0001\u001a\u00020\u001cH\u0000¢\u0006\u0006\bª\u0001\u0010«\u0001J,\u0010¯\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010g\u001a\u00020\n2\u0006\u0010+\u001a\u00020\u001cH\u0000¢\u0006\u0006\b\u00ad\u0001\u0010®\u0001J-\u0010³\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010g\u001a\u00020\n2\u0007\u0010°\u0001\u001a\u00020\u0016H\u0000¢\u0006\u0006\b±\u0001\u0010²\u0001J\u001c\u0010¶\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\bH\u0000¢\u0006\u0006\b´\u0001\u0010µ\u0001J%\u0010¹\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010·\u0001\u001a\u00020\u0016H\u0000¢\u0006\u0006\b¸\u0001\u0010¦\u0001J%\u0010¼\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010º\u0001\u001a\u00020\u0016H\u0000¢\u0006\u0006\b»\u0001\u0010¦\u0001J%\u0010À\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010½\u0001\u001a\u00020\bH\u0000¢\u0006\u0006\b¾\u0001\u0010¿\u0001J$\u0010Ã\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010R\u001a\u00020\u001cH\u0000¢\u0006\u0006\bÁ\u0001\u0010Â\u0001J6\u0010È\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010#\u001a\u00020\u00162\u0007\u0010Ä\u0001\u001a\u00020\u00162\u0007\u0010Å\u0001\u001a\u00020\u0016H\u0000¢\u0006\u0006\bÆ\u0001\u0010Ç\u0001J/\u0010Ê\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0012\u00107\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0005\bÉ\u0001\u0010~J%\u0010Í\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010Ë\u0001\u001a\u00020\bH\u0000¢\u0006\u0006\bÌ\u0001\u0010¿\u0001J9\u0010Ñ\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010Î\u0001\u001a\u00020\b2\u0012\u00107\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0006\bÏ\u0001\u0010Ð\u0001J=\u0010×\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010Ò\u0001\u001a\u00020\b2\u0007\u0010Ó\u0001\u001a\u00020\b2\r\u00107\u001a\t\u0012\u0004\u0012\u00020\u000f0Ô\u0001H\u0000¢\u0006\u0006\bÕ\u0001\u0010Ö\u0001J%\u0010Ù\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010Ò\u0001\u001a\u00020\bH\u0000¢\u0006\u0006\bØ\u0001\u0010¿\u0001J7\u0010Þ\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010Ú\u0001\u001a\u00020\n2\u0007\u0010Ò\u0001\u001a\u00020\b2\u0007\u0010Û\u0001\u001a\u00020\nH\u0000¢\u0006\u0006\bÜ\u0001\u0010Ý\u0001J/\u0010à\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0012\u00107\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0005\bß\u0001\u0010~J%\u0010ã\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010á\u0001\u001a\u00020\nH\u0000¢\u0006\u0006\bâ\u0001\u0010\u009d\u0001J9\u0010ç\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010ä\u0001\u001a\u00020\n2\u0012\u00107\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0006\bå\u0001\u0010æ\u0001JN\u0010ë\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010Ò\u0001\u001a\u00020\b2\u0007\u0010è\u0001\u001a\u00020\n2\u001e\u00107\u001a\u001a\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0FH\u0000¢\u0006\u0006\bé\u0001\u0010ê\u0001JN\u0010î\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010Ò\u0001\u001a\u00020\b2\u0007\u0010ì\u0001\u001a\u00020\n2\u001e\u00107\u001a\u001a\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0FH\u0000¢\u0006\u0006\bí\u0001\u0010ê\u0001JA\u0010ò\u0001\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\t\u001a\u00020\b2\u0007\u0010ï\u0001\u001a\u00020\b2\u0006\u0010g\u001a\u00020\n2\u0012\u00107\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0\u0015H\u0000¢\u0006\u0006\bð\u0001\u0010ñ\u0001J>\u0010÷\u0001\u001a\u00020\u000f2\u0007\u0010ó\u0001\u001a\u00020\n2\u0007\u0010ô\u0001\u001a\u00020\b2\u0018\u00107\u001a\u0014\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f0\u001bH\u0000¢\u0006\u0006\bõ\u0001\u0010ö\u0001J\u0019\u0010ù\u0001\u001a\u00020\u000f2\u0006\u0010d\u001a\u00020\u0016H\u0000¢\u0006\u0005\bø\u0001\u00103J$\u0010þ\u0001\u001a\u00020\u000f2\u0007\u0010ú\u0001\u001a\u00020\n2\u0007\u0010û\u0001\u001a\u00020\nH\u0000¢\u0006\u0006\bü\u0001\u0010ý\u0001J\u001a\u0010\u0081\u0002\u001a\u00020\u000f2\u0007\u0010ÿ\u0001\u001a\u00020\u0016H\u0000¢\u0006\u0005\b\u0080\u0002\u00103R\u0015\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0007\n\u0005\b\u0003\u0010\u0082\u0002R\u0017\u0010\u0083\u0002\u001a\u00020t8\u0002X\u0082\u0004¢\u0006\b\n\u0006\b\u0083\u0002\u0010\u0084\u0002R\u0018\u0010\u0086\u0002\u001a\u00030\u0085\u00028\u0002X\u0082\u0004¢\u0006\b\n\u0006\b\u0086\u0002\u0010\u0087\u0002R\u001c\u0010\u0089\u0002\u001a\u0005\u0018\u00010\u0088\u00028\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u0089\u0002\u0010\u008a\u0002R-\u0010\u008b\u0002\u001a\u0016\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u000f\u0018\u00010\u001b8\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u008b\u0002\u0010\u008c\u0002R\u0018\u0010\u008e\u0002\u001a\u00030\u008d\u00028\u0002X\u0082\u0004¢\u0006\b\n\u0006\b\u008e\u0002\u0010\u008f\u0002R\u0018\u0010\u0091\u0002\u001a\u00030\u0090\u00028\u0002X\u0082\u0004¢\u0006\b\n\u0006\b\u0091\u0002\u0010\u0092\u0002R\u001c\u0010\u0094\u0002\u001a\u0005\u0018\u00010\u0093\u00028\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u0094\u0002\u0010\u0095\u0002R\u0018\u0010\u0098\u0002\u001a\u00030\u0093\u00028BX\u0082\u0004¢\u0006\b\u001a\u0006\b\u0096\u0002\u0010\u0097\u0002¨\u0006\u009b\u0002"}, d2 = {"Lcom/discord/media/engine/MediaEngine;", "", "Landroid/content/Context;", "context", "Lkotlinx/coroutines/CoroutineDispatcher;", "coroutineDispatcher", "<init>", "(Landroid/content/Context;Lkotlinx/coroutines/CoroutineDispatcher;)V", "", "connectionId", "", "methodName", "Lcom/discord/native/engine/NativeConnection;", "getConnection", "(ILjava/lang/String;)Lcom/discord/native/engine/NativeConnection;", "", "stopScreenCapturerForConnection", "(I)V", "forceStopScreenCapturer", "()V", "reset", "Lkotlin/Function1;", "", "cb", "setOnNoInputCallback$media_engine_release", "(Lkotlin/jvm/functions/Function1;)V", "setOnNoInputCallback", "Lkotlin/Function2;", "", "setOnVoiceCallback$media_engine_release", "(Lkotlin/jvm/functions/Function2;)V", "setOnVoiceCallback", "setActiveSinksChangeCallback$media_engine_release", "setActiveSinksChangeCallback", "streamId", AppStateModule.APP_STATE_ACTIVE, "activeSinksChanged$media_engine_release", "(Ljava/lang/String;Z)Lkotlin/Unit;", "activeSinksChanged", "optionsJSON", "setTransportOptions$media_engine_release", "(Ljava/lang/String;)V", "setTransportOptions", "volume", "setInputVolume$media_engine_release", "(F)V", "setInputVolume", "setOutputVolume$media_engine_release", "setOutputVolume", "enable", "setEmitVADLevel2$media_engine_release", "(Z)V", "setEmitVADLevel2", "", "", "callback", "getInputDevices$media_engine_release", "getInputDevices", "deviceIndex", "setInputDevice$media_engine_release", "setInputDevice", "getOutputDevices$media_engine_release", "getOutputDevices", "setOutputDevice$media_engine_release", "setOutputDevice", "getVideoInputDevices$media_engine_release", "getVideoInputDevices", "deviceName", "setVideoInputDevice$media_engine_release", "setVideoInputDevice", "Lkotlin/Function3;", "setDeviceChangeCallback$media_engine_release", "(Lkotlin/jvm/functions/Function3;)V", "setDeviceChangeCallback", "", "setAudioInputInitializationCallback$media_engine_release", "setAudioInputInitializationCallback", "streamIdentifier", "Lorg/webrtc/VideoFrame;", "setVideoOutputSink$media_engine_release", "(Ljava/lang/String;Lkotlin/jvm/functions/Function2;)V", "setVideoOutputSink", "threshold", "setNoInputThreshold$media_engine_release", "setNoInputThreshold", "getAudioSubsystem$media_engine_release", "getAudioSubsystem", "getCodecCapabilities$media_engine_release", "getCodecCapabilities", "getCodecSurvey$media_engine_release", "getCodecSurvey", "regionsWithIpsJSON", "", "rankRtcRegions$media_engine_release", "(Ljava/lang/String;Lkotlin/jvm/functions/Function1;)V", "rankRtcRegions", "startLocalAudioRecording$media_engine_release", "startLocalAudioRecording", "stopLocalAudioRecording$media_engine_release", "stopLocalAudioRecording", ViewProps.ENABLED, "setAudioInputEnabled$media_engine_release", "setAudioInputEnabled", "userId", "connectionOptionsJSON", "createVoiceConnection", "(ILjava/lang/String;Ljava/lang/String;Lkotlin/jvm/functions/Function2;)V", "connectionInstanceSetOnSpeakingCallback$media_engine_release", "(ILkotlin/jvm/functions/Function3;)Lkotlin/Unit;", "connectionInstanceSetOnSpeakingCallback", "Lkotlin/Function4;", "connectionInstanceSetOnPingCallback$media_engine_release", "(ILkotlin/jvm/functions/Function4;)Lkotlin/Unit;", "connectionInstanceSetOnPingCallback", "connectionInstanceSetOnPingTimeoutCallback$media_engine_release", "connectionInstanceSetOnPingTimeoutCallback", "", "Lcom/discord/media/engine/types/SSRC64;", "connectionInstanceSetOnFirstFrameCallback$media_engine_release", "connectionInstanceSetOnFirstFrameCallback", "connectionInstanceSetOnVideoCallback$media_engine_release", "connectionInstanceSetOnVideoCallback", "connectionInstanceSetOnMLSFailureCallback$media_engine_release", "(ILkotlin/jvm/functions/Function2;)Lkotlin/Unit;", "connectionInstanceSetOnMLSFailureCallback", "connectionInstanceSetSecureFramesStateUpdateCallback$media_engine_release", "(ILkotlin/jvm/functions/Function1;)Lkotlin/Unit;", "connectionInstanceSetSecureFramesStateUpdateCallback", "connectionInstanceDestroy$media_engine_release", "connectionInstanceDestroy", "Landroid/content/Intent;", "permissions", "connectionInstanceStartBroadcast$media_engine_release", "(ILandroid/content/Intent;)V", "connectionInstanceStartBroadcast", "width", "height", "intervalSeconds", "setBroadcastThumbnailParams$media_engine_release", "(IIILkotlin/jvm/functions/Function1;)V", "setBroadcastThumbnailParams", "connectionInstanceStopBroadcast$media_engine_release", "connectionInstanceStopBroadcast", "errorCode", "errorMessage", "connectionInstanceStopBroadcastWithError$media_engine_release", "(IILjava/lang/String;)V", "connectionInstanceStopBroadcastWithError", "baseDelayMs", "maxDelayMs", "maxAttempts", "connectionInstanceConfigureConnectionRetries$media_engine_release", "(IIII)Lkotlin/Unit;", "connectionInstanceConfigureConnectionRetries", "connectionInstanceGetEncryptionModes$media_engine_release", "connectionInstanceGetEncryptionModes", "connectionInstanceSetTransportOptions$media_engine_release", "(ILjava/lang/String;)Lkotlin/Unit;", "connectionInstanceSetTransportOptions", "usersJSON", "connectionInstanceMergeUsers$media_engine_release", "connectionInstanceMergeUsers", "connectionInstanceDestroyUser$media_engine_release", "connectionInstanceDestroyUser", "broadcasting", "connectionInstanceSetVideoBroadcast$media_engine_release", "(IZ)Lkotlin/Unit;", "connectionInstanceSetVideoBroadcast", ViewProps.LEFT, ViewProps.RIGHT, "connectionInstanceSetLocalPan$media_engine_release", "(ILjava/lang/String;FF)Lkotlin/Unit;", "connectionInstanceSetLocalPan", "connectionInstanceSetLocalVolume$media_engine_release", "(ILjava/lang/String;F)Lkotlin/Unit;", "connectionInstanceSetLocalVolume", "mute", "connectionInstanceSetLocalMute$media_engine_release", "(ILjava/lang/String;Z)Lkotlin/Unit;", "connectionInstanceSetLocalMute", "connectionInstanceFastUdpReconnect$media_engine_release", "(I)Lkotlin/Unit;", "connectionInstanceFastUdpReconnect", "muted", "connectionInstanceSetSelfMute$media_engine_release", "connectionInstanceSetSelfMute", "deafened", "connectionInstanceSetSelfDeafen$media_engine_release", "connectionInstanceSetSelfDeafen", "delay", "connectionInstanceSetMinimumOutputDelay$media_engine_release", "(II)Lkotlin/Unit;", "connectionInstanceSetMinimumOutputDelay", "connectionInstanceSetNoInputThreshold$media_engine_release", "(IF)Lkotlin/Unit;", "connectionInstanceSetNoInputThreshold", "priority", "muteOverride", "connectionInstanceSetPTTActive$media_engine_release", "(IZZZ)Lkotlin/Unit;", "connectionInstanceSetPTTActive", "connectionInstanceGetStats$media_engine_release", "connectionInstanceGetStats", "pingInterval", "connectionInstanceSetPingInterval$media_engine_release", "connectionInstanceSetPingInterval", ViewProps.FILTER, "connectionInstanceGetFilteredStats$media_engine_release", "(IILkotlin/jvm/functions/Function1;)Lkotlin/Unit;", "connectionInstanceGetFilteredStats", "transitionId", "protocolVersion", "Lkotlin/Function0;", "connectionInstancePrepareSecureFramesTransition$media_engine_release", "(IIILkotlin/jvm/functions/Function0;)Lkotlin/Unit;", "connectionInstancePrepareSecureFramesTransition", "connectionInstanceExecuteSecureFramesTransition$media_engine_release", "connectionInstanceExecuteSecureFramesTransition", "epoch", "groupId", "connectionInstancePrepareSecureFramesEpoch$media_engine_release", "(ILjava/lang/String;ILjava/lang/String;)Lkotlin/Unit;", "connectionInstancePrepareSecureFramesEpoch", "connectionInstanceGetMLSKeyPackageB64$media_engine_release", "connectionInstanceGetMLSKeyPackageB64", "externalSender", "connectionInstanceUpdateMLSExternalSenderB64$media_engine_release", "connectionInstanceUpdateMLSExternalSenderB64", "proposals", "connectionInstanceProcessMLSProposalsB64$media_engine_release", "(ILjava/lang/String;Lkotlin/jvm/functions/Function1;)Lkotlin/Unit;", "connectionInstanceProcessMLSProposalsB64", "commit", "connectionInstancePrepareMLSCommitTransitionB64$media_engine_release", "(IILjava/lang/String;Lkotlin/jvm/functions/Function3;)Lkotlin/Unit;", "connectionInstancePrepareMLSCommitTransitionB64", "welcome", "connectionInstanceProcessMLSWelcomeB64$media_engine_release", "connectionInstanceProcessMLSWelcomeB64", "version", "connectionInstanceGetMLSPairwiseFingerprintB64$media_engine_release", "(IILjava/lang/String;Lkotlin/jvm/functions/Function1;)Lkotlin/Unit;", "connectionInstanceGetMLSPairwiseFingerprintB64", "sessionId", "signatureVersion", "getMLSSigningKeyB64$media_engine_release", "(Ljava/lang/String;ILkotlin/jvm/functions/Function2;)V", "getMLSSigningKeyB64", "setSidechainCompression$media_engine_release", "setSidechainCompression", "key", "value", "updateFieldTrial$media_engine_release", "(Ljava/lang/String;Ljava/lang/String;)V", "updateFieldTrial", "hasFullbandPerformance", "setHasFullbandPerformance$media_engine_release", "setHasFullbandPerformance", "Landroid/content/Context;", "instanceCreationNs", "J", "Lcom/discord/media/engine/MediaEngineNativeConnections;", "engineConnections", "Lcom/discord/media/engine/MediaEngineNativeConnections;", "Lcom/discord/media/engine/MediaEngine$ScreenCapturerForConnection;", "screenCapturer", "Lcom/discord/media/engine/MediaEngine$ScreenCapturerForConnection;", "activeSinksChangeCallback", "Lkotlin/jvm/functions/Function2;", "Lcom/discord/async_init/AsyncInitDispatcher;", "dispatcher", "Lcom/discord/async_init/AsyncInitDispatcher;", "Lkotlinx/coroutines/CoroutineScope;", "coroutineScope", "Lkotlinx/coroutines/CoroutineScope;", "Lcom/discord/native/engine/NativeEngine;", "engineInstance", "Lcom/discord/native/engine/NativeEngine;", "getEngine", "()Lcom/discord/native/engine/NativeEngine;", "engine", "Companion", "ScreenCapturerForConnection", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMediaEngine.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaEngine.kt\ncom/discord/media/engine/MediaEngine\n+ 2 Debug.kt\ncom/discord/media/engine/types/Debug\n+ 3 AsyncInitDispatcher.kt\ncom/discord/async_init/AsyncInitDispatcher\n+ 4 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,752:1\n38#2,4:753\n58#2,4:757\n44#2,7:761\n44#2,7:768\n41#3,13:775\n41#3,13:788\n41#3,13:801\n41#3,13:814\n41#3,13:827\n41#3,13:840\n59#3,7:853\n41#3,13:860\n41#3,13:873\n59#3,7:886\n41#3,13:893\n41#3,13:906\n59#3,7:919\n41#3,13:926\n41#3,13:939\n41#3,13:952\n41#3,13:965\n45#3,9:978\n41#3,13:987\n41#3,13:1000\n59#3,7:1013\n59#3,3:1020\n63#3,3:1026\n59#3,7:1029\n59#3,7:1036\n41#3,13:1043\n41#3,13:1056\n3829#4:1023\n4344#4,2:1024\n*S KotlinDebug\n*F\n+ 1 MediaEngine.kt\ncom/discord/media/engine/MediaEngine\n*L\n77#1:753,4\n91#1:757,4\n100#1:761,7\n115#1:768,7\n123#1:775,13\n128#1:788,13\n140#1:801,13\n145#1:814,13\n150#1:827,13\n155#1:840,13\n160#1:853,7\n170#1:860,13\n175#1:873,13\n180#1:886,7\n192#1:893,13\n197#1:906,13\n202#1:919,7\n214#1:926,13\n219#1:939,13\n229#1:952,13\n244#1:965,13\n261#1:978,9\n272#1:987,13\n275#1:1000,13\n280#1:1013,7\n290#1:1020,3\n290#1:1026,3\n322#1:1029,7\n342#1:1036,7\n356#1:1043,13\n717#1:1056,13\n298#1:1023\n298#1:1024,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaEngine {
    public static final int MAX_SUPPORTED_PROTOCOL_VERSION = 114;
    @NotNull
    private static final String TAG = "MediaEngine";
    private static final int THUMBNAIL_JPEG_QUALITY = 92;
    private Function2<? super String, ? super Boolean, Unit> activeSinksChangeCallback;
    @NotNull
    private final Context context;
    @NotNull
    private final CoroutineScope coroutineScope;
    @NotNull
    private final AsyncInitDispatcher dispatcher;
    @NotNull
    private final MediaEngineNativeConnections engineConnections;
    private NativeEngine engineInstance;
    private final long instanceCreationNs;
    private ScreenCapturerForConnection screenCapturer;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Set<String> OPEN_SL_DEVICE_ALLOW_LIST = kotlin.collections.x0.i("Pixel", "Pixel XL", "Pixel 3a XL", "Pixel 4", "Pixel 4 XL", "Pixel 5");

    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\"\n\u0002\b\u0002\n\u0002\u0010\u0012\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u000b\u001a\u00020\f*\u00020\rH\u0002J\u0016\u0010\u000e\u001a\u00020\u00052\u0006\u0010\u000f\u001a\u00020\rH\u0082@¢\u0006\u0002\u0010\u0010R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u0014\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00050\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0007X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0011"}, d2 = {"Lcom/discord/media/engine/MediaEngine$Companion;", "", "<init>", "()V", "TAG", "", "THUMBNAIL_JPEG_QUALITY", "", "OPEN_SL_DEVICE_ALLOW_LIST", "", "MAX_SUPPORTED_PROTOCOL_VERSION", "compressToJpegBytes", "", "Landroid/graphics/Bitmap;", "encodeThumbnail", "bitmap", "(Landroid/graphics/Bitmap;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nMediaEngine.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaEngine.kt\ncom/discord/media/engine/MediaEngine$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,752:1\n1#2:753\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final byte[] compressToJpegBytes(Bitmap bitmap) {
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            bitmap.compress(Bitmap.CompressFormat.JPEG, MediaEngine.THUMBNAIL_JPEG_QUALITY, byteArrayOutputStream);
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            Intrinsics.checkNotNullExpressionValue(byteArray, "toByteArray(...)");
            return byteArray;
        }

        /* JADX INFO: Access modifiers changed from: private */
        /* JADX WARN: Code restructure failed: missing block: B:17:0x004f, code lost:
            if (ms.x1.a(r0) == r1) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:20:0x005f, code lost:
            if (ms.x1.a(r0) != r1) goto L11;
         */
        /* JADX WARN: Code restructure failed: missing block: B:21:0x0061, code lost:
            return r1;
         */
        /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
        /* JADX WARN: Removed duplicated region for block: B:16:0x0040  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object encodeThumbnail(android.graphics.Bitmap r6, kotlin.coroutines.Continuation<? super java.lang.String> r7) {
            /*
                r5 = this;
                boolean r0 = r7 instanceof com.discord.media.engine.MediaEngine$Companion$encodeThumbnail$1
                if (r0 == 0) goto L13
                r0 = r7
                com.discord.media.engine.MediaEngine$Companion$encodeThumbnail$1 r0 = (com.discord.media.engine.MediaEngine$Companion$encodeThumbnail$1) r0
                int r1 = r0.label
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.label = r1
                goto L18
            L13:
                com.discord.media.engine.MediaEngine$Companion$encodeThumbnail$1 r0 = new com.discord.media.engine.MediaEngine$Companion$encodeThumbnail$1
                r0.<init>(r5, r7)
            L18:
                java.lang.Object r7 = r0.result
                java.lang.Object r1 = ur.b.f()
                int r2 = r0.label
                r3 = 2
                r4 = 1
                if (r2 == 0) goto L40
                if (r2 == r4) goto L38
                if (r2 != r3) goto L30
                java.lang.Object r6 = r0.L$0
                java.lang.String r6 = (java.lang.String) r6
                kotlin.c.b(r7)
                goto L62
            L30:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r7)
                throw r6
            L38:
                java.lang.Object r6 = r0.L$0
                byte[] r6 = (byte[]) r6
                kotlin.c.b(r7)
                goto L52
            L40:
                kotlin.c.b(r7)
                byte[] r6 = r5.compressToJpegBytes(r6)
                r0.L$0 = r6
                r0.label = r4
                java.lang.Object r7 = ms.x1.a(r0)
                if (r7 != r1) goto L52
                goto L61
            L52:
                r7 = 0
                java.lang.String r6 = android.util.Base64.encodeToString(r6, r7)
                r0.L$0 = r6
                r0.label = r3
                java.lang.Object r7 = ms.x1.a(r0)
                if (r7 != r1) goto L62
            L61:
                return r1
            L62:
                kotlin.jvm.internal.Intrinsics.checkNotNull(r6)
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: com.discord.media.engine.MediaEngine.Companion.encodeThumbnail(android.graphics.Bitmap, kotlin.coroutines.Continuation):java.lang.Object");
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0082\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0006\u0010\f\u001a\u00020\rJ\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000f\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u0010\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0014\u001a\u00020\u0005HÖ\u0001J\t\u0010\u0015\u001a\u00020\u0016HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0017"}, d2 = {"Lcom/discord/media/engine/MediaEngine$ScreenCapturerForConnection;", "", "screenCapturer", "Lcom/discord/media/engine/video/screen_capture/ScreenCapturer;", "connectionId", "", "<init>", "(Lcom/discord/media/engine/video/screen_capture/ScreenCapturer;I)V", "getScreenCapturer", "()Lcom/discord/media/engine/video/screen_capture/ScreenCapturer;", "getConnectionId", "()I", "release", "", "component1", "component2", "copy", "equals", "", "other", "hashCode", "toString", "", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class ScreenCapturerForConnection {
        private final int connectionId;
        @NotNull
        private final ScreenCapturer screenCapturer;

        public ScreenCapturerForConnection(@NotNull ScreenCapturer screenCapturer, int i10) {
            Intrinsics.checkNotNullParameter(screenCapturer, "screenCapturer");
            this.screenCapturer = screenCapturer;
            this.connectionId = i10;
        }

        public static /* synthetic */ ScreenCapturerForConnection copy$default(ScreenCapturerForConnection screenCapturerForConnection, ScreenCapturer screenCapturer, int i10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                screenCapturer = screenCapturerForConnection.screenCapturer;
            }
            if ((i11 & 2) != 0) {
                i10 = screenCapturerForConnection.connectionId;
            }
            return screenCapturerForConnection.copy(screenCapturer, i10);
        }

        @NotNull
        public final ScreenCapturer component1() {
            return this.screenCapturer;
        }

        public final int component2() {
            return this.connectionId;
        }

        @NotNull
        public final ScreenCapturerForConnection copy(@NotNull ScreenCapturer screenCapturer, int i10) {
            Intrinsics.checkNotNullParameter(screenCapturer, "screenCapturer");
            return new ScreenCapturerForConnection(screenCapturer, i10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof ScreenCapturerForConnection) {
                ScreenCapturerForConnection screenCapturerForConnection = (ScreenCapturerForConnection) obj;
                return Intrinsics.areEqual(this.screenCapturer, screenCapturerForConnection.screenCapturer) && this.connectionId == screenCapturerForConnection.connectionId;
            }
            return false;
        }

        public final int getConnectionId() {
            return this.connectionId;
        }

        @NotNull
        public final ScreenCapturer getScreenCapturer() {
            return this.screenCapturer;
        }

        public int hashCode() {
            return (this.screenCapturer.hashCode() * 31) + Integer.hashCode(this.connectionId);
        }

        public final void release() {
            this.screenCapturer.release();
        }

        @NotNull
        public String toString() {
            ScreenCapturer screenCapturer = this.screenCapturer;
            int i10 = this.connectionId;
            return "ScreenCapturerForConnection(screenCapturer=" + screenCapturer + ", connectionId=" + i10 + ")";
        }
    }

    public MediaEngine(@NotNull Context context, @NotNull CoroutineDispatcher coroutineDispatcher) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(coroutineDispatcher, "coroutineDispatcher");
        this.context = context;
        this.instanceCreationNs = System.nanoTime();
        this.engineConnections = new MediaEngineNativeConnections();
        this.dispatcher = new AsyncInitDispatcher(TAG, 0L, 2, null);
        this.coroutineScope = kotlinx.coroutines.i.a(coroutineDispatcher.V0(new ms.b0(TAG)));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceGetEncryptionModes$lambda$55(Function1 function1, String[] modes) {
        Intrinsics.checkNotNullParameter(modes, "modes");
        function1.invoke(modes);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceGetFilteredStats$lambda$57(Function1 function1, String stats) {
        Intrinsics.checkNotNullParameter(stats, "stats");
        function1.invoke(stats);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceGetMLSKeyPackageB64$lambda$59(Function1 function1, String keyPackageB64) {
        Intrinsics.checkNotNullParameter(keyPackageB64, "keyPackageB64");
        function1.invoke(keyPackageB64);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceGetMLSPairwiseFingerprintB64$lambda$63(Function1 function1, String fingerprint) {
        Intrinsics.checkNotNullParameter(fingerprint, "fingerprint");
        function1.invoke(fingerprint);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceGetStats$lambda$56(Function1 function1, String stats) {
        Intrinsics.checkNotNullParameter(stats, "stats");
        function1.invoke(stats);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstancePrepareMLSCommitTransitionB64$lambda$61(Function3 function3, boolean z10, int i10, String rosterChange) {
        Intrinsics.checkNotNullParameter(rosterChange, "rosterChange");
        function3.invoke(Boolean.valueOf(z10), Integer.valueOf(i10), rosterChange);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceProcessMLSProposalsB64$lambda$60(Function1 function1, String commitWelcome) {
        Intrinsics.checkNotNullParameter(commitWelcome, "commitWelcome");
        function1.invoke(commitWelcome);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceProcessMLSWelcomeB64$lambda$62(Function3 function3, boolean z10, int i10, String rosterChange) {
        Intrinsics.checkNotNullParameter(rosterChange, "rosterChange");
        function3.invoke(Boolean.valueOf(z10), Integer.valueOf(i10), rosterChange);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceSetOnFirstFrameCallback$lambda$48(Function3 function3, String userId, long j10, String streamId) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(streamId, "streamId");
        function3.invoke(userId, Long.valueOf(j10), streamId);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceSetOnMLSFailureCallback$lambda$50(Function2 function2, String source, String reason) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(reason, "reason");
        function2.invoke(source, reason);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceSetOnPingCallback$lambda$46(Function4 function4, int i10, String server, int i11, int i12) {
        Intrinsics.checkNotNullParameter(server, "server");
        function4.invoke(Integer.valueOf(i10), server, Integer.valueOf(i11), Integer.valueOf(i12));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceSetOnPingTimeoutCallback$lambda$47(Function4 function4, String server, int i10, int i11, int i12) {
        Intrinsics.checkNotNullParameter(server, "server");
        function4.invoke(server, Integer.valueOf(i10), Integer.valueOf(i11), Integer.valueOf(i12));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceSetOnSpeakingCallback$lambda$45(Function3 function3, String userId, int i10, float f10) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        function3.invoke(userId, Integer.valueOf(i10), Float.valueOf(f10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceSetOnVideoCallback$lambda$49(Function4 function4, String userId, long j10, String streamId, String videoStreamParametersJSON) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(streamId, "streamId");
        Intrinsics.checkNotNullParameter(videoStreamParametersJSON, "videoStreamParametersJSON");
        function4.invoke(userId, Long.valueOf(j10), streamId, videoStreamParametersJSON);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void connectionInstanceSetSecureFramesStateUpdateCallback$lambda$51(Function1 function1, String stateUpdateJSON) {
        Intrinsics.checkNotNullParameter(stateUpdateJSON, "stateUpdateJSON");
        function1.invoke(stateUpdateJSON);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void createVoiceConnection$lambda$43(Function2 function2, ConnectionInfo connectionInfo, String errorMessage) {
        Intrinsics.checkNotNullParameter(connectionInfo, "connectionInfo");
        Intrinsics.checkNotNullParameter(errorMessage, "errorMessage");
        Log log = Log.INSTANCE;
        Log.i$default(log, TAG, "On created with " + connectionInfo + ", " + errorMessage, (Throwable) null, 4, (Object) null);
        Map y10 = kotlin.collections.o0.y(NativeTypeExtensionsKt.toMap(connectionInfo));
        y10.put("connectCallbackScheduledMs", Long.valueOf(System.nanoTime() / ((long) 1000000)));
        function2.invoke(errorMessage, y10);
    }

    private final void forceStopScreenCapturer() {
        ScreenCapturerForConnection screenCapturerForConnection = this.screenCapturer;
        if (screenCapturerForConnection != null) {
            screenCapturerForConnection.release();
        }
        this.screenCapturer = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getCodecCapabilities$lambda$30$lambda$29(Function1 function1, String codecs) {
        Intrinsics.checkNotNullParameter(codecs, "codecs");
        function1.invoke(codecs);
    }

    private final NativeConnection getConnection(int i10, String str) {
        NativeConnection nativeConnection = this.engineConnections.get(i10);
        if (nativeConnection == null) {
            Log log = Log.INSTANCE;
            Log.w$default(log, TAG, "[" + str + "] no NativeConnection for connectionId=" + i10 + ", returning null", (Throwable) null, 4, (Object) null);
        }
        return nativeConnection;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final NativeEngine getEngine() {
        NativeEngine nativeEngine = this.engineInstance;
        if (nativeEngine != null) {
            return nativeEngine;
        }
        Debug debug = Debug.INSTANCE;
        System.nanoTime();
        try {
            Class.forName("org.webrtc.voiceengine.WebRtcAudioManager").getDeclaredMethod("setBlacklistDeviceForOpenSLESUsage", Boolean.TYPE).invoke(null, Boolean.valueOf(!OPEN_SL_DEVICE_ALLOW_LIST.contains(Build.MODEL)));
        } catch (ClassNotFoundException unused) {
            Debug debug2 = Debug.INSTANCE;
        }
        NativeEngine nativeEngine2 = new NativeEngine(this.context, 2);
        nativeEngine2.enableBuiltInAEC(true);
        nativeEngine2.setAudioInputEnabled(false);
        this.engineInstance = nativeEngine2;
        this.dispatcher.setInitialized(true);
        return nativeEngine2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getInputDevices$lambda$10$lambda$9(Function1 function1, AudioInputDeviceDescription[] devices) {
        Intrinsics.checkNotNullParameter(devices, "devices");
        function1.invoke(NativeTypeExtensionsKt.toListOfMaps(devices));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getMLSSigningKeyB64$lambda$64(Function2 function2, String key, String signature) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(signature, "signature");
        function2.invoke(key, signature);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getOutputDevices$lambda$15$lambda$14(Function1 function1, AudioOutputDeviceDescription[] devices) {
        Intrinsics.checkNotNullParameter(devices, "devices");
        function1.invoke(NativeTypeExtensionsKt.toListOfMaps(devices));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getVideoInputDevices$lambda$20$lambda$19(Function1 function1, VideoInputDeviceDescription[] videoInputDevices) {
        Intrinsics.checkNotNullParameter(videoInputDevices, "videoInputDevices");
        function1.invoke(NativeTypeExtensionsKt.toListOfMaps(videoInputDevices));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void rankRtcRegions$lambda$36$lambda$35(Function1 function1, String[] regions) {
        Intrinsics.checkNotNullParameter(regions, "regions");
        function1.invoke(regions);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setBroadcastThumbnailParams$lambda$54$lambda$53(MediaEngine mediaEngine, Function1 function1, Bitmap bitmap) {
        Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        ms.i.d(mediaEngine.coroutineScope, null, null, new MediaEngine$setBroadcastThumbnailParams$1$1$1(bitmap, function1, null), 3, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void startLocalAudioRecording$lambda$38(Function1 function1, boolean z10) {
        function1.invoke(Boolean.valueOf(z10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void stopLocalAudioRecording$lambda$40$lambda$39(Function2 function2, String fileName, int i10) {
        Intrinsics.checkNotNullParameter(fileName, "fileName");
        function2.invoke(fileName, Integer.valueOf(i10));
    }

    private final void stopScreenCapturerForConnection(int i10) {
        ScreenCapturerForConnection screenCapturerForConnection = this.screenCapturer;
        if (screenCapturerForConnection != null && screenCapturerForConnection.getConnectionId() == i10) {
            ScreenCapturerForConnection screenCapturerForConnection2 = this.screenCapturer;
            if (screenCapturerForConnection2 != null) {
                screenCapturerForConnection2.release();
            }
            this.screenCapturer = null;
        }
    }

    public final Unit activeSinksChanged$media_engine_release(@NotNull String streamId, boolean z10) {
        Intrinsics.checkNotNullParameter(streamId, "streamId");
        Function2<? super String, ? super Boolean, Unit> function2 = this.activeSinksChangeCallback;
        if (function2 != null) {
            function2.invoke(streamId, Boolean.valueOf(z10));
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceConfigureConnectionRetries$media_engine_release(int i10, int i11, int i12, int i13) {
        NativeConnection connection = getConnection(i10, "configureConnectionRetries");
        if (connection != null) {
            connection.configureConnectionRetries(i11, i12, i13);
            return Unit.f31988a;
        }
        return null;
    }

    public final void connectionInstanceDestroy$media_engine_release(int i10) {
        stopScreenCapturerForConnection(i10);
        this.engineConnections.removeAndDispose(i10);
    }

    public final Unit connectionInstanceDestroyUser$media_engine_release(int i10, @NotNull String userId) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        NativeConnection connection = getConnection(i10, "destroyUser");
        if (connection != null) {
            connection.destroyUser(userId);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceExecuteSecureFramesTransition$media_engine_release(int i10, int i11) {
        NativeConnection connection = getConnection(i10, "executeSecureFramesTransition");
        if (connection != null) {
            connection.executeSecureFramesTransition(i11);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceFastUdpReconnect$media_engine_release(int i10) {
        NativeConnection connection = getConnection(i10, "fastUdpReconnect");
        if (connection != null) {
            connection.fastUdpReconnect();
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceGetEncryptionModes$media_engine_release(int i10, @NotNull final Function1<? super String[], Unit> callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        NativeConnection connection = getConnection(i10, "getEncryptionModes");
        if (connection != null) {
            connection.getEncryptionModes(new NativeConnection.GetEncryptionModesCallback() { // from class: com.discord.media.engine.a
                @Override // com.discord.p000native.engine.NativeConnection.GetEncryptionModesCallback
                public final void onEncryptionModes(String[] strArr) {
                    MediaEngine.connectionInstanceGetEncryptionModes$lambda$55(Function1.this, strArr);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceGetFilteredStats$media_engine_release(int i10, int i11, @NotNull final Function1<? super String, Unit> callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        NativeConnection connection = getConnection(i10, "getFilteredStats");
        if (connection != null) {
            connection.getFilteredStats(i11, new NativeConnection.GetStatsCallback() { // from class: com.discord.media.engine.n
                @Override // com.discord.p000native.engine.NativeConnection.GetStatsCallback
                public final void onStats(String str) {
                    MediaEngine.connectionInstanceGetFilteredStats$lambda$57(Function1.this, str);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceGetMLSKeyPackageB64$media_engine_release(int i10, @NotNull final Function1<? super String, Unit> callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        NativeConnection connection = getConnection(i10, "getMLSKeyPackageB64");
        if (connection != null) {
            connection.getMLSKeyPackageB64(new NativeConnection.MLSKeyPackageCallback() { // from class: com.discord.media.engine.x
                @Override // com.discord.p000native.engine.NativeConnection.MLSKeyPackageCallback
                public final void onMLSKeyPackage(String str) {
                    MediaEngine.connectionInstanceGetMLSKeyPackageB64$lambda$59(Function1.this, str);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceGetMLSPairwiseFingerprintB64$media_engine_release(int i10, int i11, @NotNull String userId, @NotNull final Function1<? super String, Unit> callback) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(callback, "callback");
        NativeConnection connection = getConnection(i10, "getMLSPairwiseFingerprintB64");
        if (connection != null) {
            connection.getMLSPairwiseFingerprintB64(i11, userId, new NativeConnection.MLSPairwiseFingerprintCallback() { // from class: com.discord.media.engine.a0
                @Override // com.discord.p000native.engine.NativeConnection.MLSPairwiseFingerprintCallback
                public final void onMLSPairwiseFingerprint(String str) {
                    MediaEngine.connectionInstanceGetMLSPairwiseFingerprintB64$lambda$63(Function1.this, str);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceGetStats$media_engine_release(int i10, @NotNull final Function1<? super String, Unit> callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        NativeConnection connection = getConnection(i10, "getStats");
        if (connection != null) {
            connection.getStats(new NativeConnection.GetStatsCallback() { // from class: com.discord.media.engine.o
                @Override // com.discord.p000native.engine.NativeConnection.GetStatsCallback
                public final void onStats(String str) {
                    MediaEngine.connectionInstanceGetStats$lambda$56(Function1.this, str);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceMergeUsers$media_engine_release(int i10, @NotNull String usersJSON) {
        Intrinsics.checkNotNullParameter(usersJSON, "usersJSON");
        NativeConnection connection = getConnection(i10, "mergeUsers");
        if (connection != null) {
            connection.mergeUsers(usersJSON);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstancePrepareMLSCommitTransitionB64$media_engine_release(int i10, int i11, @NotNull String commit, @NotNull final Function3 callback) {
        Intrinsics.checkNotNullParameter(commit, "commit");
        Intrinsics.checkNotNullParameter(callback, "callback");
        NativeConnection connection = getConnection(i10, "prepareMLSCommitTransitionB64");
        if (connection != null) {
            connection.prepareMLSCommitTransitionB64(i11, commit, new NativeConnection.MLSCommitTransitionCallback() { // from class: com.discord.media.engine.f
                @Override // com.discord.p000native.engine.NativeConnection.MLSCommitTransitionCallback
                public final void onMLSProcessedCommit(boolean z10, int i12, String str) {
                    MediaEngine.connectionInstancePrepareMLSCommitTransitionB64$lambda$61(Function3.this, z10, i12, str);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstancePrepareSecureFramesEpoch$media_engine_release(int i10, @NotNull String epoch, int i11, @NotNull String groupId) {
        Intrinsics.checkNotNullParameter(epoch, "epoch");
        Intrinsics.checkNotNullParameter(groupId, "groupId");
        NativeConnection connection = getConnection(i10, "prepareSecureFramesEpoch");
        if (connection != null) {
            connection.prepareSecureFramesEpoch(epoch, i11, groupId);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstancePrepareSecureFramesTransition$media_engine_release(int i10, int i11, int i12, @NotNull final Function0<Unit> callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        NativeConnection connection = getConnection(i10, "prepareSecureFramesTransition");
        if (connection != null) {
            connection.prepareSecureFramesTransition(i11, i12, new NativeConnection.SecureFramesTransitionReadyCallback() { // from class: com.discord.media.engine.s
                @Override // com.discord.p000native.engine.NativeConnection.SecureFramesTransitionReadyCallback
                public final void onTransitionReady() {
                    Function0.this.invoke();
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceProcessMLSProposalsB64$media_engine_release(int i10, @NotNull String proposals, @NotNull final Function1<? super String, Unit> callback) {
        Intrinsics.checkNotNullParameter(proposals, "proposals");
        Intrinsics.checkNotNullParameter(callback, "callback");
        NativeConnection connection = getConnection(i10, "processMLSProposalsB64");
        if (connection != null) {
            connection.processMLSProposalsB64(proposals, new NativeConnection.MLSProcessProposalsCallback() { // from class: com.discord.media.engine.l
                @Override // com.discord.p000native.engine.NativeConnection.MLSProcessProposalsCallback
                public final void onMLSCommitWelcome(String str) {
                    MediaEngine.connectionInstanceProcessMLSProposalsB64$lambda$60(Function1.this, str);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceProcessMLSWelcomeB64$media_engine_release(int i10, int i11, @NotNull String welcome, @NotNull final Function3 callback) {
        Intrinsics.checkNotNullParameter(welcome, "welcome");
        Intrinsics.checkNotNullParameter(callback, "callback");
        NativeConnection connection = getConnection(i10, "processMLSWelcomeB64");
        if (connection != null) {
            connection.processMLSWelcomeB64(i11, welcome, new NativeConnection.MLSWelcomeCallback() { // from class: com.discord.media.engine.c
                @Override // com.discord.p000native.engine.NativeConnection.MLSWelcomeCallback
                public final void onMLSProcessedWelcome(boolean z10, int i12, String str) {
                    MediaEngine.connectionInstanceProcessMLSWelcomeB64$lambda$62(Function3.this, z10, i12, str);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetLocalMute$media_engine_release(int i10, @NotNull String userId, boolean z10) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        NativeConnection connection = getConnection(i10, "setLocalMute");
        if (connection != null) {
            connection.setLocalMute(userId, z10);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetLocalPan$media_engine_release(int i10, @NotNull String userId, float f10, float f11) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        NativeConnection connection = getConnection(i10, "setLocalPan");
        if (connection != null) {
            connection.setLocalPan(userId, f10, f11);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetLocalVolume$media_engine_release(int i10, @NotNull String userId, float f10) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        NativeConnection connection = getConnection(i10, "setLocalVolume");
        if (connection != null) {
            connection.setLocalVolume(userId, f10);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetMinimumOutputDelay$media_engine_release(int i10, int i11) {
        NativeConnection connection = getConnection(i10, "setMinimumOutputDelay");
        if (connection != null) {
            connection.setMinimumOutputDelay(i11);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetNoInputThreshold$media_engine_release(int i10, float f10) {
        NativeConnection connection = getConnection(i10, "setNoInputThreshold");
        if (connection != null) {
            connection.setNoInputThreshold(f10);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetOnFirstFrameCallback$media_engine_release(int i10, @NotNull final Function3 cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        NativeConnection connection = getConnection(i10, "setOnFirstFrameCallback");
        if (connection != null) {
            connection.setOnFirstFrameCallback(new NativeConnection.OnFirstFrameCallback() { // from class: com.discord.media.engine.k
                @Override // com.discord.p000native.engine.NativeConnection.OnFirstFrameCallback
                public final void onFirstFrame(String str, long j10, String str2) {
                    MediaEngine.connectionInstanceSetOnFirstFrameCallback$lambda$48(Function3.this, str, j10, str2);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetOnMLSFailureCallback$media_engine_release(int i10, @NotNull final Function2<? super String, ? super String, Unit> cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        NativeConnection connection = getConnection(i10, "setOnMLSFailureCallback");
        if (connection != null) {
            connection.setOnMLSFailureCallback(new NativeConnection.MLSFailureCallback() { // from class: com.discord.media.engine.u
                @Override // com.discord.p000native.engine.NativeConnection.MLSFailureCallback
                public final void onMLSFailureCallback(String str, String str2) {
                    MediaEngine.connectionInstanceSetOnMLSFailureCallback$lambda$50(Function2.this, str, str2);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetOnPingCallback$media_engine_release(int i10, @NotNull final Function4 cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        NativeConnection connection = getConnection(i10, "setOnPingCallback");
        if (connection != null) {
            connection.setOnPingCallback(new NativeConnection.OnPingCallback() { // from class: com.discord.media.engine.p
                @Override // com.discord.p000native.engine.NativeConnection.OnPingCallback
                public final void onPing(int i11, String str, int i12, int i13) {
                    MediaEngine.connectionInstanceSetOnPingCallback$lambda$46(Function4.this, i11, str, i12, i13);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetOnPingTimeoutCallback$media_engine_release(int i10, @NotNull final Function4 cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        NativeConnection connection = getConnection(i10, "setOnPingTimeoutCallback");
        if (connection != null) {
            connection.setOnPingTimeoutCallback(new NativeConnection.OnPingTimeoutCallback() { // from class: com.discord.media.engine.q
                @Override // com.discord.p000native.engine.NativeConnection.OnPingTimeoutCallback
                public final void onPingTimeout(String str, int i11, int i12, int i13) {
                    MediaEngine.connectionInstanceSetOnPingTimeoutCallback$lambda$47(Function4.this, str, i11, i12, i13);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetOnSpeakingCallback$media_engine_release(int i10, @NotNull final Function3 cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        NativeConnection connection = getConnection(i10, "setOnSpeakingCallback");
        if (connection != null) {
            connection.setOnSpeakingCallback(new NativeConnection.OnSpeakingCallback() { // from class: com.discord.media.engine.m
                @Override // com.discord.p000native.engine.NativeConnection.OnSpeakingCallback
                public final void onSpeaking(String str, int i11, float f10) {
                    MediaEngine.connectionInstanceSetOnSpeakingCallback$lambda$45(Function3.this, str, i11, f10);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetOnVideoCallback$media_engine_release(int i10, @NotNull final Function4 cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        NativeConnection connection = getConnection(i10, "setOnVideoCallback");
        if (connection != null) {
            connection.setOnVideoCallback(new NativeConnection.OnVideoCallback() { // from class: com.discord.media.engine.i
                @Override // com.discord.p000native.engine.NativeConnection.OnVideoCallback
                public final void onVideo(String str, long j10, String str2, String str3) {
                    MediaEngine.connectionInstanceSetOnVideoCallback$lambda$49(Function4.this, str, j10, str2, str3);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetPTTActive$media_engine_release(int i10, boolean z10, boolean z11, boolean z12) {
        NativeConnection connection = getConnection(i10, "setPTTActive");
        if (connection != null) {
            connection.setPTTActive(z10, z11, z12);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetPingInterval$media_engine_release(int i10, int i11) {
        NativeConnection connection = getConnection(i10, "setPingInterval");
        if (connection != null) {
            connection.setPingInterval(i11);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetSecureFramesStateUpdateCallback$media_engine_release(int i10, @NotNull final Function1<? super String, Unit> cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        NativeConnection connection = getConnection(i10, "setSecureFramesStateUpdateCallback");
        if (connection != null) {
            connection.setSecureFramesStateUpdateCallback(new NativeConnection.SecureFramesStateUpdateCallback() { // from class: com.discord.media.engine.z
                @Override // com.discord.p000native.engine.NativeConnection.SecureFramesStateUpdateCallback
                public final void onSecureFramesStateUpdateCallback(String str) {
                    MediaEngine.connectionInstanceSetSecureFramesStateUpdateCallback$lambda$51(Function1.this, str);
                }
            });
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetSelfDeafen$media_engine_release(int i10, boolean z10) {
        NativeConnection connection = getConnection(i10, "setSelfDeafen");
        if (connection != null) {
            connection.setSelfDeafen(z10);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetSelfMute$media_engine_release(int i10, boolean z10) {
        NativeConnection connection = getConnection(i10, "setSelfMute");
        if (connection != null) {
            connection.setSelfMute(z10);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetTransportOptions$media_engine_release(int i10, @NotNull String optionsJSON) {
        Intrinsics.checkNotNullParameter(optionsJSON, "optionsJSON");
        NativeConnection connection = getConnection(i10, "setTransportOptions");
        if (connection != null) {
            connection.setTransportOptions(optionsJSON);
            return Unit.f31988a;
        }
        return null;
    }

    public final Unit connectionInstanceSetVideoBroadcast$media_engine_release(int i10, boolean z10) {
        NativeConnection connection = getConnection(i10, "setVideoBroadcast");
        if (connection != null) {
            connection.setVideoBroadcast(z10);
            return Unit.f31988a;
        }
        return null;
    }

    public final void connectionInstanceStartBroadcast$media_engine_release(int i10, @NotNull Intent permissions) {
        Intrinsics.checkNotNullParameter(permissions, "permissions");
        NativeConnection connection = getConnection(i10, "startBroadcast");
        if (connection != null) {
            forceStopScreenCapturer();
            ScreenCapturer screenCapturer = new ScreenCapturer(permissions);
            this.screenCapturer = new ScreenCapturerForConnection(screenCapturer, i10);
            connection.startBroadcast(screenCapturer, screenCapturer.getSoundshare().getNativeInstance());
        }
    }

    public final void connectionInstanceStopBroadcast$media_engine_release(int i10) {
        NativeConnection connection = getConnection(i10, "stopBroadcast");
        if (connection != null) {
            connection.stopBroadcast();
        }
        stopScreenCapturerForConnection(i10);
    }

    public final void connectionInstanceStopBroadcastWithError$media_engine_release(int i10, int i11, @NotNull String errorMessage) {
        Intrinsics.checkNotNullParameter(errorMessage, "errorMessage");
        NativeConnection connection = getConnection(i10, "stopBroadcastWithError");
        if (connection != null) {
            connection.stopBroadcast();
        }
        stopScreenCapturerForConnection(i10);
    }

    public final Unit connectionInstanceUpdateMLSExternalSenderB64$media_engine_release(int i10, @NotNull String externalSender) {
        Intrinsics.checkNotNullParameter(externalSender, "externalSender");
        NativeConnection connection = getConnection(i10, "updateMLSExternalSenderB64");
        if (connection != null) {
            connection.updateMLSExternalSenderB64(externalSender);
            return Unit.f31988a;
        }
        return null;
    }

    public final void createVoiceConnection(int i10, @NotNull String userId, @NotNull String connectionOptionsJSON, @NotNull final Function2<? super String, ? super Map<String, ? extends Object>, Unit> callback) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(connectionOptionsJSON, "connectionOptionsJSON");
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.engineConnections.register(i10, getEngine().createVoiceConnection(userId, connectionOptionsJSON, new NativeEngine.ConnectToServerCallback() { // from class: com.discord.media.engine.e
            @Override // com.discord.p000native.engine.NativeEngine.ConnectToServerCallback
            public final void onConnectToServer(ConnectionInfo connectionInfo, String str) {
                MediaEngine.createVoiceConnection$lambda$43(Function2.this, connectionInfo, str);
            }
        }));
    }

    public final void getAudioSubsystem$media_engine_release(@NotNull final Function2<? super String, ? super String, Unit> cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().getAudioSubsystem(new MediaEngine$getAudioSubsystem$1$1(cb2));
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$getAudioSubsystem$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m923invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m923invoke() {
                    MediaEngine.this.getEngine().getAudioSubsystem(new MediaEngine$getAudioSubsystem$1$1(cb2));
                }
            });
        }
    }

    public final void getCodecCapabilities$media_engine_release(@NotNull final Function1<? super String, Unit> callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().getCodecCapabilities(new NativeEngine.GetCodecCapabilitiesCallback() { // from class: com.discord.media.engine.h
                @Override // com.discord.p000native.engine.NativeEngine.GetCodecCapabilitiesCallback
                public final void onCodecCapabilities(String str) {
                    MediaEngine.getCodecCapabilities$lambda$30$lambda$29(Function1.this, str);
                }
            });
        } else {
            callback.invoke("{}");
        }
    }

    public final void getCodecSurvey$media_engine_release(@NotNull Function1<? super String, Unit> callback) {
        String str;
        Intrinsics.checkNotNullParameter(callback, "callback");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            JSONObject jSONObject = new JSONObject();
            String[] strArr = new String[0];
            String[] strArr2 = new String[0];
            Iterator it = ArrayIteratorKt.iterator(new MediaCodecList(0).getCodecInfos());
            while (it.hasNext()) {
                MediaCodecInfo mediaCodecInfo = (MediaCodecInfo) it.next();
                String name = mediaCodecInfo.getName();
                Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                String[] supportedTypes = mediaCodecInfo.getSupportedTypes();
                Intrinsics.checkNotNullExpressionValue(supportedTypes, "getSupportedTypes(...)");
                ArrayList<String> arrayList = new ArrayList();
                for (String str2 : supportedTypes) {
                    Intrinsics.checkNotNull(str2);
                    if (StringsKt.P(str2, MediaStreamTrack.VIDEO_TRACK_KIND, false, 2, null)) {
                        arrayList.add(str2);
                    }
                }
                for (String str3 : arrayList) {
                    if (Build.VERSION.SDK_INT >= 29) {
                        if (mediaCodecInfo.isHardwareAccelerated()) {
                            str = "(HW)";
                        } else {
                            str = "(SW)";
                        }
                    } else {
                        str = "";
                    }
                    String x02 = CollectionsKt.x0(CollectionsKt.o(str3, name, str), " ", null, null, 0, null, null, 62, null);
                    if (mediaCodecInfo.isEncoder()) {
                        strArr = (String[]) kotlin.collections.i.C(strArr, x02);
                    } else {
                        strArr2 = (String[]) kotlin.collections.i.C(strArr2, x02);
                    }
                }
            }
            jSONObject.put("available_video_encoders", new JSONArray(strArr));
            jSONObject.put("available_video_decoders", new JSONArray(strArr2));
            String jSONObject2 = jSONObject.toString();
            Intrinsics.checkNotNullExpressionValue(jSONObject2, "toString(...)");
            callback.invoke(jSONObject2);
            return;
        }
        callback.invoke("{}");
    }

    public final void getInputDevices$media_engine_release(@NotNull final Function1<? super List<? extends Map<String, ? extends Object>>, Unit> callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().getInputDevices(new NativeEngine.GetAudioInputDevicesCallback() { // from class: com.discord.media.engine.v
                @Override // com.discord.p000native.engine.NativeEngine.GetAudioInputDevicesCallback
                public final void onDevices(AudioInputDeviceDescription[] audioInputDeviceDescriptionArr) {
                    MediaEngine.getInputDevices$lambda$10$lambda$9(Function1.this, audioInputDeviceDescriptionArr);
                }
            });
        } else {
            callback.invoke(CollectionsKt.l());
        }
    }

    public final void getMLSSigningKeyB64$media_engine_release(@NotNull String sessionId, int i10, @NotNull final Function2<? super String, ? super String, Unit> callback) {
        Intrinsics.checkNotNullParameter(sessionId, "sessionId");
        Intrinsics.checkNotNullParameter(callback, "callback");
        getEngine().getMLSSigningKeyB64(sessionId, i10, new NativeEngine.MLSSigningKeyCallback() { // from class: com.discord.media.engine.j
            @Override // com.discord.p000native.engine.NativeEngine.MLSSigningKeyCallback
            public final void onMLSSigningKey(String str, String str2) {
                MediaEngine.getMLSSigningKeyB64$lambda$64(Function2.this, str, str2);
            }
        });
    }

    public final void getOutputDevices$media_engine_release(@NotNull final Function1<? super List<? extends Map<String, ? extends Object>>, Unit> callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().getOutputDevices(new NativeEngine.GetAudioOutputDevicesCallback() { // from class: com.discord.media.engine.d
                @Override // com.discord.p000native.engine.NativeEngine.GetAudioOutputDevicesCallback
                public final void onDevices(AudioOutputDeviceDescription[] audioOutputDeviceDescriptionArr) {
                    MediaEngine.getOutputDevices$lambda$15$lambda$14(Function1.this, audioOutputDeviceDescriptionArr);
                }
            });
        } else {
            callback.invoke(CollectionsKt.l());
        }
    }

    public final void getVideoInputDevices$media_engine_release(@NotNull final Function1<? super List<? extends Map<String, ? extends Object>>, Unit> callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().getVideoInputDevices(new NativeEngine.GetVideoInputDevicesCallback() { // from class: com.discord.media.engine.y
                @Override // com.discord.p000native.engine.NativeEngine.GetVideoInputDevicesCallback
                public final void onDevices(VideoInputDeviceDescription[] videoInputDeviceDescriptionArr) {
                    MediaEngine.getVideoInputDevices$lambda$20$lambda$19(Function1.this, videoInputDeviceDescriptionArr);
                }
            });
        } else {
            callback.invoke(CollectionsKt.l());
        }
    }

    public final void rankRtcRegions$media_engine_release(@NotNull String regionsWithIpsJSON, @NotNull final Function1<? super String[], Unit> callback) {
        Intrinsics.checkNotNullParameter(regionsWithIpsJSON, "regionsWithIpsJSON");
        Intrinsics.checkNotNullParameter(callback, "callback");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().rankRtcRegions(regionsWithIpsJSON, new NativeEngine.GetRankedRtcRegionsCallback() { // from class: com.discord.media.engine.b
                @Override // com.discord.p000native.engine.NativeEngine.GetRankedRtcRegionsCallback
                public final void onRankedRtcRegions(String[] strArr) {
                    MediaEngine.rankRtcRegions$lambda$36$lambda$35(Function1.this, strArr);
                }
            });
        } else {
            callback.invoke(new String[0]);
        }
    }

    public final void reset() {
        System.nanoTime();
        kotlinx.coroutines.i.f(this.coroutineScope, null, 1, null);
        this.dispatcher.reset();
        forceStopScreenCapturer();
        this.engineConnections.removeAndDisposeAll();
        NativeEngine nativeEngine = this.engineInstance;
        if (nativeEngine != null) {
            nativeEngine.dispose();
        }
        this.engineInstance = null;
        Debug debug = Debug.INSTANCE;
    }

    public final void setActiveSinksChangeCallback$media_engine_release(@NotNull Function2<? super String, ? super Boolean, Unit> cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        this.activeSinksChangeCallback = cb2;
    }

    public final void setAudioInputEnabled$media_engine_release(final boolean z10) {
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setAudioInputEnabled(z10);
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setAudioInputEnabled$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m924invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m924invoke() {
                    MediaEngine.this.getEngine().setAudioInputEnabled(z10);
                }
            });
        }
    }

    public final void setAudioInputInitializationCallback$media_engine_release(@NotNull final Function2<? super Double, ? super Map<String, ? extends Object>, Unit> callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setAudioInputInitializationCallback(new MediaEngine$setAudioInputInitializationCallback$1$1(callback));
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setAudioInputInitializationCallback$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m925invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m925invoke() {
                    MediaEngine.this.getEngine().setAudioInputInitializationCallback(new MediaEngine$setAudioInputInitializationCallback$1$1(callback));
                }
            });
        }
    }

    public final void setBroadcastThumbnailParams$media_engine_release(int i10, int i11, int i12, @NotNull final Function1<? super String, Unit> callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        ScreenCapturerForConnection screenCapturerForConnection = this.screenCapturer;
        if (screenCapturerForConnection != null) {
            screenCapturerForConnection.component1().setThumbnailEmitter(new ThumbnailEmitter(i10, i11, 1000 * i12, new Function1() { // from class: com.discord.media.engine.g
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit broadcastThumbnailParams$lambda$54$lambda$53;
                    broadcastThumbnailParams$lambda$54$lambda$53 = MediaEngine.setBroadcastThumbnailParams$lambda$54$lambda$53(MediaEngine.this, callback, (Bitmap) obj);
                    return broadcastThumbnailParams$lambda$54$lambda$53;
                }
            }));
        }
    }

    public final void setDeviceChangeCallback$media_engine_release(@NotNull final Function3 callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setOnDeviceChangeCallback(new MediaEngine$setDeviceChangeCallback$1$1(callback));
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setDeviceChangeCallback$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m926invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m926invoke() {
                    MediaEngine.this.getEngine().setOnDeviceChangeCallback(new MediaEngine$setDeviceChangeCallback$1$1(callback));
                }
            });
        }
    }

    public final void setEmitVADLevel2$media_engine_release(final boolean z10) {
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setEmitVADLevel2(z10);
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setEmitVADLevel2$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m927invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m927invoke() {
                    MediaEngine.this.getEngine().setEmitVADLevel2(z10);
                }
            });
        }
    }

    public final void setHasFullbandPerformance$media_engine_release(final boolean z10) {
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setHasFullbandPerformance(z10);
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setHasFullbandPerformance$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m928invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m928invoke() {
                    MediaEngine.this.getEngine().setHasFullbandPerformance(z10);
                }
            });
        }
    }

    public final void setInputDevice$media_engine_release(final int i10) {
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setInputDeviceIndex(i10);
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setInputDevice$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m929invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m929invoke() {
                    MediaEngine.this.getEngine().setInputDeviceIndex(i10);
                }
            });
        }
    }

    public final void setInputVolume$media_engine_release(final float f10) {
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setInputVolume(f10);
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setInputVolume$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m931invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m931invoke() {
                    MediaEngine.this.getEngine().setInputVolume(f10);
                }
            });
        }
    }

    public final void setNoInputThreshold$media_engine_release(final float f10) {
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setNoInputThreshold(f10);
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setNoInputThreshold$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m932invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m932invoke() {
                    MediaEngine.this.getEngine().setNoInputThreshold(f10);
                }
            });
        }
    }

    public final void setOnNoInputCallback$media_engine_release(@NotNull final Function1<? super Boolean, Unit> cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setOnNoInputCallback(new MediaEngine$setOnNoInputCallback$1$1(cb2));
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setOnNoInputCallback$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m933invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m933invoke() {
                    MediaEngine.this.getEngine().setOnNoInputCallback(new MediaEngine$setOnNoInputCallback$1$1(cb2));
                }
            });
        }
    }

    public final void setOnVoiceCallback$media_engine_release(@NotNull final Function2<? super Float, ? super Integer, Unit> cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setOnVoiceCallback(new MediaEngine$setOnVoiceCallback$1$1(cb2));
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setOnVoiceCallback$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m934invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m934invoke() {
                    MediaEngine.this.getEngine().setOnVoiceCallback(new MediaEngine$setOnVoiceCallback$1$1(cb2));
                }
            });
        }
    }

    public final void setOutputDevice$media_engine_release(final int i10) {
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setOutputDeviceIndex(i10);
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setOutputDevice$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m935invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m935invoke() {
                    MediaEngine.this.getEngine().setOutputDeviceIndex(i10);
                }
            });
        }
    }

    public final void setOutputVolume$media_engine_release(final float f10) {
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setOutputVolume(f10);
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setOutputVolume$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m937invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m937invoke() {
                    MediaEngine.this.getEngine().setOutputVolume(f10);
                }
            });
        }
    }

    public final void setSidechainCompression$media_engine_release(boolean z10) {
        getEngine().setSidechainCompression(z10);
    }

    public final void setTransportOptions$media_engine_release(@NotNull final String optionsJSON) {
        Intrinsics.checkNotNullParameter(optionsJSON, "optionsJSON");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setTransportOptions(optionsJSON);
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setTransportOptions$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m938invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m938invoke() {
                    MediaEngine.this.getEngine().setTransportOptions(optionsJSON);
                }
            });
        }
    }

    public final void setVideoInputDevice$media_engine_release(@NotNull final String deviceName) {
        Intrinsics.checkNotNullParameter(deviceName, "deviceName");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setVideoInputDevice(deviceName);
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setVideoInputDevice$$inlined$post$default$1
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m939invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m939invoke() {
                    MediaEngine.this.getEngine().setVideoInputDevice(deviceName);
                }
            });
        }
    }

    public final void setVideoOutputSink$media_engine_release(@NotNull final String streamIdentifier, final Function2<? super VideoFrame, ? super Boolean, Boolean> function2) {
        Intrinsics.checkNotNullParameter(streamIdentifier, "streamIdentifier");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        if (asyncInitDispatcher.getInitialized()) {
            if (function2 == null) {
                getEngine().setVideoOutputSink(streamIdentifier, null);
                return;
            } else {
                getEngine().setVideoOutputSink(streamIdentifier, new MediaEngine$setVideoOutputSink$1$1(function2));
                return;
            }
        }
        asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setVideoOutputSink$$inlined$post$1
            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m941invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m941invoke() {
                if (Function2.this == null) {
                    this.getEngine().setVideoOutputSink(streamIdentifier, null);
                } else {
                    this.getEngine().setVideoOutputSink(streamIdentifier, new MediaEngine$setVideoOutputSink$1$1(Function2.this));
                }
            }
        });
    }

    public final void startLocalAudioRecording$media_engine_release(@NotNull String optionsJSON, @NotNull final Function1<? super Boolean, Unit> callback) {
        Intrinsics.checkNotNullParameter(optionsJSON, "optionsJSON");
        Intrinsics.checkNotNullParameter(callback, "callback");
        getEngine().startLocalAudioRecording(optionsJSON, new NativeEngine.StartLocalAudioRecordingCallback() { // from class: com.discord.media.engine.t
            @Override // com.discord.p000native.engine.NativeEngine.StartLocalAudioRecordingCallback
            public final void onStartLocalAudioRecording(boolean z10) {
                MediaEngine.startLocalAudioRecording$lambda$38(Function1.this, z10);
            }
        });
    }

    public final void stopLocalAudioRecording$media_engine_release(@NotNull final Function2<? super String, ? super Integer, Unit> callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().stopLocalAudioRecording(new NativeEngine.StopLocalAudioRecordingCallback() { // from class: com.discord.media.engine.w
                @Override // com.discord.p000native.engine.NativeEngine.StopLocalAudioRecordingCallback
                public final void onStopLocalAudioRecording(String str, int i10) {
                    MediaEngine.stopLocalAudioRecording$lambda$40$lambda$39(Function2.this, str, i10);
                }
            });
            return;
        }
        callback.invoke("", 0);
    }

    public final void updateFieldTrial$media_engine_release(@NotNull String key, @NotNull String value) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(value, "value");
        getEngine().updateFieldTrial(key, value);
    }

    public final void setInputDevice$media_engine_release(@NotNull final String deviceIndex) {
        Intrinsics.checkNotNullParameter(deviceIndex, "deviceIndex");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setInputDevice(deviceIndex);
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setInputDevice$$inlined$post$default$2
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m930invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m930invoke() {
                    MediaEngine.this.getEngine().setInputDevice(deviceIndex);
                }
            });
        }
    }

    public final void setOutputDevice$media_engine_release(@NotNull final String deviceIndex) {
        Intrinsics.checkNotNullParameter(deviceIndex, "deviceIndex");
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setOutputDevice(deviceIndex);
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setOutputDevice$$inlined$post$default$2
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m936invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m936invoke() {
                    MediaEngine.this.getEngine().setOutputDevice(deviceIndex);
                }
            });
        }
    }

    public final void setVideoInputDevice$media_engine_release(final int i10) {
        AsyncInitDispatcher asyncInitDispatcher = this.dispatcher;
        asyncInitDispatcher.validateState();
        if (asyncInitDispatcher.getInitialized()) {
            getEngine().setVideoInputDeviceIndex(i10);
        } else {
            asyncInitDispatcher.getDelayedTasks().add(new Function0<Unit>() { // from class: com.discord.media.engine.MediaEngine$setVideoInputDevice$$inlined$post$default$2
                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m940invoke();
                    return Unit.f31988a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m940invoke() {
                    MediaEngine.this.getEngine().setVideoInputDeviceIndex(i10);
                }
            });
        }
    }

    public /* synthetic */ MediaEngine(Context context, CoroutineDispatcher coroutineDispatcher, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? ms.m0.a() : coroutineDispatcher);
    }
}
