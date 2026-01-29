package kotlin.collections;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.ListIterator;
import java.util.NoSuchElementException;
import java.util.RandomAccess;
import java.util.Set;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import kotlin.sequences.Sequence;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000Ü\u0001\n\u0000\n\u0002\u0010\u001c\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010 \n\u0002\b\u001a\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u001f\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000f\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u001e\n\u0002\u0010\u0018\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\u0010\u0014\n\u0002\b\u0002\n\u0002\u0010\u0015\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010!\n\u0002\b\u0003\n\u0002\u0010\"\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010#\n\u0002\b\u0006\n\u0002\u0010\u0006\n\u0002\b\f\n\u0002\u0010\u0011\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\r\n\u0002\b\u0007\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\b\u001a(\u0010\u0004\u001a\u00020\u0003\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\u0006\u0010\u0002\u001a\u00028\u0000H\u0086\u0002¢\u0006\u0004\b\u0004\u0010\u0005\u001a%\u0010\b\u001a\u00028\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\t\u001aF\u0010\f\u001a\u00028\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\u0006\u0010\u0007\u001a\u00020\u00062\u0012\u0010\u000b\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00028\u00000\n\u0082\u0002\n\n\b\b\u0001\u0012\u0002\u0010\u0002 \u0000¢\u0006\u0004\b\f\u0010\r\u001a\u001d\u0010\u000e\u001a\u00028\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\b\u000e\u0010\u000f\u001a\u001d\u0010\u0011\u001a\u00028\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0010¢\u0006\u0004\b\u0011\u0010\u0012\u001a\u001f\u0010\u0013\u001a\u0004\u0018\u00018\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\b\u0013\u0010\u000f\u001a\u001f\u0010\u0014\u001a\u0004\u0018\u00018\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0010¢\u0006\u0004\b\u0014\u0010\u0012\u001a'\u0010\u0015\u001a\u0004\u0018\u00018\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00102\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\u0015\u0010\u0016\u001a%\u0010\u0017\u001a\u00020\u0006\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\u0006\u0010\u0002\u001a\u00028\u0000¢\u0006\u0004\b\u0017\u0010\u0018\u001a%\u0010\u0019\u001a\u00020\u0006\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00102\u0006\u0010\u0002\u001a\u00028\u0000¢\u0006\u0004\b\u0019\u0010\u001a\u001a\u001d\u0010\u001b\u001a\u00028\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\b\u001b\u0010\u000f\u001a\u001d\u0010\u001c\u001a\u00028\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0010¢\u0006\u0004\b\u001c\u0010\u0012\u001a\u001f\u0010\u001d\u001a\u0004\u0018\u00018\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\b\u001d\u0010\u000f\u001a\u001f\u0010\u001e\u001a\u0004\u0018\u00018\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0010¢\u0006\u0004\b\u001e\u0010\u0012\u001a\u001d\u0010\u001f\u001a\u00028\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\b\u001f\u0010\u000f\u001a\u001d\u0010 \u001a\u00028\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0010¢\u0006\u0004\b \u0010\u0012\u001a\u001f\u0010!\u001a\u0004\u0018\u00018\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\b!\u0010\u000f\u001a\u001f\u0010\"\u001a\u0004\u0018\u00018\u0000\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0010¢\u0006\u0004\b\"\u0010\u0012\u001a+\u0010$\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\u0006\u0010#\u001a\u00020\u0006¢\u0006\u0004\b$\u0010%\u001a+\u0010&\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00102\u0006\u0010#\u001a\u00020\u0006¢\u0006\u0004\b&\u0010'\u001a=\u0010)\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\u0012\u0010(\u001a\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\u00030\nH\u0086\bø\u0001\u0000¢\u0006\u0004\b)\u0010*\u001a)\u0010,\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\b\b\u0000\u0010\u0000*\u00020+*\n\u0012\u0006\u0012\u0004\u0018\u00018\u00000\u0001¢\u0006\u0004\b,\u0010-\u001a=\u00101\u001a\u00028\u0000\"\u0010\b\u0000\u0010/*\n\u0012\u0006\b\u0000\u0012\u00028\u00010.\"\b\b\u0001\u0010\u0000*\u00020+*\n\u0012\u0006\u0012\u0004\u0018\u00018\u00010\u00012\u0006\u00100\u001a\u00028\u0000¢\u0006\u0004\b1\u00102\u001a+\u00105\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00102\u0006\u00104\u001a\u000203¢\u0006\u0004\b5\u00106\u001a+\u00107\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\u0006\u0010#\u001a\u00020\u0006¢\u0006\u0004\b7\u0010%\u001a+\u00108\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00102\u0006\u0010#\u001a\u00020\u0006¢\u0006\u0004\b8\u0010'\u001a#\u00109\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\b9\u0010-\u001a-\u0010;\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u000e\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000:*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\b;\u0010-\u001a-\u0010<\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u000e\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000:*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\b<\u0010-\u001a?\u0010@\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\u001a\u0010?\u001a\u0016\u0012\u0006\b\u0000\u0012\u00028\u00000=j\n\u0012\u0006\b\u0000\u0012\u00028\u0000`>¢\u0006\u0004\b@\u0010A\u001a\u0017\u0010D\u001a\u00020C*\b\u0012\u0004\u0012\u00020\u00030B¢\u0006\u0004\bD\u0010E\u001a\u0017\u0010H\u001a\u00020G*\b\u0012\u0004\u0012\u00020F0B¢\u0006\u0004\bH\u0010I\u001a\u0017\u0010K\u001a\u00020J*\b\u0012\u0004\u0012\u00020\u00060B¢\u0006\u0004\bK\u0010L\u001a7\u0010M\u001a\u00028\u0001\"\u0004\b\u0000\u0010\u0000\"\u0010\b\u0001\u0010/*\n\u0012\u0006\b\u0000\u0012\u00028\u00000.*\b\u0012\u0004\u0012\u00028\u00000\u00012\u0006\u00100\u001a\u00028\u0001¢\u0006\u0004\bM\u00102\u001a-\u0010P\u001a\u0012\u0012\u0004\u0012\u00028\u00000Nj\b\u0012\u0004\u0012\u00028\u0000`O\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\bP\u0010Q\u001a#\u0010R\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\bR\u0010-\u001a#\u0010T\u001a\b\u0012\u0004\u0012\u00028\u00000S\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\bT\u0010-\u001a#\u0010U\u001a\b\u0012\u0004\u0012\u00028\u00000S\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000B¢\u0006\u0004\bU\u0010V\u001a#\u0010X\u001a\b\u0012\u0004\u0012\u00028\u00000W\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\bX\u0010Y\u001aC\u0010\\\u001a\b\u0012\u0004\u0012\u00028\u00010\u0010\"\u0004\b\u0000\u0010\u0000\"\u0004\b\u0001\u0010Z*\b\u0012\u0004\u0012\u00028\u00000\u00012\u0012\u0010[\u001a\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00028\u00010\nH\u0086\bø\u0001\u0000¢\u0006\u0004\b\\\u0010*\u001a)\u0010^\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00028\u00000]0\u0001\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\b^\u0010_\u001a#\u0010`\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\b`\u0010-\u001a4\u0010b\u001a\b\u0012\u0004\u0012\u00028\u00000W\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\f\u0010a\u001a\b\u0012\u0004\u0012\u00028\u00000\u0001H\u0086\u0004¢\u0006\u0004\bb\u0010c\u001a4\u0010d\u001a\b\u0012\u0004\u0012\u00028\u00000W\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\f\u0010a\u001a\b\u0012\u0004\u0012\u00028\u00000\u0001H\u0086\u0004¢\u0006\u0004\bd\u0010c\u001a#\u0010f\u001a\b\u0012\u0004\u0012\u00028\u00000e\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0004\bf\u0010Y\u001a4\u0010g\u001a\b\u0012\u0004\u0012\u00028\u00000W\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\f\u0010a\u001a\b\u0012\u0004\u0012\u00028\u00000\u0001H\u0086\u0004¢\u0006\u0004\bg\u0010c\u001a7\u0010h\u001a\u00020\u0003\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\u0012\u0010(\u001a\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\u00030\nH\u0086\bø\u0001\u0000¢\u0006\u0004\bh\u0010i\u001a)\u0010j\u001a\u00028\u0000\"\u000e\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000:*\b\u0012\u0004\u0012\u00028\u00000\u0001H\u0007¢\u0006\u0004\bj\u0010k\u001a\u001b\u0010m\u001a\u0004\u0018\u00010l*\b\u0012\u0004\u0012\u00020l0\u0001H\u0007¢\u0006\u0004\bm\u0010n\u001a\u001b\u0010o\u001a\u0004\u0018\u00010l*\b\u0012\u0004\u0012\u00020l0\u0001H\u0007¢\u0006\u0004\bo\u0010n\u001a+\u0010p\u001a\u0004\u0018\u00018\u0000\"\u000e\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000:*\b\u0012\u0004\u0012\u00028\u00000\u0001H\u0007¢\u0006\u0004\bp\u0010k\u001a.\u0010q\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\u0006\u0010\u0002\u001a\u00028\u0000H\u0086\u0002¢\u0006\u0004\bq\u0010r\u001a4\u0010t\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\f\u0010s\u001a\b\u0012\u0004\u0012\u00028\u00000\u0001H\u0086\u0002¢\u0006\u0004\bt\u0010u\u001a.\u0010v\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\u0006\u0010\u0002\u001a\u00028\u0000H\u0086\u0002¢\u0006\u0004\bv\u0010r\u001a.\u0010w\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000B2\u0006\u0010\u0002\u001a\u00028\u0000H\u0086\u0002¢\u0006\u0004\bw\u0010x\u001a6\u0010z\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000B2\u000e\u0010s\u001a\n\u0012\u0006\b\u0001\u0012\u00028\u00000yH\u0086\u0002¢\u0006\u0004\bz\u0010{\u001a4\u0010|\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\f\u0010s\u001a\b\u0012\u0004\u0012\u00028\u00000\u0001H\u0086\u0002¢\u0006\u0004\b|\u0010u\u001a4\u0010}\u001a\b\u0012\u0004\u0012\u00028\u00000\u0010\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000B2\f\u0010s\u001a\b\u0012\u0004\u0012\u00028\u00000\u0001H\u0086\u0002¢\u0006\u0004\b}\u0010~\u001aK\u0010\u0080\u0001\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00028\u00010\u007f0\u0010\"\u0004\b\u0000\u0010\u0000\"\u0004\b\u0001\u0010Z*\b\u0012\u0004\u0012\u00028\u00000\u00012\u000e\u0010a\u001a\n\u0012\u0006\b\u0001\u0012\u00028\u00010yH\u0086\u0004¢\u0006\u0006\b\u0080\u0001\u0010\u0081\u0001\u001aH\u0010\u0082\u0001\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00028\u00010\u007f0\u0010\"\u0004\b\u0000\u0010\u0000\"\u0004\b\u0001\u0010Z*\b\u0012\u0004\u0012\u00028\u00000\u00012\f\u0010a\u001a\b\u0012\u0004\u0012\u00028\u00010\u0001H\u0086\u0004¢\u0006\u0005\b\u0082\u0001\u0010u\u001a\u008e\u0001\u0010\u008d\u0001\u001a\u00028\u0001\"\u0004\b\u0000\u0010\u0000\"\u000f\b\u0001\u0010\u0085\u0001*\b0\u0083\u0001j\u0003`\u0084\u0001*\b\u0012\u0004\u0012\u00028\u00000\u00012\u0007\u0010\u0086\u0001\u001a\u00028\u00012\n\b\u0002\u0010\u0088\u0001\u001a\u00030\u0087\u00012\n\b\u0002\u0010\u0089\u0001\u001a\u00030\u0087\u00012\n\b\u0002\u0010\u008a\u0001\u001a\u00030\u0087\u00012\t\b\u0002\u0010\u008b\u0001\u001a\u00020\u00062\n\b\u0002\u0010\u008c\u0001\u001a\u00030\u0087\u00012\u0017\b\u0002\u0010[\u001a\u0011\u0012\u0004\u0012\u00028\u0000\u0012\u0005\u0012\u00030\u0087\u0001\u0018\u00010\n¢\u0006\u0006\b\u008d\u0001\u0010\u008e\u0001\u001au\u0010\u0090\u0001\u001a\u00030\u008f\u0001\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u00012\n\b\u0002\u0010\u0088\u0001\u001a\u00030\u0087\u00012\n\b\u0002\u0010\u0089\u0001\u001a\u00030\u0087\u00012\n\b\u0002\u0010\u008a\u0001\u001a\u00030\u0087\u00012\t\b\u0002\u0010\u008b\u0001\u001a\u00020\u00062\n\b\u0002\u0010\u008c\u0001\u001a\u00030\u0087\u00012\u0017\b\u0002\u0010[\u001a\u0011\u0012\u0004\u0012\u00028\u0000\u0012\u0005\u0012\u00030\u0087\u0001\u0018\u00010\n¢\u0006\u0006\b\u0090\u0001\u0010\u0091\u0001\u001a'\u0010\u0093\u0001\u001a\t\u0012\u0004\u0012\u00028\u00000\u0092\u0001\"\u0004\b\u0000\u0010\u0000*\b\u0012\u0004\u0012\u00028\u00000\u0001¢\u0006\u0006\b\u0093\u0001\u0010\u0094\u0001\u001a\u001c\u0010\u0095\u0001\u001a\u00020l*\b\u0012\u0004\u0012\u00020F0\u0001H\u0007¢\u0006\u0006\b\u0095\u0001\u0010\u0096\u0001\u001a\u001c\u0010\u0097\u0001\u001a\u00020F*\b\u0012\u0004\u0012\u00020F0\u0001H\u0007¢\u0006\u0006\b\u0097\u0001\u0010\u0098\u0001\u001a\u001c\u0010\u0099\u0001\u001a\u00020l*\b\u0012\u0004\u0012\u00020l0\u0001H\u0007¢\u0006\u0006\b\u0099\u0001\u0010\u0096\u0001\u0082\u0002\u0007\n\u0005\b\u009920\u0001¨\u0006\u009a\u0001"}, d2 = {"T", "", "element", "", "d0", "(Ljava/lang/Iterable;Ljava/lang/Object;)Z", "", "index", "h0", "(Ljava/lang/Iterable;I)Ljava/lang/Object;", "Lkotlin/Function1;", "defaultValue", "j0", "(Ljava/lang/Iterable;ILkotlin/jvm/functions/Function1;)Ljava/lang/Object;", "n0", "(Ljava/lang/Iterable;)Ljava/lang/Object;", "", "o0", "(Ljava/util/List;)Ljava/lang/Object;", "p0", "firstOrNull", "q0", "(Ljava/util/List;I)Ljava/lang/Object;", "r0", "(Ljava/lang/Iterable;Ljava/lang/Object;)I", "s0", "(Ljava/util/List;Ljava/lang/Object;)I", "y0", "z0", "A0", "B0", "P0", "Q0", "R0", "S0", "n", "f0", "(Ljava/lang/Iterable;I)Ljava/util/List;", "g0", "(Ljava/util/List;I)Ljava/util/List;", "predicate", "k0", "(Ljava/lang/Iterable;Lkotlin/jvm/functions/Function1;)Ljava/util/List;", "", "l0", "(Ljava/lang/Iterable;)Ljava/util/List;", "", "C", "destination", "m0", "(Ljava/lang/Iterable;Ljava/util/Collection;)Ljava/util/Collection;", "Lkotlin/ranges/IntRange;", "indices", "T0", "(Ljava/util/List;Lkotlin/ranges/IntRange;)Ljava/util/List;", "a1", "b1", "O0", "", "U0", "V0", "Ljava/util/Comparator;", "Lkotlin/Comparator;", "comparator", "W0", "(Ljava/lang/Iterable;Ljava/util/Comparator;)Ljava/util/List;", "", "", "c1", "(Ljava/util/Collection;)[Z", "", "", "e1", "(Ljava/util/Collection;)[F", "", "g1", "(Ljava/util/Collection;)[I", "d1", "Ljava/util/HashSet;", "Lkotlin/collections/HashSet;", "f1", "(Ljava/lang/Iterable;)Ljava/util/HashSet;", "h1", "", "i1", "j1", "(Ljava/util/Collection;)Ljava/util/List;", "", "l1", "(Ljava/lang/Iterable;)Ljava/util/Set;", "R", ViewProps.TRANSFORM, "C0", "Lkotlin/collections/IndexedValue;", "n1", "(Ljava/lang/Iterable;)Ljava/lang/Iterable;", "e0", "other", "t0", "(Ljava/lang/Iterable;Ljava/lang/Iterable;)Ljava/util/Set;", "X0", "", "k1", "m1", "a0", "(Ljava/lang/Iterable;Lkotlin/jvm/functions/Function1;)Z", "E0", "(Ljava/lang/Iterable;)Ljava/lang/Comparable;", "", "D0", "(Ljava/lang/Iterable;)Ljava/lang/Double;", "G0", "F0", "I0", "(Ljava/lang/Iterable;Ljava/lang/Object;)Ljava/util/List;", "elements", "H0", "(Ljava/lang/Iterable;Ljava/lang/Iterable;)Ljava/util/List;", "K0", "M0", "(Ljava/util/Collection;Ljava/lang/Object;)Ljava/util/List;", "", "N0", "(Ljava/util/Collection;[Ljava/lang/Object;)Ljava/util/List;", "J0", "L0", "(Ljava/util/Collection;Ljava/lang/Iterable;)Ljava/util/List;", "Lkotlin/Pair;", "q1", "(Ljava/lang/Iterable;[Ljava/lang/Object;)Ljava/util/List;", "p1", "Ljava/lang/Appendable;", "Lkotlin/text/Appendable;", "A", "buffer", "", "separator", "prefix", "postfix", "limit", "truncated", "u0", "(Ljava/lang/Iterable;Ljava/lang/Appendable;Ljava/lang/CharSequence;Ljava/lang/CharSequence;Ljava/lang/CharSequence;ILjava/lang/CharSequence;Lkotlin/jvm/functions/Function1;)Ljava/lang/Appendable;", "", "w0", "(Ljava/lang/Iterable;Ljava/lang/CharSequence;Ljava/lang/CharSequence;Ljava/lang/CharSequence;ILjava/lang/CharSequence;Lkotlin/jvm/functions/Function1;)Ljava/lang/String;", "Lkotlin/sequences/Sequence;", "b0", "(Ljava/lang/Iterable;)Lkotlin/sequences/Sequence;", "c0", "(Ljava/lang/Iterable;)D", "Z0", "(Ljava/lang/Iterable;)F", "Y0", "kotlin-stdlib"}, k = 5, mv = {2, 1, 0}, xi = ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE, xs = "kotlin/collections/CollectionsKt")
@SourceDebugExtension({"SMAP\n_Collections.kt\nKotlin\n*S Kotlin\n*F\n+ 1 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n+ 4 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n+ 5 Iterators.kt\nkotlin/collections/CollectionsKt__IteratorsKt\n*L\n1#1,3800:1\n295#1,2:3801\n528#1,7:3803\n543#1,6:3810\n865#1,2:3817\n796#1:3819\n1878#1,2:3820\n797#1,2:3822\n1880#1:3824\n799#1:3825\n1878#1,3:3826\n817#1,2:3829\n855#1,2:3831\n1267#1,4:3841\n1236#1,4:3845\n1252#1,4:3849\n1299#1,4:3853\n1460#1,5:3857\n1475#1,5:3862\n1516#1,3:3867\n1519#1,3:3877\n1534#1,3:3880\n1537#1,3:3890\n1634#1,3:3907\n1604#1,4:3910\n1593#1:3914\n1878#1,2:3915\n1880#1:3918\n1594#1:3919\n1878#1,3:3920\n1625#1:3923\n1869#1:3924\n1870#1:3926\n1626#1:3927\n1869#1,2:3928\n1878#1,3:3930\n2967#1,3:3933\n2970#1,6:3937\n2992#1,3:3943\n2995#1,7:3947\n865#1,2:3954\n827#1:3956\n855#1,2:3957\n827#1:3959\n855#1,2:3960\n827#1:3962\n855#1,2:3963\n3522#1,8:3969\n3550#1,7:3977\n3581#1,10:3984\n1#2:3816\n1#2:3917\n1#2:3925\n1#2:3936\n1#2:3946\n37#3:3833\n36#3,3:3834\n37#3:3837\n36#3,3:3838\n384#4,7:3870\n384#4,7:3883\n384#4,7:3893\n384#4,7:3900\n32#5,2:3965\n32#5,2:3967\n*S KotlinDebug\n*F\n+ 1 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n174#1:3801,2\n184#1:3803,7\n194#1:3810,6\n774#1:3817,2\n785#1:3819\n785#1:3820,2\n785#1:3822,2\n785#1:3824\n785#1:3825\n796#1:3826,3\n808#1:3829,2\n827#1:3831,2\n1194#1:3841,4\n1209#1:3845,4\n1223#1:3849,4\n1286#1:3853,4\n1374#1:3857,5\n1387#1:3862,5\n1491#1:3867,3\n1491#1:3877,3\n1504#1:3880,3\n1504#1:3890,3\n1563#1:3907,3\n1573#1:3910,4\n1583#1:3914\n1583#1:3915,2\n1583#1:3918\n1583#1:3919\n1593#1:3920,3\n1617#1:3923\n1617#1:3924\n1617#1:3926\n1617#1:3927\n1625#1:3928,2\n2767#1:3930,3\n3067#1:3933,3\n3067#1:3937,6\n3084#1:3943,3\n3084#1:3947,7\n3260#1:3954,2\n3268#1:3956\n3268#1:3957,2\n3278#1:3959\n3278#1:3960,2\n3288#1:3962\n3288#1:3963,2\n3511#1:3969,8\n3539#1:3977,7\n3568#1:3984,10\n1583#1:3917\n1617#1:3925\n3067#1:3936\n3084#1:3946\n1042#1:3833\n1042#1:3834,3\n1089#1:3837\n1089#1:3838,3\n1491#1:3870,7\n1504#1:3883,7\n1518#1:3893,7\n1536#1:3900,7\n3456#1:3965,2\n3498#1:3967,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class CollectionsKt___CollectionsKt extends a0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Sequence {

        /* renamed from: a */
        final /* synthetic */ Iterable f33293a;

        public a(Iterable iterable) {
            this.f33293a = iterable;
        }

        @Override // kotlin.sequences.Sequence
        public Iterator iterator() {
            return this.f33293a.iterator();
        }
    }

    public static Object A0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof List) {
            List list = (List) iterable;
            if (list.isEmpty()) {
                return null;
            }
            return list.get(list.size() - 1);
        }
        Iterator it = iterable.iterator();
        if (!it.hasNext()) {
            return null;
        }
        Object next = it.next();
        while (it.hasNext()) {
            next = it.next();
        }
        return next;
    }

    public static Object B0(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        if (list.isEmpty()) {
            return null;
        }
        return list.get(list.size() - 1);
    }

    public static List C0(Iterable iterable, Function1 transform) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(transform, "transform");
        ArrayList arrayList = new ArrayList(u.w(iterable, 10));
        for (Object obj : iterable) {
            arrayList.add(transform.invoke(obj));
        }
        return arrayList;
    }

    public static Double D0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Iterator it = iterable.iterator();
        if (!it.hasNext()) {
            return null;
        }
        double doubleValue = ((Number) it.next()).doubleValue();
        while (it.hasNext()) {
            doubleValue = Math.max(doubleValue, ((Number) it.next()).doubleValue());
        }
        return Double.valueOf(doubleValue);
    }

    public static Comparable E0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Iterator it = iterable.iterator();
        if (it.hasNext()) {
            Comparable comparable = (Comparable) it.next();
            while (it.hasNext()) {
                Comparable comparable2 = (Comparable) it.next();
                if (comparable.compareTo(comparable2) < 0) {
                    comparable = comparable2;
                }
            }
            return comparable;
        }
        throw new NoSuchElementException();
    }

    public static Comparable F0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Iterator it = iterable.iterator();
        if (!it.hasNext()) {
            return null;
        }
        Comparable comparable = (Comparable) it.next();
        while (it.hasNext()) {
            Comparable comparable2 = (Comparable) it.next();
            if (comparable.compareTo(comparable2) > 0) {
                comparable = comparable2;
            }
        }
        return comparable;
    }

    public static Double G0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Iterator it = iterable.iterator();
        if (!it.hasNext()) {
            return null;
        }
        double doubleValue = ((Number) it.next()).doubleValue();
        while (it.hasNext()) {
            doubleValue = Math.min(doubleValue, ((Number) it.next()).doubleValue());
        }
        return Double.valueOf(doubleValue);
    }

    public static List H0(Iterable iterable, Iterable elements) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(elements, "elements");
        Collection E = y.E(elements);
        if (E.isEmpty()) {
            return h1(iterable);
        }
        ArrayList arrayList = new ArrayList();
        for (Object obj : iterable) {
            if (!E.contains(obj)) {
                arrayList.add(obj);
            }
        }
        return arrayList;
    }

    public static List I0(Iterable iterable, Object obj) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        ArrayList arrayList = new ArrayList(u.w(iterable, 10));
        boolean z10 = false;
        for (Object obj2 : iterable) {
            boolean z11 = true;
            if (!z10 && Intrinsics.areEqual(obj2, obj)) {
                z10 = true;
                z11 = false;
            }
            if (z11) {
                arrayList.add(obj2);
            }
        }
        return arrayList;
    }

    public static List J0(Iterable iterable, Iterable elements) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(elements, "elements");
        if (iterable instanceof Collection) {
            return L0((Collection) iterable, elements);
        }
        ArrayList arrayList = new ArrayList();
        y.B(arrayList, iterable);
        y.B(arrayList, elements);
        return arrayList;
    }

    public static List K0(Iterable iterable, Object obj) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof Collection) {
            return M0((Collection) iterable, obj);
        }
        ArrayList arrayList = new ArrayList();
        y.B(arrayList, iterable);
        arrayList.add(obj);
        return arrayList;
    }

    public static List L0(Collection collection, Iterable elements) {
        Intrinsics.checkNotNullParameter(collection, "<this>");
        Intrinsics.checkNotNullParameter(elements, "elements");
        if (elements instanceof Collection) {
            Collection collection2 = (Collection) elements;
            ArrayList arrayList = new ArrayList(collection.size() + collection2.size());
            arrayList.addAll(collection);
            arrayList.addAll(collection2);
            return arrayList;
        }
        ArrayList arrayList2 = new ArrayList(collection);
        y.B(arrayList2, elements);
        return arrayList2;
    }

    public static List M0(Collection collection, Object obj) {
        Intrinsics.checkNotNullParameter(collection, "<this>");
        ArrayList arrayList = new ArrayList(collection.size() + 1);
        arrayList.addAll(collection);
        arrayList.add(obj);
        return arrayList;
    }

    public static List N0(Collection collection, Object[] elements) {
        Intrinsics.checkNotNullParameter(collection, "<this>");
        Intrinsics.checkNotNullParameter(elements, "elements");
        ArrayList arrayList = new ArrayList(collection.size() + elements.length);
        arrayList.addAll(collection);
        y.D(arrayList, elements);
        return arrayList;
    }

    public static List O0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if ((iterable instanceof Collection) && ((Collection) iterable).size() <= 1) {
            return h1(iterable);
        }
        List i12 = i1(iterable);
        a0.X(i12);
        return i12;
    }

    public static Object P0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof List) {
            return Q0((List) iterable);
        }
        Iterator it = iterable.iterator();
        if (it.hasNext()) {
            Object next = it.next();
            if (!it.hasNext()) {
                return next;
            }
            throw new IllegalArgumentException("Collection has more than one element.");
        }
        throw new NoSuchElementException("Collection is empty.");
    }

    public static Object Q0(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        int size = list.size();
        if (size != 0) {
            if (size == 1) {
                return list.get(0);
            }
            throw new IllegalArgumentException("List has more than one element.");
        }
        throw new NoSuchElementException("List is empty.");
    }

    public static Object R0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof List) {
            List list = (List) iterable;
            if (list.size() != 1) {
                return null;
            }
            return list.get(0);
        }
        Iterator it = iterable.iterator();
        if (!it.hasNext()) {
            return null;
        }
        Object next = it.next();
        if (it.hasNext()) {
            return null;
        }
        return next;
    }

    public static Object S0(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        if (list.size() == 1) {
            return list.get(0);
        }
        return null;
    }

    public static List T0(List list, IntRange indices) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        Intrinsics.checkNotNullParameter(indices, "indices");
        if (indices.isEmpty()) {
            return t.l();
        }
        return h1(list.subList(indices.b().intValue(), indices.c().intValue() + 1));
    }

    public static List U0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof Collection) {
            Collection collection = (Collection) iterable;
            if (collection.size() <= 1) {
                return h1(iterable);
            }
            Object[] array = collection.toArray(new Comparable[0]);
            l.E((Comparable[]) array);
            return l.e(array);
        }
        List i12 = i1(iterable);
        x.z(i12);
        return i12;
    }

    public static List V0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        return W0(iterable, lr.a.g());
    }

    public static List W0(Iterable iterable, Comparator comparator) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(comparator, "comparator");
        if (iterable instanceof Collection) {
            Collection collection = (Collection) iterable;
            if (collection.size() <= 1) {
                return h1(iterable);
            }
            Object[] array = collection.toArray(new Object[0]);
            l.F(array, comparator);
            return l.e(array);
        }
        List i12 = i1(iterable);
        x.A(i12, comparator);
        return i12;
    }

    public static Set X0(Iterable iterable, Iterable other) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(other, "other");
        Set k12 = k1(iterable);
        y.I(k12, other);
        return k12;
    }

    public static double Y0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Iterator it = iterable.iterator();
        double d10 = 0.0d;
        while (it.hasNext()) {
            d10 += ((Number) it.next()).doubleValue();
        }
        return d10;
    }

    public static float Z0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Iterator it = iterable.iterator();
        float f10 = 0.0f;
        while (it.hasNext()) {
            f10 += ((Number) it.next()).floatValue();
        }
        return f10;
    }

    public static boolean a0(Iterable iterable, Function1 predicate) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        if ((iterable instanceof Collection) && ((Collection) iterable).isEmpty()) {
            return true;
        }
        for (Object obj : iterable) {
            if (!((Boolean) predicate.invoke(obj)).booleanValue()) {
                return false;
            }
        }
        return true;
    }

    public static List a1(Iterable iterable, int i10) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (i10 >= 0) {
            if (i10 == 0) {
                return t.l();
            }
            if (iterable instanceof Collection) {
                if (i10 >= ((Collection) iterable).size()) {
                    return h1(iterable);
                }
                if (i10 == 1) {
                    return s.e(n0(iterable));
                }
            }
            ArrayList arrayList = new ArrayList(i10);
            int i11 = 0;
            for (Object obj : iterable) {
                arrayList.add(obj);
                i11++;
                if (i11 == i10) {
                    break;
                }
            }
            return t.s(arrayList);
        }
        throw new IllegalArgumentException(("Requested element count " + i10 + " is less than zero.").toString());
    }

    public static Sequence b0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        return new a(iterable);
    }

    public static List b1(List list, int i10) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        if (i10 >= 0) {
            if (i10 == 0) {
                return t.l();
            }
            int size = list.size();
            if (i10 >= size) {
                return h1(list);
            }
            if (i10 == 1) {
                return s.e(z0(list));
            }
            ArrayList arrayList = new ArrayList(i10);
            if (list instanceof RandomAccess) {
                for (int i11 = size - i10; i11 < size; i11++) {
                    arrayList.add(list.get(i11));
                }
            } else {
                ListIterator listIterator = list.listIterator(size - i10);
                while (listIterator.hasNext()) {
                    arrayList.add(listIterator.next());
                }
            }
            return arrayList;
        }
        throw new IllegalArgumentException(("Requested element count " + i10 + " is less than zero.").toString());
    }

    public static double c0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Iterator it = iterable.iterator();
        double d10 = 0.0d;
        int i10 = 0;
        while (it.hasNext()) {
            d10 += ((Number) it.next()).floatValue();
            i10++;
            if (i10 < 0) {
                t.u();
            }
        }
        if (i10 == 0) {
            return Double.NaN;
        }
        return d10 / i10;
    }

    public static boolean[] c1(Collection collection) {
        Intrinsics.checkNotNullParameter(collection, "<this>");
        boolean[] zArr = new boolean[collection.size()];
        Iterator it = collection.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            zArr[i10] = ((Boolean) it.next()).booleanValue();
            i10++;
        }
        return zArr;
    }

    public static boolean d0(Iterable iterable, Object obj) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof Collection) {
            return ((Collection) iterable).contains(obj);
        }
        if (r0(iterable, obj) >= 0) {
            return true;
        }
        return false;
    }

    public static final Collection d1(Iterable iterable, Collection destination) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(destination, "destination");
        for (Object obj : iterable) {
            destination.add(obj);
        }
        return destination;
    }

    public static List e0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        return h1(k1(iterable));
    }

    public static float[] e1(Collection collection) {
        Intrinsics.checkNotNullParameter(collection, "<this>");
        float[] fArr = new float[collection.size()];
        Iterator it = collection.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            fArr[i10] = ((Number) it.next()).floatValue();
            i10++;
        }
        return fArr;
    }

    public static List f0(Iterable iterable, int i10) {
        ArrayList arrayList;
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (i10 >= 0) {
            if (i10 == 0) {
                return h1(iterable);
            }
            if (iterable instanceof Collection) {
                int size = ((Collection) iterable).size() - i10;
                if (size <= 0) {
                    return t.l();
                }
                if (size == 1) {
                    return s.e(y0(iterable));
                }
                arrayList = new ArrayList(size);
                if (iterable instanceof List) {
                    if (iterable instanceof RandomAccess) {
                        List list = (List) iterable;
                        int size2 = list.size();
                        while (i10 < size2) {
                            arrayList.add(list.get(i10));
                            i10++;
                        }
                    } else {
                        ListIterator listIterator = ((List) iterable).listIterator(i10);
                        while (listIterator.hasNext()) {
                            arrayList.add(listIterator.next());
                        }
                    }
                    return arrayList;
                }
            } else {
                arrayList = new ArrayList();
            }
            int i11 = 0;
            for (Object obj : iterable) {
                if (i11 >= i10) {
                    arrayList.add(obj);
                } else {
                    i11++;
                }
            }
            return t.s(arrayList);
        }
        throw new IllegalArgumentException(("Requested element count " + i10 + " is less than zero.").toString());
    }

    public static HashSet f1(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        return (HashSet) d1(iterable, new HashSet(q0.e(u.w(iterable, 12))));
    }

    public static <T> T firstOrNull(@NotNull List<? extends T> list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        if (list.isEmpty()) {
            return null;
        }
        return list.get(0);
    }

    public static List g0(List list, int i10) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        if (i10 >= 0) {
            return a1(list, kotlin.ranges.d.d(list.size() - i10, 0));
        }
        throw new IllegalArgumentException(("Requested element count " + i10 + " is less than zero.").toString());
    }

    public static int[] g1(Collection collection) {
        Intrinsics.checkNotNullParameter(collection, "<this>");
        int[] iArr = new int[collection.size()];
        Iterator it = collection.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            iArr[i10] = ((Number) it.next()).intValue();
            i10++;
        }
        return iArr;
    }

    public static Object h0(Iterable iterable, final int i10) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof List) {
            return ((List) iterable).get(i10);
        }
        return j0(iterable, i10, new Function1() { // from class: kotlin.collections.c0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Object i02;
                i02 = CollectionsKt___CollectionsKt.i0(i10, ((Integer) obj).intValue());
                return i02;
            }
        });
    }

    public static List h1(Iterable iterable) {
        Object next;
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof Collection) {
            Collection collection = (Collection) iterable;
            int size = collection.size();
            if (size != 0) {
                if (size != 1) {
                    return j1(collection);
                }
                if (iterable instanceof List) {
                    next = ((List) iterable).get(0);
                } else {
                    next = collection.iterator().next();
                }
                return s.e(next);
            }
            return t.l();
        }
        return t.s(i1(iterable));
    }

    public static final Object i0(int i10, int i11) {
        throw new IndexOutOfBoundsException("Collection doesn't contain element at index " + i10 + '.');
    }

    public static final List i1(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof Collection) {
            return j1((Collection) iterable);
        }
        return (List) d1(iterable, new ArrayList());
    }

    public static final Object j0(Iterable iterable, int i10, Function1 defaultValue) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(defaultValue, "defaultValue");
        if (iterable instanceof List) {
            List list = (List) iterable;
            if (i10 >= 0 && i10 < list.size()) {
                return list.get(i10);
            }
            return defaultValue.invoke(Integer.valueOf(i10));
        } else if (i10 < 0) {
            return defaultValue.invoke(Integer.valueOf(i10));
        } else {
            int i11 = 0;
            for (Object obj : iterable) {
                int i12 = i11 + 1;
                if (i10 == i11) {
                    return obj;
                }
                i11 = i12;
            }
            return defaultValue.invoke(Integer.valueOf(i10));
        }
    }

    public static List j1(Collection collection) {
        Intrinsics.checkNotNullParameter(collection, "<this>");
        return new ArrayList(collection);
    }

    public static List k0(Iterable iterable, Function1 predicate) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        ArrayList arrayList = new ArrayList();
        for (Object obj : iterable) {
            if (((Boolean) predicate.invoke(obj)).booleanValue()) {
                arrayList.add(obj);
            }
        }
        return arrayList;
    }

    public static Set k1(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof Collection) {
            return new LinkedHashSet((Collection) iterable);
        }
        return (Set) d1(iterable, new LinkedHashSet());
    }

    public static List l0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        return (List) m0(iterable, new ArrayList());
    }

    public static Set l1(Iterable iterable) {
        Object next;
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof Collection) {
            Collection collection = (Collection) iterable;
            int size = collection.size();
            if (size != 0) {
                if (size != 1) {
                    return (Set) d1(iterable, new LinkedHashSet(q0.e(collection.size())));
                }
                if (iterable instanceof List) {
                    next = ((List) iterable).get(0);
                } else {
                    next = collection.iterator().next();
                }
                return y0.c(next);
            }
            return z0.d();
        }
        return z0.h((Set) d1(iterable, new LinkedHashSet()));
    }

    public static Collection m0(Iterable iterable, Collection destination) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(destination, "destination");
        for (Object obj : iterable) {
            if (obj != null) {
                destination.add(obj);
            }
        }
        return destination;
    }

    public static Set m1(Iterable iterable, Iterable other) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(other, "other");
        Set k12 = k1(iterable);
        y.B(k12, other);
        return k12;
    }

    public static Object n0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof List) {
            return o0((List) iterable);
        }
        Iterator it = iterable.iterator();
        if (it.hasNext()) {
            return it.next();
        }
        throw new NoSuchElementException("Collection is empty.");
    }

    public static Iterable n1(final Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        return new k0(new Function0() { // from class: kotlin.collections.b0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Iterator o12;
                o12 = CollectionsKt___CollectionsKt.o1(iterable);
                return o12;
            }
        });
    }

    public static Object o0(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        if (!list.isEmpty()) {
            return list.get(0);
        }
        throw new NoSuchElementException("List is empty.");
    }

    public static final Iterator o1(Iterable iterable) {
        return iterable.iterator();
    }

    public static Object p0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof List) {
            List list = (List) iterable;
            if (list.isEmpty()) {
                return null;
            }
            return list.get(0);
        }
        Iterator it = iterable.iterator();
        if (!it.hasNext()) {
            return null;
        }
        return it.next();
    }

    public static List p1(Iterable iterable, Iterable other) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(other, "other");
        Iterator it = iterable.iterator();
        Iterator it2 = other.iterator();
        ArrayList arrayList = new ArrayList(Math.min(u.w(iterable, 10), u.w(other, 10)));
        while (it.hasNext() && it2.hasNext()) {
            arrayList.add(ir.v.a(it.next(), it2.next()));
        }
        return arrayList;
    }

    public static Object q0(List list, int i10) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        if (i10 >= 0 && i10 < list.size()) {
            return list.get(i10);
        }
        return null;
    }

    public static List q1(Iterable iterable, Object[] other) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(other, "other");
        int length = other.length;
        ArrayList arrayList = new ArrayList(Math.min(u.w(iterable, 10), length));
        int i10 = 0;
        for (Object obj : iterable) {
            if (i10 >= length) {
                break;
            }
            arrayList.add(ir.v.a(obj, other[i10]));
            i10++;
        }
        return arrayList;
    }

    public static final int r0(Iterable iterable, Object obj) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof List) {
            return ((List) iterable).indexOf(obj);
        }
        int i10 = 0;
        for (Object obj2 : iterable) {
            if (i10 < 0) {
                t.v();
            }
            if (Intrinsics.areEqual(obj, obj2)) {
                return i10;
            }
            i10++;
        }
        return -1;
    }

    public static int s0(List list, Object obj) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        return list.indexOf(obj);
    }

    public static Set t0(Iterable iterable, Iterable other) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(other, "other");
        Set k12 = k1(iterable);
        y.O(k12, other);
        return k12;
    }

    public static final Appendable u0(Iterable iterable, Appendable buffer, CharSequence separator, CharSequence prefix, CharSequence postfix, int i10, CharSequence truncated, Function1 function1) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        buffer.append(prefix);
        int i11 = 0;
        for (Object obj : iterable) {
            i11++;
            if (i11 > 1) {
                buffer.append(separator);
            }
            if (i10 >= 0 && i11 > i10) {
                break;
            }
            StringsKt.a(buffer, obj, function1);
        }
        if (i10 >= 0 && i11 > i10) {
            buffer.append(truncated);
        }
        buffer.append(postfix);
        return buffer;
    }

    public static /* synthetic */ Appendable v0(Iterable iterable, Appendable appendable, CharSequence charSequence, CharSequence charSequence2, CharSequence charSequence3, int i10, CharSequence charSequence4, Function1 function1, int i11, Object obj) {
        CharSequence charSequence5;
        CharSequence charSequence6;
        int i12;
        CharSequence charSequence7;
        Function1 function12;
        if ((i11 & 2) != 0) {
            charSequence5 = ", ";
        } else {
            charSequence5 = charSequence;
        }
        CharSequence charSequence8 = "";
        if ((i11 & 4) != 0) {
            charSequence6 = "";
        } else {
            charSequence6 = charSequence2;
        }
        if ((i11 & 8) == 0) {
            charSequence8 = charSequence3;
        }
        if ((i11 & 16) != 0) {
            i12 = -1;
        } else {
            i12 = i10;
        }
        if ((i11 & 32) != 0) {
            charSequence7 = "...";
        } else {
            charSequence7 = charSequence4;
        }
        if ((i11 & 64) != 0) {
            function12 = null;
        } else {
            function12 = function1;
        }
        return u0(iterable, appendable, charSequence5, charSequence6, charSequence8, i12, charSequence7, function12);
    }

    public static final String w0(Iterable iterable, CharSequence separator, CharSequence prefix, CharSequence postfix, int i10, CharSequence truncated, Function1 function1) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        return ((StringBuilder) u0(iterable, new StringBuilder(), separator, prefix, postfix, i10, truncated, function1)).toString();
    }

    public static /* synthetic */ String x0(Iterable iterable, CharSequence charSequence, CharSequence charSequence2, CharSequence charSequence3, int i10, CharSequence charSequence4, Function1 function1, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            charSequence = ", ";
        }
        if ((i11 & 2) != 0) {
            charSequence2 = "";
        }
        if ((i11 & 4) != 0) {
            charSequence3 = "";
        }
        if ((i11 & 8) != 0) {
            i10 = -1;
        }
        if ((i11 & 16) != 0) {
            charSequence4 = "...";
        }
        if ((i11 & 32) != 0) {
            function1 = null;
        }
        CharSequence charSequence5 = charSequence4;
        Function1 function12 = function1;
        return w0(iterable, charSequence, charSequence2, charSequence3, i10, charSequence5, function12);
    }

    public static Object y0(Iterable iterable) {
        Intrinsics.checkNotNullParameter(iterable, "<this>");
        if (iterable instanceof List) {
            return z0((List) iterable);
        }
        Iterator it = iterable.iterator();
        if (it.hasNext()) {
            Object next = it.next();
            while (it.hasNext()) {
                next = it.next();
            }
            return next;
        }
        throw new NoSuchElementException("Collection is empty.");
    }

    public static Object z0(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        if (!list.isEmpty()) {
            return list.get(t.n(list));
        }
        throw new NoSuchElementException("List is empty.");
    }
}
